// This script demonstrates how to create a file using Node.js.

// const fs = require('fs');

// fs.writeFile('file.txt', 'Hello, world!', function (err) {
//     if (err) {
//         return console.error(err);
//     }
//     console.log('File created successfully!');
//     }
// );



// This script demonstrates how to add content to an existing file using Node.js.

const fs = require('fs');
fs.appendFile('file.txt', ' This is a new line.', function (err) {
    if (err) {
        return console.error(err);
    }
    console.log('Content added successfully!');
    }
);


// This script demonstrates how to rename a file using Node.js.

fs.rename('file.txt', 'text.txt', function (err) {
    if (err) {
        return console.error(err);
    }
    console.log('File renamed successfully!');
    }
);

// This script demonstrates how to copy a file using Node.js.

fs.copyFile('text.txt', 'copy.txt', function (err) {
    if (err) {
        return console.error(err);
    }
    console.log('File copied successfully!');
    }
);

// This script demonstrates how to delete a file using Node.js.

fs.unlink('copy.txt', function (err) {
    if (err) {
        return console.error(err);
    }
    console.log('File deleted successfully!');
    }
); // copy.txt file deleted successfully!