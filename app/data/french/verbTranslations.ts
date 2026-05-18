export type VerbEntry = {
  infinitive: string;
  english: string;
};

export const essential55VerbEntries: VerbEntry[] = [
  { infinitive: "neiger", english: "to snow" },
  { infinitive: "arriver", english: "to return / to leave / to arrive" },
  { infinitive: "sortir", english: "to enter / to go back in / to go out" },
  { infinitive: "tomber", english: "to go up / to go down / to fall" },
  { infinitive: "mourir", english: "to be born / to die" },
  { infinitive: "venir-devenir-revenir", english: "to go / to come + some verbs based on venir" },
  { infinitive: "rester", english: "to pass or to go by / to stay" },
  { infinitive: "avoir", english: "to have" },
  { infinitive: "être", english: "to be" },
  { infinitive: "believing", english: "to see is to believe" },
  { infinitive: "attend", english: "to be present at" },
  { infinitive: "please", english: "to be pleasing to" },
  { infinitive: "suit", english: "to be suitable to" },
  { infinitive: "dream", english: "to think" },
  { infinitive: "obliged", english: "to do something" },
  { infinitive: "around", english: "to doing something" },
  { infinitive: "after", english: "to resemble" },
  { infinitive: "croire", english: "to believe" },
  { infinitive: "qqn", english: "to teach someone" },
  { infinitive: "quarrel", english: "to scratch each other’s eyes out" },
  { infinitive: "something", english: "to surprise" },
  { infinitive: "floor", english: "to speak" },
  { infinitive: "coûter", english: "to cost" },
  { infinitive: "pendre", english: "to hang" },
  { infinitive: "destroy", english: "to do away with" },
  { infinitive: "ask", english: "to pose" },
  { infinitive: "up", english: "to recover" },
  { infinitive: "rent", english: "to let" },
  { infinitive: "re", english: "to lend" },
  { infinitive: "mépriser", english: "to despise, to scorn" },
  { infinitive: "offer", english: "to present" },
  { infinitive: "répartir", english: "to divide up, share" },
  { infinitive: "permit", english: "to allow" },
  { infinitive: "her", english: "to him" },
  { infinitive: "emprunter", english: "to borrow" },
  { infinitive: "at", english: "to watch" },
  { infinitive: "regret", english: "to be sorry for" },
  { infinitive: "liberate", english: "to free from" },
  { infinitive: "oneself", english: "to food and drink" },
  { infinitive: "assortir", english: "to match" },
  { infinitive: "work", english: "to earn interest" },
];

export const beginnerVerbPool =
  essential55VerbEntries.map(
    (verb) => verb.infinitive
  );

export const barrons501VerbEntries: VerbEntry[] = [
  { infinitive: "neiger", english: "to snow" },
  { infinitive: "arriver", english: "to return / to leave / to arrive" },
  { infinitive: "sortir", english: "to enter / to go back in / to go out" },
  { infinitive: "tomber", english: "to go up / to go down / to fall" },
  { infinitive: "mourir", english: "to be born / to die" },
  { infinitive: "venir-devenir-revenir", english: "to go / to come + some verbs based on venir" },
  { infinitive: "rester", english: "to pass or to go by / to stay" },
  { infinitive: "avoir", english: "to have" },
  { infinitive: "être", english: "to be" },
  { infinitive: "believing", english: "to see is to believe" },
  { infinitive: "attend", english: "to be present at" },
  { infinitive: "please", english: "to be pleasing to" },
  { infinitive: "suit", english: "to be suitable to" },
  { infinitive: "dream", english: "to think" },
  { infinitive: "obliged", english: "to do something" },
  { infinitive: "around", english: "to doing something" },
  { infinitive: "after", english: "to resemble" },
  { infinitive: "croire", english: "to believe" },
  { infinitive: "qqn", english: "to teach someone" },
  { infinitive: "quarrel", english: "to scratch each other’s eyes out" },
  { infinitive: "something", english: "to surprise" },
  { infinitive: "floor", english: "to speak" },
  { infinitive: "coûter", english: "to cost" },
  { infinitive: "pendre", english: "to hang" },
  { infinitive: "destroy", english: "to do away with" },
  { infinitive: "ask", english: "to pose" },
  { infinitive: "up", english: "to recover" },
  { infinitive: "rent", english: "to let" },
  { infinitive: "re", english: "to lend" },
  { infinitive: "mépriser", english: "to despise, to scorn" },
  { infinitive: "offer", english: "to present" },
  { infinitive: "répartir", english: "to divide up, share" },
  { infinitive: "permit", english: "to allow" },
  { infinitive: "her", english: "to him" },
  { infinitive: "emprunter", english: "to borrow" },
  { infinitive: "at", english: "to watch" },
  { infinitive: "regret", english: "to be sorry for" },
  { infinitive: "liberate", english: "to free from" },
  { infinitive: "oneself", english: "to food and drink" },
  { infinitive: "assortir", english: "to match" },
  { infinitive: "work", english: "to earn interest" },
];

export const intermediateVerbEntries =
  barrons501VerbEntries.slice(55);

export const intermediateVerbPool =
  intermediateVerbEntries.map(
    (verb) => verb.infinitive
  );
