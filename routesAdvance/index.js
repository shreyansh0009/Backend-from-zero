const express = require('express');
const path = require('path');
const fs = require('fs');
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'public')));

app.set('view engine', 'ejs');

app.get('/', function (req, res) {
    fs.readdir(`./files`, function (err, files) {
        console.log(files);
        if (err) {
            console.error(err);
        }
        res.render("index", {files: files});
    });
});

app.listen(3000);