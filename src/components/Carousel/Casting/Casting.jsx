import axios from "axios";
import React, { useEffect, useState } from "react";
import AliceCarousel from "react-alice-carousel";
import "react-alice-carousel/lib/alice-carousel.css";
import { CarouselItem } from "./CastingStyle";
const handleDragStart = (e) => e.preventDefault();
const Carousel = ({ id, media_type }) => {
  const [credits, setCredits] = useState([]);
  const noPicture =
    "https://upload.wikimedia.org/wikipedia/en/6/60/No_Picture.jpg";
  const fetchCredits = async () => {
    const { data } = await axios.get(
      `https://api.themoviedb.org/3/${media_type}/${id}/credits?api_key=${process.env.REACT_APP_API_KEY}&language=en-US`
    );
    setCredits(data.cast);
  };
  useEffect(() => {
    fetchCredits();
    // eslint-disable-next-line
  }, []);
  const cast = credits.map((credit) => (
    <CarouselItem>
      <img
        src={
          credit.profile_path
            ? `https://image.tmdb.org/t/p/w300${credit.profile_path}`
            : noPicture
        }
        alt={credit?.name}
        onDragStart={handleDragStart}
        className="carousel-img"
      />
      <h6 className="carousel-actor">{credit?.name}</h6>
    </CarouselItem>
  ));
  const responsive = {
    0: {
      items: 3,
    },
    512: {
      items: 5,
    },
    1024: {
      items: 7,
    },
  };
  return (
    <AliceCarousel
      mouseTracking
      infinite
      disableDotsControls
      disableButtonsControls
      responsive={responsive}
      items={cast}
      autoPlay
    />
  );
};
export default Carousel;
