import verbs from "@/app/data/french/verbs.json";

export type ConjugationChallengeData = {
  infinitive: string;
  tense: string;
  pronoun: string;
  answer: string;
};

const TENSES = [
  "present",
  "imparfait",
  "futur_simple",
  "passe_compose",
];

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

function randomItem<T>(items: T[]): T {
  return items[Math.floor(Math.random() * items.length)];
}

export function getRandomConjugationChallenge(): ConjugationChallengeData {
  const verbData = verbs as Record<string, any>;

  const usableVerbs = Object.keys(verbData).filter(
    (infinitive) =>
      verbData[infinitive]?.voix_active_avoir?.indicatif
  );

  const infinitive = randomItem(usableVerbs);

  const tense = randomItem(TENSES);

  const tenseForms =
    verbData[infinitive]?.voix_active_avoir?.indicatif?.[
      tense
    ];

  if (!tenseForms) {
    return getRandomConjugationChallenge();
  }

  const entries = Object.entries(tenseForms);

  if (entries.length === 0) {
    return getRandomConjugationChallenge();
  }

  const [personKey, answer] = randomItem(
    entries
  ) as [string, string];

  const splitKeys = personKey.split(";");

  const chosenKey = randomItem(splitKeys);

  return {
    infinitive,
    tense,
    pronoun:
      PERSON_LABELS[chosenKey] ?? chosenKey,
    answer,
  };
}