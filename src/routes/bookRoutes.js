const express = require("express")
const router = express.Router()
const bookUrl = "/books"
const bookService = require("../service/bookService")

router.get(bookUrl, async (req,res) =>{
    //controll a get request
    await bookService.getAllBooks();

});

router.post(bookUrl, async (req,res)=>{
    await bookService.addBook();
})

router.patch(bookUrl, async (req,res)=>{
    await bookService.updateBook();
})

router.delete(bookUrl, async (req,res)=>{
    await bookService.deleteBook();
})

module.exports = router;