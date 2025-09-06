const express = require("express");
const { BookCreated,  BookFetchedById,BookFetched ,BookFetchedByTitle,BookUpdated, BookDeleted } = require("../controllers/books.controller.js");
const router = express.Router();


//create a book
router.post("/",BookCreated );

//fetch all books
router.get("/",BookFetched );

//fetch a book
router.get("/:id", BookFetchedById);
//fetch a book by title
router.get("/title/:title", BookFetchedByTitle);

//update a book
router.put("/:id", BookUpdated);

//delete a book
router.delete("/:id",BookDeleted );

module.exports = router;
