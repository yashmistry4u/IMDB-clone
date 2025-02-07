import React, { useEffect, useState } from "react";
import genreid from "../Utility/Genre";
function WatchList({ watchlist, setWatchlist, handleRemoverFromWatchlist }) {
  let [search, setSearch] = useState("");
  let [genre, setGenre] = useState(["All genres"]);
  let [currentGenre, setcurrentGenre] = useState("All genres");
  function handleSearch(e) {
    setSearch(e.target.value);
  }

  let sortIncreasing = () => {
    let sortedInc = watchlist.sort((movieA, movieB) => {
      return movieB.vote_average - movieA.vote_average;
    });
    setWatchlist([...sortedInc]);
  };

  let sortDecreasing = () => {
    let sortedDec = watchlist.sort((movieA, movieB) => {
      return movieA.vote_average - movieB.vote_average;
    });
    setWatchlist([...sortedDec]);
  };

  let handlefilter = (genre) => {
    setcurrentGenre(genre);
  };

  useEffect(() => {
    let temp = watchlist.map((movieObj) => {
      return genreid[movieObj.genre_ids[0]];
    });
    temp = new Set(temp);
    console.log("temp", temp);
    setGenre(["All Genres", ...temp]);
  }, [watchlist]);

  return (
    <>
      <div className="flex justify-center flex-wrap m-4">
        {genre.map((genre) => {
          return (
            <div
              onClick={() => handlefilter(genre)}
              className={
                currentGenre == genre
                  ? "flex justify-center items-center h-[3rem] w-[9rem] bg-blue-400 rounded-xl font-bold text-white cursor-pointer mx-4"
                  : "mx-4 flex justify-center items-center h-[3rem] w-[9rem] bg-gray-400 rounded-xl font-bold text-white cursor-pointer"
              }
            >
              {genre}
            </div>
          );
        })}

        {/* <div className="flex justify-center items-center h-[3rem] w-[9rem] bg-gray-400 rounded-xl font-bold text-white cursor-pointer">
          Romance
        </div> */}
      </div>
      <div className="flex justify-center my-4">
        <input
          onChange={handleSearch}
          type="text"
          placeholder="Search Movies"
          className="bg-gray-200 px-4 outline-none h-[3rem] w-[18rem]"
        />
      </div>
      <div className="overflow-hidden rounded-lg border border-gray-200 m-8">
        <table className="w-full text-gray-500 text-center">
          <thead className="border-b-2">
            <tr>
              <th>Name</th>
              <th className="flex justify-center">
                <div className="mx-2 cursor-pointer" onClick={sortIncreasing}>
                  <i class="fa-solid fa-arrow-up"></i>
                </div>
                <div>Ratings</div>
                <div className="mx-2  cursor-pointer" onClick={sortDecreasing}>
                  <i class="fa-solid fa-arrow-down"></i>
                </div>
              </th>
              <th>Popularity</th>
              <th>Genre</th>
            </tr>
          </thead>
          <tbody>
            {watchlist
              .filter((movieObj) => {
                if (currentGenre == "All Genres") {
                  return true;
                }
                return genreid[movieObj.genre_ids[0]] == currentGenre;
              })
              .filter((movieObj) => {
                return movieObj.original_title
                  .toLowerCase()
                  .includes(search.toLowerCase());
              })
              .map((movieObj) => {
                return (
                  <tr className="border-b-2">
                    <td className="flex items-center px-6 py-4">
                      <img
                        className="h-[6rem] w-[8rem]"
                        src={`https://image.tmdb.org/t/p/original/${movieObj.poster_path})`}
                      />
                      <div className="mx-10">{movieObj.original_title}</div>
                    </td>
                    <td>{movieObj.vote_average}</td>
                    <td>{movieObj.popularity}</td>
                    <td>{genreid[movieObj.genre_ids[0]]}</td>
                    <td
                      onClick={() => handleRemoverFromWatchlist(movieObj)}
                      className="text-red-800 cursor-pointer"
                    >
                      Delete
                    </td>
                  </tr>
                );
              })}
          </tbody>
        </table>
      </div>
    </>
  );
}

export default WatchList;
