import React, { useEffect, useState } from "react";
import MovieCard from "./MovieCard";
import axios from "axios";
import Pagination from "./Pagination";
function Movies({
  handleAddToWatchlist,
  handleRemoverFromWatchlist,
  watchlist,
}) {
  const [movies, setMovies] = useState([]);
  const [pageNo, setPageNo] = useState(1);

  const handlePrev = () => {
    if (pageNo == 1) {
      setPageNo(1);
      return;
    }
    setPageNo(pageNo - 1);
  };

  const handleNext = () => {
    setPageNo(pageNo + 1);
  };
  useEffect(() => {
    axios
      .get(
        `https://api.themoviedb.org/3/movie/popular?api_key=c3ec436ea9ec9215f4d0ee7808cdb926&language=en-US&page=${pageNo}`
      )
      .then(
        function (res) {
          // console.log(res.data);
          setMovies(res.data.results);
        },
        [pageNo]
      );
  });
  return (
    <div className="p-5">
      <div className="text-2xl font-bold text-center font-sans">
        Trending Movies
      </div>
      <div className="flex flex-row justify-between flex-wrap m-5 gap-8">
        {movies.map((movieObj) => {
          return (
            <MovieCard
              watchlist={watchlist}
              movieObj={movieObj}
              poster_path={movieObj.poster_path}
              original_title={movieObj.original_title}
              handleAddToWatchlist={handleAddToWatchlist}
              handleRemoverFromWatchlist={handleRemoverFromWatchlist}
            />
          );
        })}
      </div>
      <div>
        <Pagination
          pageNo={pageNo}
          handleNext={handleNext}
          handlePrev={handlePrev}
        />
      </div>
    </div>
  );
}

export default Movies;
