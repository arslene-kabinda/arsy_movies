import { HomeContainer } from "./HomeStyle";
import axios from "axios";
import { useState, useEffect } from "react";
import Carousel from "../../components/Carousel/Carousel";
import Loader from "../../components/Loader/Loader";
const imageFromAPI = "https://image.tmdb.org/t/p/original";

const unavailable = "https://www.movienewz.com/img/films/poster-holder.jpg";
const Home = () => {
  const [trending, setTrending] = useState([]);
  const [popularmovies, setPopularMovies] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchTrending = async () => {
    setLoading(true);

    const { data } = await axios.get(
      `https://api.themoviedb.org/3/trending/all/day?api_key=${process.env.REACT_APP_API_KEY}`
    );
    setLoading(false);
    setTrending(data.results.slice(0, 12));
    console.log(data.results);
  };

  const fetchPopularMovies = async () => {
    setLoading(true);
    const { data } = await axios.get(
      `https://api.themoviedb.org/3/movie/popular?api_key=${process.env.REACT_APP_API_KEY}&language=en-US&page=1`
    );
    setLoading(false);
    setPopularMovies(data.results.slice(5, 15));
    console.log(data.results);
  };

  useEffect(() => {
    fetchTrending();
    fetchPopularMovies();
  }, []);
  return (
    <>
      <HomeContainer className="container">
        <h1>
          <span>Tren</span>ding <span>!</span>{" "}
        </h1>
        {loading ? <Loader /> : <Carousel trending={trending} />}
        <div className="container flex ">
          {popularmovies.map((popularmovie) => (
            <div className="card">
              <img
                className="card_content"
                src={
                  popularmovie.poster_path
                    ? `${imageFromAPI}/${popularmovie.poster_path}`
                    : unavailable
                }
                alt={popularmovie.title}
              />
            </div>
          ))}
        </div>
      </HomeContainer>
    </>
  );
};

export default Home;
