export type QuestLevel = "beginner" | "intermediate" | "advanced";

export type DialogueChoice = {
  text: string;
  correct?: boolean;
  nextId?: string;
  feedback?: string;
  xp?: number;
};

export type DialogueNode = {
  id: string;
  speaker: string;
  french: string;
  english?: string;
  choices: DialogueChoice[];
};

export type Quest = {
  id: string;
  locationName: string;
  title: string;
  level: QuestLevel;
  startNodeId: string;
  successBadge: string;
  nodes: DialogueNode[];
};

export const bakeryBeginnerQuest: Quest = {
  id: "bakery-beginner",
  locationName: "Boulangerie",
  title: "Buy a Croissant",
  level: "beginner",
  startNodeId: "start",
  successBadge: "🥖 Bakery Visitor",
  nodes: [
    {
      id: "start",
      speaker: "La boulangère",
      french: "Bonjour ! Qu’est-ce que vous voulez ?",
      english: "Hello! What would you like?",
      choices: [
        {
          text: "Je voudrais un croissant.",
          correct: true,
          nextId: "quantity",
          feedback: "Perfect. “Je voudrais…” means “I would like…”",
          xp: 10,
        },
        {
          text: "Où est le musée ?",
          correct: false,
          nextId: "start",
          feedback: "That asks where the museum is. Try ordering something.",
          xp: 0,
        },
      ],
    },
    {
      id: "quantity",
      speaker: "La boulangère",
      french: "Bien sûr. Vous en voulez combien ?",
      english: "Of course. How many would you like?",
      choices: [
        {
          text: "Un, s’il vous plaît.",
          correct: true,
          nextId: "pay",
          feedback: "Good. Quantity + politeness.",
          xp: 10,
        },
        {
          text: "Je suis américain.",
          correct: false,
          nextId: "quantity",
          feedback: "That means “I am American.” Try giving a number.",
          xp: 0,
        },
      ],
    },
    {
      id: "pay",
      speaker: "La boulangère",
      french: "Ça fait deux euros.",
      english: "That comes to two euros.",
      choices: [
        {
          text: "Voilà. Merci !",
          correct: true,
          nextId: "success",
          feedback: "Great. You paid and thanked her.",
          xp: 15,
        },
        {
          text: "Je voudrais dormir.",
          correct: false,
          nextId: "pay",
          feedback: "That means “I would like to sleep.” Wrong situation.",
          xp: 0,
        },
      ],
    },
    {
      id: "success",
      speaker: "La boulangère",
      french: "Merci, bonne journée !",
      english: "Thank you, have a nice day!",
      choices: [],
    },
  ],
};

export const bakeryIntermediateQuest: Quest = {
  id: "bakery-intermediate",
  locationName: "Boulangerie",
  title: "Order Like a Local",
  level: "intermediate",
  startNodeId: "start",
  successBadge: "🥐 Bakery Regular",
  nodes: [
    {
      id: "start",
      speaker: "La boulangère",
      french: "Bonjour monsieur, vous avez choisi ?",
      english: "Hello sir, have you decided?",
      choices: [
        {
          text: "Oui, je vais prendre une baguette tradition et deux croissants.",
          correct: true,
          nextId: "ask_more",
          feedback: "Excellent. “Je vais prendre…” is natural in shops.",
          xp: 15,
        },
        {
          text: "Oui, je prends le métro.",
          correct: false,
          nextId: "start",
          feedback: "That means “I’m taking the metro.” Try ordering food.",
          xp: 0,
        },
      ],
    },
    {
      id: "ask_more",
      speaker: "La boulangère",
      french: "Très bien. Avec ceci ?",
      english: "Very good. Anything else?",
      choices: [
        {
          text: "Ce sera tout, merci.",
          correct: true,
          nextId: "price",
          feedback: "Perfect. This means “That will be all, thanks.”",
          xp: 15,
        },
        {
          text: "Je ne suis pas ici.",
          correct: false,
          nextId: "ask_more",
          feedback: "That means “I am not here.” Try saying you’re done.",
          xp: 0,
        },
      ],
    },
    {
      id: "price",
      speaker: "La boulangère",
      french: "Ça vous fera cinq euros cinquante.",
      english: "That will be five euros fifty.",
      choices: [
        {
          text: "Je paie par carte, c’est possible ?",
          correct: true,
          nextId: "success",
          feedback: "Great practical phrase: “Can I pay by card?”",
          xp: 20,
        },
        {
          text: "Je suis en retard pour le musée.",
          correct: false,
          nextId: "price",
          feedback: "Understandable sentence, but not useful for payment.",
          xp: 0,
        },
      ],
    },
    {
      id: "success",
      speaker: "La boulangère",
      french: "Bien sûr. Bonne journée !",
      english: "Of course. Have a nice day!",
      choices: [],
    },
  ],
};

export const bakeryAdvancedQuest: Quest = {
  id: "bakery-advanced",
  locationName: "Boulangerie",
  title: "Handle a Realistic Problem",
  level: "advanced",
  startNodeId: "start",
  successBadge: "🥖 Local Bakery Pro",
  nodes: [
    {
      id: "start",
      speaker: "La boulangère",
      french: "Bonjour. Je vous écoute.",
      english: "Hello. I’m listening.",
      choices: [
        {
          text: "Bonjour, est-ce qu’il vous reste des pains au chocolat ?",
          correct: true,
          nextId: "sold_out",
          feedback: "Very natural. “Il vous reste…” asks if they have any left.",
          xp: 20,
        },
        {
          text: "Bonjour, je suis resté dans le chocolat.",
          correct: false,
          nextId: "start",
          feedback: "That sounds like “I stayed in the chocolate.” Try asking if any are left.",
          xp: 0,
        },
      ],
    },
    {
      id: "sold_out",
      speaker: "La boulangère",
      french: "Ah non, désolée, il n’en reste plus. Il y a des chaussons aux pommes.",
      english: "Oh no, sorry, there are none left. There are apple turnovers.",
      choices: [
        {
          text: "D’accord, je vais en prendre deux alors.",
          correct: true,
          nextId: "bag",
          feedback: "Excellent. “En” replaces “chaussons aux pommes.”",
          xp: 25,
        },
        {
          text: "D’accord, je vais prendre deux pommes dans mes chaussures.",
          correct: false,
          nextId: "sold_out",
          feedback: "Funny, but wrong. “Chaussons aux pommes” are pastries.",
          xp: 0,
        },
      ],
    },
    {
      id: "bag",
      speaker: "La boulangère",
      french: "Vous voulez un sac ?",
      english: "Would you like a bag?",
      choices: [
        {
          text: "Non merci, ça ira comme ça.",
          correct: true,
          nextId: "success",
          feedback: "Very natural. “Ça ira comme ça” means “That’ll be fine like that.”",
          xp: 25,
        },
        {
          text: "Non merci, je vais à pied.",
          correct: false,
          nextId: "bag",
          feedback: "That means “I’m walking.” It doesn’t answer the bag question well.",
          xp: 0,
        },
      ],
    },
    {
      id: "success",
      speaker: "La boulangère",
      french: "Parfait. Bonne journée !",
      english: "Perfect. Have a nice day!",
      choices: [],
    },
  ],
};

export const bakeryQuests = {
  beginner: bakeryBeginnerQuest,
  intermediate: bakeryIntermediateQuest,
  advanced: bakeryAdvancedQuest,
};