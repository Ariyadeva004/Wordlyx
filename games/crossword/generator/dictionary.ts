export interface DictEntry {
  word: string;
  pos: string;
  meaning: string;
  synonyms: string[];
}

export const DICT: Record<number, DictEntry[]> = {
  3: [
    { word: "CAT", pos: "noun", meaning: "small domesticated feline", synonyms: ["pet","feline"] },
    { word: "SUN", pos: "noun", meaning: "star at the center of the solar system", synonyms: ["star","daystar"] }
  ],
  4: [
    { word: "MOON", pos: "noun", meaning: "natural satellite of Earth", synonyms: ["satellite"] },
    { word: "STAR", pos: "noun", meaning: "luminous celestial body", synonyms: ["sun"] }
  ],
  5: [
    { word: "APPLE", pos: "noun", meaning: "round edible fruit", synonyms: ["fruit"] },
    { word: "HOUSE", pos: "noun", meaning: "building for human habitation", synonyms: ["home"] }
  ],
  6: [
    { word: "ORANGE", pos: "noun", meaning: "citrus fruit", synonyms: ["fruit"] },
    { word: "MARKET", pos: "noun", meaning: "place where goods are sold", synonyms: ["bazaar","shop"] }
  ],
  7: [
    { word: "WEATHER", pos: "noun", meaning: "state of the atmosphere", synonyms: ["climate"] }
  ],
  8: [
    { word: "LANGUAGE", pos: "noun", meaning: "system of communication", synonyms: ["speech","tongue"] }
  ]
};
