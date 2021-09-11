const axios = require('axios');


exports.homeRouter = (req, res) => {
    //make a get request to /api/books
    axios.get('http://localhost:5252/api/books')
    .then(function (response) {
        console.log(response)
        res.render('index', {book:response.data});
    })
    .catch(err => {
        res.send(err);
    })
    
}

exports.add_book = (req, res) => {
    res.render('add_book');
}

exports.update_book = (req, res) => {
    axios.get('http://localhost:5252/api/books',{params:{id:req.query.id}})
    .then(function (bookdata) {
        res.render('update_book', {BookObj: bookdata.data});
    })
    .catch(function (err) {
        res.send(err)
    })
    
}