import { buildGrid } from "./gridBuilder";
import { extractSlots } from "./slots";
import { fill } from "./fillEngine";

export const crosswordGame = {
  id: "crossword",
  difficulties: ["easy","medium","hard"],

  generate(seed: string, difficulty: string) {
    const grid = buildGrid();
    const slots = extractSlots(grid);
    const { answers, clues } = fill(grid, slots, difficulty);

    return {
      g: grid,
      s: slots.map(o => [o.id, o.d, o.x, o.y, o.l]),
      a: answers,
      c: clues,
      d: difficulty
    };
  },

  validate(p: any) {
    return Array.isArray(p.g) && p.s.length > 0;
  }
};
