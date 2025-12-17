// routes/post.routes.js
import express from "express";
import { requireAuth } from "../middleware/auth.middleware.js";
import { showPosts, addPost, like } from "../controllers/post.controller.js";

const router = express.Router();

router.get("/posts", requireAuth, showPosts);
router.post("/posts", requireAuth, addPost);
router.post("/posts/:id/like", requireAuth, like);

export default router;
