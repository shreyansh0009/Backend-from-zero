import "./App.css";
import axios from "axios";
import { useEffect, useState } from "react";

function App() {
  const [jokes, setjokes] = useState([]);

  useEffect(() => {
    axios
      .get("/api/jokes")
      .then((res) => {
        setjokes(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  });

  return (
    <>
      <h1>Helloooo from Front-end</h1>
      <h3>JOKES: {jokes.length}</h3>

      {
      jokes.map((joke, index) => (
        <div key={index}>
          <p>{joke.id}</p>
          <h3>{joke.tittle}</h3>
          <p>{joke.content}</p>
        </div>
      ))
      }
    </>
  );
}

export default App;
