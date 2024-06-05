import React, { useEffect, useState } from "react";
import axios from "axios";

function App() {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    axios
      .get("http://127.0.0.1:8000/api/movies/")
      .then((response) => {
        setMovies(response.data);
      })
      .catch((error) => {
        console.error("There was an error fetching the movies!", error);
      });
  }, []);

  return (
    <div className="App">
      <h1>Movie List</h1>
      <ul>
        {movies.map((movie) => (
          <li key={movie.id}>
            {movie.title} - {movie.description}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
