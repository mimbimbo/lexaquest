export type IdiomSection = "section1" | "section2" | "section3";

export type BakeryIdiom = {
  id: string;
  section: IdiomSection;
  phrase: string;
  meaning: string;
  literalMeaning: string;
  explanation: string;
  exampleFrench: string;
  exampleEnglish: string;
  distractors: string[];
};

export const bakeryIdioms: BakeryIdiom[] = [
  {
    id: "pain-sur-la-planche",
    section: "section1",
    phrase: "avoir du pain sur la planche",
    meaning: "to have a lot of work to do",
    literalMeaning: "to have bread on the board",
    explanation: "Used when someone has many tasks or responsibilities ahead.",
    exampleFrench: "J’ai trois examens demain, j’ai du pain sur la planche.",
    exampleEnglish: "I have three exams tomorrow; I have a lot of work to do.",
    distractors: ["to be hungry", "to buy bread", "to be lazy"],
  },
  {
    id: "gagner-son-pain",
    section: "section1",
    phrase: "gagner son pain",
    meaning: "to earn one’s living",
    literalMeaning: "to earn one’s bread",
    explanation: "Used to talk about working to support yourself.",
    exampleFrench: "Il travaille dur pour gagner son pain.",
    exampleEnglish: "He works hard to earn his living.",
    distractors: ["to win bread", "to bake every day", "to eat too much"],
  },
  {
    id: "mettre-main-pate",
    section: "section1",
    phrase: "mettre la main à la pâte",
    meaning: "to pitch in / help with the work",
    literalMeaning: "to put your hand in the dough",
    explanation: "Used when someone actively helps with a task.",
    exampleFrench: "Tout le monde doit mettre la main à la pâte.",
    exampleEnglish: "Everyone needs to pitch in.",
    distractors: ["to make bread", "to refuse help", "to make a mess"],
  },

  {
    id: "etre-dans-petrin",
    section: "section2",
    phrase: "être dans le pétrin",
    meaning: "to be in trouble",
    literalMeaning: "to be in the kneading trough",
    explanation: "Used when someone is in a difficult situation.",
    exampleFrench: "J’ai perdu mon portefeuille, je suis dans le pétrin.",
    exampleEnglish: "I lost my wallet; I’m in trouble.",
    distractors: ["to be relaxed", "to be at breakfast", "to be rich"],
  },
  {
    id: "rouler-dans-farine",
    section: "section2",
    phrase: "rouler quelqu’un dans la farine",
    meaning: "to trick someone",
    literalMeaning: "to roll someone in flour",
    explanation: "Used when someone deceives or fools another person.",
    exampleFrench: "Il m’a vendu un faux billet, il m’a roulé dans la farine.",
    exampleEnglish: "He sold me a fake ticket; he tricked me.",
    distractors: ["to help someone cook", "to invite someone", "to pay someone"],
  },
  {
    id: "ne-pas-manger-pain-la",
    section: "section2",
    phrase: "ne pas manger de ce pain-là",
    meaning: "to refuse to be involved in something dishonest",
    literalMeaning: "not to eat that bread",
    explanation: "Used when rejecting behavior you consider wrong.",
    exampleFrench: "Tricher à l’examen ? Non, je ne mange pas de ce pain-là.",
    exampleEnglish: "Cheat on the exam? No, I won’t be part of that.",
    distractors: ["to dislike bread", "to be full", "to order dessert"],
  },

  {
    id: "en-faire-fromage",
    section: "section3",
    phrase: "en faire tout un fromage",
    meaning: "to make a big deal out of it",
    literalMeaning: "to make a whole cheese out of it",
    explanation: "Used when someone exaggerates a small problem.",
    exampleFrench: "Ce n’est qu’une petite erreur, n’en fais pas tout un fromage.",
    exampleEnglish: "It’s just a small mistake; don’t make a big deal out of it.",
    distractors: ["to cook dinner", "to be generous", "to eat cheese"],
  },
  {
    id: "vendre-petits-pains",
    section: "section3",
    phrase: "se vendre comme des petits pains",
    meaning: "to sell like hotcakes",
    literalMeaning: "to sell like little breads",
    explanation: "Used when something sells very quickly.",
    exampleFrench: "Ces billets se vendent comme des petits pains.",
    exampleEnglish: "These tickets are selling like hotcakes.",
    distractors: ["to sell badly", "to bake slowly", "to be too expensive"],
  },
  {
    id: "ca-ne-mange-pas-pain",
    section: "section3",
    phrase: "ça ne mange pas de pain",
    meaning: "it can’t hurt / it costs nothing to try",
    literalMeaning: "it doesn’t eat bread",
    explanation: "Used when something is harmless or worth trying.",
    exampleFrench: "On peut lui demander, ça ne mange pas de pain.",
    exampleEnglish: "We can ask him; it can’t hurt.",
    distractors: ["it is dangerous", "it is delicious", "it is forbidden"],
  },
];