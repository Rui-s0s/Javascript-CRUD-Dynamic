// app.js
import express from "express";
import session from "express-session";
import authRoutes from "./routes/auth.routes.js";
import postRoutes from "./routes/post.routes.js";

const app = express();

app.use(express.urlencoded({ extended: false }));
app.use(session({
  secret: "secret",
  resave: false,
  saveUninitialized: false
}));

app.set("view engine", "ejs");

app.use(authRoutes);
app.use(postRoutes);


console.log("anda?")

app.listen(3000);
