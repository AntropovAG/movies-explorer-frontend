const baseURL = "https://api.movies.antropovag.nomoredomains.xyz";
const checkResponse = (res) => {
  if (res.ok) {return res.json()}
  return res.json().then((res) => Promise.reject(res.message))
}

export function register(userName, userEmail, password) {
  return fetch(`${baseURL}/signup`, {
    method: 'POST',
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(userName, userEmail, password)
  })
    .then(checkResponse);
}

export function login(userEmail, password) {
  return fetch(`${baseURL}/signin`, {
    method: 'POST',
    headers: { "Content-Type": "application/json" },
    credentials: 'include',
    body: JSON.stringify(userEmail, password)
  })
    .then(checkResponse);
}

export function checkTokenValidity(token) {
  return fetch(`${baseURL}/users/me`, {
    method: 'GET',
    headers: {
    "Content-Type": "application/json",
  },
  credentials: 'include',
  })
    .then(checkResponse);
}
