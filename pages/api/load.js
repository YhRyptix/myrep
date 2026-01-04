export default function handler(req, res) {
  const { key } = req.query;

  // basic key check
  if (key !== "ABC123") {
    return res.status(403).send("-- invalid key");
  }

  const lua = `
print("Loader success")
print("This script is protected")
`;

  res.setHeader("Content-Type", "text/plain");
  res.send(lua);
}
