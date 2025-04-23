const express = require('express');
const app = express();

// Middleware: A function that has access to the request object (req), the response object (res). We can say that it's a function or middle part between request and response cycle.
// By using middleware, we can perform some operations on the request object before it reaches the route handler, and same for the response object.

app.use(function(req, res, next) {
  console.log('Middleware function called!');
  next();
});

app.get('/', function(req, res) {
    res.send('This is Home!');
    }
);

app.get('/about', function(req, res) {
    res.send('chal na laude, apna kam kar');
    }
);

app.listen(3000);
  