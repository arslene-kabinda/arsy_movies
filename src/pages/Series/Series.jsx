import React, { useState, useEffect } from "react";
import axios from "axios";
import Card from "../../components/Card/Card";
import { SeriesContainer } from "./SeriesStyle";
import CustomPagination from "../../components/Pagination/Pagination";
import ListOfCategories from "../../components/Categories/ListOfCategories";

const Series = () => {
  const [series, setSeries] = useState([]);
  const [page, setPage] = useState(1);
  const [numberOfPage, setNumberOfPage] = useState();
  const [genreId, setGenreId] = useState("");
  const fetchSeries = async () => {
    const { data } = await axios.get(
      `https://api.themoviedb.org/3/discover/tv?api_key=${process.env.REACT_APP_API_KEY}&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&with_genres=${genreId}&page=${page}`
    );
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
      <ListOfCategories
        onClickShowCategory={onClickShowCategory}
        mediaType="tv"
      />
      <SeriesContainer className="container d-flex">
        {series.map((serie) => (
          <Card
            key={serie.id}
            id={serie.id}
            poster={serie.poster_path}
            title={serie.name}
            date={serie.first_air_date}
            media_type="tv"
            vote_average={serie.vote_average}
          />
        ))}
      </SeriesContainer>
      {numberOfPage > 1 && (
        <CustomPagination setPage={setPage} numberOfPage={numberOfPage} />
      )}
    </div>
  );
};

export default Series;
