// Nach dem Build: absolute Asset-Pfade ("/assets/...") im vorgerenderten HTML
// in relative Pfade ("./assets/...") umwandeln, damit das Artefakt auch in
// einem Unterverzeichnis auf einem einfachen Webserver funktioniert.
import { existsSync, readFileSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const kandidaten = [
  join("dist", "client", "index.html"),
  join(".output", "public", "index.html"),
];

let geaendert = 0;
for (const datei of kandidaten) {
  if (!existsSync(datei)) continue;
  const vorher = readFileSync(datei, "utf8");
  const nachher = vorher
    .replaceAll('"/./assets/', '"./assets/')
    .replaceAll('"/assets/', '"./assets/');
  if (nachher !== vorher) {
    writeFileSync(datei, nachher);
    geaendert++;
    console.log(`[fix-paths] relative Pfade gesetzt: ${datei}`);
  }
}
if (geaendert === 0) {
  console.log("[fix-paths] keine Datei gefunden oder nichts zu ändern");
}
