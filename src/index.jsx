import React from "react";
import ReactDOM from "react-dom/client";
import App from "./app.jsx";
import "./index.css"; // optional global styles
import { WatchlistProvider } from "./hooks/watchlistcontext.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(

    <WatchlistProvider>
      <App />
    </WatchlistProvider>
  
);
