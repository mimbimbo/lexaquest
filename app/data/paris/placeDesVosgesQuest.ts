export type VosgesQuestLevel = "beginner" | "intermediate" | "advanced";

export type VosgesDialogueChoice = {
  text: string;
  correct?: boolean;
  nextId?: string;
  feedback?: string;
  xp?: number;
};

export type VosgesDialogueNode = {
  id: string;
  speaker: string;
  french: string;
  english?: string;
  choices: VosgesDialogueChoice[];
};

export type PlaceDesVosgesQuest = {
  id: string;
  locationName: string;
  title: string;
  level: VosgesQuestLevel;
  startNodeId: string;
  successBadge: string;
  nodes: VosgesDialogueNode[];
};

export const vosgesBeginnerQuest: PlaceDesVosgesQuest = {
  id: "vosges-beginner",
  locationName: "Place des Vosges",
  title: "Ask for Directions",
  level: "beginner",
  startNodeId: "start",
  successBadge: "🧭 Marais Navigator",
  nodes: [
    {
      id: "start",
      speaker: "Un passant",
      french: "Bonjour ! Vous cherchez quelque chose ?",
      english: "Hello! Are you looking for something?",
      choices: [
        {
          text: "Oui, je cherche la place des Vosges.",
          correct: true,
          nextId: "directions",
          feedback: "Good. “Je cherche…” means “I’m looking for…”",
          xp: 10,
        },
        {
          text: "Oui, je suis la place des Vosges.",
          correct: false,
          nextId: "start",
          feedback:
            "Close-looking but wrong. “Je suis” means “I am.” Use “je cherche” for “I’m looking for.”",
          xp: 0,
        },
        {
          text: "Oui, j’ai la place des Vosges.",
          correct: false,
          nextId: "start",
          feedback:
            "Not quite. “J’ai” means “I have.” You want “je cherche.”",
          xp: 0,
        },
      ],
    },
    {
      id: "directions",
      speaker: "Un passant",
      french:
        "Bien sûr. Allez tout droit, puis tournez à droite sous les arcades.",
      english:
        "Of course. Go straight ahead, then turn right under the arcades.",
      choices: [
        {
          text: "D’accord, tout droit puis à droite. Merci beaucoup !",
          correct: true,
          nextId: "arrival",
          feedback:
            "Excellent. You repeated the directions and thanked politely.",
          xp: 15,
        },
        {
          text: "D’accord, à gauche puis tout droit. Merci beaucoup !",
          correct: false,
          nextId: "directions",
          feedback:
            "Careful: they said tout droit, then à droite — straight ahead, then right.",
          xp: 0,
        },
        {
          text: "D’accord, combien ça coûte ?",
          correct: false,
          nextId: "directions",
          feedback:
            "That asks “How much does it cost?” Good bakery phrase, wrong context.",
          xp: 0,
        },
      ],
    },
    {
      id: "arrival",
      speaker: "Un passant",
      french: "Vous allez voir, c’est très beau et assez calme.",
      english: "You’ll see, it’s very beautiful and pretty peaceful.",
      choices: [
        {
          text: "Parfait, j’aime les endroits calmes.",
          correct: true,
          nextId: "success",
          feedback: "Natural response. “Les endroits calmes” = peaceful places.",
          xp: 15,
        },
        {
          text: "Parfait, je paie par carte.",
          correct: false,
          nextId: "arrival",
          feedback:
            "That means “I’m paying by card.” You’re not buying anything here.",
          xp: 0,
        },
      ],
    },
    {
      id: "success",
      speaker: "Un passant",
      french: "Bonne visite !",
      english: "Enjoy your visit!",
      choices: [],
    },
  ],
};

export const vosgesIntermediateQuest: PlaceDesVosgesQuest = {
  id: "vosges-intermediate",
  locationName: "Place des Vosges",
  title: "Describe the Square",
  level: "intermediate",
  startNodeId: "start",
  successBadge: "🏛️ Marais Observer",
  nodes: [
    {
      id: "start",
      speaker: "Une Parisienne",
      french:
        "Alors, première impression ? Vous trouvez la place comment ?",
      english: "So, first impression? What do you think of the square?",
      choices: [
        {
          text: "Je la trouve très élégante, surtout avec les arcades.",
          correct: true,
          nextId: "architecture",
          feedback:
            "Excellent. “Je la trouve…” is a natural way to express an opinion.",
          xp: 15,
        },
        {
          text: "Je le trouve très élégante, surtout avec les arcades.",
          correct: false,
          nextId: "start",
          feedback:
            "Very close. “La place” is feminine, so use “je la trouve.”",
          xp: 0,
        },
        {
          text: "Je cherche très élégante, surtout avec les arcades.",
          correct: false,
          nextId: "start",
          feedback:
            "“Je cherche” means “I’m looking for.” For opinions, use “je trouve.”",
          xp: 0,
        },
      ],
    },
    {
      id: "architecture",
      speaker: "Une Parisienne",
      french:
        "Oui, les façades, les briques rouges, la pierre claire… tout est très régulier.",
      english:
        "Yes, the façades, the red bricks, the light stone… everything is very regular.",
      choices: [
        {
          text: "Cette symétrie donne une vraie harmonie à la place.",
          correct: true,
          nextId: "hugo",
          feedback:
            "Strong intermediate answer. You connected symmetry with harmony.",
          xp: 20,
        },
        {
          text: "Cette symétrie donne une vraie boulangerie à la place.",
          correct: false,
          nextId: "architecture",
          feedback:
            "Funny, but wrong. “Boulangerie” is bakery. You want “harmonie.”",
          xp: 0,
        },
        {
          text: "Cette symétrie coûte combien ?",
          correct: false,
          nextId: "architecture",
          feedback:
            "That asks how much symmetry costs. Try describing the effect.",
          xp: 0,
        },
      ],
    },
    {
      id: "hugo",
      speaker: "Une Parisienne",
      french:
        "Et là-bas, sous les arcades, il y a la maison de Victor Hugo.",
      english:
        "And over there, under the arcades, there is Victor Hugo’s house.",
      choices: [
        {
          text: "Ah oui, je savais qu’il avait habité ici.",
          correct: true,
          nextId: "success",
          feedback:
            "Excellent. “Il avait habité ici” refers naturally to the past.",
          xp: 20,
        },
        {
          text: "Ah oui, je savais qu’il avait acheté un croissant ici.",
          correct: false,
          nextId: "hugo",
          feedback:
            "That’s grammatically plausible but contextually silly. Victor Hugo lived here.",
          xp: 0,
        },
        {
          text: "Ah oui, je savais qu’il est une maison ici.",
          correct: false,
          nextId: "hugo",
          feedback:
            "Wrong structure. Use “il avait habité ici” or “sa maison est ici.”",
          xp: 0,
        },
      ],
    },
    {
      id: "success",
      speaker: "Une Parisienne",
      french:
        "Vous observez bien. Beaucoup de visiteurs passent sans vraiment regarder.",
      english:
        "You observe well. Many visitors pass through without really looking.",
      choices: [],
    },
  ],
};

export const vosgesAdvancedQuest: PlaceDesVosgesQuest = {
  id: "vosges-advanced",
  locationName: "Place des Vosges",
  title: "A Parisian Conversation",
  level: "advanced",
  startNodeId: "start",
  successBadge: "📚 Parisian Historian",
  nodes: [
    {
      id: "start",
      speaker: "Un habitué du quartier",
      french:
        "Ce qui me fascine ici, c’est que la place est à la fois très composée et très vivante.",
      english:
        "What fascinates me here is that the square is both highly composed and very alive.",
      choices: [
        {
          text:
            "Oui, l’ordonnancement est presque théâtral, mais l’usage quotidien le rend vivant.",
          correct: true,
          nextId: "power",
          feedback:
            "Excellent advanced response. You contrast formal design with daily use.",
          xp: 25,
        },
        {
          text:
            "Oui, l’ordonnancement est presque délicieux, mais la baguette le rend vivant.",
          correct: false,
          nextId: "start",
          feedback:
            "Grammatically interesting, but semantically off. This is architecture, not food.",
          xp: 0,
        },
        {
          text:
            "Oui, je cherche l’ordonnancement à gauche puis à droite.",
          correct: false,
          nextId: "start",
          feedback:
            "That mixes beginner directions with advanced vocabulary. Respond to the idea.",
          xp: 0,
        },
      ],
    },
    {
      id: "power",
      speaker: "Un habitué du quartier",
      french:
        "Exactement. L’architecture inscrit une idée du pouvoir royal dans l’espace urbain.",
      english:
        "Exactly. The architecture embeds an idea of royal power into urban space.",
      choices: [
        {
          text:
            "C’est intéressant : la beauté sert aussi à rendre le pouvoir visible.",
          correct: true,
          nextId: "memory",
          feedback:
            "Very strong. You interpreted the cultural meaning, not just the vocabulary.",
          xp: 30,
        },
        {
          text:
            "C’est intéressant : la beauté sert aussi à payer par carte.",
          correct: false,
          nextId: "power",
          feedback:
            "Wrong context. “Payer par carte” is transactional, not conceptual.",
          xp: 0,
        },
        {
          text:
            "C’est intéressant : le pouvoir royal est une fontaine.",
          correct: false,
          nextId: "power",
          feedback:
            "Poetic maybe, but not the intended meaning. Talk about visibility or urban space.",
          xp: 0,
        },
      ],
    },
    {
      id: "memory",
      speaker: "Un habitué du quartier",
      french:
        "Et aujourd’hui, entre patrimoine, tourisme et embourgeoisement, le lieu continue de changer.",
      english:
        "And today, between heritage, tourism, and gentrification, the place continues to change.",
      choices: [
        {
          text:
            "Oui, c’est justement cette tension entre mémoire et transformation qui rend le quartier fascinant.",
          correct: true,
          nextId: "success",
          feedback:
            "Excellent nuanced answer. This sounds like advanced cultural French.",
          xp: 35,
        },
        {
          text:
            "Oui, c’est justement cette tension entre croissant et transformation.",
          correct: false,
          nextId: "memory",
          feedback:
            "Again, bakery interference. Stay with memory, heritage, and transformation.",
          xp: 0,
        },
        {
          text:
            "Oui, le quartier est fermé aujourd’hui.",
          correct: false,
          nextId: "memory",
          feedback:
            "That means the neighborhood is closed today. Not a response to the idea.",
          xp: 0,
        },
      ],
    },
    {
      id: "success",
      speaker: "Un habitué du quartier",
      french:
        "Vous avez l’œil — et surtout, vous écoutez ce que les lieux racontent.",
      english:
        "You have a good eye — and more importantly, you listen to what places tell.",
      choices: [],
    },
  ],
};

export const placeDesVosgesQuests = {
  beginner: vosgesBeginnerQuest,
  intermediate: vosgesIntermediateQuest,
  advanced: vosgesAdvancedQuest,
};