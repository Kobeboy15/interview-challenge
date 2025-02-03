import { useEffect, useState, useRef } from "react";
import MovieItem from "../components/MovieItem";
import { getMovieGenres } from "../utils/getMovieGenres";
import { getAuthentication } from "../utils/getAuthentication";
import { getUpcomingMovies } from "../utils/getUpcomingMovies";

export default function UpcomingPage() {
  const [currentPage, setCurrentPage] = useState(0);
  const [movieList, setMovieList] = useState([]);
  const [genreList, setGenreList] = useState();
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const observerRef = useRef(null);

  useEffect(() => {
    const fetchAuthentication = async () => {
      const authentication = await getAuthentication();
      console.log(authentication);
      setIsAuthenticated(authentication.success);
    };

    fetchAuthentication();
  }, []);

  useEffect(() => {
    if (isAuthenticated) {
      const fetchGenreData = async () => {
        const genreData = await getMovieGenres();
        setGenreList(genreData);
      };
      fetchGenreData().catch((error) => console.error(error));
    }
  }, [isAuthenticated]);

  useEffect(() => {
    if (isAuthenticated && currentPage) {
      const fetchMovieData = async () => {
        const movieData = await getUpcomingMovies(currentPage);
        setMovieList((prevMovies) =>
          currentPage === 1 ? movieData : [...prevMovies, ...movieData],
        );
      };

      fetchMovieData().catch((error) => console.error(error));
    }
  }, [isAuthenticated, currentPage]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setCurrentPage((prevPage) => prevPage + 1);
        }
      },
      { threshold: 1.0 },
    );

    if (observerRef.current) {
      observer.observe(observerRef.current);
    }

    return () => {
      if (observerRef.current) {
        observer.unobserve(observerRef.current);
      }
    };
  }, []);

  if (!movieList) {
    return <div>Loading</div>;
  }

  return (
    <div className="py-12 px-20 w-full max-h-screen min-h-screen m-auto overflow-auto">
      <div className="flex justify-between items-center mb-4">
        <h3 className="text-white text-2xl text-left font-extrabold">
          Upcoming Movies
        </h3>
      </div>
      <div className="grid grid-cols-5 justify-start gap-8">
        {movieList &&
          genreList &&
          movieList.map((movie, index) => {
            const movieGenres = movie.genre_ids.map((id) =>
              genreList.find((genre) => genre.id === id),
            );
            return <MovieItem key={index} movie={movie} genres={movieGenres} />;
          })}
      </div>
      <div ref={observerRef} className="h-10"></div>
    </div>
  );
}
