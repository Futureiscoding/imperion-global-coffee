const fs = require("fs");
const path = require("path");

const root = path.resolve(__dirname, "..");
const contentDir = path.join(root, "content");

function walk(directory) {
  return fs.readdirSync(directory, { withFileTypes: true }).flatMap((entry) => {
    const target = path.join(directory, entry.name);
    return entry.isDirectory() ? walk(target) : [target];
  });
}

if (!fs.existsSync(contentDir)) process.exit(0);

const placeholders = [];
for (const file of walk(contentDir)) {
  const text = fs.readFileSync(file, "utf8");
  const matches = text.match(/\[[A-Z][A-Z0-9 /_-]*\]/g) || [];
  for (const match of [...new Set(matches)]) placeholders.push(`${match} (${path.relative(root, file)})`);
}

if (placeholders.length) {
  console.error(`Build blocked by unresolved content placeholders:\n- ${placeholders.join("\n- ")}`);
  process.exit(1);
}
