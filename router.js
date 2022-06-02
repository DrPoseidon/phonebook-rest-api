const Router = require('express').Router;
const router = new Router;
const Controller = require('./controller');

router.post('/createRecord', Controller.createRecord);

router.get('/getRecord', Controller.getRecord);

router.get('/getRecords', Controller.getRecords);

router.put('/updateRecord', Controller.updateRecord);

router.delete('/deleteRecord', Controller.deleteRecord);

module.exports = router
