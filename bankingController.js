import jwt from "jsonwebtoken";
import dotenv from "dotenv";
dotenv.config();

let user = { username: "john", password: "1234", balance: 1000 };

export const login = (req, res) => {
  const { username, password } = req.body;
  if (username === user.username && password === user.password) {
    const token = jwt.sign({ username }, process.env.JWT_SECRET, { expiresIn: "1h" });
    return res.json({ token });
  }
  res.status(401).json({ error: "Invalid credentials" });
};

export const balance = (req, res) => res.json({ balance: user.balance });

export const deposit = (req, res) => {
  const { amount } = req.body;

  if (!amount || isNaN(amount) || amount <= 0) {
    return res.status(400).json({ error: "Invalid amount" });
  }

  user.balance += Number(amount);
  res.json({ message: "Deposited", balance: user.balance });
};


export const withdraw = (req, res) => {
  const { amount } = req.body;
  if (user.balance < amount) return res.status(400).json({ error: "Insufficient funds" });
  user.balance -= amount;
  res.json({ message: "Withdrawn", balance: user.balance });
};
