const express = require("express");
const router = express.Router();
const fs = require("fs");

const getPosts = () => JSON.parse(fs.readFileSync("./data/posts.json"));

router.get("/", (req, res) => {
  const posts = getPosts();
  res.json(posts);
});

router.post("/", (req, res) => {
  const posts = getPosts();
  const newId = posts.length > 0 ? Math.max(...posts.map((p) => p.ID)) + 1 : 1;
  const newPost = {
    ID: newId,
    Title: req.body.Title,
    Content: req.body.Content,
    Author: req.body.Author,
    DateCreated: new Date().toISOString(),
  };
  posts.push(newPost);
  fs.writeFileSync("./data/posts.json", JSON.stringify(posts, null, 2));
  res.json(newPost);
});

router.put("/:id", (req, res) => {
  const posts = getPosts();
  const postIndex = posts.findIndex((p) => p.ID === parseInt(req.params.id));

  if (postIndex === -1) {
    res.status(404).send("Post not found.");
    return;
  }

  if (req.body.Title) posts[postIndex].Title = req.body.Title;
  if (req.body.Content) posts[postIndex].Content = req.body.Content;
  if (req.body.Author) posts[postIndex].Author = req.body.Author;

  fs.writeFileSync("./data/posts.json", JSON.stringify(posts, null, 2));
  res.json(posts[postIndex]);
});

router.delete("/:id", (req, res) => {
  const posts = getPosts();
  const postIndex = posts.findIndex((p) => p.ID === parseInt(req.params.id));

  if (postIndex === -1) {
    res.status(404).send("Post not found");
    return;
  }

  const deletedPost = posts.splice(postIndex, 1);
  fs.writeFileSync("./data/posts.json", JSON.stringify(posts, null, 2));
  res.json(deletedPost[0]);
});

module.exports = router;
