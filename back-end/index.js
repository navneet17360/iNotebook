const db = require("./database");
const express = require("express");
const app = express();
const port = 3000;
app.use(express.json());
//avalaible routes
app.use("/api/notes", require("./routes/notes"));

app.use("/api/auth", require("./routes/auth"));

app.get("/", (req, res) => {
  res.send("Hello Navneet!");
});

app.listen(port, () => {
  console.log(`app listening on port ${port}`);
});
