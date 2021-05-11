import AliceCarousel from "react-alice-carousel";
import "react-alice-carousel/lib/alice-carousel.css";
import { CarouselContainer } from "./CarouselStyle";
const imageFromAPI = "https://image.tmdb.org/t/p/w1280";
const handleDragStart = (e) => e.preventDefault();
const Carousel = ({ trending }) => {
  const items = trending.map((item) => (
    <CarouselContainer>
      <img
        src={`${imageFromAPI}/${item.poster_path}`}
        alt={item.name}
        onDragStart={handleDragStart}
      />
      <h1>{item.first_air_date}</h1>
      <h2>{item.media_type === 'tv' ? item.name : item.title }</h2>
    </CarouselContainer>
  ));

  return (
    <AliceCarousel
      mouseTracking
      infinite
        disableDotsControls
        disableButtonsControls
      items={items}
      autoPlay
    />
  );
};
export default Carousel;
