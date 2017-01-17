const express = require( 'express' );
const app = express(); // creates an instance of an express application
const volleyball = require('volleyball')
const nunjucks = require('nunjucks')
// const people = [{name: 'Full'}, {name: 'Stacker'}, {name: 'Son'}];

const routes = require('./routes/');

app.use(volleyball)

app.use('/', routes);

app.listen(3000, function(){
    console.log("server listening")
})

// app.use(function (req, res, next) {
//     console.log(req.method, req.url); // do your logging here
//     next();// call `next`, or else your app will be a black hole — receiving requests but never properly responding
// })

// app.get('/', function(req, res, next){
//     res.send('Welcome to our Homepage');
// })

// app.get('/halloffame', function(req, res, next){
//     res.render( 'index', {title: 'Hall of Fame', people: people} );
// })

// app.get('/news', function(req, res, next){
//     res.send('Welcome to our News Homepage')
// })

// in some file that is in the root directory of our application... how about app.js?
var locals = {
    title: 'An Example',
    people: [
        { name: 'Gandalf'},
        { name: 'Frodo' },
        { name: 'Hermione'}
    ]
};
nunjucks.configure('views', {noCache: true});
nunjucks.render('index.html', locals, function (err, output) {
    console.log(output);
});

app.engine('html', nunjucks.render)// when giving html files to res.render, tell it to use nunjucks
app.set('view engine', 'html') // have res.render work with html files
nunjucks.configure('views')// point nunjucks to the proper directory for templates
