const express = require("express");
const Blog = require("../models/blogMongooseSchema");

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
router.post("/", async (req, res) => {
  //grab all three properties from the request body, available due to the
  //middle ware in servjer.js app.use((express.json))
  const { title, content, author } = req.body;

  //try to create a new Blog document inside the Blog collection of the db
  try {
    //storing the response of Blog.create inside blog, usually its the new document including the id of the doc
    //inside create an object is passed through which represents the new document to create
    const blog = await Blog.create({ title, content, author });
    res.status(200).json(blog);
  } catch (error) {
    //error object has a message property on it
    res.status(400).json({ error: error.message });
  }
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
