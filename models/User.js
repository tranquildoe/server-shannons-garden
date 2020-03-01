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
            unique: true
        },
        username: {
            type: String,
            unique: true   
        },
        about: String,
        avatarUrl: {
            type: String,
            default: 'images/defaultAvatar.png'
        },

        
        // const userSchema = new Schema({
        //     email: {
        //       type: String
        //     },
        //     username: {
        //       type: String
        //     },
        //     avatarUrl: {
        //       type: String,
        //       default: 'images/default-avatar.png'
        //     }
        //   });

        password: String,
        confirmPassword: String,
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