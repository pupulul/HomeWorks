var express = require('express');
var router = express.Router();

var userDao = require('../dao/userDao');

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

// 增加用户
//TODO 同时支持get,post
router.post('/insert', function(req, res, next) {
    userDao.add(req, res, next);
});

router.post('/queryAll', function(req, res, next) {
    userDao.queryAll(req, res, next);
});

router.post('/query', function(req, res, next) {
    userDao.queryById(req, res, next);
});

router.post('/delete', function(req, res, next) {
    userDao.delete(req, res, next);
});

router.post('/update', function(req, res, next) {
    userDao.update(req, res, next);
});

module.exports = router;