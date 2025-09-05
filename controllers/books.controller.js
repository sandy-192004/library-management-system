
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
const BookFetched = async (req, res) => {
  try {
    
    const book = await Book.findById(req.params.id);
    res.json(book);
  } catch (error) {
    return res.status(500).json({ msg: error.message });
  }
};
const BookFetchedByTitle = async (req, res) => {
  try {
    const book = await Book.findOne({title:req.params.title});
    res.json(book);
}
catch{
  return res.status(500).json({ msg: error.message });

}
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
  BookFetchedByTitle,
  BookUpdated,
  BookDeleted
};