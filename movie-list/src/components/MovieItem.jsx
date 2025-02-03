import { useState } from "react";
import { useEffect } from "react";
import { NavLink } from "react-router-dom";
import { getVoteAverage } from "../utils/getVoteAverage";

export default function MovieItem({ movie, genres }) {
  const [randomGenre, setRandomGenre] = useState();

  useEffect(() => {
    if (genres) {
      setRandomGenre(genres[Math.floor(Math.random() * genres.length)]);
    }
  }, [genres]);

  return (
    <NavLink
      to={`/movie/${movie.id}`}
      className="bg-transparent hover:scale-[1.03] transition duration-200 hover:cursor-pointer hover:"
    >
      <div className="relative">
        <div className="relative">
          <img
            className="rounded-lg shadow-xl"
            src={`https://image.tmdb.org/t/p/original${movie.poster_path}`}
            loading="lazy"
          />
          <div className="absolute top-0 right-0 p-2">
            <div className="bg-purple-500 w-5 h-5 flex justify-center items-center rounded-full">
              <span className="material-icons text-white !text-sm">check</span>
            </div>
          </div>
          <div className="text-xs gap-1 absolute bottom-0 right-0 flex items-center px-1.5 py-0.5 text-white bg-purple-900 rounded-tl-md">
            <p>
              {getVoteAverage(movie.vote_average)}
            </p>
            <span className="material-icons !text-sm">star</span>
          </div>
        </div>
        <div className="text-white text-left p-1">
          <p className="mt-1 font-bold text-sm">
            {movie.original_title} ({movie.release_date.slice(0, 4)})
          </p>
          <p className="flex flex-wrap items-center gap-x-1">
            <span className="material-icons !text-[14px]">reorder</span>
            <span className="text-sm">{randomGenre && randomGenre.name}</span>
            {genres && genres.length > 1 && (
              <span className="material-icons !text-sm">more_horiz</span>
            )}
          </p>
        </div>
      </div>
    </NavLink>
  );
}
