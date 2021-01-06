import React, { useState, useEffect } from "react";
import axios from "./axios";
import "./Row.css";
import Youtube from 'react-youtube'
import movieTrailer from 'movie-trailer'
//Akshay Sinha 6-1-2021
//since we dont have the results as full path we need to concatenate the path with a base URL
//the path we get from API is -->/obLBdhLxheKg8Li1qO11r2SwmYO.jpg like this
const base_url = "https://image.tmdb.org/t/p/original/";

function Row({ title, fetchUrl, isLargeRow }) {
  const [movies, setMovies] = useState([]);
  const [trailerUrl, settrailerUrl] = useState("")

  //a snippet of code that runs based on a specific condition/variable

  useEffect(() => {
    //if we have empty brackets like --> [] it runs once and dont run again
    //if we fill it with like [movies]--> it will run every single time the movie changes
    async function fetchData() {
      const request = await axios.get(fetchUrl);
      console.log(request);
      setMovies(request.data.results);
      return request;
    }
    fetchData();
  }, [fetchUrl]);
  const opts={
      height:"390",
      width:"100%",
      playerVars:{
          autoplay:1,
      },
  }
  const handleOnclick=(movie)=>{
      if(trailerUrl){
          settrailerUrl("");
      }else{
          movieTrailer(movie?.name||"")
          .then((url)=>{
                //https://www.youtube.com/watch?v=XtMThy8QKqU
                //we need the value of "v" from above url
                const urlParams=new URLSearchParams(new URL(url).search)
                settrailerUrl(urlParams.get('v')) //it will get the value of "v" from the given url
          }).catch((error)=>console.log(error));
      }
  }
  //console.table(movies);
  return (
    <div className="row">
      {/*title*/}
      <h2>{title}</h2>
      <div className="row__posters">
        {/*row__poster(s)*/}

        {movies.map((movie) => (
          <img
            key={movie.id}
            onClick={()=>handleOnclick(movie)}
            className={`row__poster ${isLargeRow && "row__posterLarge"}`}
            src={`${base_url}${
              isLargeRow ? movie.poster_path : movie.backdrop_path
            }`}
            alt={movie.name}
          />
        ))}
      </div>
      {/*container-->posters above ^^*/}
      {/*Youtube trailers  */}
        {trailerUrl?<Youtube videoId={trailerUrl} opts={opts}/>:<div/>}

    </div>
  );
}

export default Row;
