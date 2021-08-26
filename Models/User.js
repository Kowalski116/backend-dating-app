const mongoose = require('mongoose')

const userSchema = mongoose.Schema({
    id: String,
    firstName: String,
    lastName: String,
    gender: String,
    email: String,
    dateOfBirth: String,
    phone: String,
    like: [String],
    pass: [String]

}, {
    timestamps: true,
});

const User = mongoose.model('users', userSchema);

module.exports = User;