import express from "express";
import bankingRoutes from "../routes/bankingRoutes.js";

export default (app) => {
app.use(express.json());
app.use("/api", bankingRoutes);
};
