import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/navbar";
import WatchlistPage from "./pages/WatchlistPage";
import "./index.css";
import MovieList from "./components/MovieList"; // ✅ Keep this

const App = () => {
  return (
    <div className="bg-black min-h-screen text-white">
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<MovieList />} />
          <Route path="/watchlist" element={<WatchlistPage />} />
        </Routes>
      </Router>
    </div>
  );
};

export default App;
