import fs from "fs";
import { crosswordGame } from "../games/crossword/generator/generate";

function dates(start: string, days: number) {
  const out: string[] = [];
  const d = new Date(start);
  for (let i = 0; i < days; i++) {
    out.push(d.toISOString().slice(0, 10));
    d.setDate(d.getDate() + 1);
  }
  return out;
}

for (const date of dates("2026-01-01", 365)) {
  for (const diff of crosswordGame.difficulties) {
    const puzzle = crosswordGame.generate(date, diff);
    const dir = `dist/crossword/${date.replace(/-/g,"/")}`;
    fs.mkdirSync(dir, { recursive: true });
    fs.writeFileSync(`${dir}/${diff}.json`, JSON.stringify(puzzle));
  }
}
