var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
    res.render('index', { title: 'Express' });
});


router.get('/backup',function(req,res,next){
	res.render('backup');
});

module.exports = router;
