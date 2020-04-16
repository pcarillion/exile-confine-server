const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const safetyAdviceSchema = new Schema({
    selLanguageId: String,
    symptomsTitle: String,
    symptomFever: String,
    symptomCough: String,
    symptomBreath: String,
    symptomThroat: String,
    symptomHeadache: String,
    preventionTitle: String,
    preventionWash: String,
    preventionContact: String,
    preventionTouch: String,
    preventionMask: String,
    preventionCrowd: String,
    infectedTitle: String,
    infectedHome: String,
    infectedOthers: String,
    infectedCover: String,
    infectedTissue: String,
    infectedClean: String
});

const safetyAdviceModel = mongoose.model("safetyAdvice", safetyAdviceSchema);
module.exports = safetyAdviceModel;
