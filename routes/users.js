var express = require('express');
var router = express.Router();

const spawn = require('child_process').spawn;


/* GET users listing. */
router.get('/:IGusername', function(req, res, next) {
  const ls = spawn('python', ['ml/decisionTree.py', req.params.IGusername]);

  ls.on('close', (code) => {
    var message = 'Error'
    if (code == 0) {
      message = req.params.IGusername + ' is NOT a good influencer'
    } else {
      message = req.params.IGusername + ' IS a good influencer'
    }
    res.send(message);
  });

 
});

module.exports = router;
