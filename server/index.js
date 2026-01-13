import express from "express";
import cors from "cors";
import cookieParser from "cookie-parser";
import jwt from "jsonwebtoken";
import bcrypt from "bcryptjs";

const app = express();
app.use(express.json());
app.use(cookieParser());

app.use(
  cors({
    origin: "http://localhost:5173",
    credentials: true,
  })
);

const JWT_SECRET = "my_simple_secret";

const users = [
  {
    id: 1,
    email: "test@example.com",
    passwordHash: bcrypt.hashSync("Pass@123", 10),
    name: "Test User",
  },
];

function auth(req, res, next) {
  const token = req.cookies.token;
  if (!token) return res.status(401).json({ message: "Not logged in" });

  try {
    req.user = jwt.verify(token, JWT_SECRET);
    next();
  } catch {
    return res.status(401).json({ message: "Session expired" });
  }
}

app.post("/api/login", async (req, res) => {
  const { email, password } = req.body;

  const user = users.find((u) => u.email === email);
  if (!user) return res.status(401).json({ message: "Invalid credentials" });

  const ok = await bcrypt.compare(password, user.passwordHash);
  if (!ok) return res.status(401).json({ message: "Invalid credentials" });

  const token = jwt.sign({ id: user.id, email: user.email }, JWT_SECRET, {
    expiresIn: "1d",
  });

  res.cookie("token", token, {
    httpOnly: true,
    sameSite: "lax",
    secure: false,
  });

  res.json({ id: user.id, email: user.email, name: user.name });
});

app.get("/api/me", auth, (req, res) => {
  const user = users.find((u) => u.id === req.user.id);
  res.json({ id: user.id, email: user.email, name: user.name });
});

app.post("/api/logout", (req, res) => {
  res.clearCookie("token", { httpOnly: true, sameSite: "lax", secure: false });
  res.json({ message: "Logged out" });
});

app.listen(4000, () => console.log("Backend running: http://localhost:4000"));
