const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const innerTextSchema = new Schema({
    language: String,
    websiteName: String,
    websitePresentation: String,
    advice: String,
    enter: String,
    timeSchedule: String,
    morning: String,
    afternoon: String,
    from0to4: String,
    from4to8: String,
    from8to12: String,
    from12to16: String,
    from16to20: String,
    from20to24: String,
    serviceRequested: String,
    medicalSupport: String,
    otherService: String,
    translation: String,
    ambulanceCall: String,
    psySupport: String,
    medecinesRequest: String,
    supermarket: String,
    other: String,
    teamComposition: String, 
    name: String,
    country: String,
    France: String,
    Malte: String,
    city: String,
    phone: String, 
    whatsapp: String,
    transLanguage: String,
    seeMore: String,
    genCond1: String,
    genCond2: String,
    back: String
});

const innerTextModel = mongoose.model("innerText", innerTextSchema);

module.exports = innerTextModel;