const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const contactSchema = new Schema({
  name: {
      type: String,
      required: true,
  },
  phone: {
    type: String,
    required: true
  },
  city: {
    type: String,
    required: true
  },
  isWhatsApp: {
    type: Boolean,
    required: true
  },
  isTranslator: Boolean,
  callAmbulance: Boolean,
  psySupport: Boolean,
  needsMedecines: Boolean,
  needsSupermarket: Boolean,
  needsElse: Boolean,
  language: {
    type: String,
    required: true
  },
  from0to4: Boolean,
  from4to8: Boolean,
  from8to12: Boolean,
  from12to16: Boolean,
  from16to20: Boolean,
  from20to24: Boolean,
});

const contactModel = mongoose.model("Contact", contactSchema);

module.exports = contactModel;