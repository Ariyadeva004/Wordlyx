import { loadToday } from "../frontend-core/gameLoader";

loadToday("crossword","easy").then(p => {
  document.getElementById("app")!.innerText = JSON.stringify(p, null, 2);
});
