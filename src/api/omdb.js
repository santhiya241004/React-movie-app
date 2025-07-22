// src/api/omdb.js
const API_KEY = import.meta.env.VITE_OMDB_API_KEY;
const BASE_URL = "https://www.omdbapi.com/";

export const fetchMoviesBySearch = async (searchQuery) => {
  try {
    const res = await fetch(`${BASE_URL}?apikey=${API_KEY}&s=${searchQuery}`);
    const data = await res.json();
    return data.Search || []; // returns array of movies
  } catch (error) {
    console.error("Error fetching movies:", error);
    return [];
  }
};
