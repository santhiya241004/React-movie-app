import React, { createContext, useContext, useEffect, useState } from "react";

const WatchlistContext = createContext();

export const WatchlistProvider = ({ children }) => {
  const [watchlist, setWatchlist] = useState([]);

  useEffect(() => {
    const stored = localStorage.getItem("my-movie-watchlist");
    if (stored) {
      try {
        setWatchlist(JSON.parse(stored));
      } catch (err) {
        setWatchlist([]);
      }
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("my-movie-watchlist", JSON.stringify(watchlist));
  }, [watchlist]);

  const isInWatchlist = (movie) =>
    watchlist.some((m) => Number(m.id) === Number(movie.id));

  const toggleWatchlist = (movie) => {
    const exists = isInWatchlist(movie);
    const updated = exists
      ? watchlist.filter((m) => Number(m.id) !== Number(movie.id))
      : [...watchlist, { ...movie }];
    setWatchlist(updated);
  };

  return (
    <WatchlistContext.Provider
      value={{ watchlist, toggleWatchlist, isInWatchlist }}
    >
      {children}
    </WatchlistContext.Provider>
  );
};

export const useWatchlist = () => useContext(WatchlistContext);
