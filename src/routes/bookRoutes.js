const express = require("express")
const router = express.Router()
const bookUrl = "/books"
const bookService = require("../service/bookService")

router.get(bookUrl, async (req,res) =>{
    //controll a get request
    try{
       const allBooks = await bookService.getAllBooks();
       res.json(allBooks)
    }catch(er){
        console.error(er)
        res.status(500).send("Internal Server error")
    }
});

router.post(bookUrl, async (req,res)=>{
    try{
        console.log("Incoming Book Data...",req.body)
        await bookService.addBook(req.body);
        res.status(201).send("Saved Successfully")
    }catch(er){
        console.error(er)
        res.status(500).send("Internal Server error")
    }
})

router.patch(bookUrl, async (req,res)=>{
    try{
        await bookService.updateBook();
        res.status(204).send("Update Book!!")
    }catch(er){
        console.error(er)
    }
})

router.delete(bookUrl, async (req,res)=>{
    try{
        await bookService.deleteBook();
        res.status(204).send("Delete Book!!")
    }catch(er){
        console.error(er)
    }
})

module.exports = router;