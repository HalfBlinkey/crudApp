let mongoose = require('mongoose');
let Book = require('./models/book');

// GET /book,  route to retrieve all books.
function getBooks(req,res){
  //Query the DB and if no errors send all the books
  let query = book.find({});
  query.exec((err, books) =>{
    if(err) res.send(err);
    //if no error send them back to the client
    res.json(books);
  });
}

// Post /book, route to save a new book
function postBoook(req,res){
  //create a new book
  var newBook - new Book(req.body);
  //save it into the DB.
  newBook.save((err,book) =>{
    if(err) res.send(err);
    //if no error send a success message back to the client
    res.json({ message: "Book successfully stored", book});
    }
  })
}

//Get /book/:id , route to retrieve a single entry given its ID
function getBook(req,res){
  Book.findbyid(req.params.id,(err,book)=>{
    if(err) res.send(err)
    //if no error send it back to the client
    res.json(book);
  })
}

//Delete /book/:id, route to delete a book given its // ID
function deleteBook(req,res){
  book.remove({_id: req.params.id}, (err,results)=>{
    if(err) res.send(err)
    //if no error send it back to the client
    res.json({message: "Book successfully deleted", result});
  })
}

//PUT /book/:id, route to update a book given its ID
function updateBook(req,res){
  //find book
  Book.findByid({_id: req.params.id}, (err,book)=>{
    if(err) res.send(err);
    //if no error update book
    //Object.assign is a new function in ES6 which, it
    //overrides the common properties of book with req.body while leaving
    //untouched the others.
    Object.assign(book,req.body).save((err,book)=>{
      if(err) res.send(err)
      //if no error send success response to the client
      res.json({message: "Book successfully updated", book});
    })
  })
}

//eport all functions

module.exports = { getBooks, getBook, postBook, updateBook, deleteBook };
