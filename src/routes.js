const express = require('express')
const listController = require('./controllers/listControllers')
const adminController = require('./controllers/adminControllers')


const router = express.Router()
//rotas do to-do-list

//GET
router.get('/', listController.index)
router.get('/admin', adminController.admin)
//POST
router.post('/admin/createTask', adminController.save)
router.post('/admin/delete/:id', adminController.delete)

module.exports = router