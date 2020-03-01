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
                // seedId: ObjectId,
                // ref: Seed,
                forTrade: {
                    type: Boolean,
                    default: false
                }
            }
        ],
        myWishList: [
            {
                // seedId: ObjectId,
                // ref: Seed  
            }
        ]    
    }
);

const userModel = mongoose.model("User", userSchema);
module.exports = userModel;