// db.js
import pkg from "pg";
const { Pool } = pkg;

export const pool = new Pool({
  connectionString: "postgres://user:pass@localhost:5432/DATABASE"
});
