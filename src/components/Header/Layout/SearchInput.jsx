import React from "react";
import { Icon, InlineIcon } from "@iconify/react";
import searchIcon from "@iconify-icons/akar-icons/search";
import { SearchInputStyle } from "../Style/SearchInputStyle";

const SearchInput = ({handleSubmit,handleChange,value}) => {
  return (
    <SearchInputStyle className="" onSubmit={handleSubmit}>
      <label htmlFor="search"> </label>
      <input
        id="search"
        type="search"
        placeholder="Search"
        onChange={handleChange}
        value={value}
      />
      <Icon icon={searchIcon} />
    </SearchInputStyle>
  );
};

export default SearchInput;
