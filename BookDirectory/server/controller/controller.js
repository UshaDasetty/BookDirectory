const BookModel = require('../model/model')

// create and save a new book 
exports.create = (req,res) => {

    // validate request
    if(!req.body){
        res.status(400).send({message:"content cannot be empty!!!"});
        return;
    }

    // new Book
    const BookObj = BookModel({
        bookname: req.body.bookname,
        author: req.body.author,
        status: req.body.status
    })

    // save book in the database
    BookObj
    .save(BookObj)
    .then(data => {
        res.send(data)
    })
    .catch(err => {
        res.status(500).send({
            message: err.message || "Some error occurred while creating a create operation"
        });
    });
}


//retrieve and return all books & retrieve and return single book
exports.Return = (req,res) => {
    
        // retrive and return single book
    if(req.query.id){
        const id = req.query.id;

        BookModel.findById(id)
        .then(data => {
            if(!data){
                res.status(404).send({message:`Not found book with id ${id}`}); 
            }else{
                res.send(data)
            }
        })
        .catch(err => {
            res.status(500).send({message:`Error retrieving book with id ${id}`})
        })

        // retrive and return all books
    }else{
        BookModel.find()
        .then(BookObj => {
            res.send(BookObj)
        })
        .catch(err => {
            res.status(500).send({message:err.message || "Error occured while retrieving book information"});
        })
    }
    
}


//Update a new identified book by book id
exports.update = (req,res) => {
    if(!req.body){
        res.status(400).send({message:"Data to update cannot be empty!!!"});
        return;
    }

    const id = req.params.id;
    BookModel.findByIdAndUpdate(id, req.body,{useFindAndModify:false})
    .then(data => {
        if(!data){
            res.status(400).send({message:`Cannot Update book with ${id}. Maybe book not found`});  
        }else{
            res.send(data);
        }
    })
    .catch(err => {
        res.status(400).send({message:err});
    })
}


//Delete a book with specified book id in the request
exports.delete = (req,res) => {
    const id = req.params.id;
    BookModel.findByIdAndDelete(id)
    .then(data => {
        if(!data){
            res.status(400).send({message:`Cannot delete book with ${id}. Maybe id is wrong`});  
        }else{
            res.send({message:`Book with id ${id} was deleted successfully`});
        }
    })
    .catch(err => {
        res.status(400).send({message:`Cannot delete book with id ${id}`});
    })
}