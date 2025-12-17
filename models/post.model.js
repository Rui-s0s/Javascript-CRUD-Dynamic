// models/post.model.js
import { pool } from "../db.js";

export const createPost = (content, userId) =>
  pool.query(
    "INSERT INTO posts (content, user_id) VALUES ($1, $2)",
    [content, userId]
  );

export const getPostsSorted = () =>
  pool.query(`
    SELECT posts.*,
           COUNT(likes.post_id) AS likes
    FROM posts
    LEFT JOIN likes ON posts.id = likes.post_id
    GROUP BY posts.id
    ORDER BY likes DESC, posts.created_at DESC
  `);

export const likePost = (postId, userId) =>
  pool.query(
    "INSERT INTO likes (post_id, user_id) VALUES ($1, $2) ON CONFLICT DO NOTHING",
    [postId, userId]
  );
