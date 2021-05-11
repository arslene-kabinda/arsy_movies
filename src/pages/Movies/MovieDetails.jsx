import React from "react";
const imageFromAPI = "https://image.tmdb.org/t/p/w200";
const unavailable = "https://www.movienewz.com/img/films/poster-holder.jpg";

const MovieDetails = ({
  id,
  poster,
  title,
  date,
  media_type,

  overview,
}) => {
  return (
    <div className ="d-flex">
      <div>
        <img src={poster ? `${imageFromAPI}/${poster}` : unavailable}   alt={title}/>
        
      
      </div>
      <div>
        <h1>{title}</h1>
        <p>{date}</p>
        <p>{media_type}</p>
        <p>{overview}</p>
      </div>
    </div>
  );
};

export default MovieDetails;
