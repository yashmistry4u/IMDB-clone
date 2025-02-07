import { useEffect, useState } from "react";
import "./App.css";
import { Navbar } from "./components/Navbar";
import WatchList from "./components/WatchList";
import Movies from "./components/Movies";
import Banner from "./components/Banner";
import { BrowserRouter, Routes, Route } from "react-router-dom";
function App() {
  const [count, setCount] = useState(0);
  let [watchlist, setWatchlist] = useState([]);

  let handleAddToWatchlist = (movieObj) => {
    let newWatchlist = [...watchlist, movieObj];
    setWatchlist(newWatchlist);
    localStorage.setItem("moviesApp", JSON.stringify(newWatchlist));
    console.log(newWatchlist);
  };

  let handleRemoverFromWatchlist = (movieObj) => {
    let filteredWatchlist = watchlist.filter((movie) => {
      return movie.id != movieObj.id;
    });
    setWatchlist(filteredWatchlist);
    localStorage.setItem("moviesApp", JSON.stringify(filteredWatchlist));
    console.log(filteredWatchlist);
  };

  useEffect(() => {
    let moviesfromLocalstorage = localStorage.getItem("moviesApp");
    if (!moviesfromLocalstorage) {
      return;
    } else setWatchlist(JSON.parse(moviesfromLocalstorage));
  }, []);

  return (
    <>
      <div>
        <BrowserRouter>
          <Navbar />
          <Routes>
            <Route
              path="/"
              element={
                <>
                  <Banner />{" "}
                  <Movies
                    handleAddToWatchlist={handleAddToWatchlist}
                    handleRemoverFromWatchlist={handleRemoverFromWatchlist}
                    watchlist={watchlist}
                  />
                </>
              }
            />
            <Route
              path="/WatchList"
              element={
                <WatchList
                  watchlist={watchlist}
                  setWatchlist={setWatchlist}
                  handleRemoverFromWatchlist={handleRemoverFromWatchlist}
                />
              }
            />
          </Routes>
        </BrowserRouter>
      </div>
    </>
  );
}

export default App;
