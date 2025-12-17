// controllers/post.controller.js
import { createPost, getPostsSorted, likePost } from "../models/post.model.js";

export const showPosts = async (req, res) => {
  const posts = await getPostsSorted();
  res.render("posts", { posts: posts.rows });
};

export const addPost = async (req, res) => {
  await createPost(req.body.content, req.session.userId);
  res.redirect("/posts");
};

export const like = async (req, res) => {
  await likePost(req.params.id, req.session.userId);
  res.redirect("/posts");
};
