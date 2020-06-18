const express = require('express');
const devController = require('../controller/dev');
const validateDto = require('../middleware/validate-dto');
const devDto = require('../dto/dev');

const router = express.Router();
router.post('/dev', validateDto(devDto), devController.createDev);

module.exports = router;
