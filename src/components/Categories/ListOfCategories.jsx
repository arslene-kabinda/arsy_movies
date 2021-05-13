import React from "react";
import { useState, useEffect } from "react";
import CaregoryItem from "./CategoryItem";
import axios from "axios";
import { ContainerStyle } from "./ContainerStyle";

const ListOfCategories = ({ onClickShowCategory, mediaType }) => {
  const [categories, setCategories] = useState([]);
  const fetchCategories = async () => {
    const { data } = await axios.get(
      `https://api.themoviedb.org/3/genre/${mediaType}/list?api_key=${process.env.REACT_APP_API_KEY}&language=en-US&include_adult=false`
    );
    setCategories(data.genres);
  };
  useEffect(() => {
    fetchCategories();
  }, []);
  return (
    <ContainerStyle className="container">
      <div className="row row-cols-auto ">
        {categories.map((categorie) => (
          <div className="col pt-2">
            <CaregoryItem
              key={categorie.id}
              {...categorie}
              onClickShowCategory={onClickShowCategory}
            />
          </div>
        ))}
      </div>
    </ContainerStyle>
  );
};

export default ListOfCategories;
