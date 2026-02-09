import { DictEntry } from "./dictionary";

const templates = {
  easy: (e: DictEntry) => e.meaning,
  medium: (e: DictEntry) =>
    `${e.meaning} (${e.pos})`,
  hard: (e: DictEntry) =>
    `Synonym of ${e.synonyms[0]}`
};

export function generateClue(entry: DictEntry, difficulty: string): string {
  const fn = (templates as any)[difficulty] || templates.easy;
  return fn(entry);
}
