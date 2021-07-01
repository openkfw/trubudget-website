const fs = require("fs");
const path = require("path");
const regex = /\[(.*?)\]\(((?!https?).*\.md)\)/gim;
async function* walk(dir) {
  for await (const d of await fs.promises.opendir(dir)) {
    const entry = path.join(dir, d.name);
    if (d.isDirectory()) yield* walk(entry);
    else if (d.isFile()) yield entry;
  }
}

async function main() {
  for await (const p of walk("./docs/")) {
    if (!p.includes(".md" || ".MD" || ".mdx" || ".MDX")) continue;
    const content = fs.readFileSync(p, "utf8");
    const result = content.replace(regex, (match) => {
      console.log("Replacing in file: ", p, match);
      return match.replace(/.md/g, "");
    });
    fs.writeFileSync(p, result);
  }
}

main();
