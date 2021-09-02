import React from "react";
import { ItemStyle } from "./ItemStyle";

const CategoriesItem = ({ name, id, onClickShowCategory }) => {
  return <ItemStyle onClick={() => onClickShowCategory(id)}>{name}</ItemStyle>;
};

export default CategoriesItem;
