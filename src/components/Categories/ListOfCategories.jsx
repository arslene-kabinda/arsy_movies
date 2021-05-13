import React from "react";
import { useState, useEffect } from "react";
import CaregoryItem from "./CategoryItem";
import axios from "axios";

const ListOfCategories = ({ onClickShowCategory, mediaType }) => {
  const [categories, setCategories] = useState([]);
  const fetchCategories = async () => {
    const { data } = await axios.get(
      `https://api.themoviedb.org/3/genre/${mediaType}/list?api_key=${process.env.REACT_APP_API_KEY}&language=en-US`
    );
    setCategories(data.genres);
  };
  useEffect(() => {
    fetchCategories();
  }, []);
  return (
    <div>
      <h1 className="text-align"></h1>
      <div className="container  text-align">
        <div className="row  justify-content-md-center">
          {categories.map((categorie) => (
            <CaregoryItem
              key={categorie.id}
              {...categorie}
              onClickShowCategory={onClickShowCategory}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default ListOfCategories;
