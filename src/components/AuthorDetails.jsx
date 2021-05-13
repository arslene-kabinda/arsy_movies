import React, { useEffect, useState } from "react";
import axios from "axios";
const [author, setAuthor] = useState("");
const fetchAuthorData = async () => {
  const { data } = await axios.get(
    `https://api.themoviedb.org/3/${media_type}/${id}/credits?api_key=20805a09b491c1d079296a261a00cc2e&language=en-US`
  );
  setAuthor(data);
//   console.log(data);
};
useEffect(() => {
  fetchAuthorData();
}, []);
