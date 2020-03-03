const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const seedSchema = new Schema (
    {
        commonName: String,
        latinName: String,
        variety: String,
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

const seedModel = mongoose.model("Seeds", seedSchema);
module.exports = seedModel;