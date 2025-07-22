import React from "react";
import { useWatchlist } from "../hooks/watchlistcontext";
import MovieCard from "../components/MovieCard";

const WatchlistPage = () => {
  const { watchlist, toggleWatchlist, isInWatchlist } = useWatchlist();

  return (
    <div
      style={{
        padding: "2rem",
        backgroundColor: "#121212",
        minHeight: "100vh",
      }}
    >
      <h2 style={{ color: "white", marginBottom: "1rem" }}>My Watchlist</h2>

      {watchlist.length === 0 ? (
        <p style={{ color: "gray" }}>Your watchlist is empty.</p>
      ) : (
        <div style={{ display: "flex", gap: "1rem", flexWrap: "wrap" }}>
          {watchlist.map((movie) => (
            <MovieCard
              key={movie.id}
              movie={movie}
              toggleWatchlist={toggleWatchlist}
              isInWatchlist={isInWatchlist}
            />
          ))}
        </div>
      )}
    </div>
  );
};

export default WatchlistPage;
