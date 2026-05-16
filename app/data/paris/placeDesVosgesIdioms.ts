export type VosgesIdiomSection = "section1" | "section2" | "section3";

export type PlaceDesVosgesIdiom = {
  id: string;
  section: VosgesIdiomSection;
  phrase: string;
  meaning: string;
  literalMeaning: string;
  explanation: string;
  exampleFrench: string;
  exampleEnglish: string;
  distractors: string[];
};

export const placeDesVosgesIdioms: PlaceDesVosgesIdiom[] = [
  {
    id: "tourner-en-rond",
    section: "section1",
    phrase: "tourner en rond",
    meaning: "to go around in circles",
    literalMeaning: "to turn in a circle",
    explanation:
      "Useful when someone is lost, confused, or not making progress.",
    exampleFrench:
      "Je cherche la place des Vosges depuis dix minutes, je tourne en rond.",
    exampleEnglish:
      "I’ve been looking for Place des Vosges for ten minutes; I’m going around in circles.",
    distractors: ["to arrive early", "to walk quickly", "to sit in a garden"],
  },
  {
    id: "etre-a-cote-de-la-plaque",
    section: "section1",
    phrase: "être à côté de la plaque",
    meaning: "to be way off / completely mistaken",
    literalMeaning: "to be beside the plate/sign",
    explanation:
      "Used when someone misunderstands something or gives a completely wrong answer.",
    exampleFrench:
      "Il pense que la place des Vosges est près de la tour Eiffel ? Il est à côté de la plaque.",
    exampleEnglish:
      "He thinks Place des Vosges is near the Eiffel Tower? He’s way off.",
    distractors: ["to stand near a statue", "to be very hungry", "to be on time"],
  },
  {
    id: "perdre-le-nord",
    section: "section1",
    phrase: "perdre le nord",
    meaning: "to lose one’s bearings",
    literalMeaning: "to lose the north",
    explanation:
      "Used when someone is disoriented, physically or mentally.",
    exampleFrench:
      "Dans les petites rues du Marais, j’ai perdu le nord.",
    exampleEnglish:
      "In the little streets of Le Marais, I lost my bearings.",
    distractors: ["to go north", "to find a map", "to arrive at a museum"],
  },

  {
    id: "connaitre-sur-le-bout-des-doigts",
    section: "section2",
    phrase: "connaître sur le bout des doigts",
    meaning: "to know like the back of one’s hand",
    literalMeaning: "to know on the tips of one’s fingers",
    explanation:
      "Used when someone knows a place, subject, or skill extremely well.",
    exampleFrench:
      "Elle connaît le Marais sur le bout des doigts.",
    exampleEnglish:
      "She knows Le Marais like the back of her hand.",
    distractors: ["to count on fingers", "to touch a wall", "to forget a place"],
  },
  {
    id: "remonter-le-temps",
    section: "section2",
    phrase: "remonter le temps",
    meaning: "to go back in time",
    literalMeaning: "to go back up time",
    explanation:
      "Often used when a place makes you feel connected to history.",
    exampleFrench:
      "En entrant place des Vosges, on a l’impression de remonter le temps.",
    exampleEnglish:
      "Entering Place des Vosges feels like going back in time.",
    distractors: ["to be late", "to climb stairs", "to check the time"],
  },
  {
    id: "avoir-de-l-allure",
    section: "section2",
    phrase: "avoir de l’allure",
    meaning: "to have style / presence",
    literalMeaning: "to have bearing",
    explanation:
      "Used to describe someone or something elegant, impressive, or stylish.",
    exampleFrench:
      "Avec ses arcades et ses briques rouges, cette place a vraiment de l’allure.",
    exampleEnglish:
      "With its arcades and red bricks, this square really has presence.",
    distractors: ["to walk fast", "to be expensive", "to be very old only"],
  },

  {
    id: "voir-la-vie-en-rose",
    section: "section3",
    phrase: "voir la vie en rose",
    meaning: "to see life through rose-colored glasses",
    literalMeaning: "to see life in pink",
    explanation:
      "Used when someone sees things positively or romantically.",
    exampleFrench:
      "Assis dans le jardin, il voit la vie en rose.",
    exampleEnglish:
      "Sitting in the garden, he sees life through rose-colored glasses.",
    distractors: ["to dislike Paris", "to paint a wall", "to buy roses"],
  },
  {
    id: "avoir-le-cafard",
    section: "section3",
    phrase: "avoir le cafard",
    meaning: "to feel down / gloomy",
    literalMeaning: "to have the cockroach",
    explanation:
      "A common informal expression meaning to feel sad or depressed.",
    exampleFrench:
      "Quand il pleut toute la journée, j’ai un peu le cafard.",
    exampleEnglish:
      "When it rains all day, I feel a bit down.",
    distractors: ["to see an insect", "to drink coffee", "to be very excited"],
  },
  {
    id: "prendre-l-air",
    section: "section3",
    phrase: "prendre l’air",
    meaning: "to get some fresh air",
    literalMeaning: "to take the air",
    explanation:
      "Very useful expression when going out for a walk or break.",
    exampleFrench:
      "Je vais prendre l’air place des Vosges.",
    exampleEnglish:
      "I’m going to get some fresh air at Place des Vosges.",
    distractors: ["to take a plane", "to steal the wind", "to close a window"],
  },
];