
var express = require('express')

const route = express.Router()

const contr=require('../../controllers/admin/khachhang');
route.get("/api/get",contr.find);

module.exports = route