export function getMovieGenres() {
  try {
    const url = 'https://api.themoviedb.org/3/genre/movie/list?language=en';
    const options = {
      method: 'GET',
      headers: {
        accept: 'application/json',
        Authorization: `Bearer ${import.meta.env.VITE_REACT_APP_API_KEY}`
      }
    };

    return fetch(url, options)
      .then(res => res.json())
      .then(json => json.genres)
      .catch(err => console.error(err));
  } catch (error) {
    console.error(error)
  }
}
