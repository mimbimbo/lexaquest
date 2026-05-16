import { BakeryVocabItem } from "@/app/data/paris/bakeryVocab";
import { speakFrench } from "@/utils/speakFrench";

type VocabLessonProps = {
  currentVocab: BakeryVocabItem;
  vocabAnswers: string[];

  xp: number;
  vocabIndex: number;
  totalWords: number;

  feedback: string | null;

  selectedLevel: string;
  selectedSection: string;

  onBack: () => void;
  onAnswer: (answer: string) => void;
};

export function VocabLesson({
  currentVocab,
  vocabAnswers,
  xp,
  vocabIndex,
  totalWords,
  feedback,
  selectedLevel,
  selectedSection,
  onBack,
  onAnswer,
}: VocabLessonProps) {
  return (
    <main className="min-h-screen bg-stone-100 p-6 text-stone-900">
      <div className="mx-auto max-w-2xl">
        <button
          onClick={onBack}
          className="mb-6 rounded bg-stone-200 px-4 py-2 hover:bg-stone-300"
        >
          ← Back to campaign
        </button>

        <div className="rounded-2xl bg-white p-6 shadow-sm">
          <div className="flex items-start justify-between gap-4">
            <div>
              <p className="text-sm uppercase tracking-wide text-stone-500">
                Bakery Warm-Up
              </p>

              <h1 className="mt-2 text-3xl font-bold">
                Vocabulary Review
              </h1>

              <p className="mt-2 text-stone-600 capitalize">
                {selectedLevel} · {selectedSection}
              </p>
            </div>

            <div className="rounded-2xl bg-stone-100 p-4 text-right">
              <p className="text-sm text-stone-500">XP</p>
              <p className="text-3xl font-bold">{xp}</p>
            </div>
          </div>

          <div className="mt-8 rounded-2xl bg-stone-50 p-8 text-center">
           <div className="flex items-center justify-center gap-3">
  <p className="text-4xl font-bold">{currentVocab.word}</p>

  <button
    onClick={() => speakFrench(currentVocab.word)}
    className="rounded-full bg-white px-3 py-2 text-xl shadow hover:bg-stone-100"
    aria-label="Listen"
  >
    🔊
  </button>
</div>
          </div>

          {currentVocab.culturalNote && (
            <div className="mt-4 rounded-xl bg-yellow-100 p-4 text-yellow-900">
              💡 {currentVocab.culturalNote}
            </div>
          )}

          {feedback && (
            <div className="mt-4 rounded-xl bg-red-100 p-4 text-red-900">
              {feedback}
            </div>
          )}

          <div className="mt-6 space-y-3">
            {vocabAnswers.map((answer) => (
              <button
                key={answer}
                onClick={() => onAnswer(answer)}
                className="block w-full rounded-xl border bg-white px-4 py-4 text-left hover:bg-stone-100"
              >
                {answer}
              </button>
            ))}
          </div>

          <div className="mt-6 text-sm text-stone-500">
            Word {vocabIndex + 1} / {totalWords}
          </div>
        </div>
      </div>
    </main>
  );
}