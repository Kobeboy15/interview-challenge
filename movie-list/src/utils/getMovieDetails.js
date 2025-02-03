export function getMovieDetails(id) {
  try {
    const url = `https://api.themoviedb.org/3/movie/${id}`;
    const options = {
      method: 'GET',
      headers: {
        accept: 'application/json',
        Authorization: `Bearer ${import.meta.env.VITE_REACT_APP_API_KEY}`
      }
    };

    return fetch(url, options)
      .then((response) => response.json())
      .then((data) => data)
      .catch((error) => console.error("Error fetching movie:", error));
  } catch (error) {
    console.error(error)
  }
}
