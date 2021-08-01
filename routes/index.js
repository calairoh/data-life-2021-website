var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
}); 

/* GET problem statement */
router.get('/problem-statement', function(req, res, next) {
  res.render('problem-statement', { title: 'Problem Statement' });
});

/* GET about */
router.get('/about', function(req, res, next) {
  res.render('about', { title: 'About' });
});

/* GET collections */
router.get('/interviews', function(req, res, next) {
  res.render('collection/interviews', { title: 'Inteviews' });
});

router.get('/scraping', function(req, res, next) {
  res.render('collection/scraping', { title: 'Scraping' });
});

router.get('/survey', function(req, res, next) {
  res.render('collection/survey', { title: 'Survey' });
});

/* GET outcomes */
router.get('/influencers-tool', function(req, res, next) {
  res.render('outcomes/influencer-tool', { title: 'Influencer tool' });
});

router.get('/personas-timeline', function(req, res, next) {
  res.render('outcomes/personas-timeline', { title: 'Personas timeline' });
});

router.get('/social-media-suggestions', function(req, res, next) {
  res.render('outcomes/sm-suggestions', { title: 'Social media suggestions' });
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
