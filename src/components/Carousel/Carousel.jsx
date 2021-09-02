import AliceCarousel from "react-alice-carousel";
import "react-alice-carousel/lib/alice-carousel.css";
import { CarouselContainer } from "./CarouselStyle";
const imageFromAPI = "https://image.tmdb.org/t/p/original/";
const handleDragStart = (e) => e.preventDefault();
const Carousel = ({ trending }) => {
  const items = trending.map((item) => (
    <CarouselContainer className="">
      <div className="item">
        <img
          src={`${imageFromAPI}/${item.backdrop_path}`}
          alt={item.name}
          onDragStart={handleDragStart}
        />

        <span className="title">{item.media_type === "tv" ? item.name : item.title}</span>
      </div>
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
      autoPlayInterval={2000}
      fadeOutAnimation={true}
    />
  );
};
export default Carousel;
