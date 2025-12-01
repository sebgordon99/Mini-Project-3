const express = require("express");
const app = express();
let dbConnect = require("./dbConnect");
// parse requests of content-type -application/json
app.use(express.json());
app.get("/", (req, res) => {
  res.json({ message: "Welcome to my MongoDB application." });
});

// console.log(process.env);
// set port, listen for requests
const PORT = process.env.PORT || 8081;
let userRoutes = require("./routes/userRoutes");
let lab4Routes = require("./routes/lab4Routes");
app.use("/api/users", userRoutes);
app.use("/api/lab4", lab4Routes);
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`);
});
