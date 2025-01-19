const express = require("express");
const app = express();
const PORT = 5000;
const Router = require("./Routes/route");

app.use(express.json());

app.use("/", Router);

app.listen(PORT, () => console.log(`Server is running on http://localhost:${PORT}`))