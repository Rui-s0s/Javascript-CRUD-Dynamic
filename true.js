import express from 'express';
import { Pool } from 'pg';
import dotenv from "dotenv";

dotenv.config();

const pool = new Pool({ connectionString: process.env.DATABASE_URL})
const app = express()

app.use(express.json())
app.set('view engine', 'ejs')


// ------------------------
// RENDER HOME PAGE
// ------------------------
app.get('/', async (req, res) => {
  try {
    const { rows: posts } = await pool.query(
      'SELECT * FROM posts ORDER BY likes DESC'
    )
    res.render('index', { posts })
  } catch (err) {
    console.error(err)
    res.sendStatus(500)
  }
})

// ------------------------
// CREATE POST
// ------------------------
app.post('/posts', async (req, res) => {
  try {
    const { post } = req.body
    const { rows } = await pool.query(
      'INSERT INTO posts (post) VALUES ($1) RETURNING *',
      [post]
    )
    res.json(rows[0])
  } catch (err) {
    console.error(err)
    res.sendStatus(500)
  }
})

// ------------------------
// UPDATE POST TEXT
// ------------------------
app.put('/posts/:id', async (req, res) => {
  try {
    const { post } = req.body
    const { rowCount } = await pool.query(
      'UPDATE posts SET post = $1 WHERE id = $2',
      [post, req.params.id]
    )
    if (!rowCount) return res.sendStatus(404)
    res.sendStatus(200)
  } catch (err) {
    console.error(err)
    res.sendStatus(500)
  }
})

// ------------------------
// DELETE POST
// ------------------------
app.delete('/posts/:id', async (req, res) => {
  try {
    const { rowCount } = await pool.query(
      'DELETE FROM posts WHERE id = $1',
      [req.params.id]
    )
    if (!rowCount) return res.sendStatus(404)
    res.sendStatus(204)
  } catch (err) {
    console.error(err)
    res.sendStatus(500)
  }
})

// ------------------------
// LIKE POST
// ------------------------
app.post('/posts/:id/like', async (req, res) => {
  try {
    const { rowCount } = await pool.query(
      'UPDATE posts SET likes = likes + 1 WHERE id = $1',
      [req.params.id]
    )
    if (!rowCount) return res.sendStatus(404)
    res.sendStatus(200)
  } catch (err) {
    console.error(err)
    res.sendStatus(500)
  }
})

// ------------------------
// START SERVER
// ------------------------
app.listen(3000, () => console.log('Server running on http://localhost:3000'))