const express = require('express');
const path = require('path');


const PORT = process.env.PORT || 5000;


const app = express();



// Client



app.listen(PORT, () => {
  console.log(`App listening on port ${PORT}`);
});