import React, { useState, useEffect } from "react";
import axios from "axios";
import Card from "../../components/Card/Card";
import { MoviesContainer } from "./MovieStyle";
import CustomPagination from "../../components/Pagination/Pagination";
import ListOfCategories from "../../components/Categories/ListOfCategories";

const Movies = () => {
  const [movies, setMovies] = useState([]);
  const [page, setPage] = useState(1);
  const [numberOfPage, setNumberOfPage] = useState();
  const [genreId, setGenreId] = useState("");

  const fetchMovies = async () => {
    const { data } = await axios.get(
      `https://api.themoviedb.org/3/discover/movie?api_key=20805a09b491c1d079296a261a00cc2e&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&with_genres=${genreId}&page=${page}&with_watch_monetization_types=flatrate`
    );
    setMovies(data.results);
    setNumberOfPage(data.total_pages);
  };

  useEffect(() => {
    fetchMovies();
    // eslint-disable-next-line
  }, [page, genreId]);
  const onClickShowCategory = (id) => {
    setGenreId(id);
  };

  return (
    <div>
      <ListOfCategories
        onClickShowCategory={onClickShowCategory}
        mediaType="movies"
      />
      <MoviesContainer className="container d-flex">
        {movies &&
          movies.map((movie) => (
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
      </MoviesContainer>
      {numberOfPage > 1 && (
        <CustomPagination setPage={setPage} numberOfPage={numberOfPage} />
      )}
    </div>
  );
};

export default Movies;
