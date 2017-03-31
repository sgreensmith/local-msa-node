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
  //console.dir(surnameData[0].value);
  //console.dir(cycle3Dataset);

  var surnameData = req.body.matchingDataset.surnames;
  var cycle3Dataset = req.body.cycle3Dataset;

  res.set(jsonContent);

  if (surnameData[0].value == 'Griffin')
    res.send(match);
  else
    if (cycle3Dataset && cycle3Dataset.attributes.nino == 'goodvalue')
      res.send(match);
    else
      res.send(noMatch);
});

router.post('/account-creation', function(req,res){

  //console.log("account creation hit");
  //console.dir(req.body);

  var levelOfAssurance = req.body.levelOfAssurance;

  res.set(jsonContent);

  if (levelOfAssurance == 'LEVEL_2')
    res.send(success);
  else
    res.send(failure);
});

module.exports = router;
