const Router = require('express');
const router = new Router();
const tableController = require('../controller/table.controller');

router.get('/rows', tableController.getRows);

module.exports = router;
