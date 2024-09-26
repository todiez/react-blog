// // mongoDB.js
// const mongoose = require('mongoose');


// const uri =
//   "mongodb+srv://tobias:EyhPt1FNxnc5ZXhQ@reactblog.kkl8z.mongodb.net/?retryWrites=true&w=majority&appName=ReactBlog";



// // Options for the connection
// const options = {
//   useNewUrlParser: true,
//   useUnifiedTopology: true,
// };

// // Connect to MongoDB
// mongoose.connect(uri, options);

// // Event listeners for connection status
// mongoose.connection.on('connected', () => {
//   console.log('Mongoose default connection open to ', uri);
// });

// mongoose.connection.on('error', (err) => {
//   console.log('Mongoose default connection error: ', err);
// });

// mongoose.connection.on('disconnected', () => {
//   console.log('Mongoose default connection disconnected');
// });

// // For development, you might want to reconnect if disconnected
// process.on('SIGINT', () => {
//   mongoose.connection.close(() => {
//     console.log('Mongoose default connection disconnected through app termination');
//     process.exit(0);
//   });
// });