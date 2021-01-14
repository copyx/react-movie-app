import { useState, useEffect } from "react";
import axios from "axios";
import Movie from "./Movie";

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
    <div className="App">
      {isLoading ? "Loading..." : movies.map(movie => {
        console.log(movie);
        return <Movie key={movie.id} year={movie.year} title={movie.title} summary={movie.summary} poster={movie.medium_cover_image} />
      })}
    </div>
  );
}

export default App;
