const express = require('express');
const cookieParser = require('cookie-parser');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const app = express();
app.use(cookieParser());


// set cookie
app.get('/', (req, res) => {
    res.cookie('name', 'saurabh');
    res.send('Cookie set');
});
// now if we go any route, we will get the cookie because cookie is like a fevistick."ek baar laga diya to sab jagah lagega"

// now how to get the cookie?
//install cookie-parser, require it and use it.

app.get('/read', (req, res) => {
    console.log(req.cookies);
    res.send('Cookie read');
    // { name: 'saurabh' } printed in console
    
});

// now we read about bcrypt.....
// bcrypt is used to hash the password(encryption)
app.get('/enc', (req, res) => {
    // now we will hash the password with salt algorithm
    const password = 'saurabh';
    const saltRounds = 10;
    bcrypt.hash(password, saltRounds, function(err, hash) {
        // Store hash in your password DB.
        console.log(hash);
        res.send("Password hashed");
    });
});

// now we will compare the password with the hash
app.get('/dec', (req, res) => {
    const password = 'saurabh'; // plain text password
    const hash = '$2b$10$tOl24kIg1ho0jfNzn7dtQ.Bman1IyBrxm6CdA/zF6xGynPFo2L2FK'; // this is the hash of password 'saurabh'
    bcrypt.compare(password, hash, function(err, result) {
        console.log(result);
        res.send("Password compared");
    });
});

// now we read about jwt(json web token).
// jwt is used to authenticate the user by setting a token in the cookie.

app.get('/jwt', (req, res) => {
    let token = jwt.sign({email: "saurabh@gmail.com"}, "secret");
    // secret is the key to sign the token. it should be kept secret.
    res.cookie('token', token);
    res.send("JWT token set");
});
// now we will verify the token
app.get('/verify', (req, res) => {
    let data = jwt.verify(req.cookies.token, "secret",);
    console.log(data); // { email: 'saurabh@gmail.com', iat: 1746116405 } printed in console

    res.send("JWT token verified");
});
     

app.listen(3000);