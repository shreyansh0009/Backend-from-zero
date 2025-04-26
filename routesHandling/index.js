const express = require('express');
const path = require('path');
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(express.static(path.join(__dirname, 'public')));
app.set('view engine', 'ejs');

app.get('/', function (req, res) {
    res.render('index');
});

app.get('/home', function (req, res) {
    res.render('home');
});

// All above routes are working fine and they are static routes
// Now we will create a dynamic route
// First we have to find the repeated part of URL, after that we will create a dynamic route

app.get('/home/:username', function (req, res) {
    const username = req.params.username; // the dynamic text is stored in req.params
    res.send(`Hello ${username}, welcome to the home page!`);
}); 
// here username is a dynamic part of the URL which is seperated by a colon(:)

app.listen(3000);
console.log('Server is running on port 3000');