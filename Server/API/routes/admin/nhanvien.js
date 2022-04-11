var express = require('express')

var route = express.Router()
const con=require('../../controllers/admin/nhanvien')
route.post('/api/post',con.create);

 route.get('/api/get',con.find);

 route.put('/api/put/:id',con.update);

 route.delete('/api/delete/:id',con.delete);

module.exports = route