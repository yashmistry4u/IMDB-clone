import React from "react";
import Logo from "../movie.png";
import { Link } from "react-router";
export const Navbar = () => {
  return (
    <div className="flex border space-x-8 items-center pl-3 py-4">
      <img className="w-[70px] h-[70px]" src={Logo} alt="" />
      <Link to="/" className="text-gray-500 text-xl">
        Home
      </Link>
      <Link to="/WatchList" className="text-gray-500 text-xl">
        WatchList
      </Link>
    </div>
  );
};

// https://api.themoviedb.org/3/movie/popular?api_key=c3ec436ea9ec9215f4d0ee7808cdb926&language=en-US&page=1
