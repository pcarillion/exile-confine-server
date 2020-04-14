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
        language,
        symptomsTitle,
        symptomFever,
        symptomCough,
        symptomBreath,
        symptomThroat,
        symptomHeadache,
        preventionTitle,
        preventionWash,
        preventionContact,
        preventionTouch,
        preventionMask,
        preventionCrown,
        infectedTitle,
        infectedHome,
        infectedOthers,
        infectedCover,
        infectedIssue,
        infectedClean
    } = req.body;

    const newSafetyAdvice = {
        language,
        symptomsTitle,
        symptomFever,
        symptomCough,
        symptomBreath,
        symptomThroat,
        symptomHeadache,
        preventionTitle,
        preventionWash,
        preventionContact,
        preventionTouch,
        preventionMask,
        preventionCrown,
        infectedTitle,
        infectedHome,
        infectedOthers,
        infectedCover,
        infectedIssue,
        infectedClean
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