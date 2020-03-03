const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const userSchema = new Schema (
    {
        role: {
            type: String,
            enum: ["admin", "editor", "user"],
            default: "user"
        },
        name: String,
        email: {
            type: String,
            unique: true,
            required: true
        },
        username: {
            type: String,
            unique: true,
            required: true
   
        },
        about: String,
        avatarUrl: {
            type: String,
            default: 'images/defaultAvatar.png'
        },
        zipCode: {
            type: Number,
            required: true
        },
        password: {
            type: String,
            required: true
        },
        confirmPassword: {
            type: String,
            required: true
        },
        mySeedList: [
            {
                // The seedId in the next line references the ObjectId(_id) in the seeds document on MongoDB under shannonsGarden (these exist apart from any users or owners):

                // user: {
                //     type: Schema.Types.ObjectId,
                //     ref: "User",
                //     required: true
                // }
                
                seedId: {
                    type: Schema.Types.ObjectId,
                    ref: "Seeds"
                },
                myNotes: String,

                // Better to just have the following on the seedSchema, I think, then can pull the info from the DB for that seedID

                // commonName: String,
                // latinName: String,
                // variety: String,
                // isOpenPollinated: Boolean,
                // isHeirloom: Boolean,
                // isHybrid: Boolean,
                // isMedicinal: Boolean,
                // isEdible: Boolean,
                // edibleParts: String,
                // the following is for plant api reference, to insert later:
                // id: Number,
                
                forTrade: {
                    type: Boolean,
                    default: false
                },


            }
        ],
        myWishList: [
            {
                  
                seedId: {
                    type: Schema.Types.ObjectId,
                    ref: "Seeds"
                },
                myNotes: String,
            }
        ]    
    }
);

const userModel = mongoose.model("User", userSchema);
module.exports = userModel;