//this file is to register the different routs only, everything else (db logic etc.) needs to be outsourced

const express = require("express");
const {
  createBlog,
  getBlogs,
  getBlog,
  deleteBlog,
  updateBlog,
} = require("../controllers/blogController");

//create an instance of express router
const router = express.Router();

//router handler, supports reacting to specific requests
//if a request comes in the function (2. argument) will be fired

//get ALL blogs
router.get("/", getBlogs);

//get a SINGLE blog
router.get("/:id", getBlog);

//post a NEW blog, fire 2nd argument reference to blogController
router.post("/", createBlog);

//DELETE a blog
router.delete("/:id", deleteBlog);

//UPDATE a blog
router.patch("/:id", updateBlog);

module.exports = router;
