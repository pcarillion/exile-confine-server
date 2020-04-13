const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const safetyAdviceSchema = new Schema({
    symptomsTitle: String,
    symptom1: String,
    symptom2: String,
    symptom3: String,
    symptom4: String,
    symptom5: String,
    preventionTitle: String,
    prevention1: String,
    prevention2: String,
    prevention3: String,
    prevention4: String,
    prevention5: String,
    infectedTitle: String,
    infected1: String,
    infected2: String,
    infected3: String,
    infected4: String,
    infected5: String
});

const safetyAdviceModel = mongoose.model("safetyAdvice", safetyAdviceSchema);
module.exports = safetyAdviceModel;