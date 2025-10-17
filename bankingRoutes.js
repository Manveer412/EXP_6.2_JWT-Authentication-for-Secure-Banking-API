import express from "express";
import { login, balance, deposit, withdraw } from "../controller/bankingController.js";
import auth from "../middleware/authMiddleware.js";

const router = express.Router();
router.post("/login", login);
router.get("/balance", auth, balance);
router.post("/deposit", auth, deposit);
router.post("/withdraw", auth, withdraw);

export default router;
