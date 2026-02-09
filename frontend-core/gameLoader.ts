export async function loadToday(game: string, difficulty = "easy") {
  const d = new Date().toISOString().slice(0,10).replace(/-/g,"/");
  const res = await fetch(`/dist/${game}/${d}/${difficulty}.json`);
  return res.json();
}
