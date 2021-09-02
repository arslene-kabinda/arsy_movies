
import axios from "axios";
import { useState, useEffect } from "react";
import { Card } from "@material-ui/core";

const Popular = () => {
  const [movies, setMovies] = useState([]);

  const fetchPopularMovies = async () => {
    const { data } = await axios.get(
      `https://api.themoviedb.org/3/movie/popular?api_key=${process.env.REACT_APP_API_KEY}&language=en-US&page=1`
    );
    setMovies(data.results.slice(0, 5));
    console.log(data.results);
  };


  useEffect(() => {
    fetchPopularMovies();
  }, []);
  return ()=>{
    <div>
      {movies.map((movie) => (
        <Card
          key={movie.id}
          id={movie.id}
          poster={movie.poster_path}
          title={movie.title || movie.name}
          date={movie.first_air_date || movie.release_date}
          media_type="movie"
          vote_average={movie.vote_average}
        />
      ))}
  
 
    </div>}
    
  ;
};

export default Popular;
