// models/user.model.js
import { pool } from "../db.js";

export const createUser = (username, hash) =>
  pool.query(
    "INSERT INTO users (username, password_hash) VALUES ($1, $2) RETURNING *",
    [username, hash]
  );

export const findUserByUsername = username =>
  pool.query("SELECT * FROM users WHERE username = $1", [username]);