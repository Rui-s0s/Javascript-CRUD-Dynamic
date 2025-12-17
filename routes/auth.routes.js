// routes/auth.routes.js
import express from "express";
import { login, register, logout } from "../controllers/auth.controller.js";

const router = express.Router();

router.get("/login", (_, res) => res.render("login"));
router.get("/register", (_, res) => res.render("register"));

router.post("/login", login);
router.post("/register", register);
router.post("/logout", logout);

export default router;
