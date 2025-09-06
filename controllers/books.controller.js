
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

const BookUpdated = async(req,res) =>{
  try{
     const updatedBook = await Book.findByIdAndUpdate(
    req.params.id,
    req.body,
    {new:true}
  )
  res.json(updatedBook).save();
}
catch(error){
  res.status(400).json({msg:error.message});
}
 
}
const BookDeleted = async (req, res) => {
  try {
    const deletedBook = await Book.findByIdAndDelete(req.params.id);
     res.json(deletedBook);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

module.exports = {
  BookCreated,
  BookFetched,
  BookFetchedByTitle,
  BookUpdated,
  BookDeleted
};