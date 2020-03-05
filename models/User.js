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
            default: '/images/defaultAvatar.png'
        },
        // UK postal codes have letters in them - figure this out later
        zipCode: {
            type: Number,
            required: true
        },
        password: {
            type: String,
            required: true
        },
    }
);

const userModel = mongoose.model("User", userSchema);
module.exports = userModel;