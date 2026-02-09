import { Cell } from "./gridBuilder";

export interface Slot {
  id: number;
  d: "a" | "d";
  x: number;
  y: number;
  l: number;
}

export function extractSlots(grid: Cell[][]): Slot[] {
  const slots: Slot[] = [];
  let id = 1;
  const h = grid.length, w = grid[0].length;

  for (let y = 0; y < h; y++) {
    for (let x = 0; x < w; x++) {
      if (grid[y][x] !== "#" && (x === 0 || grid[y][x - 1] === "#")) {
        let len = 0;
        while (x + len < w && grid[y][x + len] !== "#") len++;
        if (len >= 3) slots.push({ id: id++, d: "a", x, y, l: len });
      }
    }
  }
  for (let x = 0; x < w; x++) {
    for (let y = 0; y < h; y++) {
      if (grid[y][x] !== "#" && (y === 0 || grid[y - 1][x] === "#")) {
        let len = 0;
        while (y + len < h && grid[y + len][x] !== "#") len++;
        if (len >= 3) slots.push({ id: id++, d: "d", x, y, l: len });
      }
    }
  }
  return slots;
}
