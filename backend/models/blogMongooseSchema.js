//mongoose allows to create models/schemas, mongodb itself is schemaless

const mongoose = require("mongoose");

const Schema = mongoose.Schema;
const blogSchema = new Schema(
  {
    //first argument describes the structure respectively how the schema looks
    title: {
      type: String,
      required: true,
    },
    content: {
      type: String,
      required: true,
    },
    author: {
      type: String,
      required: true,
    },
  },
  {
    //second argument, other object with timestamps property
    //to create a createdAt timestamp
    timestamps: true,
  }
);

//a model applies the schema to a model to interact with a collection of that name
//this model can be imported to other files
//the collection will be build automatically in the db

module.exports = mongoose.model("Blog", blogSchema, "All Blogs");
