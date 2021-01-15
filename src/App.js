import { useState, useEffect } from "react";
import axios from "axios";
import Movie from "./Movie";
import "./App.css";

function App() {
  const [isLoading, setIsLoading] = useState(true);
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    (async () => {
      const {data: {data: {movies}}} = await axios.get("https://yts-proxy.now.sh/list_movies.json?sort_by=rating");
      setMovies(movies);
    })();
    setIsLoading(false);
  }, []);
  
  return (
    <section className="container">
      {isLoading ? (
        <div class="loader">
          <span class="loader__text">"Loading..."</span>
        </div>
       ) : (
        <div class="movies">
          { movies.map(movie => (
            <Movie 
              key={movie.id}
              id={movie.id}
              year={movie.year}
              title={movie.title}
              summary={movie.summary}
              poster={movie.medium_cover_image}
              genres={movie.genres}
            />
          ))}
        </div>
      )}
    </section>
  );
}

export default App;
