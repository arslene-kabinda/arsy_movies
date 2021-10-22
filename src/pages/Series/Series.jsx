import React, { useState, useEffect } from "react";
import axios from "axios";
import Card from "../../components/Card/Card";
import { SeriesContainer } from "./SeriesStyle";
import CustomPagination from "../../components/Pagination/Pagination";
import Loader from "../../components/Loader/Loader";

import ListOfCategories from "../../components/Category/ListOfCategories";
import ReactPlayer from "react-player";
import { ContainerReactPlayer } from "../../components/ReactPlayerStyle";

const Series = () => {
  const [series, setSeries] = useState([]);
  const [page, setPage] = useState(1);
  const [numberOfPage, setNumberOfPage] = useState();

  const [genreId, setGenreId] = useState("");
  const [loading, setLoading] = useState(true);

  const fetchSeries = async () => {
    setLoading(true);

    const { data } = await axios.get(
      `https://api.themoviedb.org/3/discover/tv?api_key=${process.env.REACT_APP_API_KEY}&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&with_genres=${genreId}&page=${page}`
    );
    setLoading(false);
    setSeries(data.results);
    setNumberOfPage(data.total_pages);
  };

  useEffect(() => {
    fetchSeries();
    // eslint-disable-next-line
  }, [page, genreId]);
  const onClickShowCategory = (id) => {
    setGenreId(id);
  };

  return (
    <div>
      <div
        id="carouselExampleCrossfade"
        class="carousel slide carousel-fade"
        data-mdb-ride="carousel"
      >
        <div class="carousel-indicators">
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
                url={`https://www.youtube.com/watch?v=bPYnXiOVTvQ`}
                className="w-100  video"
                height="600px"
              />
            </ContainerReactPlayer>
          </div>
          <div class="carousel-item">
            <ContainerReactPlayer>
              <ReactPlayer
                controls={true}
                url={`https://www.youtube.com/watch?v=Uq0soWMpkv8`}
                className="w-100 "
                height="700px"
              />
            </ContainerReactPlayer>
          </div>
          <div class="carousel-item">
            <ContainerReactPlayer>
              <ReactPlayer
                controls={true}
                url={`https://www.youtube.com/watch?v=O67fpWFoz3w`}
                className="w-100 "
                height="700px"
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
      <SeriesContainer className="container d-flex">
        {loading ? (
          <Loader />
        ) : (
          series.map((serie) => (
            <Card
              key={serie.id}
              id={serie.id}
              poster={serie.poster_path}
              title={serie.name}
              date={serie.first_air_date}
              media_type="tv"
              vote_average={serie.vote_average}
            />
          ))
        )}
      </SeriesContainer>
      {numberOfPage > 1 && (
        <CustomPagination setPage={setPage} numberOfPage={numberOfPage} />
      )}
    </div>
  );
};

export default Series;
