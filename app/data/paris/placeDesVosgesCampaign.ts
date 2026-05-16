import {
  CampaignDifficulty,
  CampaignSection,
  LessonType,
} from "./bakeryCampaign";

export type PlaceDesVosgesLesson = {
  id: string;
  title: string;
  type: LessonType;
  description: string;
  xpReward: number;
  difficulty: CampaignDifficulty;
  section: CampaignSection;
};

export const placeDesVosgesCampaign = {
  id: "place-des-vosges-campaign",

  title: "The Secret of Place des Vosges",

  description:
    "Learn directions, architecture, history, and social French while exploring one of the most iconic squares in Le Marais.",

  lessons: [
    {
      id: "vosges-beginner-section1-vocab",
      title: "Finding the Square",
      type: "vocab",
      description: "Learn directions, entrances, and basic landmark words.",
      xpReward: 20,
      difficulty: "beginner",
      section: "section1",
    },
    {
      id: "vosges-beginner-section1-typing",
      title: "Where Is It?",
      type: "typing",
      description: "Practice asking where something is and following simple directions.",
      xpReward: 25,
      difficulty: "beginner",
      section: "section1",
    },
    {
      id: "vosges-beginner-section2-vocab",
      title: "What You See",
      type: "vocab",
      description: "Learn words for gardens, fountains, benches, and arcades.",
      xpReward: 25,
      difficulty: "beginner",
      section: "section2",
    },
    {
      id: "vosges-beginner-section2-culture",
      title: "What Is Place des Vosges?",
      type: "culture",
      description: "Read a simple explanation of the famous square.",
      xpReward: 30,
      difficulty: "beginner",
      section: "section2",
    },
    {
      id: "vosges-beginner-section3-typing",
      title: "Simple Observations",
      type: "typing",
      description: "Practice saying what you see and what you like.",
      xpReward: 30,
      difficulty: "beginner",
      section: "section3",
    },
    {
      id: "vosges-beginner-section3-dialogue",
      title: "Ask for Directions",
      type: "dialogue",
      description: "Ask someone how to find the square and respond politely.",
      xpReward: 50,
      difficulty: "beginner",
      section: "section3",
    },

    {
      id: "vosges-intermediate-section1-vocab",
      title: "Architecture and Space",
      type: "vocab",
      description: "Learn words for arcades, façades, symmetry, and the garden.",
      xpReward: 35,
      difficulty: "intermediate",
      section: "section1",
    },
    {
      id: "vosges-intermediate-section1-typing",
      title: "Describe the Square",
      type: "typing",
      description: "Practice describing architecture and atmosphere.",
      xpReward: 40,
      difficulty: "intermediate",
      section: "section1",
    },
    {
      id: "vosges-intermediate-section2-culture",
      title: "A Royal Square",
      type: "culture",
      description: "Read about the history and design of Place des Vosges.",
      xpReward: 45,
      difficulty: "intermediate",
      section: "section2",
    },
    {
      id: "vosges-intermediate-section2-vocab",
      title: "Victor Hugo and the Marais",
      type: "vocab",
      description: "Learn history, literature, and neighborhood vocabulary.",
      xpReward: 35,
      difficulty: "intermediate",
      section: "section2",
    },
    {
      id: "vosges-intermediate-section3-typing",
      title: "Give Your Opinion",
      type: "typing",
      description: "Practice expressing opinions about a place naturally.",
      xpReward: 45,
      difficulty: "intermediate",
      section: "section3",
    },
    {
      id: "vosges-intermediate-section3-dialogue",
      title: "Describe the Square",
      type: "dialogue",
      description: "Talk about what you see and give your opinion.",
      xpReward: 70,
      difficulty: "intermediate",
      section: "section3",
    },

    {
      id: "vosges-advanced-section1-vocab",
      title: "Urban Paris",
      type: "vocab",
      description: "Learn sophisticated vocabulary about urban life and heritage.",
      xpReward: 45,
      difficulty: "advanced",
      section: "section1",
    },
    {
      id: "vosges-advanced-section1-typing",
      title: "Urban Planning",
      type: "typing",
      description: "Practice advanced structures about Parisian urban space.",
      xpReward: 55,
      difficulty: "advanced",
      section: "section1",
    },
    {
      id: "vosges-advanced-section2-culture",
      title: "La place Royale",
      type: "culture",
      description:
        "Read an authentic-style French text about monarchy, architecture, and Parisian memory.",
      xpReward: 60,
      difficulty: "advanced",
      section: "section2",
    },
    {
      id: "vosges-advanced-section2-vocab",
      title: "Memory and Power",
      type: "vocab",
      description: "Learn vocabulary about monarchy, symbolism, and urban memory.",
      xpReward: 50,
      difficulty: "advanced",
      section: "section2",
    },
    {
      id: "vosges-advanced-section3-typing",
      title: "Nuanced Opinion",
      type: "typing",
      description: "Practice giving a sophisticated opinion about beauty and history.",
      xpReward: 60,
      difficulty: "advanced",
      section: "section3",
    },
    {
      id: "vosges-advanced-section3-dialogue",
      title: "A Parisian Conversation",
      type: "dialogue",
      description:
        "Join a nuanced conversation about beauty, history, and city life.",
      xpReward: 100,
      difficulty: "advanced",
      section: "section3",
    },
  ] satisfies PlaceDesVosgesLesson[],
};