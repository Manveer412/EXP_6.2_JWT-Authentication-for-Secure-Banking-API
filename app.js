import express from "express";
import dotenv from "dotenv";
import setupApp from "./config/appConfig.js";

dotenv.config();
const app = express();
setupApp(app);

app.listen(process.env.PORT, () =>
  console.log(`Server running at http://localhost:${process.env.PORT}`)
);
