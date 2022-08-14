const baseURL = "https://api.nomoreparties.co/beatfilm-movies";
const checkResponse = (res) => {
  if (res.ok) {return res.json()}
  return res.json().then((res) => Promise.reject(res.message))
}

export function getMovies() {
  return fetch(`${baseURL}`, {
    method: 'GET',
    headers: {
    "Content-Type": "application/json",
  },
  })
    .then(checkResponse);
}
