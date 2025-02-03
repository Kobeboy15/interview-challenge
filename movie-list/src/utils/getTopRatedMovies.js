export function getTopRatedMovies( currentPage ) {
  try {
    const url = `https://api.themoviedb.org/3/movie/top_rated?language=en-US&page=${currentPage}`;
    const options = {
      method: 'GET',
      headers: {
        accept: 'application/json',
        Authorization: `Bearer ${import.meta.env.VITE_REACT_APP_API_KEY}`
      }
    };

    return fetch(url, options)
      .then(res => res.json())
      .then(json => json.results)
      .catch(err => console.error(err));
  } catch (error) {
    console.error(error);
  }
}
