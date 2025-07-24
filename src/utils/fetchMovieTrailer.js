const TMDB_API_KEY = process.env.REACT_APP_TMDB_API_KEY;

export const fetchTrailerUrl = async (movieTitle) => {
  try {
    
    const searchRes = await fetch(
      `https://api.themoviedb.org/3/search/movie?api_key=${TMDB_API_KEY}&query=${encodeURIComponent(movieTitle)}`
    );
    const searchData = await searchRes.json();
    const movie = searchData.results?.[0];

    if (!movie) return null;

    
    const videoRes = await fetch(
      `https://api.themoviedb.org/3/movie/${movie.id}/videos?api_key=${TMDB_API_KEY}`
    );
    const videoData = await videoRes.json();

    const trailer = videoData.results?.find((vid) => vid.type === "Trailer" && vid.site === "YouTube");

    return trailer ? `https://www.youtube.com/embed/${trailer.key}` : null;
  } catch (err) {
    console.error("TMDb trailer fetch failed:", err);
    return null;
  }
};
