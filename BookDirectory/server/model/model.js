const mongoose = require('mongoose');

var BookSchema = new mongoose.Schema({
    bookname:{
        type:String,
        required:true,
    },

    author:{
        type:String,
        required:true
        //unique:true
    },

    status: {
        type: String
    }

})

module.exports = mongoose.model('BookModel',BookSchema,'book');