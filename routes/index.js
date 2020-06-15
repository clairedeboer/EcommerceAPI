var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  console.log('claire')
  res.send({grant: 'babyboy'}); 
});

module.exports = router;
