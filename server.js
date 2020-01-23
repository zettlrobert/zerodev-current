require('dotenv').config({ path: './config.env' });
const express = require('express');
const path = require('path');


const PORT = process.env.PORT || 5000;


const app = express();



// Init Middleware
app.use(express.json({ extended: false }))



// Routes
app.use('/api/test', require('./routes/test'));
app.use('/api/submitcontactform', require('./routes/contactForm'));


// Client
if (process.env.NODE_ENV === 'production') {
  //set static folder

  app.use(express.static('client/built'));

  app.get('*', (req, res) => {
    res.sendFile(path.resolve(__, 'client', 'build', 'index.html'));
  })
}


app.listen(PORT, () => {
  console.log(`App listening on port ${PORT}`);
});