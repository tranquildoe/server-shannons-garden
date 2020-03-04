const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const seedInstanceSchema = new Schema (
    {
        userID: {
            type: Schema.Types.ObjectId,
            ref: "users",
            required: true
        },
        plantId: {
            type: Schema.Types.ObjectId,
            ref: "plants",
            required: true
        },

        variety: String,

        myNotes: String,

        forTrade: {
            type: Boolean,
            default: false
        },
        isOpenPollinated: Boolean,
        isHeirloom: Boolean,
        isHybrid: Boolean,
        isMedicinal: Boolean,
        isEdible: Boolean,
        edibleParts: String,   
    }
);

const seedInstanceModel = mongoose.model("SeedInstance", seedInstanceSchema);
module.exports = seedInstanceModel;