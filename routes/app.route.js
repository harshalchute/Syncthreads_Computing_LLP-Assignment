const express = require('express');
const LoginController = require('../controllers/app.controller');
const router = express.Router();

router.post('/login',LoginController.login)
router.get('/map-list',LoginController.mapList)
router.get('/map-list/:map_id',LoginController.mapById)

module.exports = router;