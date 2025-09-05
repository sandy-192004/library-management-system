
const Book = require( "../models/book.Model.js");

 const BookCreated = async(req,res) =>{
  
//create a model instance
const newBook = new Book({
    title : req.body.title,
    author : req.body.author,
    category : req.body.category, 
    isbn : req.body.isbn,
    published_year : req.body.published_year,
    publisher : req.body.publisher, 
    total_copies : req.body.total_copies,
    location : req.body.location
});
try{
  const book = await newBook.save();
  return res.status(200).json(book);
}
catch(error){
  return res.status(404).json({msg : error.message});
}

};

const BookFetched = (req,res) =>{
  res.send("book get fetched");
}

const BookUpdated = (req,res) =>{
  res.send("books are updated");
}
const BookDeleted = (req,res) => {
  res.send("book got deleted");
}   

module.exports = {
  BookCreated,
  BookFetched,
  BookUpdated,
  BookDeleted
};