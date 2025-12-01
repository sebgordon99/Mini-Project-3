const express = require("express");
const dbConnect = require("./dbConnect");
const coinRoutes = require("./routes/coinRoutes");

const app = express();
app.use(express.json());

app.get("/", (req, res) => {
  res.json({ message: "Welcome to my MongoDB application." });
});

app.use("/api/coins", coinRoutes);

const PORT = process.env.PORT || 8081;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});

dbConnect();