import React, { useState, useEffect } from "react";
import axios from "axios";
import Card from "../../components/Card/Card";
import { MoviesContainer } from "./MovieStyle";
import CustomPagination from "../../components/Pagination/Pagination";
import ListOfCategories from "../../components/Category/ListOfCategories";
import ReactPlayer from "react-player";
import Loader from "../../components/Loader/Loader";
import { ContainerReactPlayer } from "../../components/ReactPlayerStyle";

const Movies = () => {
  const [movies, setMovies] = useState([]);
  const [page, setPage] = useState(1);
  const [numberOfPage, setNumberOfPage] = useState();
  const [genreId, setGenreId] = useState("");
  const [loading, setLoading] = useState(true);

  const fetchMovies = async () => {
    setLoading(true);

    const { data } = await axios.get(
      `https://api.themoviedb.org/3/discover/movie?api_key=${process.env.REACT_APP_API_KEY}&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&with_genres=${genreId}&page=${page}&with_watch_monetization_types=flatrate`
    );
    setLoading(false);

    setMovies(data.results);
    console.log(data.results)
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
      <div
        id="carouselExampleCrossfade"
        className="carousel slide carousel-fade videos"
        data-mdb-ride="carousel"
      >
        <div className="carousel-indicators">
          <button
            type="button"
            data-mdb-target="#carouselExampleCrossfade"
            data-mdb-slide-to="0"
            class="active"
            aria-current="true"
            aria-label="Slide 1"
          ></button>
          <button
            type="button"
            data-mdb-target="#carouselExampleCrossfade"
            data-mdb-slide-to="1"
            aria-label="Slide 2"
          ></button>
          <button
            type="button"
            data-mdb-target="#carouselExampleCrossfade"
            data-mdb-slide-to="2"
            aria-label="Slide 3"
          ></button>
        </div>
        <div class="carousel-inner">
          <div class="carousel-item active">
            <ContainerReactPlayer>
              <ReactPlayer
                controls={true}
                url={`https://www.youtube.com/watch?v=1Q8fG0TtVAY&t=21s`}
                className="w-100 "
                height="600px"
              />
            </ContainerReactPlayer>
          </div>
          <div class="carousel-item">
            <ContainerReactPlayer>
              <ReactPlayer
                controls={true}
                url={`https://www.youtube.com/watch?v=jCFWEzIVILc`}
                className="w-100 "
                height="700px"
              />
            </ContainerReactPlayer>
          </div>
          <div class="carousel-item">
            <ContainerReactPlayer>
              <ReactPlayer
                controls={true}
                url={`https://www.youtube.com/watch?v=odM92ap8_c0&t=30s`}
                className="w-100 "
                height="600px"
              />
            </ContainerReactPlayer>
          </div>
        </div>
        <button
          class="carousel-control-prev"
          type="button"
          data-mdb-target="#carouselExampleCrossfade"
          data-mdb-slide="prev"
        >
          <span class="carousel-control-prev-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Previous</span>
        </button>
        <button
          class="carousel-control-next"
          type="button"
          data-mdb-target="#carouselExampleCrossfade"
          data-mdb-slide="next"
        >
          <span class="carousel-control-next-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Next</span>
        </button>
      </div>

      <ListOfCategories
        onClickShowCategory={onClickShowCategory}
        mediaType="movie"
      />
      <MoviesContainer className="container d-flex">
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
      </MoviesContainer>
      {numberOfPage > 1 && (
        <CustomPagination setPage={setPage} numberOfPage={numberOfPage} />
      )}
    </div>
  );
};

export default Movies;
