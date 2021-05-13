import { useState, useEffect } from "react";
import axios from "axios";
import React from "react";

const similar = ({ media_type, id }) => {
  const [similar, setSimilar] = useState([]);
  const getSimilar = async () => {
    const { data } = await axios.get(
      `    https://api.themoviedb.org/3/${media_type}/${id}/similar?api_key=20805a09b491c1d079296a261a00cc2&language=en-US&page=1`
    );
    setSimilar(data)
    console.log(data)
  };
  useEffect(()=>{
      getSimilar()
  },[])

  return <div></div>;
};

export default similar;
