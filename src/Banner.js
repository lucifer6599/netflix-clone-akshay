import React, { useState, useEffect } from "react";
import axios from "./axios";
import requests from "./requests";
//Akshay Sinha 6-1-2021

function Banner() {
  const [movie, setmovie] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const request = await axios.get(requests.fetchNetflixOriginals);
      setmovie(
        request.data.results[
          Math.floor(Math.random() * request.data.results.length - 1)
        ]
      );
      return request;
    }
    fetchData();
  }, []);

  console.log(movie);

  return (
    <header className="banner"
    style={{
        backgroundSize:"cover",
        backgroundImage:`url(
            "https://image.tmdb.org/t/p/original/${movie?.backdrop_path}"
        )`,
        backgroundPosition:"center center",
    }}
    >
    
      {/* <<< Background Image */}
      <div className="banner__contents">
      {/* title */}
      <h1> 
       {movie?.title|| movie?.name || movie?.original_name}    
      </h1>
      {/* div>> 2 buttons*/}
      {/* description */}
      </div>
    </header>
  );
}

export default Banner;
