import React from "react";

const CategorieMovies = ({ name, id, onClickShowCategory }) => {
  return (
    <button className="btn-secondary" onClick={() => onClickShowCategory(id)}>
      {name}
    </button>
  );
};

export default CategorieMovies;
