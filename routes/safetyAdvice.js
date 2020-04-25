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
        selLanguageId,
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
        preventionCrowd,
        infectedTitle,
        infectedHome,
        infectedOthers,
        infectedCover,
        infectedTissue,
        infectedClean,
        information1Title,
        information1,
        information2Title,
        information2,
        information3Title,
        information3
    } = req.body;

    const newSafetyAdvice = {
        selLanguageId,
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
        preventionCrowd,
        infectedTitle,
        infectedHome,
        infectedOthers,
        infectedCover,
        infectedTissue,
        infectedClean,
        information1Title,
        information1,
        information2Title,
        information2,
        information3Title,
        information3
    }

    
    SafetyAdviceModel
        .create(newSafetyAdvice)
        .then(dbRes => {
            console.log("created")
            res.status(200).json({msg : "created", data: newSafetyAdvice})
        })
        .catch(err => {
            // console.log("creation failed", err);
            next(err);
        });

    
        
        
    })
            
    router.patch('/edit/:id', function(req, res, next) {
        console.log(req.body)
        SafetyAdviceModel
            .findByIdAndUpdate(req.params.id, req.body)
            .then(dbRes => {
                console.log(dbRes)
                res.status(200).json({data:dbRes})
            })
            .catch(err => console.log(err))
   
    })

    router.delete('/delete/:id', function(req, res, next){
        console.log(req.params.id)
        SafetyAdviceModel    
            .findByIdAndDelete(req.params.id)
            .then(dbRes => {
                console.log(dbRes)
                res.status(200).json({msg: "L'article a été supprimé"})
            })
            .catch(err => console.log(err))
    })

module.exports = router;