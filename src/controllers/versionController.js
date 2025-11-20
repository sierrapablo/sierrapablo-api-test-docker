import fs from "fs";
import path from "path";

const getVersion = (_req, res) => {
  const packagePath = path.resolve(process.cwd(), "package.json");
  const pkg = JSON.parse(fs.readFileSync(packagePath, "utf-8"));

  res.status(200).json({
    name: pkg.name,
    version: pkg.version,
    author: pkg.author,
    description: pkg.description,
  });
};

export { getVersion };
