var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res) {
  res.render('index', { title: '首页' });
});

router.get('/login', function(req, res) {
  res.render('login', { title: '登录' });
});

router.get('/logout', function(req, res) {
  res.render('logout', { title: '登出' });
});

router.get('/reg', function(req, res) {
  res.render('reg', { title: '注册' });
});

router.post('/reg', function(req, res) {
  
});

module.exports = router;

// test db connection
var User = require('../models/user');
var newUser = new User({
	name: "cc",
	pwd: "123",
	email: "dawn.cc022@gmail.com"
});
newUser.save(function(err, user){
	if(err){
		console.log("db connection error!");
	}
	console.log("db connection success!");
	alert("Success!");
});
