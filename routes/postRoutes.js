// routes/post.routes.js
import express from "express";
import { requireAuth } from "../middleware/auth.middleware.js";
import { showPosts, addPost, like } from "../controllers/post.controller.js";

const router = express.Router();

// ADD MIDDLEWARE AFTER TESTING
router.get("/posts", showPosts);
router.post("/posts", addPost);
router.post("/posts/:id/like", like);

export default router;
