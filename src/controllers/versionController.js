import pkg from "../../package.json" assert { type: "json" };

const getVersion = (_req, res) => {
  res.status(200).json({
    name: pkg.name,
    version: pkg.version,
    author: pkg.author,
    description: pkg.description,
  });
};

export { getVersion };
