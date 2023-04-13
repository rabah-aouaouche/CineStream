import React from "react";
import { FaRegCalendarAlt } from "react-icons/fa";
import { BiTime } from "react-icons/bi";

function FlexMovieItems({ movie }) {
  return (
    <>
      <div className="flex items-center gap-2">
        <span className="text-sm font-medium">{movie.Genre}</span>
      </div>

      <div className="flex items-center gap-2">
        <FaRegCalendarAlt className="text-subMain w-3 h-3" />
        <span className="text-sm font-medium">{movie.Year}</span>
      </div>
      <div className="flex items-center gap-2">
        <BiTime className="text-subMain w-3 h-3" />
        <span className="text-sm font-medium">{movie.Runtime}</span>
      </div>
    </>
  );
}

export default FlexMovieItems;
