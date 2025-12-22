// controllers/auth.controller.js
import bcrypt from "bcrypt";
import { createUser, findUserByUsername } from "../models/user.model.js";

export const register = async (req, res) => {
  const hash = await bcrypt.hash(req.body.password, 10);
  await createUser(req.body.username, hash);
  res.redirect("/login");
};

export const login = async (req, res) => {
  const result = await findUserByUsername(req.body.username);
  const user = result.rows[0];

  if (!user) return res.redirect("/login");

  const valid = await bcrypt.compare(req.body.password, user.password_hash);
  if (!valid) return res.redirect("/login");

  req.session.userId = user.id;
  res.redirect("/posts");
};

export const logout = (req, res) => {
  req.session.destroy(() => res.redirect("/login"));
};