const express = require('express');

const app = express();

// '/' is the home route
app.get('/', function(req, res) {
  res.send('This is Home!');
})

// '/about' is the about route
app.get('/about', function(req, res) {
  res.send('chal na laude, apna kam kar');
})

// This is how we can use express for routing on different paths.


app.listen(3000)