const express = require("express");
const path = require("path");
const compression = require("compression");

const app = express();
const PORT = process.env.PORT || 5173;

app.use(compression());
app.use((req, _res, next) => {
  if (/\.(?:svg|png|jpg|jpeg|webp|gif|ico|css|js)$/.test(req.url)) {
    _res.setHeader("Cache-Control", "public, max-age=31536000, immutable");
  }
  next();
});

app.use(express.static(path.join(__dirname)));

app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "index.html"));
});

app.listen(PORT, () => {
  console.log(`Portfolio running at http://localhost:${PORT}`);
});
