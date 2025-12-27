// db.js
import pkg from "pg";
const { Pool } = pkg;

export const pool = new Pool({
  connectionString: "postgres://postgres:addressme@localhost:5432/cruddb"
});