const express = require('express');
const router = express.Router();

router.use('/', require('./swagger.js'));
router.use('/contacts', require('./contacts'));

module.exports = router;