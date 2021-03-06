const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const plantSchema = new Schema (
    {
        commonName: String,
        latinName: String,
        
        isOpenPollinated: Boolean,
        isHeirloom: Boolean,
        isHybrid: Boolean,
        isMedicinal: Boolean,
        isEdible: Boolean,
        edibleParts: String,
        // the following is for plant api reference, to insert later:
        id: Number
        
       
    }
);
// Need "plants" here so routing for addSeedInstancePage will work (see seeds.js line 12 (PH)):
const plantModel = mongoose.model("plants", plantSchema);
module.exports = plantModel;