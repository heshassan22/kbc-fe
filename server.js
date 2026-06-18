import express from "express";
import path from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));

const app = express();
const PORT = process.env.PORT || 3000;

// Serve static front-end assignments from /public
app.use(express.static(path.join(__dirname, "public")));

// Simple health check / API endpoint for assignments that need a backend
app.get("/api/health", (req, res) => {
  res.json({ status: "ok", time: new Date().toISOString() });
});

app.listen(PORT, () => {
  console.log(`KBC FE server running at http://localhost:${PORT}`);
});
