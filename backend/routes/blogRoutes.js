const express = require("express");

//create an instance of express router
const router = express.Router();

//get ALL blogs
router.get("/", (req, res) => {
  res.json({ message: "Getting all Blogs" });
  //  res.send("Welcome to the App" );
});

//get a SINGLE blog
router.get("/:id", (req, res) => {
  res.json({ message: "Getting a SINGLE Blogs" });
  //  res.send("Welcome to the App" );
});

//post a NEW blog
router.post("/", (req, res) => {
  res.json({ message: "Post a NEW Blog" });
  //  res.send("Welcome to the App" );
});

module.exports = router;
