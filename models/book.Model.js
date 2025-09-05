const { Schema , model} = require("mongoose");

const schema =new Schema({
    title :{
        type : String,
        required: true
    },
    author:{
        type:String,
        required : true
    },
    category:{
        type:String,
        required:true
    },
    isbn:{
        type:String,
        required:true,
        unique:true
    },
    published_year:{
        type:Number,
        required:true
    },
    publisher:{
        type:String,
        required:true
    },
    total_copies:{
        type:Number,
        required: true
    },
    location:{
        type:String,
        required:true
    },

    
    
});
// create model
const Book = model("book",schema);
module.exports = Book;