import express from "express";
const app = express();
if (process.env.NODE_ENV === "production") {
    app.use(express.static("dist/public"));
}
app.get("/api/ping", (req, res) => {
    return res.send("pong");
});
const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
    console.log(`server running on port:${PORT}`);
});
//# sourceMappingURL=index.js.map