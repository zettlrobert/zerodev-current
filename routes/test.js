const express = require('express');
const router = express.Router();



// @route       GET api/test
// @desc        get a json Object
// @access      public

router.get('/', async (req, res) => {
  try {
    const test = {
      name: "Robert",
      age: 25
    };

    res.json(test);
  } catch (err) {
    console.log(err.message);
    res.status(500).send('Server Error');
  }
})

module.exports = router;