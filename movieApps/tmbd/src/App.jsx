import { useEffect, useState } from "react";
import "./App.css";

function App() {
  const [movies, setMovise] = useState([]);
  const showMovies = () => {
    const options = {
      method: "GET",
      headers: {
        accept: "application/json",
        Authorization:
          "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI2MjkzNTM2MDVlYWI2NzIzYWVlMmY2MmI1NDE4M2Q0OCIsInN1YiI6IjY1NmY1N2Q4ODgwNTUxMDEzYTRhMDQyMSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.2yrG_6wEIgK4kvkPJjBwkRLLhv2sJMA0pUA5DLzkLSg",
      },
    };

    fetch(
      "https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=false&language=en-US&page=1&sort_by=popularity.desc",
      options
    )
      .then((response) => response.json())
      .then((response) => {
        setMovise(response.results);
        console.log(response);
      })
      .catch((err) => console.error(err));
  };
  useEffect(() => {
    showMovies();
  }, []);

  return (
    <>
      <h2>
        {movies.length > 0 ? (
          <div>
            {movies.map((movie) => (
              <li key={movie.id}>{movie.title}</li>
            ))}
          </div>
        ) : (
          <div>not found</div>
        )}
      </h2>
    </>
  );
}

export default App;
