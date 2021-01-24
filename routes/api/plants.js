const express = require('express');
const router = express.Router();

// @route    GET api/Plants
// @desc     Test route
// @access   Public
router.get('/', (req, res) => res.send('Plants route'));

module.exports = router;
