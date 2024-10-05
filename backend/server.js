//require dotenv and directly invoke config method on it to attach the
//environment variable to the process object
require("dotenv").config();

const express = require("express");
const mongoose = require("mongoose");
const blogRoutes = require("./routes/blogRoutes");
const cors = require("cors");
const port = process.env.PORT;

//create an express app be invoke an express function
//the app variable now holds the main application object
const app = express();

// Enable CORS for all routes, later be specified to front end only
//once deployed and url is available
app.use(cors());

//global middleware

//necessary to access the request objects of the routes
//looks if there is any body to the request coming in, if yes it is
//parsing and attaching it to the request object
app.use(express.json());

app.use((req, res, next) => {
  console.log(req.path, req.method);
  next();
});

//grabs all different routes attached to the Router instance via
//the variable blogRoutes and defined in the blogRoutes.js file
//first argument: blogRoutes fired only when it comes to the specific path
app.use("/api/blogs", blogRoutes);

//connect to data base, it's async and therefore it returns a promise
mongoose
  .connect(process.env.MONGO_URL)
  .then(() => {
    //listen for requests only after connection to db is etablished
    app.listen(port, () => {
      console.log("connected to database and listening on port:", port);
    });
  })
  .catch((error) => console.log(error));
