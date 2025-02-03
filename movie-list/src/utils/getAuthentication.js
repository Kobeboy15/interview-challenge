export function getAuthentication() {
  try {
    const url = "https://api.themoviedb.org/3/authentication";
    const options = {
      method: "GET",
      headers: {
        accept: "application/json",
        Authorization: `Bearer ${import.meta.env.VITE_REACT_APP_API_KEY}`,
      },
    };

    console.log(options)

    return fetch(url, options)
      .then((res) => res.json())
      .then((json) => json)
      .catch((err) => console.error(err));
  } catch (error) {
    console.error(error);
  }
}
