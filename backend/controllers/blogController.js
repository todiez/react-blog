//this file contains control functions for each different route and db logic
//referenced from the router blogRoutes file

const Blog = require("../models/blogMongooseSchema");
const mongoose = require("mongoose");

//get ALL blogs
const getBlogs = async (req, res) => {
  //using Blog Model/Schema
  const blogs = await Blog.find({}).sort({ createdAt: -1 });

  //res to client (browser): sending back ok as well as all blogs in json format
  res.status(200).json(blogs);
};

//get a SINGLE blog
const getBlog = async (req, res) => {
  //all route parameters are stored on params property
  const { id } = req.params;

  //check if ID is valid
  if (!mongoose.Types.ObjectId.isValid(id)) {
    //if not, just return with status 400
    return res.status(404).json({ error: "Blog not found!" });
  }

  //using Blog Model/Schema
  const blog = await Blog.findById(id);

  if (!blog) {
    //res back to client (browser)
    return res.status(404).json({ error: "Blog not found!" });
  }
  //res to client (browser): sending back ok as well as all blogs in json format
  res.status(200).json(blog);
};

//create a NEW blog
const createBlog = async (req, res) => {
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
};

//DELETE a blog
const deleteBlog = async (req, res) => {
  //all route parameters are stored on params property
  const { id } = req.params;

  //check if ID is valid
  if (!mongoose.Types.ObjectId.isValid(id)) {
    //if not, just return with status 400
    return res.status(404).json({ error: "Blog not found!" });
  }

  //_id is the name inside MongoDB
  const blog = await Blog.findOneAndDelete({ _id: id });

  if (!blog) {
    //res back to client (browser)
    return res.status(400).json({ error: "Blog not found!" });
  }
  //res to client (browser): sending back ok, blog was deleted
  res.status(200).json(blog);
};

//UPDATE a blog
const updateBlog = async (req, res) => {
  //all route parameters are stored on params property
  const { id } = req.params;

  //check if ID is valid
  if (!mongoose.Types.ObjectId.isValid(id)) {
    //if not, just return with status 400
    return res.status(404).json({ error: "Blog not found!" });
  }

  const blog = await Blog.findOneAndUpdate(
    { _id: id },
    {
      ...req.body,
    }
  );
  if (!blog) {
    //res back to client (browser)
    return res.status(400).json({ error: "Blog not found!" });
  }
  //res to client (browser): sending back ok, blog was deleted
  res.status(200).json(blog);
};

module.exports = {
  createBlog,
  getBlogs,
  getBlog,
  deleteBlog,
  updateBlog,
};
