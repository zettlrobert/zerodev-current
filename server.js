const express = require('express');
const path = require('path');
const connectDB = require('./config/db');

const PORT = process.env.PORT || 5000;


const app = express();

//Connect to DB
connectDB();


// Init Middleware
app.use(express.json({ extended: false }));


// Define Routes



app.listen(PORT, () => {
  console.log(`App listening on port ${PORT}`);
});