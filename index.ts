import express from "express";
const app = express();

app.get("/ping", (req, res) => {
  res.send("pong");
});

const PORT = process.env.PORT || 3001
app.listen(PORT, () => {
  console.log(`server running on port:${PORT}`);
});
