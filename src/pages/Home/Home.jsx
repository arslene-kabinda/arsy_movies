import { HomeContainer } from "./HomeStyle";
import axios from "axios";
import { useState, useEffect } from "react";
import Carousel from "../../components/Carousel/Carousel";
const Home = () => {
  const [trending, setTrending] = useState([]);

  const fetchTrending = async () => {
    const { data } = await axios.get(
      `https://api.themoviedb.org/3/trending/all/day?api_key=${process.env.REACT_APP_API_KEY}`
    );
    setTrending(data.results.slice(0, 20));
    console.log(data.results);
  };

  useEffect(() => {
    fetchTrending();
  }, []);
  return (
    <HomeContainer className="container">
      <h1>Welcome to Arsy Movies</h1>
      <Carousel trending={trending} />
    </HomeContainer>
  );
};

export default Home;
