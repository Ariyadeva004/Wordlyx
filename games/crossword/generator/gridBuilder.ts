export type Cell = string | "#";

export function buildGrid(size = 15): Cell[][] {
  const grid = Array.from({ length: size }, () => Array(size).fill(""));
  for (let y = 0; y < size; y++) {
    for (let x = 0; x < size; x++) {
      if ((x + y) % 6 === 0) {
        grid[y][x] = "#";
        grid[size - 1 - y][size - 1 - x] = "#";
      }
    }
  }
  for (let y = 0; y < size; y++) {
    let run = 0;
    for (let x = 0; x <= size; x++) {
      if (x < size && grid[y][x] !== "#") run++;
      else {
        if (run > 0 && run < 3) {
          for (let k = x - run; k < x; k++) grid[y][k] = "#";
        }
        run = 0;
      }
    }
  }
  return grid;
}
