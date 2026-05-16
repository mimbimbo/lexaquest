export type VocabLevel = "beginner" | "intermediate" | "advanced";
export type VocabSection = "section1" | "section2" | "section3";

export type BakeryVocabItem = {
  id: string;
  word: string;
  meaning: string;
  level: VocabLevel;
  section: VocabSection;
  culturalNote?: string;
  distractors: string[];
};

export const bakeryVocab: BakeryVocabItem[] = [
  // =====================
  // BEGINNER — SECTION 1
  // Goal: enter shop + basic order
  // =====================
  {
    id: "beginner-bonjour",
    word: "bonjour",
    meaning: "hello",
    level: "beginner",
    section: "section1",
    culturalNote: "In France, always say bonjour when entering a shop.",
    distractors: ["goodbye", "thank you", "please"],
  },
  {
    id: "beginner-merci",
    word: "merci",
    meaning: "thank you",
    level: "beginner",
    section: "section1",
    distractors: ["hello", "please", "how much"],
  },
  {
    id: "beginner-voudrais",
    word: "je voudrais",
    meaning: "I would like",
    level: "beginner",
    section: "section1",
    distractors: ["I want rudely", "I am going", "I already have"],
  },
  {
    id: "beginner-croissant",
    word: "un croissant",
    meaning: "a croissant",
    level: "beginner",
    section: "section1",
    distractors: ["a baguette", "a coffee", "a bag"],
  },
  {
    id: "beginner-baguette",
    word: "une baguette",
    meaning: "a baguette",
    level: "beginner",
    section: "section1",
    distractors: ["a pastry", "a receipt", "a cake"],
  },
  {
    id: "beginner-sil-vous-plait",
    word: "s’il vous plaît",
    meaning: "please",
    level: "beginner",
    section: "section1",
    distractors: ["thank you", "goodbye", "how much"],
  },

  // =====================
  // BEGINNER — SECTION 2
  // Goal: quantity + natural ordering
  // =====================
  {
    id: "beginner-prendre",
    word: "je vais prendre",
    meaning: "I’ll have / I’ll take",
    level: "beginner",
    section: "section2",
    culturalNote: "Very natural when ordering in a bakery or café.",
    distractors: ["I am going home", "I already paid", "I am waiting"],
  },
  {
    id: "beginner-un",
    word: "un",
    meaning: "one / a",
    level: "beginner",
    section: "section2",
    distractors: ["two", "three", "some"],
  },
  {
    id: "beginner-deux",
    word: "deux",
    meaning: "two",
    level: "beginner",
    section: "section2",
    distractors: ["one", "three", "ten"],
  },
  {
    id: "beginner-combien",
    word: "combien",
    meaning: "how much / how many",
    level: "beginner",
    section: "section2",
    distractors: ["where", "when", "why"],
  },
  {
    id: "beginner-tradition",
    word: "une tradition",
    meaning: "a traditional high-quality baguette",
    level: "beginner",
    section: "section2",
    culturalNote:
      "A tradition is often more artisanal than a standard baguette, with stricter ingredients and a richer taste.",
    distractors: ["a dessert", "a coffee size", "a payment method"],
  },
  {
    id: "beginner-pain-chocolat",
    word: "un pain au chocolat",
    meaning: "a chocolate pastry",
    level: "beginner",
    section: "section2",
    distractors: ["a sandwich", "a glass of water", "a shopping bag"],
  },

  // =====================
  // BEGINNER — SECTION 3
  // Goal: payment + closing
  // =====================
  {
    id: "beginner-ce-sera-tout",
    word: "ce sera tout",
    meaning: "that will be all",
    level: "beginner",
    section: "section3",
    distractors: ["that is too much", "I want two", "I am lost"],
  },
  {
    id: "beginner-voila",
    word: "voilà",
    meaning: "here you go",
    level: "beginner",
    section: "section3",
    distractors: ["where is it", "I forgot", "not today"],
  },
  {
    id: "beginner-carte",
    word: "la carte bancaire",
    meaning: "bank card / debit card",
    level: "beginner",
    section: "section3",
    distractors: ["map", "menu", "ticket"],
  },
  {
    id: "beginner-especes",
    word: "en espèces",
    meaning: "in cash",
    level: "beginner",
    section: "section3",
    distractors: ["by card", "with sugar", "to go"],
  },
  {
    id: "beginner-bonne-journee",
    word: "bonne journée",
    meaning: "have a nice day",
    level: "beginner",
    section: "section3",
    distractors: ["good night", "see you tomorrow", "I am hungry"],
  },

  // =====================
  // INTERMEDIATE — SECTION 1
  // Goal: more natural service phrases
  // =====================
  {
    id: "intermediate-avec-ceci",
    word: "avec ceci ?",
    meaning: "anything else?",
    level: "intermediate",
    section: "section1",
    culturalNote: "Shopkeepers often ask this after your first order.",
    distractors: ["where is this?", "is it expensive?", "can I sit here?"],
  },
  {
    id: "intermediate-autre-chose",
    word: "autre chose ?",
    meaning: "anything else?",
    level: "intermediate",
    section: "section1",
    distractors: ["another shop?", "where is it?", "is it fresh?"],
  },
  {
    id: "intermediate-je-vous-ecoute",
    word: "je vous écoute",
    meaning: "I’m listening / what can I get you?",
    level: "intermediate",
    section: "section1",
    culturalNote:
      "This sounds strange literally, but in a shop it means the seller is ready for your order.",
    distractors: ["I understand you", "I am waiting outside", "I hear music"],
  },
  {
    id: "intermediate-fait-maison",
    word: "fait maison",
    meaning: "homemade / made in-house",
    level: "intermediate",
    section: "section1",
    distractors: ["very expensive", "made yesterday", "served cold"],
  },
  {
    id: "intermediate-viennoiserie",
    word: "une viennoiserie",
    meaning: "a breakfast pastry",
    level: "intermediate",
    section: "section1",
    distractors: ["a vegetable", "a wine shop", "a receipt"],
  },

  // =====================
  // INTERMEDIATE — SECTION 2
  // Goal: preference + availability
  // =====================
  {
    id: "intermediate-il-vous-reste",
    word: "il vous reste… ?",
    meaning: "do you have any left?",
    level: "intermediate",
    section: "section2",
    distractors: ["are you staying?", "is it expensive?", "can I leave?"],
  },
  {
    id: "intermediate-preferez",
    word: "vous préférez… ?",
    meaning: "do you prefer…?",
    level: "intermediate",
    section: "section2",
    distractors: ["do you pay?", "do you leave?", "do you wait?"],
  },
  {
    id: "intermediate-recommande",
    word: "vous recommandez quoi ?",
    meaning: "what do you recommend?",
    level: "intermediate",
    section: "section2",
    distractors: ["what do you refuse?", "where do you live?", "what time is it?"],
  },
  {
    id: "intermediate-sorti-four",
    word: "sorti du four",
    meaning: "fresh out of the oven",
    level: "intermediate",
    section: "section2",
    distractors: ["sold out", "too old", "from another shop"],
  },
  {
    id: "intermediate-chaud",
    word: "chaud",
    meaning: "warm / hot",
    level: "intermediate",
    section: "section2",
    distractors: ["cold", "sweet", "cheap"],
  },

  // =====================
  // INTERMEDIATE — SECTION 3
  // Goal: queue/payment/small problems
  // =====================
  {
    id: "intermediate-faire-queue",
    word: "faire la queue",
    meaning: "to wait in line",
    level: "intermediate",
    section: "section3",
    distractors: ["to pay by card", "to order bread", "to leave quickly"],
  },
  {
    id: "intermediate-rendu",
    word: "le rendu",
    meaning: "the change given back",
    level: "intermediate",
    section: "section3",
    distractors: ["the receipt", "the oven", "the bag"],
  },
  {
    id: "intermediate-disponible",
    word: "disponible",
    meaning: "available",
    level: "intermediate",
    section: "section3",
    distractors: ["expensive", "homemade", "closed"],
  },
  {
    id: "intermediate-rupture",
    word: "rupture de stock",
    meaning: "out of stock",
    level: "intermediate",
    section: "section3",
    distractors: ["freshly baked", "on sale", "very popular"],
  },

  // =====================
  // ADVANCED — SECTION 1
  // Goal: realistic nuance
  // =====================
  {
    id: "advanced-ne-reste-plus",
    word: "il ne me reste plus de…",
    meaning: "I don’t have any ... left",
    level: "advanced",
    section: "section1",
    distractors: ["I have too many...", "I just made...", "I recommend..."],
  },
  {
    id: "advanced-vous-tombez-bien",
    word: "vous tombez bien",
    meaning: "you’re in luck / perfect timing",
    level: "advanced",
    section: "section1",
    distractors: ["you fell down", "you are late", "you are wrong"],
  },
  {
    id: "advanced-ca-vient-sortir",
    word: "ça vient de sortir",
    meaning: "it just came out",
    level: "advanced",
    section: "section1",
    culturalNote:
      "In a bakery, this usually means something just came out of the oven.",
    distractors: ["it is sold out", "it is closed", "it is too expensive"],
  },
  {
    id: "advanced-franchement",
    word: "franchement",
    meaning: "honestly / frankly",
    level: "advanced",
    section: "section1",
    distractors: ["finally", "frequently", "freshly"],
  },

  // =====================
  // ADVANCED — SECTION 2
  // Goal: food detail + craft
  // =====================
  {
    id: "advanced-levain",
    word: "le levain",
    meaning: "sourdough starter",
    level: "advanced",
    section: "section2",
    distractors: ["yeast packet", "oven tray", "bread knife"],
  },
  {
    id: "advanced-mie",
    word: "la mie",
    meaning: "the soft inside of bread",
    level: "advanced",
    section: "section2",
    distractors: ["the crust", "the price", "the bag"],
  },
  {
    id: "advanced-croute",
    word: "la croûte",
    meaning: "the crust",
    level: "advanced",
    section: "section2",
    distractors: ["the soft inside", "the flour", "the receipt"],
  },
  {
    id: "advanced-feuilletage",
    word: "le feuilletage",
    meaning: "laminated pastry layers",
    level: "advanced",
    section: "section2",
    distractors: ["bread crumbs", "the cash register", "the queue"],
  },
  {
    id: "advanced-savoir-faire",
    word: "le savoir-faire",
    meaning: "know-how / craftsmanship",
    level: "advanced",
    section: "section2",
    distractors: ["recipe book", "discount", "opening hour"],
  },

  // =====================
  // ADVANCED — SECTION 3
  // Goal: social/cultural fluency
  // =====================
  {
    id: "advanced-habitues",
    word: "les habitués",
    meaning: "regular customers",
    level: "advanced",
    section: "section3",
    distractors: ["new tourists", "employees", "delivery drivers"],
  },
  {
    id: "advanced-commerce-proximite",
    word: "un commerce de proximité",
    meaning: "a local neighborhood shop",
    level: "advanced",
    section: "section3",
    distractors: ["a luxury mall", "a train station", "a street market"],
  },
  {
    id: "advanced-trancher",
    word: "vous voulez que je le tranche ?",
    meaning: "do you want me to slice it?",
    level: "advanced",
    section: "section3",
    distractors: ["do you want me to heat it?", "do you want a bag?", "do you want to pay?"],
  },
  {
    id: "advanced-ca-ira",
    word: "ça ira comme ça",
    meaning: "that’ll be fine like that",
    level: "advanced",
    section: "section3",
    distractors: ["I’ll come back later", "that’s too expensive", "where is the bag?"],
  },
];