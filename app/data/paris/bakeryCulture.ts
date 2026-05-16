export type CultureLevel = "beginner" | "intermediate" | "advanced";
export type CultureSection = "section1" | "section2" | "section3";

export type CultureQuestion = {
  id: string;
  question: string;
  correctAnswer: string;
  distractors: string[];
};

export type CultureVocabItem = {
  french: string;
  english: string;
};

export type CultureReading = {
  id: string;
  level: CultureLevel;
  section: CultureSection;
  title: string;
  subtitle: string;
  frenchText: string;
  englishSupport?: string;
  vocab: CultureVocabItem[];
  questions: CultureQuestion[];
};

export const bakeryCultureReadings: CultureReading[] = [
  {
    id: "beginner-tradition-vs-baguette",
    level: "beginner",
    section: "section2",
    title: "Baguette or Tradition?",
    subtitle: "A simple bakery culture moment",
    frenchText: `Une baguette est un pain français très connu.

Une tradition est une baguette spéciale.

Elle est souvent plus croustillante.

Dans une boulangerie, on peut demander :
“Une baguette tradition, s’il vous plaît.”`,
    englishSupport:
      "A tradition is a special kind of baguette. It is often more artisanal and crispier than a regular baguette.",
    vocab: [
      { french: "une baguette", english: "a baguette" },
      { french: "une tradition", english: "a traditional-style baguette" },
      { french: "croustillante", english: "crispy" },
      { french: "une boulangerie", english: "a bakery" },
    ],
    questions: [
      {
        id: "beginner-q1",
        question: "What is une tradition?",
        correctAnswer: "a special kind of baguette",
        distractors: ["a chocolate pastry", "a coffee", "a payment method"],
      },
      {
        id: "beginner-q2",
        question: "How is une tradition often described?",
        correctAnswer: "crispy",
        distractors: ["cold", "sweet", "tiny"],
      },
    ],
  },
  {
    id: "intermediate-tradition-vs-baguette",
    level: "intermediate",
    section: "section2",
    title: "Pourquoi la tradition est spéciale",
    subtitle: "A B1 reading about ingredients and French bread law",
    frenchText: `La baguette de tradition française est devenue officielle avec le décret pain de 1993.

Avant cette période, beaucoup de boulangers utilisaient des méthodes plus industrielles.

Le décret a protégé une façon plus traditionnelle de faire le pain.

Une tradition doit être faite avec des ingrédients simples : de la farine, de l’eau, du sel, de la levure ou du levain.

Elle ne doit pas contenir certains additifs.

C’est pour cela que beaucoup de Français pensent qu’une tradition a plus de goût qu’une baguette classique.`,
    englishSupport:
      "This text explains that the baguette de tradition française was protected by a 1993 bread decree. It uses simple ingredients and avoids certain additives.",
    vocab: [
      { french: "le décret", english: "decree / regulation" },
      { french: "la farine", english: "flour" },
      { french: "le levain", english: "sourdough starter" },
      { french: "les additifs", english: "additives" },
      { french: "avoir plus de goût", english: "to have more flavor" },
    ],
    questions: [
      {
        id: "intermediate-q1",
        question: "What did the 1993 decree protect?",
        correctAnswer: "a more traditional way of making bread",
        distractors: ["coffee prices", "museum tickets", "metro rules"],
      },
      {
        id: "intermediate-q2",
        question: "Which ingredient can be used in une tradition?",
        correctAnswer: "levain",
        distractors: ["chocolate", "buttercream", "rice"],
      },
    ],
  },
  {
    id: "advanced-tradition-vs-baguette",
    level: "advanced",
    section: "section2",
    title: "La baguette de tradition française",
    subtitle: "Authentic-style French reading",
    frenchText: `La baguette de tradition française occupe une place particulière dans l’imaginaire gastronomique français.

Encadrée par le décret pain de 1993, elle se distingue de la baguette ordinaire par la simplicité de sa composition et par l’exclusion de nombreux additifs.

Elle doit être fabriquée à partir d’un mélange de farine de blé, d’eau potable, de sel, de levure ou de levain.

Au-delà de la réglementation, la tradition est aussi perçue comme le symbole d’un savoir-faire artisanal.

Sa croûte, souvent plus marquée, sa mie plus alvéolée et son goût plus développé en font un produit que de nombreux clients associent à une boulangerie de qualité.`,
    englishSupport:
      "Advanced reading: this discusses the baguette de tradition as both a regulated product and a symbol of French artisanal skill.",
    vocab: [
      { french: "l’imaginaire gastronomique", english: "culinary imagination" },
      { french: "encadrée par", english: "regulated by" },
      { french: "la mie alvéolée", english: "open, airy crumb" },
      { french: "le savoir-faire artisanal", english: "artisanal know-how" },
      { french: "se distinguer de", english: "to differ from" },
    ],
    questions: [
      {
        id: "advanced-q1",
        question: "What distinguishes une tradition from an ordinary baguette?",
        correctAnswer: "its regulated composition and fewer additives",
        distractors: ["its chocolate filling", "its round shape", "its low price only"],
      },
      {
        id: "advanced-q2",
        question: "What does the text associate tradition with culturally?",
        correctAnswer: "artisanal know-how",
        distractors: ["fast food", "train stations", "tourist souvenirs"],
      },
    ],
  },
];