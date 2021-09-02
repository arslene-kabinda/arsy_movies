import React from "react";
import { LoaderContainer } from "./LoaderStyle";

const Loader = () => {
  return (
    <LoaderContainer className="content">
      <div className="loading">
        <p>loading</p>
        <span></span>
      </div>
    </LoaderContainer>
  );
};

export default Loader;
