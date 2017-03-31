var express = require('express');
var router = express.Router();

const jsonContent = "'content-type', 'application/json'";

const match = {"result":"match"};
const noMatch = {"result":"no-match"};
const success = {"result":"success"};
const failure = {"result":"failure"};

/* GET home page. */
router.get('/', function(req, res, next) {
  console.log('index hit')
  res.render('index', { title: 'Express' });
});

router.post('/matching-service', function(req, res) {

  //console.log('/matching-service hit');

  res.set(jsonContent);

  if (req.body.matchingDataset.surnames[0].value == 'Griffin')
    res.send(match);
  else
    (req.body.cycle3Dataset && req.body.cycle3Dataset.attributes.nino == 'goodvalue') ? res.send(match) : res.send(noMatch);
});

router.post('/account-creation', function(req,res){

  //console.log("account creation hit");

  var levelOfAssurance = req.body.levelOfAssurance;

  res.set(jsonContent);

  (levelOfAssurance == 'LEVEL_2') ? res.send(success) : res.send(failure);

});

module.exports = router;
