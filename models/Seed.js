const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const seedSchema = new Schema (
    {
        email: String,
        commonName: String,
        // userID: {
        //     type: Schema.Types.ObjectId,
        //     ref: "users",
        //     required: true
        // },
        // plantId: {
        //     type: Schema.Types.ObjectId,
        //     ref: "plants",
        //     required: true
        // },

        latinName: String,
        variety: String,

        myNotes: String,

        isForTrade: {
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

const seedModel = mongoose.model("Seed", seedSchema);
module.exports = seedModel;

// commonName: String,
// latinName: String,

// isOpenPollinated: Boolean,
// isHeirloom: Boolean,
// isHybrid: Boolean,
// isMedicinal: Boolean,
// isEdible: Boolean,
// edibleParts: String,
// // the following is for plant api reference, to insert later:
// id: Number
