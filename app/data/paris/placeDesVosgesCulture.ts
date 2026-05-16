import { CultureReading } from "./bakeryCulture";

export const placeDesVosgesCultureReadings: CultureReading[] = [
  {
    id: "vosges-beginner-what-is-it",
    level: "beginner",
    section: "section2",
    title: "What Is Place des Vosges?",
    subtitle: "A simple introduction",
    frenchText: `La place des Vosges est une grande place à Paris.

Elle est dans le Marais.

Il y a un jardin, des arbres, des bancs et des arcades.

C’est une place calme.

Beaucoup de personnes viennent ici pour marcher, lire ou se reposer.`,
    englishSupport:
      "Place des Vosges is a famous square in Le Marais. It has a garden, trees, benches, and covered arches. People go there to walk, read, or rest.",
    vocab: [
      { french: "une place", english: "a public square" },
      { french: "un jardin", english: "a garden" },
      { french: "un banc", english: "a bench" },
      { french: "se reposer", english: "to rest" },
    ],
    questions: [
      {
        id: "vosges-beginner-q1",
        question: "Where is Place des Vosges?",
        correctAnswer: "in Le Marais",
        distractors: ["in Montmartre", "inside the Louvre", "near the airport"],
      },
      {
        id: "vosges-beginner-q2",
        question: "What do people do there?",
        correctAnswer: "walk, read, or rest",
        distractors: ["buy train tickets", "order bread", "swim in the Seine"],
      },
    ],
  },

  {
    id: "vosges-intermediate-royal-square",
    level: "intermediate",
    section: "section2",
    title: "A Royal Square",
    subtitle: "A B1 reading about history and architecture",
    frenchText: `La place des Vosges est l’une des places les plus célèbres de Paris.

Elle a été créée au début du XVIIe siècle, sous le règne d’Henri IV.

À l’origine, elle s’appelait la place Royale.

Son architecture est très régulière : les bâtiments ont des façades semblables, avec des briques rouges, de la pierre claire et des arcades.

Aujourd’hui, la place est connue pour son calme, son jardin et la maison de Victor Hugo.

Cette combinaison d’histoire, d’architecture et de vie quotidienne donne à la place une atmosphère très particulière.`,
    englishSupport:
      "This text explains that Place des Vosges was originally called Place Royale and was created under Henri IV in the early 17th century. It is known for its regular architecture, red bricks, arcades, garden, and Victor Hugo’s former home.",
    vocab: [
      {
        french: "au début du XVIIe siècle",
        english: "at the beginning of the 17th century",
      },
      { french: "le règne", english: "reign" },
      { french: "la place Royale", english: "the Royal Square" },
      { french: "des façades semblables", english: "similar façades" },
      { french: "des briques rouges", english: "red bricks" },
      { french: "la vie quotidienne", english: "daily life" },
    ],
    questions: [
      {
        id: "vosges-intermediate-q1",
        question: "What was Place des Vosges originally called?",
        correctAnswer: "Place Royale",
        distractors: ["Place Vendôme", "Place Saint-Paul", "Place de la Bastille"],
      },
      {
        id: "vosges-intermediate-q2",
        question: "Which king is connected to its creation?",
        correctAnswer: "Henri IV",
        distractors: ["Louis XIV", "Napoleon", "François Ier"],
      },
      {
        id: "vosges-intermediate-q3",
        question: "What gives the square its particular atmosphere?",
        correctAnswer: "history, architecture, and daily life",
        distractors: ["traffic, shopping, and noise", "boats and bridges", "airports and hotels"],
      },
    ],
  },

  {
    id: "vosges-advanced-place-royale",
    level: "advanced",
    section: "section2",
    title: "La place Royale",
    subtitle: "Authentic-style French reading",
    frenchText: `Anciennement appelée place Royale, la place des Vosges constitue l’un des ensembles urbains les plus remarquables de Paris.

Conçue au début du XVIIe siècle sous Henri IV, elle marque une étape importante dans l’histoire de l’urbanisme parisien.

Son ordonnancement régulier, ses façades de brique et de pierre, ses pavillons symétriques et ses arcades traduisent une volonté politique autant qu’esthétique : inscrire le pouvoir royal dans l’espace urbain.

Au fil des siècles, la place a changé de fonction symbolique.

D’espace aristocratique, elle est devenue un lieu de promenade, de mémoire littéraire et de sociabilité parisienne.

La présence de la maison de Victor Hugo renforce encore cette dimension culturelle.

Aujourd’hui, la place des Vosges illustre aussi une tension typiquement parisienne : préserver le patrimoine tout en vivant dans un quartier qui continue de se transformer.`,
    englishSupport:
      "Advanced reading: this text presents Place des Vosges as an urban, political, architectural, literary, and social symbol. It also introduces the tension between heritage preservation and the changing life of the neighborhood.",
    vocab: [
      { french: "un ensemble urbain", english: "an urban ensemble" },
      { french: "l’ordonnancement régulier", english: "regular layout/order" },
      { french: "une volonté politique", english: "a political intention" },
      { french: "un espace aristocratique", english: "an aristocratic space" },
      { french: "la sociabilité parisienne", english: "Parisian social life" },
      { french: "préserver le patrimoine", english: "to preserve heritage" },
    ],
    questions: [
      {
        id: "vosges-advanced-q1",
        question: "What did the architecture express?",
        correctAnswer: "royal power in urban space",
        distractors: ["railway expansion", "industrial decline", "religious reform only"],
      },
      {
        id: "vosges-advanced-q2",
        question: "Which cultural figure is associated with the square?",
        correctAnswer: "Victor Hugo",
        distractors: ["Molière", "Balzac", "Zola"],
      },
      {
        id: "vosges-advanced-q3",
        question: "What modern tension does the text mention?",
        correctAnswer: "preserving heritage while the neighborhood changes",
        distractors: ["building airports inside Paris", "replacing gardens with factories", "closing all museums"],
      },
    ],
  },
];