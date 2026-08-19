import express from "express";

const app = express();
app.use(express.static("dist"));

app.get("/", (req, res) => {
  res.send("pong");
});

const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
  console.log(`server running on port:${PORT}`);
});
