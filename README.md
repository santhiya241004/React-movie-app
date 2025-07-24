# 🎬 Sanmo0v - React Movie App

This is a responsive movie browsing app built with **React** and powered by the **TMDb API**. It allows users to search, preview, and save their favorite movies to a personal watchlist.

🚀 Live Demo: [https://sanmo0v.netlify.app]

---

## 📌 Features

- 🔍 **Movie Search** – Search movies using keywords via TMDb API.
- 🎥 **Hover Preview** – Hover on a movie card to see a short video preview (if available).
- ⭐ **Watchlist Support** – Add and remove movies to your local watchlist.
- 🧠 **LocalStorage Integration** – Data saved in browser storage.
- 📱 **Fully Responsive** – Works on desktop, tablet, and mobile.
- ⚙️ **Built with React** – Modern component-based UI using hooks and context.

---

## 🛠️ Technologies Used

- React JS
- JavaScript (ES6+)
- TMDb API
- Framer Motion (for hover animations)
- React Context API
- CSS Modules

---

## 🌐 API Integration

This app uses the [TMDb (The Movie Database) API](https://www.themoviedb.org/documentation/api) to fetch movie data.

To use your own API key:

1. Go to [TMDb](https://www.themoviedb.org/)
2. Create an account and generate an API key
3. Add it to a `.env` file:
    ```
    REACT_APP_TMDB_API_KEY=your_api_key_here
    ```

---

## 🧪 How to Run Locally

```bash
git clone https://github.com/your-username/React-movie-app.git
cd React-movie-app
npm install
npm start
