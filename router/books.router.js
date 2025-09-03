const express = require("express");
const { BookCreated,  BookFetched,BookUpdated, BookDeleted } = require("../controllers/books.controller");
const router = express.Router();


//create a book
router.post("/",BookCreated );

//fetch a book
router.get("/", BookFetched);

//update a book
router.put("/:id", BookUpdated);

//delete a book
router.delete("/:id",BookDeleted );

module.exports = router;
