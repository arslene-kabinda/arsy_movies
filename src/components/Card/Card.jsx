import React from "react";
import { Badge } from "@material-ui/core";

import "./card.css";
import ModalContent from "./Modal/Modal";
const imageFromAPI = "https://image.tmdb.org/t/p/original";
const unavailable = "https://www.movienewz.com/img/films/poster-holder.jpg";

const Card = ({ id, poster, title, date, media_type, vote_average }) => {
  return (
    <ModalContent id={id} media_type={media_type}>
      <Badge
        badgeContent={vote_average}
        color={vote_average > 6 ? "primary" : "secondary"}
        className="badge"
      />
      <div className="bg">
        {" "}
        <img
          src={poster ? `${imageFromAPI}/${poster}` : unavailable}
          alt={title}
        />
      </div>
      <div className="d-flex">
        <div>
          <span>{title}</span>
          <p>{date}</p>
        </div>
      </div>
      <button className="link ">More Infos</button>
    </ModalContent>
  );
};

export default Card;
