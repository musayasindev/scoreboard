const express = require('express');
const router = express.Router()

const controller = require('../controllers/scoreboardController.js')

router.get('/', controller.get)

module.exports = router