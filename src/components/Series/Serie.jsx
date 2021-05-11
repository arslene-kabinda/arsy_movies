import React from "react";

const imageFromAPI = "https://image.tmdb.org/t/p/w500";

const Serie = ({
  id,
 name,
  poster_path,
  overview,
  popularity,
  release_data,
  vote_average,
  vote_count,
  original_language,
}) => {
  return (
    

      <div className="col-3 card m-2">
        <img src={imageFromAPI + poster_path} />
        {/* <span>{id} </span> */}
        <p>Tv Show</p>
        <h3> {name}</h3>
        <p>Available on digital now </p> 

        {/* <p>{overview}</p> */}
        {/* <span>{popularity}</span> */}
        {/* <span>{release_data}</span> */}
        {/* <span>{vote_average}</span> */}
        {/* <span>{vote_count}</span> */}
        {/* <span>{original_language}</span> */}
      </div>
    
  );
};

export default Serie;

