const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const seedSchema = new Schema (
    {
        commonName: String,
        latinName: String,
        variety: String,
        notes: String,
        isOpenPollinated: Boolean,
        isHeirloom: Boolean,
        isHybrid: Boolean,
        isMedicinal: Boolean,
        isEdible: Boolean,
        // if isEdible == "true", show the following line:
        edibleParts: String,
        
       
    }
);

const seedModel = mongoose.model("Seeds", seedSchema);
module.exports = seedModel;