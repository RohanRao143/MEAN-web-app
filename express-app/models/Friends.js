const mongoose = require('mongoose');

const friendSchema = new mongoose.Schema({
    id: Number,
    name:String,
    hobbies:Array,
    number:Number
},{timestamps:true});

const Friend = mongoose.model('Friend',friendSchema);

module.exports = Friend;