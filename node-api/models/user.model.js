const mongoose = require('mongoose')

const UserSchema = mongoose.Schema({
    email: {
        type: String,
        required: [true, "Please enter your email"],
        unique: true,
    } ,
    userName: {
        type: String,
        required: [true, "Please enter your userName"],
        unique: true
    } ,
    contact: {
        type: String,
        required: [true, "Please enter your contact"],
        unique: true
    }
})

const User = mongoose.model("User", UserSchema)
module.exports = User