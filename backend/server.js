const express = require("express");

//create an express app be invoke an express function
//the app variable now holds the main application object
const app = express();

const PORT = 4000;

//listen for requests
app.listen(PORT, () => {
  console.log("listening on the Port", PORT);
});
