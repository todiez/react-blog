//require dotenv and directly invoke config method on it to attach the
//environment variable to the process object
require("dotenv").config();

const express = require("express");
const blogRoutes = require("./routes/blogRoutes")
const port = process.env.PORT;

//create an express app be invoke an express function
//the app variable now holds the main application object
const app = express();

//global middleware
app.use((req, res, next) => {
  console.log(req.path, req.method);
  next();
});


//grabs all different routes attached to the Router instance via
//the variable blogRoutes and defined in the blogRoutes.js file
//first argument: blogRoutes fired only when it comes to a specific path 
app.use("/api/blogs", blogRoutes)

//router handler, supports reacting to specific requests
//if a request comes in the function (2. argument) will be fired
app.get("/", (req, res) => {
  res.json({ m: "Welcome to the App" });
  //  res.send("Welcome to the App" );
});

//listen for requests
app.listen(port, () => {
  console.log("listening on Port", port);
});
