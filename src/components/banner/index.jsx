import React, { useEffect, useState } from "react";
import "./BannerStyles.css";
import axios from "axios";
import requests from "../../Requests";

const Banner = () => {
  const [movie, setMovie] = useState([]);

  console.log(movie);

  const truncate = (string, number) => {
    return string?.length > number ? string.substr(0, number) + "..." : string;
  };

  const fetchData = async () => {
    const request = await axios.get(
      process.env.REACT_APP_TMDB_URL + requests.fetchNetflixOriginals
    );
    setMovie(
      request.data.results[
        Math.floor(Math.random() * request.data.results.length)
      ]
    );
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <header
      className="banner"
      style={{
        backgroundImage: `url("https://image.tmdb.org/t/p/original/${movie?.backdrop_path}")`,
        backgroundSize: `cover`,
        backgroundPosition: `center center`,
      }}
    >
      <div className="banner__contents content">
        <h1 className="banner__title">
          {movie?.name || movie?.original_name || movie?.title}
        </h1>
        <p className="banner__description">{truncate(movie?.overview, 150)}</p>
        <div className="banner__buttons">
          <button className="banner__button play">Play</button>
          <button className="banner__button my-list">My List</button>
        </div>
      </div>
      <div className="banner--fadeBottom"></div>
    </header>
  );
};

export default Banner;
