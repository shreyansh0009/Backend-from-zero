import express from 'express'

const app = express();

app.get('/', (req, res) => {
    res.send("Hello from back-end!")
})

app.listen(3000);