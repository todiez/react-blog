const express = require("express");

//create an instance of express router
const router = express.Router();


//router handler, supports reacting to specific requests
//if a request comes in the function (2. argument) will be fired


//get ALL blogs
router.get("/", (req, res) => {
  res.json({ message: "Getting all Blogs" });
});

//get a SINGLE blog
router.get("/:id", (req, res) => {
  res.json({ message: "Getting a SINGLE Blogs" });
});

//post a NEW blog
router.post("/", (req, res) => {
  res.json({ message: "Post a NEW Blog" });
});

//DELETE a blog
router.delete("/:id", (req, res) => {
  res.json({ message: "DELETE a Blog" });
});

//UPDATE a blog
router.patch("/:id", (req, res) => {
  res.json({ message: "UPDATED a Blog" });
});

module.exports = router;
