async function getAllBooks(){
   console.log("Get All Books")
}

async function addBook(book){
    console.log("Add Book")
}


async function updateBook(bookId,book){
    console.log("Update Book")
}


async function deleteBook(bookId){
    console.log("Delete Book")
}

module.exports = { getAllBooks,addBook,updateBook,deleteBook }