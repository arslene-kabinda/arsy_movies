import React from "react";
//import MovieDetails from "../../pages/Movies/MovieDetails";
//import { CardContainer } from "./CardStyle";
import "./card.css";
import ModalContent from "./Modal/Modal";
const imageFromAPI = "https://image.tmdb.org/t/p/w200";
const unavailable = "https://www.movienewz.com/img/films/poster-holder.jpg";

const Card = ({ id, poster, title, date, media_type, vote_average }) => {
  return (
    <ModalContent id={id} media_type={media_type}>
      <img
        src={poster ? `${imageFromAPI}/${poster}` : unavailable}
        alt={title}
      />
      <div className="d-flex">
        <div>
          <p>{media_type}</p>
          <p>{date}</p>
        </div>
        <div className="vote">
          <p>{vote_average}</p>
        </div>
      </div>
      <button className="btn btn-info">See More Infos</button>
    </ModalContent>
  );
};

export default Card;
