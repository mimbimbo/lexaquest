export type TypingLevel = "beginner" | "intermediate" | "advanced";
export type TypingSection = "section1" | "section2" | "section3";

export type TypingChallenge = {
  id: string;
  level: TypingLevel;
  section: TypingSection;
  english: string;
  prompt: string;
  answers: string[];
  hint: string;
  explanation: string;
};

export const bakeryTypingChallenges: TypingChallenge[] = [
  // BEGINNER — SECTION 1
  {
    id: "beginner-section1-voudrais",
    level: "beginner",
    section: "section1",
    english: "I would like a croissant.",
    prompt: "Je _____ un croissant.",
    answers: ["voudrais"],
    hint: "Use the polite phrase: je voudrais.",
    explanation: "“Je voudrais” means “I would like.” It is polite and very useful.",
  },
  {
    id: "beginner-section1-plait",
    level: "beginner",
    section: "section1",
    english: "A croissant, please.",
    prompt: "Un croissant, s’il vous _____.",
    answers: ["plaît", "plait"],
    hint: "The final word in “s’il vous plaît.”",
    explanation: "“S’il vous plaît” means “please.”",
  },

  // BEGINNER — SECTION 2
  {
    id: "beginner-section2-prendre",
    level: "beginner",
    section: "section2",
    english: "I’ll have a traditional baguette.",
    prompt: "Je vais _____ une baguette tradition.",
    answers: ["prendre"],
    hint: "Use the verb meaning “to take / to have.”",
    explanation: "“Je vais prendre…” is natural when ordering food.",
  },
  {
    id: "beginner-section2-combien",
    level: "beginner",
    section: "section2",
    english: "How much does it cost?",
    prompt: "Ça coûte _____ ?",
    answers: ["combien"],
    hint: "The word means “how much.”",
    explanation: "“Combien” means “how much” or “how many.”",
  },

  // BEGINNER — SECTION 3
  {
    id: "beginner-section3-tout",
    level: "beginner",
    section: "section3",
    english: "That will be all, thank you.",
    prompt: "Ce sera _____, merci.",
    answers: ["tout"],
    hint: "The phrase is “ce sera tout.”",
    explanation: "“Ce sera tout” means “that will be all.”",
  },
  {
    id: "beginner-section3-voila",
    level: "beginner",
    section: "section3",
    english: "Here you go. Thank you!",
    prompt: "_____. Merci !",
    answers: ["voilà", "voila"],
    hint: "A common phrase when handing something over.",
    explanation: "“Voilà” can mean “here you go.”",
  },

  // INTERMEDIATE — SECTION 1
  {
    id: "intermediate-section1-ecoute",
    level: "intermediate",
    section: "section1",
    english: "I’m listening / What can I get you?",
    prompt: "Je vous _____.",
    answers: ["écoute", "ecoute"],
    hint: "Literally “I am listening to you.”",
    explanation:
      "In shops, “Je vous écoute” means the seller is ready to take your order.",
  },
  {
    id: "intermediate-section1-avec-ceci",
    level: "intermediate",
    section: "section1",
    english: "Anything else?",
    prompt: "Avec _____ ?",
    answers: ["ceci"],
    hint: "The full phrase is “avec ceci ?”",
    explanation: "“Avec ceci ?” is a common shop phrase meaning “anything else?”",
  },

  // INTERMEDIATE — SECTION 2
  {
    id: "intermediate-section2-reste",
    level: "intermediate",
    section: "section2",
    english: "Do you have any croissants left?",
    prompt: "Il vous _____ des croissants ?",
    answers: ["reste"],
    hint: "The phrase is “il vous reste…”",
    explanation: "“Il vous reste… ?” means “do you have any ... left?”",
  },
  {
    id: "intermediate-section2-recommandez",
    level: "intermediate",
    section: "section2",
    english: "What do you recommend?",
    prompt: "Vous _____ quoi ?",
    answers: ["recommandez"],
    hint: "From the verb recommander.",
    explanation: "“Vous recommandez quoi ?” means “what do you recommend?”",
  },

  // INTERMEDIATE — SECTION 3
  {
    id: "intermediate-section3-queue",
    level: "intermediate",
    section: "section3",
    english: "I wait in line.",
    prompt: "Je fais la _____.",
    answers: ["queue"],
    hint: "The phrase is “faire la queue.”",
    explanation: "“Faire la queue” means “to wait in line.”",
  },
  {
    id: "intermediate-section3-disponible",
    level: "intermediate",
    section: "section3",
    english: "Is it available?",
    prompt: "C’est _____ ?",
    answers: ["disponible"],
    hint: "Same idea as English “available.”",
    explanation: "“Disponible” means “available.”",
  },

  // ADVANCED — SECTION 1
  {
    id: "advanced-section1-reste-plus",
    level: "advanced",
    section: "section1",
    english: "I don’t have any left.",
    prompt: "Il ne m’en _____ plus.",
    answers: ["reste"],
    hint: "From the phrase “il ne me reste plus…”",
    explanation:
      "“Il ne m’en reste plus” means “I don’t have any left.” The “en” replaces the thing being discussed.",
  },
  {
    id: "advanced-section1-tombez",
    level: "advanced",
    section: "section1",
    english: "You’re in luck / perfect timing.",
    prompt: "Vous _____ bien.",
    answers: ["tombez"],
    hint: "The idiomatic phrase is “vous tombez bien.”",
    explanation: "“Vous tombez bien” means “you’re in luck” or “perfect timing.”",
  },

  // ADVANCED — SECTION 2
  {
    id: "advanced-section2-sortir",
    level: "advanced",
    section: "section2",
    english: "It just came out of the oven.",
    prompt: "Ça vient de _____ du four.",
    answers: ["sortir"],
    hint: "Use the infinitive after “vient de.”",
    explanation:
      "“Venir de + infinitive” means “to have just done something.”",
  },
  {
    id: "advanced-section2-tranche",
    level: "advanced",
    section: "section2",
    english: "Do you want me to slice it?",
    prompt: "Vous voulez que je le _____ ?",
    answers: ["tranche"],
    hint: "From the verb “trancher.”",
    explanation:
      "After “vous voulez que je…”, French uses the subjunctive-like form here: “je le tranche.”",
  },

  // ADVANCED — SECTION 3
  {
    id: "advanced-section3-ira",
    level: "advanced",
    section: "section3",
    english: "That’ll be fine like that.",
    prompt: "Ça _____ comme ça.",
    answers: ["ira"],
    hint: "The phrase is “ça ira comme ça.”",
    explanation: "“Ça ira comme ça” means “that’ll be fine like that.”",
  },
  {
    id: "advanced-section3-faire",
    level: "advanced",
    section: "section3",
    english: "That will be six euros fifty.",
    prompt: "Ça vous _____ six euros cinquante.",
    answers: ["fera"],
    hint: "From “ça vous fera…”",
    explanation:
      "“Ça vous fera…” is a common shop phrase meaning “that will come to…”",
  },
];