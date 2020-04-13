var express = require('express');
var router = express.Router();
const SafetyAdviceModel = require("./../models/SafetyAdvice");

router.get('/all', function(req, res, next) {
    console.log('request sent')
    SafetyAdviceModel
        .find()
        .then(dbRes => {
            // console.log(dbRes)
            res.status(200).send(dbRes)
        })
        .catch(err => console.log(err))
  }); 

  router.get('/:id', function(req, res, next) {
    SafetyAdviceModel
        .findById(req.params.id)
        .then(dbRes => {
            console.log(dbRes)
            res.status(200).json(dbRes)
        })
        .catch(err => console.log(err))
})


router.post('/create', function(req, res, next){
    console.log(req.body);

    const{
        symptomsTitle,
        symptom1,
        symptom2,
        symptom3,
        symptom4,
        symptom5,
        preventionTitle,
        prevention1,
        prevention2,
        prevention3,
        prevention4,
        prevention5,
        infectedTitle,
        infected1,
        infected2,
        infected3,
        infected4,
        infected5
    } = req.body;

    const newSafetyAdvice = {
        symptomsTitle,
        symptom1,
        symptom2,
        symptom3,
        symptom4,
        symptom5,
        preventionTitle,
        prevention1,
        prevention2,
        prevention3,
        prevention4,
        prevention5,
        infectedTitle,
        infected1,
        infected2,
        infected3,
        infected4,
        infected5
    }

    SafetyAdviceModel
        .create(newSafetyAdvice)
        .then(dbRes => {
            console.log("created")
            res.status(200).json({msg : "created", data: newSafetyAdvice})
        })
        .catch(err => {
            console.log("creation failed", err);
            next(err);
        });


})

module.exports = router;