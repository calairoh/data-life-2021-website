var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

/* GET questions */
router.get('/question-1', function(req, res, next) {
  res.render('questions/question-1', { title: 'Question 1' });
});

router.get('/question-2', function(req, res, next) {
  res.render('questions/question-2', { title: 'Question 2' });
});

router.get('/question-3', function(req, res, next) {
  res.render('questions/question-3', { title: 'Question 3' });
});

router.get('/question-4', function(req, res, next) {
  res.render('questions/question-4', { title: 'Question 4' });
});

module.exports = router;
