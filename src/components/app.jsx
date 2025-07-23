import React from "react";
import MovieCard from "./components/MovieCard";
import "./index.css";
import MovieList from "./components/MovieList"; 

const movies = [
  {
    title: "Rayan",
    posterUrl: "/rayan.jpeg",
    previewUrl: "/Rayan.mp4",
  },
  {
    title: "Kuberaa",
    posterUrl: "/kuberaa.jpeg",
    previewUrl: "/Kuberaa.mp4",
  },
  {
    title: "Vaathi",
    posterUrl: "/vaathi.jpeg",
    previewUrl: "Vaathi.mp4",
  },
];

const App = () => {
  return (
    <div className="card-container">
      {movies.map((movie, index) => (
        <MovieCard key={index} movie={movie} />
      ))}
    </div>
  );
};

export default App;
