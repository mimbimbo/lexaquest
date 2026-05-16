import { useMemo, useState } from "react";

import {
  bakeryQuests,
  QuestLevel,
  DialogueChoice,
} from "@/app/data/paris/bakeryQuest";

import { bakeryVocab } from "@/app/data/paris/bakeryVocab";
import { bakeryIdioms } from "@/app/data/paris/bakeryIdioms";

import {
  CampaignDifficulty,
  CampaignLesson,
  CampaignSection,
} from "@/app/data/paris/bakeryCampaign";

import { bakeryTypingChallenges } from "@/app/data/paris/bakeryTyping";

import { bakeryCultureReadings } from "@/app/data/paris/bakeryCulture";

type Screen =
  | "onboarding"
  | "map"
  | "campaign"
  | "vocab"
  | "typing"
  | "bakery"
  | "idioms"
  | "culture";

type VocabStats = Record<
  string,
  {
    correct: number;
    incorrect: number;
  }
>;

export function useParisGame() {
  const [screen, setScreen] = useState<Screen>("onboarding");

  const [selectedLevel, setSelectedLevel] =
    useState<CampaignDifficulty>("beginner");

  const [selectedSection, setSelectedSection] =
    useState<CampaignSection>("section1");

  const [unlockedLevels, setUnlockedLevels] = useState<CampaignDifficulty[]>([
    "beginner",
  ]);

  const [currentLessonId, setCurrentLessonId] = useState<string | null>(null);

  const [xp, setXp] = useState(0);
  const [badges, setBadges] = useState<string[]>([]);
  const [completedLocations, setCompletedLocations] = useState<string[]>([]);
  const [completedLessons, setCompletedLessons] = useState<string[]>([]);
  const [completedSideQuests, setCompletedSideQuests] = useState<string[]>([]);

  const [vocabIndex, setVocabIndex] = useState(0);
  const [vocabFeedback, setVocabFeedback] = useState<string | null>(null);
  const [vocabStats, setVocabStats] = useState<VocabStats>({});

  const [typingIndex, setTypingIndex] = useState(0);
  const [typedAnswer, setTypedAnswer] = useState("");
  const [typingFeedback, setTypingFeedback] = useState<string | null>(null);

  const [currentNodeId, setCurrentNodeId] = useState(
    bakeryQuests.beginner.startNodeId
  );
  const [dialogueFeedback, setDialogueFeedback] = useState<string | null>(null);

  const [idiomSection, setIdiomSection] =
    useState<CampaignSection>("section1");
  const [idiomIndex, setIdiomIndex] = useState(0);
  const [idiomFeedback, setIdiomFeedback] = useState<string | null>(null);
  const [idiomAnswered, setIdiomAnswered] = useState(false);
  const [idiomSelectedAnswer, setIdiomSelectedAnswer] = useState<string | null>(
    null
  );

  const [cultureQuestionIndex, setCultureQuestionIndex] = useState(0);
  const [cultureAnswered, setCultureAnswered] = useState(false);
  const [cultureSelectedAnswer, setCultureSelectedAnswer] = useState<
    string | null
  >(null);

  const currentQuest = bakeryQuests[selectedLevel as QuestLevel];

  const currentNode =
    currentQuest.nodes.find((node) => node.id === currentNodeId) ??
    currentQuest.nodes[0];

  const currentVocabItems = useMemo(() => {
    const sectionItems = bakeryVocab.filter(
      (item) => item.level === selectedLevel && item.section === selectedSection
    );

    const weakItems = bakeryVocab.filter((item) => {
      const stats = vocabStats[item.id];

      if (!stats) return false;

      return (
        item.level === selectedLevel &&
        item.section !== selectedSection &&
        stats.incorrect > stats.correct
      );
    });

    const combined = [...sectionItems, ...weakItems];

    return combined.filter(
      (item, index, array) =>
        array.findIndex((other) => other.id === item.id) === index
    );
  }, [selectedLevel, selectedSection, vocabStats]);

  const currentVocab = currentVocabItems[vocabIndex];

  const vocabAnswers = currentVocab
    ? [currentVocab.meaning, ...currentVocab.distractors].sort(
        () => Math.random() - 0.5
      )
    : [];

  const currentTypingItems = bakeryTypingChallenges.filter(
    (item) => item.level === selectedLevel && item.section === selectedSection
  );

  const currentTyping = currentTypingItems[typingIndex];

  const currentIdiomItems = bakeryIdioms.filter(
    (item) => item.section === idiomSection
  );

  const currentIdiom = currentIdiomItems[idiomIndex];

  const idiomAnswers = currentIdiom
    ? [currentIdiom.meaning, ...currentIdiom.distractors].sort(
        () => Math.random() - 0.5
      )
    : [];

  const currentCultureReading =
    bakeryCultureReadings.find(
      (reading) =>
        reading.level === selectedLevel && reading.section === selectedSection
    ) ?? null;

  const currentCultureQuestion =
    currentCultureReading?.questions[cultureQuestionIndex] ?? null;

  const cultureAnswers = currentCultureQuestion
    ? [
        currentCultureQuestion.correctAnswer,
        ...currentCultureQuestion.distractors,
      ].sort(() => Math.random() - 0.5)
    : [];

  const bakeryComplete = completedLocations.includes("bakery");
  const breadIdiomsComplete = completedSideQuests.includes("bread-idioms");

  function addBadge(badge: string) {
    if (!badges.includes(badge)) {
      setBadges((current) => [...current, badge]);
    }
  }

  function completeLesson(lessonId: string) {
    if (!completedLessons.includes(lessonId)) {
      setCompletedLessons((current) => [...current, lessonId]);
    }
  }

  function completeLocation(locationId: string) {
    if (!completedLocations.includes(locationId)) {
      setCompletedLocations((current) => [...current, locationId]);
    }
  }

  function completeSideQuest(sideQuestId: string) {
    if (!completedSideQuests.includes(sideQuestId)) {
      setCompletedSideQuests((current) => [...current, sideQuestId]);
    }
  }

  function unlockLevel(level: CampaignDifficulty) {
    if (!unlockedLevels.includes(level)) {
      setUnlockedLevels((current) => [...current, level]);
    }
  }

  function unlockNextLevelAfter(level: CampaignDifficulty) {
    if (level === "beginner") unlockLevel("intermediate");
    if (level === "intermediate") unlockLevel("advanced");
  }

  function normalizeAnswer(value: string) {
    return value
      .trim()
      .toLowerCase()
      .normalize("NFD")
      .replace(/[\u0300-\u036f]/g, "");
  }

  function chooseStartingLevel(level: CampaignDifficulty) {
    setSelectedLevel(level);
    setUnlockedLevels([level]);
    setScreen("map");
  }

  function selectCampaignLevel(level: CampaignDifficulty) {
    if (!unlockedLevels.includes(level)) return;
    setSelectedLevel(level);
  }

  function openLesson(lesson: CampaignLesson) {
    setCurrentLessonId(lesson.id);
    setSelectedSection(lesson.section);

    if (lesson.type === "vocab") {
      setVocabIndex(0);
      setVocabFeedback(null);
      setScreen("vocab");
    }

    if (lesson.type === "typing") {
      setTypingIndex(0);
      setTypedAnswer("");
      setTypingFeedback(null);
      setScreen("typing");
    }

    if (lesson.type === "dialogue") {
      const quest = bakeryQuests[selectedLevel as QuestLevel];

      setCurrentNodeId(quest.startNodeId);
      setDialogueFeedback(null);
      setScreen("bakery");
    }

    if (lesson.type === "culture") {
      setCultureQuestionIndex(0);
      setCultureAnswered(false);
      setCultureSelectedAnswer(null);
      setScreen("culture");
    }
  }

  function startIdiomSideQuest(section: CampaignSection = "section1") {
    setIdiomSection(section);
    setIdiomIndex(0);
    setIdiomFeedback(null);
    setIdiomAnswered(false);
    setIdiomSelectedAnswer(null);
    setScreen("idioms");
  }

  function recordVocabAnswer(vocabId: string, correct: boolean) {
    setVocabStats((current) => {
      const existing = current[vocabId] ?? { correct: 0, incorrect: 0 };

      return {
        ...current,
        [vocabId]: {
          correct: existing.correct + (correct ? 1 : 0),
          incorrect: existing.incorrect + (correct ? 0 : 1),
        },
      };
    });
  }

  function handleVocabAnswer(answer: string) {
    if (!currentVocab) return;

    const isCorrect = answer === currentVocab.meaning;

    recordVocabAnswer(currentVocab.id, isCorrect);

    if (!isCorrect) {
      setVocabFeedback("Not quite. Try again.");
      return;
    }

    setVocabFeedback(null);
    setXp((current) => current + 5);

    if (vocabIndex < currentVocabItems.length - 1) {
      setVocabIndex((current) => current + 1);
      return;
    }

    if (currentLessonId) completeLesson(currentLessonId);

    setScreen("campaign");
  }

  function checkTypingAnswer() {
    if (!currentTyping) return;

    const userAnswer = normalizeAnswer(typedAnswer);
    const acceptedAnswers = currentTyping.answers.map(normalizeAnswer);

    if (!acceptedAnswers.includes(userAnswer)) {
      setTypingFeedback(`Not quite. Hint: ${currentTyping.hint}`);
      return;
    }

    setXp((current) => current + 10);
    setTypingFeedback(`Correct! ${currentTyping.explanation}`);

    setTimeout(() => {
      if (typingIndex < currentTypingItems.length - 1) {
        setTypingIndex((current) => current + 1);
        setTypedAnswer("");
        setTypingFeedback(null);
        return;
      }

      if (currentLessonId) completeLesson(currentLessonId);

      setScreen("campaign");
    }, 900);
  }

  function chooseDialogueAnswer(choice: DialogueChoice) {
    setDialogueFeedback(choice.feedback ?? null);

    if (choice.correct && choice.xp) {
      setXp((current) => current + choice.xp!);
    }

    if (choice.nextId) {
      setCurrentNodeId(choice.nextId);
    }

    if (choice.nextId === "success") {
      addBadge(currentQuest.successBadge);
      completeLocation("bakery");

      if (currentLessonId) completeLesson(currentLessonId);

      unlockNextLevelAfter(selectedLevel);
    }
  }

  function handleIdiomAnswer(answer: string) {
    if (!currentIdiom || idiomAnswered) return;

    setIdiomSelectedAnswer(answer);
    setIdiomAnswered(true);

    if (answer === currentIdiom.meaning) {
      setXp((current) => current + 10);
      setIdiomFeedback("Correct!");
    } else {
      setIdiomFeedback("Not quite.");
    }
  }

  function nextIdiom() {
    if (!idiomAnswered) return;

    if (idiomIndex < currentIdiomItems.length - 1) {
      setIdiomIndex((current) => current + 1);
      setIdiomFeedback(null);
      setIdiomAnswered(false);
      setIdiomSelectedAnswer(null);
      return;
    }

    const nextSection =
      idiomSection === "section1"
        ? "section2"
        : idiomSection === "section2"
        ? "section3"
        : null;

    if (nextSection) {
      setIdiomSection(nextSection);
      setIdiomIndex(0);
      setIdiomFeedback(null);
      setIdiomAnswered(false);
      setIdiomSelectedAnswer(null);
      return;
    }

    addBadge("🥖 Bread Philosopher");
    completeSideQuest("bread-idioms");
    setXp((current) => current + 50);
    setScreen("campaign");
  }

  function handleCultureAnswer(answer: string) {
    if (!currentCultureQuestion || cultureAnswered) return;

    setCultureSelectedAnswer(answer);
    setCultureAnswered(true);

    if (answer === currentCultureQuestion.correctAnswer) {
      setXp((current) => current + 10);
    }
  }

  function nextCultureQuestion() {
    if (!currentCultureReading || !cultureAnswered) return;

    if (cultureQuestionIndex < currentCultureReading.questions.length - 1) {
      setCultureQuestionIndex((current) => current + 1);
      setCultureAnswered(false);
      setCultureSelectedAnswer(null);
      return;
    }

    if (currentLessonId) completeLesson(currentLessonId);

    setXp((current) => current + 20);
    setScreen("campaign");
  }

  return {
    screen,
    setScreen,

    xp,
    badges,

    bakeryComplete,
    breadIdiomsComplete,

    selectedLevel,
    selectedSection,

    unlockedLevels,
    completedLessons,

    currentQuest,
    currentNode,
    dialogueFeedback,

    currentVocab,
    currentVocabItems,
    vocabAnswers,
    vocabIndex,
    vocabFeedback,

    currentTyping,
    currentTypingItems,
    typingIndex,
    typedAnswer,
    typingFeedback,

    currentIdiom,
    currentIdiomItems,
    idiomAnswers,
    idiomIndex,
    idiomFeedback,
    idiomAnswered,
    idiomSelectedAnswer,
    idiomSection,

    currentCultureReading,
    cultureAnswers,
    cultureQuestionIndex,
    cultureAnswered,
    cultureSelectedAnswer,

    chooseStartingLevel,
    selectCampaignLevel,
    openLesson,

    setTypedAnswer,

    handleVocabAnswer,
    checkTypingAnswer,
    chooseDialogueAnswer,

    startIdiomSideQuest,
    handleIdiomAnswer,
    nextIdiom,

    handleCultureAnswer,
    nextCultureQuestion,
  };
}