const express = require( 'express' );
const app = express(); // creates an instance of an express application
const volleyball = require('volleyball')

app.listen(3000, function(){
    console.log("server listening")
})

app.use(volleyball)

app.use(function (req, res, next) {
    //console.log(req);
    console.log(req.method, req.url);
    //res.send(req.url)// do your logging here
    next();// call `next`, or else your app will be a black hole — receiving requests but never properly responding
})

app.get('/', function(req, res, next){
    res.send('Welcome to our Homepage')
})

app.get('/news', function(req, res, next){
    res.send('Welcome to our News Homepage')
})