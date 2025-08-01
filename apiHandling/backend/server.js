import express from 'express'
import 'dotenv/config'

const app = express();

const jokes = [
  {
    "id": 1,
    "title": "Why don't scientists trust atoms?",
    "content": "Because they make up everything!"
  },
  {
    "id": 2,
    "title": "Parallel lines",
    "content": "Parallel lines have so much in common. It’s a shame they’ll never meet."
  },
  {
    "id": 3,
    "title": "Elevator joke",
    "content": "I told my friend 10 jokes to get him to laugh. Sadly, no pun in ten did."
  },
  {
    "id": 4,
    "title": "Time flies",
    "content": "Time flies like an arrow. Fruit flies like a banana."
  },
  {
    "id": 5,
    "title": "Math joke",
    "content": "Why was the equal sign so humble? Because it knew it wasn’t less than or greater than anyone else."
  }
]

app.get('/', (req, res) => {
    res.send("Hello from back-end!");
})

app.get('/api/jokes', (req, res) => {
    res.send(jokes);
    //now will render these jokes on front-end
})

app.listen(process.env.PORT || 3000);