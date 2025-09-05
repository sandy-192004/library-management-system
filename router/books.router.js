const express = require("express");
const { BookCreated,  BookFetched,BookUpdated, BookDeleted } = require("../controllers/books.controller.js");
const router = express.Router();


//create a book
router.post("/",BookCreated );

//fetch a book
router.get("/:id", BookFetched);

//update a book
router.put("/", BookUpdated);

//delete a book
router.delete("/:id",BookDeleted );

module.exports = router;
