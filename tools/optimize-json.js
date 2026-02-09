import fs from "fs";
import path from "path";

function walk(dir) {
  for (const f of fs.readdirSync(dir)) {
    const p = path.join(dir, f);
    if (fs.statSync(p).isDirectory()) walk(p);
    else if (f.endsWith(".json")) {
      const data = JSON.parse(fs.readFileSync(p, "utf8"));
      fs.writeFileSync(p, JSON.stringify(data));
    }
  }
}
walk("dist");
