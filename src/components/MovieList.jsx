import React, { useState, useEffect } from "react";
import MovieCard from "./MovieCard";
import "../styles/MovieList.css";

const TMDB_API_KEY = process.env.REACT_APP_TMDB_API_KEY;

const MovieList = () => {
  const [searchInput, setSearchInput] = useState("batman");
  const [query, setQuery] = useState("batman");
  const [movies, setMovies] = useState([]);

  const fetchMovies = async () => {
    try {
      const res = await fetch(
        `https://api.themoviedb.org/3/search/movie?api_key=${TMDB_API_KEY}&query=${query}`
      );
      const data = await res.json();

      if (data.results) {
        const formatted = await Promise.all(
          data.results.map(async (movie) => {
            let trailerUrl = null;

            try {
              const trailerRes = await fetch(
                `https://api.themoviedb.org/3/movie/${movie.id}/videos?api_key=${TMDB_API_KEY}`
              );
              const trailerData = await trailerRes.json();

              const trailer = trailerData.results?.find(
                (vid) => vid.type === "Trailer" && vid.site === "YouTube"
              );

              if (trailer) {
                trailerUrl = `https://www.youtube.com/embed/${trailer.key}?autoplay=1&mute=1&controls=0`;
              }
            } catch (err) {
              console.warn("Trailer fetch failed for movie:", movie.title);
            }

            return {
              id: movie.id,
              title: movie.title,
              posterUrl: movie.poster_path
                ? `https://image.tmdb.org/t/p/w342${movie.poster_path}`
                : "/no-image.png",
              previewUrl: trailerUrl,
            };
          })
        );
        setMovies(formatted);
      } else {
        setMovies([]);
      }
    } catch (err) {
      console.error("TMDb fetch error:", err);
    }
  };

  useEffect(() => {
    fetchMovies();
  }, [query]);

  return (
    <div className="movie-list-container">
      {/* Search Bar */}
      <div className="search-bar-wrapper">
        <input
          type="text"
          value={searchInput}
          onChange={(e) => setSearchInput(e.target.value)}
          placeholder="Search movies..."
          className="search-input"
        />
        <button onClick={() => setQuery(searchInput)} className="search-button">
          Search
        </button>
      </div>

      {/* Movie Cards */}
      <div className="movie-scroll-container">
        {movies.length === 0 ? (
          <p className="text-white">No movies found.</p>
        ) : (
          movies.map((movie) => <MovieCard key={movie.id} movie={movie} />)
        )}
      </div>
    </div>
  );
};

export default MovieList;
