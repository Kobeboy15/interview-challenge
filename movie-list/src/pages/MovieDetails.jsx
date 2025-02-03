import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { getMovieDetails } from "../utils/getMovieDetails";
import { getVoteAverage } from "../utils/getVoteAverage";

export default function MovieDetails() {
  const { id } = useParams();
  const [movieData, setMovieData] = useState();

  function formatDate(dateString) {
      const date = new Date(dateString);
      const options = { year: 'numeric', month: 'short', day: 'numeric' };
      return date.toLocaleDateString('en-US', options);
  }

  function convertMinutes(minutes) {
      const hours = Math.floor(minutes / 60);
      const remainingMinutes = minutes % 60;
      return `${hours} h ${remainingMinutes} min${remainingMinutes !== 1 ? 's' : ''}`;
  }

  useEffect(() => {
    if(id) {
      const fetchMovieDetails = async () => {
        const details = await getMovieDetails(id);
        console.log(details);
        setMovieData(details)
      };

      fetchMovieDetails();
    }
  }, [id])

  if (movieData) {
    return (
      <div id="movie-details" className={`relative w-full`}>
        <div className="w-full py-12 px-20 max-h-screen min-h-screen m-auto overflow-auto z-30">
          <div
            className={`flex flex-col items-start justify-between bg-zinc-800 bg-cover bg-top rounded-xl h-[calc(50vh)] relative overflow-hidden text-white`}
          >
            <div className="p-12 static z-10 flex items-center justify-between w-full">
              <div className="bg-purple-500 rounded-full py-2 px-4 flex gap-2 justify-center items-center z-10 top-0">
                <p className="text-sm">Already watched</p>
              </div>
              <MovieRating />
            </div>
            <div className="flex items-end justify-between z-10 w-full">
              <div className="p-12 max-w-[600px] text-left">
                <h3 className="text-white text-4xl text-left font-extrabold mb-2">
                  {movieData.title}
                </h3>
                <p className="text-left text-sm text-white/70 font-light leading-5">
                  {movieData.overview}
                </p>
                <div className="flex gap-3">
                  <button className="bg-purple-500/80 px-4 py-3 mt-4 text-sm rounded flex items-center gap-2">
                    <span className="material-icons">favorite</span>
                    Add to favorites
                  </button>
                  <button className="bg-white text-black px-4 py-3 mt-4 text-sm rounded flex items-center gap-2">
                    <span className="material-icons">add</span>
                    Add to watchlist
                  </button>
                </div>
              </div>
              <div className="p-12 text-right flex gap-8">
                <div>
                  <p className="text-sm text-white/60 font-light">Release Date</p>
                  <p>{formatDate(movieData.release_date)}</p>
                </div>
                <div>
                  <p className="text-sm text-white/60 font-light">Rating Avg</p>
                  <p>{getVoteAverage(movieData.vote_average)}</p>
                </div>
                <div>
                  <p className="text-sm text-white/60 font-light">Runtime</p>
                  <p>{convertMinutes(movieData.runtime)}</p>
                </div>
              </div>
            </div>
            <img
              src={`https://image.tmdb.org/t/p/original${movieData.backdrop_path}`}
              className="absolute top-0 brightness-35 !blur-[3px] z-0"
            />
          </div>
        </div>
      </div>
    );
  }
}

function MovieRating() {
  return (
    <div>
      <span className="material-icons">star</span>
      <span className="material-icons">star</span>
      <span className="material-icons">star</span>
      <span className="material-icons">star</span>
      <span className="material-icons">star</span>
    </div>
  );
}
