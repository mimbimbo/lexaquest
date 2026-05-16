export type CampaignDifficulty =
  | "beginner"
  | "intermediate"
  | "advanced";

export type CampaignSection =
  | "section1"
  | "section2"
  | "section3";

export type LessonType =
  | "vocab"
  | "typing"
  | "dialogue"
  | "culture";

export type CampaignLesson = {
  id: string;
  title: string;
  type: LessonType;
  description: string;
  xpReward: number;
  difficulty: CampaignDifficulty;
  section: CampaignSection;
};

export type Campaign = {
  id: string;
  title: string;
  description: string;
  lessons: CampaignLesson[];
};

export const bakeryCampaign: Campaign = {
  id: "bakery-campaign",

  title: "Le Marais Bakery Quest",

  description:
    "Learn how to survive a real Paris bakery with vocabulary, typing drills, cultural reading, and dialogue.",

  lessons: [
    // =========================
    // BEGINNER
    // =========================

    {
      id: "bakery-beginner-section1-vocab",
      title: "Bakery Basics",
      type: "vocab",
      description:
        "Learn essential bakery vocabulary like croissant and baguette.",
      xpReward: 20,
      difficulty: "beginner",
      section: "section1",
    },

    {
      id: "bakery-beginner-section1-typing",
      title: "Polite Ordering",
      type: "typing",
      description:
        "Practice typing key phrases like “Je voudrais…”",
      xpReward: 25,
      difficulty: "beginner",
      section: "section1",
    },

    {
      id: "bakery-beginner-section1-dialogue",
      title: "First Bakery Visit",
      type: "dialogue",
      description:
        "Order pastries and survive your first French bakery interaction.",
      xpReward: 50,
      difficulty: "beginner",
      section: "section1",
    },

    {
      id: "bakery-beginner-section2-vocab",
      title: "Bread and Pastries",
      type: "vocab",
      description:
        "Learn more specific bakery items and descriptive words.",
      xpReward: 25,
      difficulty: "beginner",
      section: "section2",
    },

    {
      id: "bakery-beginner-section2-culture",
      title: "Baguette or Tradition?",
      type: "culture",
      description:
        "Learn the difference between a baguette and a tradition.",
      xpReward: 30,
      difficulty: "beginner",
      section: "section2",
    },

    {
      id: "bakery-beginner-section2-typing",
      title: "Ordering Naturally",
      type: "typing",
      description:
        "Practice more natural bakery phrases and polite requests.",
      xpReward: 30,
      difficulty: "beginner",
      section: "section2",
    },

    {
      id: "bakery-beginner-section3-dialogue",
      title: "Morning Rush",
      type: "dialogue",
      description:
        "Handle a busy bakery interaction with confidence.",
      xpReward: 60,
      difficulty: "beginner",
      section: "section3",
    },

    // =========================
    // INTERMEDIATE
    // =========================

    {
      id: "bakery-intermediate-section1-vocab",
      title: "Advanced Bakery Vocabulary",
      type: "vocab",
      description:
        "Learn nuanced bakery and café vocabulary used by locals.",
      xpReward: 30,
      difficulty: "intermediate",
      section: "section1",
    },

    {
      id: "bakery-intermediate-section1-typing",
      title: "Natural French Responses",
      type: "typing",
      description:
        "Practice forming more natural French responses.",
      xpReward: 35,
      difficulty: "intermediate",
      section: "section1",
    },

    {
      id: "bakery-intermediate-section1-dialogue",
      title: "Custom Orders",
      type: "dialogue",
      description:
        "Navigate more flexible bakery conversations and requests.",
      xpReward: 70,
      difficulty: "intermediate",
      section: "section1",
    },

    {
      id: "bakery-intermediate-section2-vocab",
      title: "Bread Culture",
      type: "vocab",
      description:
        "Learn vocabulary related to French bread traditions.",
      xpReward: 35,
      difficulty: "intermediate",
      section: "section2",
    },

    {
      id: "bakery-intermediate-section2-culture",
      title: "Why Tradition Matters",
      type: "culture",
      description:
        "Read about the 1993 bread decree and why tradition became special.",
      xpReward: 40,
      difficulty: "intermediate",
      section: "section2",
    },

    {
      id: "bakery-intermediate-section2-typing",
      title: "Bakery Conversations",
      type: "typing",
      description:
        "Practice intermediate-level bakery interactions.",
      xpReward: 40,
      difficulty: "intermediate",
      section: "section2",
    },

    {
      id: "bakery-intermediate-section3-dialogue",
      title: "Neighborhood Regular",
      type: "dialogue",
      description:
        "Handle more realistic conversations with the boulanger.",
      xpReward: 80,
      difficulty: "intermediate",
      section: "section3",
    },

    // =========================
    // ADVANCED
    // =========================

    {
      id: "bakery-advanced-section1-vocab",
      title: "Artisanal French",
      type: "vocab",
      description:
        "Master nuanced vocabulary used in high-quality boulangeries.",
      xpReward: 40,
      difficulty: "advanced",
      section: "section1",
    },

    {
      id: "bakery-advanced-section1-typing",
      title: "Fast-Paced French",
      type: "typing",
      description:
        "Respond quickly and naturally to realistic bakery interactions.",
      xpReward: 45,
      difficulty: "advanced",
      section: "section1",
    },

    {
      id: "bakery-advanced-section1-dialogue",
      title: "The Difficult Customer",
      type: "dialogue",
      description:
        "Handle nuanced social interactions and subtle French expectations.",
      xpReward: 90,
      difficulty: "advanced",
      section: "section1",
    },

    {
      id: "bakery-advanced-section2-vocab",
      title: "Gastronomy Vocabulary",
      type: "vocab",
      description:
        "Learn sophisticated French food and bread terminology.",
      xpReward: 45,
      difficulty: "advanced",
      section: "section2",
    },

    {
      id: "bakery-advanced-section2-culture",
      title: "La baguette de tradition française",
      type: "culture",
      description:
        "Read an authentic-style French text about tradition, regulation, and savoir-faire.",
      xpReward: 50,
      difficulty: "advanced",
      section: "section2",
    },

    {
      id: "bakery-advanced-section2-typing",
      title: "Nuanced French Expression",
      type: "typing",
      description:
        "Practice nuanced grammar and expression under pressure.",
      xpReward: 50,
      difficulty: "advanced",
      section: "section2",
    },

    {
      id: "bakery-advanced-section3-dialogue",
      title: "Parisian Fluency",
      type: "dialogue",
      description:
        "Navigate authentic Parisian bakery interactions with confidence.",
      xpReward: 100,
      difficulty: "advanced",
      section: "section3",
    },
  ],
};