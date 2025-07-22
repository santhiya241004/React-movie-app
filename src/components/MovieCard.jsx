// src/components/MovieCard.jsx
import React, { useRef, useState, useEffect } from "react";
import { motion } from "framer-motion";
import "../styles/MovieCard.css";
import { useWatchlist } from "../hooks/watchlistcontext";
import { fetchTrailerUrl } from "../utils/fetchMovieTrailer";

const MovieCard = ({ movie }) => {
  const [isHovered, setIsHovered] = useState(false);
  const [trailerUrl, setTrailerUrl] = useState(null);

  const { toggleWatchlist, isInWatchlist } = useWatchlist();
  const inWatchlist = isInWatchlist(movie);

  useEffect(() => {
    fetchTrailerUrl(movie.title).then(setTrailerUrl);
  }, [movie.title]);

  const handleMouseEnter = () => setIsHovered(true);
  const handleMouseLeave = () => setIsHovered(false);

  return (
    <motion.div
      className="movie-card"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <div className="media-container">
       {!isHovered ? (
  <img src={movie.posterUrl} />
) : trailerUrl ? (
  <iframe
    src={`${trailerUrl}?autoplay=1&mute=1`}
    frameBorder="0"
    allow="autoplay; encrypted-media"
    allowFullScreen
  />
) : (
  <img src={movie.posterUrl} />
)}

      </div>

      <h3 className="movie-title">{movie.title}</h3>

      <button
        onClick={() => toggleWatchlist(movie)}
        className={`watchlist-btn ${inWatchlist ? "remove" : "add"}`}
      >
        {inWatchlist ? "Remove from Watchlist" : "Add to Watchlist"}
      </button>
    </motion.div>
  );
};

export default MovieCard;
