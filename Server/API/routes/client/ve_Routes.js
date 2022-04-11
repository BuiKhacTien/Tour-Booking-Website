var express = require('express')

var router = express.Router()
module.exports = router

const Ve = require('../../controllers/client/ve_Controller')

router.post('/bookTour/:id', Ve.bookTour)
router.post('/deleteTour/:id', Ve.deleteTour)
