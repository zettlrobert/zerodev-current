const express = require('express');
const path = require('path');


const PORT = process.env.PORT || 5000;


const app = express();



// Client
if (process.env.NODE_ENV === 'production') {
  //set static folder

  app.use(express.static('client/built'));


  app.get('*', (req, res) => {
    res.sendFile(path.resolve(__, 'client', 'build', 'index.html'));
  })
}

const envoirement = process.env.NODE_ENV;

app.listen(PORT, () => {
  console.log(`App listening on port ${PORT}`);
  console.log(`Env: ${envoirement}`);
});