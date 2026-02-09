export function route() {
  const p = location.pathname.split("/");
  return { game: p[1] || "crossword" };
}
