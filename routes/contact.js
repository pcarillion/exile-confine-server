var express = require('express');
var router = express.Router();
const contactModel = require("./../models/Contact");
 


router.get('/all', function(req, res, next) {
    contactModel   
        .find()
        .then(dbRes => {
            console.log(dbRes)
            res.status(200).json(dbRes)
        })
        .catch(err => console.log(err))
})

router.get('/:id', function(req, res, next) {
    contactModel   
        .findById(req.params.id)
        .then(dbRes => {
            console.log(dbRes)
            res.status(200).json(dbRes)
        })
        .catch(err => console.log(err))
})

router.post('/create', function(req, res, next) {


    const {
        name,
        phone,
        city,
        isWhatsApp,
        isTranslator,
        callAmbulance,
        psySupport,
        needsMedecines,
        needsSupermarket,
        needsElse,
        language,
        from0to4,
        from4to8,
        from8to12,
        from12to16,
        from16to20,
        from20to24
    } = req.body

    const newContact  = {
        name,
        phone,
        city,
        isWhatsApp,
        isTranslator,
        callAmbulance,
        psySupport,
        needsMedecines,
        needsSupermarket,
        needsElse,
        language,
        from0to4,
        from4to8,
        from8to12,
        from12to16,
        from16to20,
        from20to24
    }

    contactModel
        .create(newContact)
        .then(dbRes => res.status(200).json({msg: "created", data: dbRes}))
        .catch(err => console.log(err))
})

router.patch('/edit/:id', function(req, res, next) {
    
        contactModel
            .findByIdAndUpdate(req.params.id, req.body)
            .then(dbRes => {
                // console.log(dbRes)
                res.status(200).json(dbRes)
            })
            .catch(err => console.log(err))
   
})

router.delete('/delete/:id', function(req,res, next) {
    console.log(req.params.id)
    contactModel
        .findByIdAndDelete(req.params.id)
        .then(dbRes => {
            console.log(dbRes)
            res.status(200).json({msg: "Le contact a été supprimé", dbRes: dbRes})
        })
        .catch(err => console.log(err))
})

module.exports = router;
