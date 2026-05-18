import verbs from "@/app/data/french/verbs.json";

import {
  beginnerVerbEntries,
  intermediateVerbEntries,
  verbEnglishByInfinitive,
} from "@/app/data/french/verbPools";

export type VerbGymDifficulty =
  | "beginner"
  | "intermediate"
  | "advanced";

export type ConjugationChallengeData = {
  infinitive: string;
  english: string;
  tense: string;
  pronoun: string;
  answer: string;
};

const TENSES_BY_DIFFICULTY: Record<VerbGymDifficulty, string[]> = {
  beginner: ["present", "imparfait", "passe_compose", "futur_simple"],

  intermediate: [
    "present",
    "imparfait",
    "passe_compose",
    "futur_simple",
    "plus_que_parfait",
    "conditionnel_present",
  ],

  advanced: [
    "present",
    "imparfait",
    "passe_compose",
    "futur_simple",
    "plus_que_parfait",
    "futur_anterieur",
    "conditionnel_present",
    "conditionnel_passe",
  ],
};

const PERSON_LABELS: Record<string, string> = {
  "1sm": "je",
  "1sf": "je",
  "2sm": "tu",
  "2sf": "tu",
  "3sm": "il",
  "3sf": "elle",
  "1pm": "nous",
  "1pf": "nous",
  "2pm": "vous",
  "2pf": "vous",
  "3pm": "ils",
  "3pf": "elles",
};

const TENSE_LABELS: Record<string, string> = {
  present: "présent",
  imparfait: "imparfait",
  passe_compose: "passé composé",
  futur_simple: "futur simple",
  plus_que_parfait: "plus-que-parfait",
  futur_anterieur: "futur antérieur",
  conditionnel_present: "conditionnel présent",
  conditionnel_passe: "conditionnel passé",
};

function randomItem<T>(items: T[]): T {
  return items[Math.floor(Math.random() * items.length)];
}

function getVerbPool(difficulty: VerbGymDifficulty) {
  const verbData = verbs as Record<string, any>;

  if (difficulty === "beginner") {
    return beginnerVerbEntries
      .map((verb) => verb.infinitive)
      .filter((infinitive) => verbData[infinitive]);
  }

  if (difficulty === "intermediate") {
    return intermediateVerbEntries
      .map((verb) => verb.infinitive)
      .filter((infinitive) => verbData[infinitive]);
  }

  return Object.keys(verbData);
}

function getIndicatifForms(
  infinitive: string,
  tense: string
): Record<string, string> | null {
  const verbData = verbs as Record<string, any>;

  const activeAvoir =
    verbData[infinitive]?.voix_active_avoir?.indicatif?.[tense];

  if (activeAvoir) {
    return activeAvoir;
  }

  const activeEtre =
    verbData[infinitive]?.voix_active_etre?.indicatif?.[tense];

  if (activeEtre) {
    return activeEtre;
  }

  const active =
    verbData[infinitive]?.voix_active?.indicatif?.[tense];

  if (active) {
    return active;
  }

  return null;
}

export function getRandomConjugationChallenge(
  difficulty: VerbGymDifficulty = "beginner"
): ConjugationChallengeData {
  const usableVerbs = getVerbPool(difficulty);
  const tenses = TENSES_BY_DIFFICULTY[difficulty];

  const infinitive = randomItem(usableVerbs);
  const tense = randomItem(tenses);

  const tenseForms = getIndicatifForms(infinitive, tense);

  if (!tenseForms) {
    return getRandomConjugationChallenge(difficulty);
  }

  const entries = Object.entries(tenseForms);

  if (entries.length === 0) {
    return getRandomConjugationChallenge(difficulty);
  }

  const [personKey, rawAnswer] = randomItem(entries) as [string, string];

  const splitKeys = personKey.split(";");

  const playableKeys = splitKeys.filter((key) => PERSON_LABELS[key]);

  if (playableKeys.length === 0) {
    return getRandomConjugationChallenge(difficulty);
  }

  const chosenKey = randomItem(playableKeys);

  return {
    infinitive,
    english:
      verbEnglishByInfinitive[infinitive] ||
      "translation coming soon",
    tense: TENSE_LABELS[tense] ?? tense,
    pronoun: PERSON_LABELS[chosenKey],
    answer: rawAnswer,
  };
}