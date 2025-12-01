const express = require("express");
const dbConnect = require("./dbConnect");
const coinRoutes = require("./routes/coinRoutes");
const swaggerUi = require("swagger-ui-express");
const YAML = require("yamljs");
const path = require("path");

const app = express();
app.use(express.json());

const openapi = YAML.load(path.join(__dirname, "swagger", "openapi.yaml"));

app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(openapi));

app.get("/", (req, res) => {
  res.json({ message: "Welcome to my MongoDB application." });
});

app.use("/api/coins", coinRoutes);

const PORT = process.env.PORT || 8081;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});

dbConnect();