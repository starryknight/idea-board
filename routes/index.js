const express = require('express')
const router = express.Router()
const usersController = require('../controllers/usersController')
const IdeasController = require('../controllers/IdeasController')

router.get('/', usersController.index)
module.exports = router