const express = require("express");
const router = express.Router();

//create a book
router.post('/', (req,res) =>{
  res.send("book is created");
})

//fetch a book
router.get('/:id', (req,res) =>{
  res.send("book get fetched");
})

//update a book
router.put('/:id', (req,res) =>{
  res.send("books are updated");
})

//delete a book
router.delete('/:id', (req,res) => {
  res.send("book got deleted");
})

module.exports = router;
