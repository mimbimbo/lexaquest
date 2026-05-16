"use client";

import { useState } from "react";
import { monteCristoChapter1 } from "../../../data/monteCristoChapter1";
import { chapter1Preview } from "../../../data/chap1Preview";
import { chapter1Vocab } from "../../../data/chapter1Vocab";

type NoteType = "idiom" | "grammar" | "culture";

type Note = {
  type: NoteType;
  phrase: string;
  meaning: string;
  explanation: string;
  options: string[];
};

type AiWordResult = {
  word: string;
  lemma: string;
  partOfSpeech: string;
  meaning: string;
  meaningInContext: string;
  grammarNote: string;
  distractors: string[];
};

type SavedCard = {
  word: string;
  lemma: string;
  meaning: string;
  meaningInContext: string;
  distractors: string[];
};

const reviewCheckpointChunks = [10, 25, 40];

const noteStyles: Record<NoteType, string> = {
  idiom: "bg-blue-100 text-blue-900 hover:bg-blue-200",
  grammar: "bg-green-100 text-green-900 hover:bg-green-200",
  culture: "bg-purple-100 text-purple-900 hover:bg-purple-200",
};

function cleanWord(rawWord: string) {
  return rawWord
    .replace(/[.,;:!?«»"()“”]/g, "")
    .replace(/’/g, "'")
    .toLowerCase();
}

function shuffleArray<T>(array: T[]) {
  return [...array].sort(() => Math.random() - 0.5);
}

async function explainFrenchWord(
  word: string,
  context: string
): Promise<AiWordResult | null> {
  const cleaned = cleanWord(word);
  const cacheKey = `lexaquest-ai-word-${cleaned}-${context.slice(0, 80)}`;
  const cached = localStorage.getItem(cacheKey);

  if (cached) return JSON.parse(cached);

  try {
    const response = await fetch("/api/explain-word", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ word: cleaned, context }),
    });

    if (!response.ok) return null;

    const data = await response.json();

    const badResult =
      !data.meaning ||
      data.meaning === "meaning unavailable" ||
      data.meaningInContext === "meaning unavailable" ||
      data.meaningInContext === "Could not determine meaning";

    if (badResult) return null;

    localStorage.setItem(cacheKey, JSON.stringify(data));
    return data;
  } catch {
    return null;
  }
}

function renderTextWithNotes(
  text: string,
  notes: Note[],
  savedCards: SavedCard[],
  onWordClick: (word: string) => void,
  onWordDoubleClick: (word: string) => void,
  onNoteClick: (note: Note) => void
) {
  const phrases = [...notes].sort((a, b) => b.phrase.length - a.phrase.length);
  const escaped = phrases.map((note) =>
    note.phrase.replace(/[.*+?^${}()|[\]\\]/g, "\\$&")
  );

  const regex = escaped.length
    ? new RegExp(`(${escaped.join("|")})`, "gi")
    : null;

  const pieces = regex ? text.split(regex) : [text];

  return pieces.map((piece, index) => {
    const matchedNote = phrases.find(
      (note) => note.phrase.toLowerCase() === piece.toLowerCase()
    );

    if (matchedNote) {
      return (
        <button
          key={index}
          onClick={() => onNoteClick(matchedNote)}
          className={`rounded px-1 font-medium ${noteStyles[matchedNote.type]}`}
        >
          {piece}
        </button>
      );
    }

    return piece.split(/(\s+)/).map((part, subIndex) => {
      const cleaned = cleanWord(part);
      const isSaved = savedCards.some((card) => card.word === cleaned);

      if (part.trim() === "") {
        return <span key={`${index}-${subIndex}`}>{part}</span>;
      }

      return (
        <button
          key={`${index}-${subIndex}`}
          onClick={() => onWordClick(part)}
          onDoubleClick={() => onWordDoubleClick(part)}
          title="Click to explain. Double-click to save."
          className={`rounded px-1 ${
            isSaved ? "bg-yellow-200 hover:bg-yellow-300" : "hover:bg-yellow-100"
          }`}
        >
          {part}
        </button>
      );
    });
  });
}

export default function ChapterOnePage() {
  const [appStage, setAppStage] = useState<"vocab" | "preview" | "reader">(
    "vocab"
  );

  const [vocabMode, setVocabMode] = useState<"guided" | "standard" | "deep">(
    "guided"
  );

  const [vocabIndex, setVocabIndex] = useState(0);
  const [vocabSelectedAnswer, setVocabSelectedAnswer] = useState<string | null>(
    null
  );
  const [vocabAnswered, setVocabAnswered] = useState(false);
  const [vocabCorrectCount, setVocabCorrectCount] = useState(0);
  const [showEnglishPreview, setShowEnglishPreview] = useState(false);

  const [savedCards, setSavedCards] = useState<SavedCard[]>([]);
  const [selectedWord, setSelectedWord] = useState<string | null>(null);
  const [selectedNote, setSelectedNote] = useState<Note | null>(null);
  const [aiResult, setAiResult] = useState<AiWordResult | null>(null);
  const [lookupLoading, setLookupLoading] = useState(false);

  const [currentChunkIndex, setCurrentChunkIndex] = useState(0);
  const [quizNote, setQuizNote] = useState<Note | null>(null);
  const [selectedAnswer, setSelectedAnswer] = useState<string | null>(null);

  const [xp, setXp] = useState(0);
  const [xpMessage, setXpMessage] = useState<string | null>(null);
  const [correctStreak, setCorrectStreak] = useState(0);
  const [lookupsThisChunk, setLookupsThisChunk] = useState(0);
  const [completedChunks, setCompletedChunks] = useState<number[]>([]);
  const [answeredCurrentQuiz, setAnsweredCurrentQuiz] = useState(false);

  const [reviewMode, setReviewMode] = useState(false);
  const [reviewCards, setReviewCards] = useState<SavedCard[]>([]);
  const [reviewIndex, setReviewIndex] = useState(0);
  const [reviewSelectedAnswer, setReviewSelectedAnswer] = useState<
    string | null
  >(null);
  const [reviewAnswered, setReviewAnswered] = useState(false);
  const [reviewCorrectCount, setReviewCorrectCount] = useState(0);
  const [completedReviewCheckpoints, setCompletedReviewCheckpoints] = useState<
    number[]
  >([]);

  const chunks = monteCristoChapter1.chunks;
  const currentChunk = chunks[currentChunkIndex];

  if (!currentChunk) {
    return <main className="p-6">Chunk not found.</main>;
  }

  const notes: Note[] = (currentChunk.notes || []) as Note[];
  const currentChunkNumber = currentChunkIndex + 1;

  const level = Math.floor(xp / 100) + 1;
  const levelProgress = xp % 100;

  const pregameWords = chapter1Vocab.filter(
    (item) =>
      item.tags.includes("pregame") &&
      (vocabMode === "deep" ||
        item.difficulty === "guided" ||
        (vocabMode === "standard" && item.difficulty !== "deep"))
  );

  const currentVocab = pregameWords[vocabIndex];

  const vocabOptions = currentVocab
    ? shuffleArray([currentVocab.meaning, ...currentVocab.distractors]).slice(
        0,
        4
      )
    : [];

  const currentSavedCard = selectedWord
    ? savedCards.find((card) => card.word === selectedWord)
    : null;

  const currentReviewCard = reviewCards[reviewIndex];

  const reviewOptions = currentReviewCard
    ? shuffleArray([
        currentReviewCard.meaning,
        ...currentReviewCard.distractors.slice(0, 3),
      ]).slice(0, 4)
    : [];

  function addXp(amount: number, message: string) {
    setXp((current) => current + amount);
    setXpMessage(`+${amount} XP — ${message}`);
    setTimeout(() => setXpMessage(null), 1800);
  }

  function answerVocab(option: string) {
    if (!currentVocab || vocabAnswered) return;

    setVocabSelectedAnswer(option);
    setVocabAnswered(true);

    if (option === currentVocab.meaning) {
      setVocabCorrectCount((count) => count + 1);
      addXp(10, "vocab warm-up");
    }
  }

  function nextVocabCard() {
    if (!vocabAnswered) return;

    if (vocabIndex < pregameWords.length - 1) {
      setVocabIndex((index) => index + 1);
      setVocabSelectedAnswer(null);
      setVocabAnswered(false);
      return;
    }

    if (vocabCorrectCount === pregameWords.length) {
      addXp(30, "perfect warm-up");
    }

    setAppStage("preview");
  }

  function buildCardFromResult(result: AiWordResult): SavedCard {
    return {
      word: cleanWord(result.word),
      lemma: result.lemma,
      meaning: result.meaning,
      meaningInContext: result.meaningInContext,
      distractors: result.distractors,
    };
  }

  function saveCardFromResult(result: AiWordResult) {
    const clean = cleanWord(result.word);
    const alreadySaved = savedCards.some((card) => card.word === clean);

    if (alreadySaved) return;

    setSavedCards((cards) => [...cards, buildCardFromResult(result)]);
    addXp(5, "new word saved");
  }

  async function handleWordClick(word: string, context: string) {
    const cleaned = cleanWord(word);

    setSelectedWord(cleaned);
    setSelectedNote(null);
    setAiResult(null);
    setLookupLoading(true);
    setLookupsThisChunk((current) => current + 1);

    const result = await explainFrenchWord(cleaned, context);

    setAiResult(result);
    setLookupLoading(false);
  }

  async function handleWordDoubleClick(word: string, context: string) {
    const cleaned = cleanWord(word);

    setSelectedWord(cleaned);
    setSelectedNote(null);
    setAiResult(null);
    setLookupLoading(true);
    setLookupsThisChunk((current) => current + 1);

    const result = await explainFrenchWord(cleaned, context);

    setAiResult(result);
    setLookupLoading(false);

    if (result) saveCardFromResult(result);
  }

  function saveCurrentWord() {
    if (!aiResult) return;
    saveCardFromResult(aiResult);
  }

  function startReview(mode: "anytime" | "checkpoint" = "anytime") {
    if (savedCards.length === 0) return;

    const cardCount =
      mode === "checkpoint" ? Math.min(3, savedCards.length) : savedCards.length;

    setReviewCards(shuffleArray(savedCards).slice(0, cardCount));
    setReviewIndex(0);
    setReviewSelectedAnswer(null);
    setReviewAnswered(false);
    setReviewCorrectCount(0);
    setReviewMode(true);
    setSelectedWord(null);
    setSelectedNote(null);
    setAiResult(null);
    setQuizNote(null);
  }

  function answerReview(option: string) {
    if (!currentReviewCard || reviewAnswered) return;

    setReviewSelectedAnswer(option);
    setReviewAnswered(true);

    if (option === currentReviewCard.meaning) {
      setReviewCorrectCount((count) => count + 1);
      addXp(20, "vocab remembered");
    }
  }

  function nextReviewCard() {
    if (!reviewAnswered) return;

    if (reviewIndex < reviewCards.length - 1) {
      setReviewIndex((index) => index + 1);
      setReviewSelectedAnswer(null);
      setReviewAnswered(false);
      return;
    }

    if (reviewCorrectCount === reviewCards.length && reviewCards.length > 0) {
      addXp(30, "perfect review bonus");
    }

    if (reviewCheckpointChunks.includes(currentChunkNumber)) {
      setCompletedReviewCheckpoints((checkpoints) =>
        checkpoints.includes(currentChunkNumber)
          ? checkpoints
          : [...checkpoints, currentChunkNumber]
      );
    }

    setReviewMode(false);
    setReviewCards([]);
    setReviewIndex(0);
    setReviewSelectedAnswer(null);
    setReviewAnswered(false);
    setReviewCorrectCount(0);
  }

  function handleAnswer(option: string) {
    if (!quizNote || answeredCurrentQuiz) return;

    setSelectedAnswer(option);
    setAnsweredCurrentQuiz(true);

    if (option === quizNote.meaning) {
      const newStreak = correctStreak + 1;
      setCorrectStreak(newStreak);
      addXp(30, "correct checkpoint");

      if (newStreak > 0 && newStreak % 3 === 0) {
        addXp(20, "3-question streak bonus");
      }
    } else {
      setCorrectStreak(0);
    }
  }

  function shouldTriggerReviewCheckpoint() {
    return (
      reviewCheckpointChunks.includes(currentChunkNumber) &&
      savedCards.length > 0 &&
      !completedReviewCheckpoints.includes(currentChunkNumber)
    );
  }

  function nextChunk() {
    if (notes.length > 0 && !quizNote) {
      const firstNote = notes[0];

      if (firstNote) {
        setQuizNote(firstNote);
        setSelectedAnswer(null);
        setAnsweredCurrentQuiz(false);
      }

      return;
    }

    if (quizNote && selectedAnswer !== quizNote.meaning) return;

    if (shouldTriggerReviewCheckpoint()) {
      startReview("checkpoint");
      return;
    }

    if (!completedChunks.includes(currentChunk.id)) {
      addXp(10, "section completed");

      if (lookupsThisChunk === 0) {
        addXp(20, "clean read bonus");
      }

      setCompletedChunks([...completedChunks, currentChunk.id]);
    }

    if (currentChunkIndex < chunks.length - 1) {
      setCurrentChunkIndex(currentChunkIndex + 1);
      setSelectedWord(null);
      setSelectedNote(null);
      setAiResult(null);
      setLookupLoading(false);
      setQuizNote(null);
      setSelectedAnswer(null);
      setAnsweredCurrentQuiz(false);
      setLookupsThisChunk(0);
    }
  }

  function prevChunk() {
    if (currentChunkIndex > 0) {
      setCurrentChunkIndex(currentChunkIndex - 1);
      setSelectedWord(null);
      setSelectedNote(null);
      setAiResult(null);
      setLookupLoading(false);
      setQuizNote(null);
      setSelectedAnswer(null);
      setAnsweredCurrentQuiz(false);
      setLookupsThisChunk(0);
      setReviewMode(false);
    }
  }

  if (appStage === "vocab" && currentVocab) {
    return (
      <main className="min-h-screen bg-stone-50 p-6 text-stone-900">
        <div className="mx-auto max-w-3xl">
          <p className="text-sm uppercase tracking-wide text-stone-500">
            Lexaquest Warm-Up
          </p>

          <div className="mt-4 rounded-2xl bg-white p-6 shadow-sm">
            <div className="flex items-start justify-between">
              <div>
                <h1 className="text-3xl font-bold">
                  Chapter 1 Vocab Warm-Up
                </h1>

                <p className="mt-2 text-stone-500">
                  Word {vocabIndex + 1} / {pregameWords.length}
                </p>

                <div className="mt-4 flex gap-2">
                  {(["guided", "standard", "deep"] as const).map((mode) => (
                    <button
                      key={mode}
                      onClick={() => {
                        setVocabMode(mode);
                        setVocabIndex(0);
                        setVocabSelectedAnswer(null);
                        setVocabAnswered(false);
                        setVocabCorrectCount(0);
                      }}
                      className={`rounded-full px-4 py-2 text-sm ${
                        vocabMode === mode
                          ? "bg-black text-white"
                          : "bg-stone-200 text-stone-700"
                      }`}
                    >
                      {mode === "guided"
                        ? "Guided"
                        : mode === "standard"
                        ? "Standard"
                        : "Deep"}
                    </button>
                  ))}
                </div>
              </div>

              <div className="rounded-2xl bg-stone-100 p-4 text-right">
                <p className="text-sm text-stone-500">Level {level}</p>
                <p className="text-2xl font-bold">{xp} XP</p>
              </div>
            </div>

            {xpMessage && (
              <div className="mt-4 rounded-xl bg-green-100 px-4 py-3 font-medium text-green-900">
                {xpMessage}
              </div>
            )}

            <div className="mt-8 rounded-2xl border bg-stone-50 p-6">
              <p className="text-sm uppercase tracking-wide text-stone-500">
                What does this word mean?
              </p>
              <p className="mt-3 text-4xl font-bold">{currentVocab.word}</p>
            </div>

            <div className="mt-6 space-y-3">
              {vocabOptions.map((option) => (
                <button
                  key={option}
                  onClick={() => answerVocab(option)}
                  disabled={vocabAnswered}
                  className={`block w-full rounded-xl border px-4 py-3 text-left ${
                    vocabSelectedAnswer === option
                      ? option === currentVocab.meaning
                        ? "border-green-500 bg-green-100"
                        : "border-red-500 bg-red-100"
                      : "hover:bg-stone-100"
                  } disabled:cursor-not-allowed`}
                >
                  {option}
                </button>
              ))}
            </div>

            {vocabAnswered && vocabSelectedAnswer !== currentVocab.meaning && (
              <p className="mt-4 rounded-xl bg-red-50 p-4 text-red-800">
                Correct answer: <strong>{currentVocab.meaning}</strong>
              </p>
            )}

            {vocabAnswered && vocabSelectedAnswer === currentVocab.meaning && (
              <p className="mt-4 rounded-xl bg-green-50 p-4 text-green-800">
                Correct! +10 XP
              </p>
            )}

            <div className="mt-8 flex justify-between">
              <button
                onClick={() => setAppStage("preview")}
                className="rounded bg-stone-200 px-4 py-2"
              >
                Skip warm-up
              </button>

              <button
                onClick={nextVocabCard}
                disabled={!vocabAnswered}
                className="rounded bg-black px-4 py-2 text-white disabled:opacity-40"
              >
                {vocabIndex < pregameWords.length - 1
                  ? "Next Word"
                  : "Continue"}
              </button>
            </div>
          </div>
        </div>
      </main>
    );
  }

  if (appStage === "preview") {
    return (
      <main className="min-h-screen bg-stone-50 p-6 text-stone-900">
        <div className="mx-auto max-w-3xl">
          <p className="text-sm uppercase tracking-wide text-stone-500">
            Lexaquest Preview
          </p>

          <div className="mt-4 rounded-2xl bg-white p-6 shadow-sm">
            <h1 className="text-3xl font-bold">Before You Read</h1>

            <div className="mt-6 rounded-2xl bg-stone-50 p-6 text-xl leading-9">
             {(showEnglishPreview
  ? chapter1Preview.english
  : chapter1Preview.french
)
  .split("\n\n")
  .map((paragraph: string, index: number) => (
    <p key={index} className="mb-4">
      {paragraph}
    </p>
  ))}
            </div>

            <div className="mt-6 flex justify-between">
              <button
                onClick={() => setShowEnglishPreview(!showEnglishPreview)}
                className="rounded bg-stone-200 px-4 py-2"
              >
                {showEnglishPreview ? "Show French" : "Show English"}
              </button>

              <button
                onClick={() => setAppStage("reader")}
                className="rounded bg-black px-4 py-2 text-white"
              >
                Start Reading
              </button>
            </div>
          </div>
        </div>
      </main>
    );
  }

  if (reviewMode && currentReviewCard) {
    return (
      <main className="min-h-screen bg-stone-50 p-6 text-stone-900">
        <div className="mx-auto max-w-3xl">
          <p className="text-sm uppercase tracking-wide text-stone-500">
            Lexaquest Review
          </p>

          <div className="mt-4 rounded-2xl bg-white p-6 shadow-sm">
            <h1 className="text-3xl font-bold">Vocab Review</h1>

            <p className="mt-2 text-stone-500">
              Card {reviewIndex + 1} / {reviewCards.length}
            </p>

            {xpMessage && (
              <div className="mt-4 rounded-xl bg-green-100 px-4 py-3 font-medium text-green-900">
                {xpMessage}
              </div>
            )}

            <div className="mt-8 rounded-2xl border bg-stone-50 p-6">
              <p className="text-sm uppercase tracking-wide text-stone-500">
                What does this mean?
              </p>

              <p className="mt-3 text-4xl font-bold">
                {currentReviewCard.word}
              </p>

              <p className="mt-2 text-stone-500">
                Base form: {currentReviewCard.lemma}
              </p>
            </div>

            <div className="mt-6 space-y-3">
              {reviewOptions.map((option) => (
                <button
                  key={option}
                  onClick={() => answerReview(option)}
                  disabled={reviewAnswered}
                  className={`block w-full rounded-xl border px-4 py-3 text-left ${
                    reviewSelectedAnswer === option
                      ? option === currentReviewCard.meaning
                        ? "border-green-500 bg-green-100"
                        : "border-red-500 bg-red-100"
                      : "hover:bg-stone-100"
                  } disabled:cursor-not-allowed`}
                >
                  {option}
                </button>
              ))}
            </div>

            {reviewAnswered &&
              reviewSelectedAnswer !== currentReviewCard.meaning && (
                <div className="mt-4 rounded-xl bg-red-50 p-4 text-red-800">
                  Correct answer:{" "}
                  <strong>{currentReviewCard.meaning}</strong>
                </div>
              )}

            {reviewAnswered &&
              reviewSelectedAnswer === currentReviewCard.meaning && (
                <div className="mt-4 rounded-xl bg-green-50 p-4 text-green-800">
                  Correct! +20 XP
                </div>
              )}

            <div className="mt-8 flex justify-between">
              <button
                onClick={() => setReviewMode(false)}
                className="rounded bg-stone-200 px-4 py-2"
              >
                Exit Review
              </button>

              <button
                onClick={nextReviewCard}
                disabled={!reviewAnswered}
                className="rounded bg-black px-4 py-2 text-white disabled:opacity-40"
              >
                {reviewIndex < reviewCards.length - 1
                  ? "Next Card"
                  : "Finish Review"}
              </button>
            </div>
          </div>
        </div>
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-stone-50 p-6 text-stone-900">
      <div className="mx-auto max-w-3xl">
        <div className="flex items-start justify-between gap-4">
          <div>
            <p className="text-sm uppercase tracking-wide text-stone-500">
              Lexaquest
            </p>

            <h1 className="mt-2 text-3xl font-bold">
              {monteCristoChapter1.book}
            </h1>

            <h2 className="mt-1 text-xl text-stone-600">
              Chapitre {monteCristoChapter1.chapterNumber} —{" "}
              {monteCristoChapter1.title}
            </h2>
          </div>

          <div className="rounded-2xl bg-white p-4 text-right shadow-sm">
            <p className="text-sm text-stone-500">Level {level}</p>
            <p className="text-2xl font-bold">{xp} XP</p>

            <div className="mt-2 h-2 w-32 overflow-hidden rounded-full bg-stone-200">
              <div
                className="h-full bg-black"
                style={{ width: `${levelProgress}%` }}
              />
            </div>
          </div>
        </div>

        {xpMessage && (
          <div className="mt-4 rounded-xl bg-green-100 px-4 py-3 font-medium text-green-900">
            {xpMessage}
          </div>
        )}

        <div className="mt-4 h-3 overflow-hidden rounded-full bg-stone-200">
          <div
            className="h-full bg-black"
            style={{
              width: `${((currentChunkIndex + 1) / chunks.length) * 100}%`,
            }}
          />
        </div>

        <div className="mt-3 text-sm text-stone-500">
          Section {currentChunkIndex + 1} / {chunks.length}
        </div>

        <h3 className="mt-4 text-lg font-semibold">{currentChunk.title}</h3>

        <p className="mt-3 text-sm text-stone-500">
          Click a word to explain it. Double-click to save it.
        </p>

        <div className="mt-6 rounded-2xl bg-white p-6 text-xl leading-9 shadow-sm">
          {currentChunk.text.split("\n\n").map((paragraph, pIndex) => (
            <p key={pIndex} className="mb-4">
              {renderTextWithNotes(
                paragraph,
                notes,
                savedCards,
                (word) => handleWordClick(word, paragraph),
                (word) => handleWordDoubleClick(word, paragraph),
                (note) => {
                  setSelectedNote(note);
                  setSelectedWord(null);
                  setAiResult(null);
                }
              )}
            </p>
          ))}
        </div>

        {selectedWord && (
          <div className="mt-6 rounded-2xl border bg-white p-6 shadow-md">
            <p className="text-sm uppercase tracking-wide text-stone-500">
              Selected word
            </p>

            <h3 className="mt-1 text-2xl font-semibold">{selectedWord}</h3>

            {lookupLoading ? (
              <p className="mt-3 text-stone-700">Thinking...</p>
            ) : aiResult ? (
              <div className="mt-4 space-y-4">
                <div>
                  <p className="text-sm uppercase tracking-wide text-stone-500">
                    Meaning here
                  </p>
                  <p className="mt-1 text-lg font-medium">
                    {aiResult.meaningInContext}
                  </p>
                </div>

                <div>
                  <p className="text-sm uppercase tracking-wide text-stone-500">
                    General meaning
                  </p>
                  <p className="mt-1 text-stone-700">{aiResult.meaning}</p>
                </div>

                <div>
                  <p className="text-sm uppercase tracking-wide text-stone-500">
                    Base form
                  </p>
                  <p className="mt-1 text-stone-700">
                    {aiResult.lemma} · {aiResult.partOfSpeech}
                  </p>
                </div>

                {aiResult.grammarNote && (
                  <div>
                    <p className="text-sm uppercase tracking-wide text-stone-500">
                      Grammar note
                    </p>
                    <p className="mt-1 text-stone-700">
                      {aiResult.grammarNote}
                    </p>
                  </div>
                )}

                <button
                  onClick={saveCurrentWord}
                  disabled={!!currentSavedCard}
                  className="rounded-xl bg-black px-4 py-2 text-white hover:bg-stone-800 disabled:opacity-40"
                >
                  {currentSavedCard ? "Saved" : "Save word +5 XP"}
                </button>
              </div>
            ) : (
              <p className="mt-3 text-stone-700">
                No explanation found. Try another word.
              </p>
            )}
          </div>
        )}

        {selectedNote && (
          <div className="mt-6 rounded-2xl border bg-white p-6 shadow-md">
            <p
              className={`inline-block rounded-full px-3 py-1 text-sm ${
                noteStyles[selectedNote.type]
              }`}
            >
              {selectedNote.type}
            </p>

            <h3 className="mt-3 text-2xl font-semibold">
              {selectedNote.phrase}
            </h3>

            <p className="mt-2 font-medium">{selectedNote.meaning}</p>

            <p className="mt-3 text-stone-700">{selectedNote.explanation}</p>
          </div>
        )}

        {quizNote && (
          <div className="mt-6 rounded-2xl border-2 border-black bg-white p-6 shadow-md">
            <p className="text-sm uppercase tracking-wide text-stone-500">
              Checkpoint
            </p>

            <h3 className="mt-2 text-xl font-semibold">
              What does “{quizNote.phrase}” mean here?
            </h3>

            <div className="mt-4 space-y-3">
              {quizNote.options.map((option) => (
                <button
                  key={option}
                  onClick={() => handleAnswer(option)}
                  disabled={answeredCurrentQuiz}
                  className={`block w-full rounded-xl border px-4 py-3 text-left ${
                    selectedAnswer === option
                      ? option === quizNote.meaning
                        ? "border-green-500 bg-green-100"
                        : "border-red-500 bg-red-100"
                      : "hover:bg-stone-100"
                  } disabled:cursor-not-allowed`}
                >
                  {option}
                </button>
              ))}
            </div>
          </div>
        )}

        <div className="mt-8 flex justify-between">
          <button
            onClick={prevChunk}
            disabled={currentChunkIndex === 0}
            className="rounded bg-stone-200 px-4 py-2 disabled:opacity-40"
          >
            Previous
          </button>

          <button
            onClick={nextChunk}
            disabled={
              currentChunkIndex === chunks.length - 1 ||
              (!!quizNote && selectedAnswer !== quizNote.meaning)
            }
            className="rounded bg-black px-4 py-2 text-white disabled:opacity-40"
          >
            {quizNote
              ? "Continue"
              : notes.length > 0
              ? "Check & Continue"
              : "Continue"}
          </button>
        </div>

        <div className="mt-8 rounded-2xl bg-white p-6 shadow-sm">
          <div className="flex items-center justify-between gap-4">
            <h3 className="text-xl font-semibold">Saved vocab</h3>

            <button
              onClick={() => startReview("anytime")}
              disabled={savedCards.length === 0}
              className="rounded-xl bg-black px-4 py-2 text-sm text-white disabled:opacity-40"
            >
              Review vocab
            </button>
          </div>

          {savedCards.length === 0 ? (
            <p className="mt-2 text-stone-500">
              Double-click words to save them.
            </p>
          ) : (
            <div className="mt-4 flex flex-wrap gap-2">
              {savedCards.map((card) => (
                <span
                  key={card.word}
                  className="rounded-full bg-stone-200 px-3 py-1 text-sm"
                >
                  {card.word} → {card.meaning}
                </span>
              ))}
            </div>
          )}
        </div>
      </div>
    </main>
  );
}