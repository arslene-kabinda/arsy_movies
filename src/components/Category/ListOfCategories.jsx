import React, { useState, useEffect } from "react";
import Category from "./CategoryItem";
import axios from "axios";
import { ContainerStyle } from "./ContainerStyle";

const ListOfCategories = ({ onClickShowCategory, mediaType }) => {
  const [categories, setCategories] = useState([]);
  const fetchGenres = async () => {
    const { data } = await axios.get(
      `https://api.themoviedb.org/3/genre/${mediaType}/list?api_key=${process.env.REACT_APP_API_KEY}&language=en-US&include_adult=false`
    );

    setCategories(data.genres);
  };
  useEffect(() => {
    fetchGenres();
  }, []);

  return (
    <div>
      <ContainerStyle className="container">
        <div className="title">
          <h1> <span>Cate</span>gories</h1>
        </div>

        <div className="row row-cols-auto ">
          {categories.map((Categorie) => (
            <Category
              className="col pt-2 bg"
              key={Categorie.id}
              {...Categorie}
              onClickShowCategory={onClickShowCategory}
            />
          ))}
        </div>
      </ContainerStyle>
    </div>
  );
};

export default ListOfCategories;
