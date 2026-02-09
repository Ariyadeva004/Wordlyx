import { Slot } from "./slots";
import { DICT } from "./dictionary";
import { Cell } from "./gridBuilder";
import { generateClue } from "./clueNLP";

export function fill(
  grid: Cell[][],
  slots: Slot[],
  difficulty: string
) {
  const answers: Record<number, string> = {};
  const clues: Record<number, string> = {};

  for (const s of slots) {
    const entries = DICT[s.l];
    if (!entries) throw new Error("Missing dictionary length");
    const entry = entries[Math.floor(Math.random() * entries.length)];
    answers[s.id] = entry.word;
    clues[s.id] = generateClue(entry, difficulty);

    for (let i = 0; i < s.l; i++) {
      const x = s.d === "a" ? s.x + i : s.x;
      const y = s.d === "d" ? s.y + i : s.y;
      grid[y][x] = entry.word[i];
    }
  }

  return { answers, clues };
}
