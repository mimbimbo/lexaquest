export type ChapterVocabItem = {
  word: string;
  lemma?: string;
  meaning: string;
  meaningInContext?: string;
  difficulty: "guided" | "standard" | "deep";
  tags: ("pregame" | "midReview" | "finalReview")[];
  distractors: string[];
};

export const chapter1Vocab: ChapterVocabItem[] = [
  // 🟢 PREGAME CORE (Guided)
  {
    word: "navire",
    meaning: "ship / vessel",
    difficulty: "guided",
    tags: ["pregame", "midReview", "finalReview"],
    distractors: ["father", "crowd", "letter"],
  },
  {
    word: "vigie",
    meaning: "lookout",
    difficulty: "guided",
    tags: ["pregame", "midReview", "finalReview"],
    distractors: ["captain", "passenger", "anchor"],
  },
  {
    word: "trois-mâts",
    meaning: "three-masted ship",
    difficulty: "guided",
    tags: ["pregame", "midReview", "finalReview"],
    distractors: ["small boat", "harbor", "crew"],
  },
  {
    word: "allure",
    meaning: "manner / appearance",
    meaningInContext: "sad appearance of the ship",
    difficulty: "guided",
    tags: ["pregame", "midReview", "finalReview"],
    distractors: ["speed", "weapon", "storm"],
  },
  {
    word: "détroit",
    meaning: "strait / narrow sea passage",
    difficulty: "guided",
    tags: ["pregame", "midReview", "finalReview"],
    distractors: ["street", "harbor", "bridge"],
  },
  {
    word: "équipage",
    meaning: "crew",
    difficulty: "guided",
    tags: ["pregame", "midReview", "finalReview"],
    distractors: ["owner", "crowd", "family"],
  },
  {
    word: "armateur",
    meaning: "shipowner",
    difficulty: "guided",
    tags: ["pregame", "midReview", "finalReview"],
    distractors: ["captain", "pilot", "sailor"],
  },
  {
    word: "chargement",
    meaning: "cargo",
    difficulty: "guided",
    tags: ["pregame", "midReview", "finalReview"],
    distractors: ["rope", "letter", "money"],
  },
  {
    word: "fièvre",
    meaning: "fever",
    difficulty: "guided",
    tags: ["pregame", "midReview", "finalReview"],
    distractors: ["storm", "order", "wind"],
  },
  {
    word: "soulagé",
    lemma: "soulager",
    meaning: "relieved",
    difficulty: "guided",
    tags: ["pregame", "midReview", "finalReview"],
    distractors: ["angry", "lost", "confused"],
  },
  {
    word: "fiancée",
    meaning: "fiancée / betrothed",
    difficulty: "guided",
    tags: ["pregame", "midReview", "finalReview"],
    distractors: ["widow", "sister", "friend"],
  },
  {
    word: "congé",
    meaning: "leave / time off",
    difficulty: "guided",
    tags: ["pregame", "midReview", "finalReview"],
    distractors: ["cargo", "order", "danger"],
  },

  // 🟡 STANDARD EXTENSION
  {
    word: "mouillage",
    meaning: "anchorage",
    difficulty: "standard",
    tags: ["midReview", "finalReview"],
    distractors: ["argument", "storm", "wedding"],
  },
  {
    word: "bord",
    meaning: "side (of a ship)",
    difficulty: "standard",
    tags: ["midReview", "finalReview"],
    distractors: ["bottom", "door", "rope"],
  },
  {
    word: "ordre",
    meaning: "command / order",
    difficulty: "standard",
    tags: ["midReview", "finalReview"],
    distractors: ["question", "promise", "answer"],
  },
  {
    word: "manœuvre",
    meaning: "maneuver",
    difficulty: "standard",
    tags: ["midReview", "finalReview"],
    distractors: ["weapon", "cargo", "storm"],
  },
  {
    word: "atteindre",
    meaning: "to reach",
    difficulty: "standard",
    tags: ["midReview", "finalReview"],
    distractors: ["to leave", "to hide", "to lose"],
  },
  {
    word: "quitter",
    meaning: "to leave",
    difficulty: "standard",
    tags: ["midReview", "finalReview"],
    distractors: ["to arrive", "to watch", "to follow"],
  },
  {
    word: "paraître",
    meaning: "to seem / appear",
    difficulty: "standard",
    tags: ["midReview", "finalReview"],
    distractors: ["to shout", "to fall", "to carry"],
  },

  // 🔴 DEEP / LITERARY
  {
    word: "haubans",
    meaning: "shrouds (ship ropes)",
    difficulty: "deep",
    tags: ["finalReview"],
    distractors: ["sails", "anchors", "nets"],
  },
  {
    word: "beaupré",
    meaning: "bowsprit",
    difficulty: "deep",
    tags: ["finalReview"],
    distractors: ["mast", "deck", "cabin"],
  },
  {
    word: "décrochés",
    lemma: "décrocher",
    meaning: "unhooked / detached",
    difficulty: "deep",
    tags: ["midReview", "finalReview"],
    distractors: ["broken", "burned", "hidden"],
  },
  {
    word: "cargaison",
    meaning: "shipment / cargo",
    difficulty: "deep",
    tags: ["finalReview"],
    distractors: ["crew", "storm", "route"],
  },
  {
    word: "mélancolique",
    meaning: "melancholy / sad",
    difficulty: "deep",
    tags: ["midReview", "finalReview"],
    distractors: ["happy", "angry", "excited"],
  },
  {
    word: "inquiétude",
    meaning: "unease / worry",
    difficulty: "deep",
    tags: ["midReview", "finalReview"],
    distractors: ["joy", "anger", "strength"],
  },
  {
    word: "insolent",
    meaning: "insolent / rude",
    difficulty: "deep",
    tags: ["finalReview"],
    distractors: ["kind", "brave", "quiet"],
  },
];