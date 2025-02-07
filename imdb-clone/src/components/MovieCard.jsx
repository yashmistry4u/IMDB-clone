import React from "react";

function MovieCard({
  poster_path,
  original_title,
  handleAddToWatchlist,
  movieObj,
  handleRemoverFromWatchlist,
  watchlist,
}) {
  function doescontain(movieObj) {
    for (let i = 0; i < watchlist.length; i++) {
      if (watchlist[i].id == movieObj.id) {
        return true;
      }
    }
    return false;
  }

  return (
    <div
      className="h-[40vh] w-[200px] rounded-xl bg-cover bg-center hover:cursor-pointer hover:scale-110 duration-300 flex flex-col justify-between"
      style={{
        backgroundImage: `url(https://image.tmdb.org/t/p/original/${poster_path})`,
      }}
    >
      {doescontain(movieObj) ? (
        <div
          className="m-4 flex justify-center h-8 w-8 items-center rounded-lg bg-gray-900/60"
          onClick={() => handleRemoverFromWatchlist(movieObj)}
        >
          &#10060;
        </div>
      ) : (
        <div
          onClick={() => handleAddToWatchlist(movieObj)}
          className="m-4 flex justify-center h-8 w-8 items-center rounded-lg bg-gray-900/60"
        >
          &#128525;
        </div>
      )}

      <div className="text-white text-xl w-full p-2 text-center bg-gray-900/60">
        {original_title}
      </div>
    </div>
  );
}

export default MovieCard;
