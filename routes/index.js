var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', {});
});

router.get('/generate-cirtificate', function(req, res, next) {
  res.render('pages/generator', {});
});

router.get('/login', function(req, res, next) {
  res.render('login', {});
});

router.get('/update-password', function(req, res, next) {
  res.render('update-password', {});
});

router.get('/forgot-password', function(req, res, next) {
  res.render('login', {});
});

module.exports = router;
