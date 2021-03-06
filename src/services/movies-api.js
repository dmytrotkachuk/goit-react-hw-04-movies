const BASE_URL = 'https://api.themoviedb.org/3';
const BASE_IMG_URL = "https://image.tmdb.org/t/p/w200";
const API_KEY = 'a013d281e15f2112077428f8fe6f1343';




const fetchMovieDetails = movieID => {
    return fetch(`${BASE_URL}/movie/${movieID}?api_key=${API_KEY}`)
    .then(res => res.json())
}

//serch movie by queryString
const  fetchMovieWithQuery = query => {
    return fetch(`${BASE_URL}/search/movie?api_key=${API_KEY}&query=${query}`)
    .then(res => res.json()).then(data=> data.results)
}

// get popular movies of the day
const getTrending = () =>{
    return fetch(`${BASE_URL}/trending/movie/day?api_key=${API_KEY}`)
    .then(res => res.json()).then(data => data.results)
}

const getActors = movieID => {
    return fetch(`${BASE_URL}/movie/${movieID}/credits?api_key=${API_KEY}`)
    .then(res => res.json())
}

const getReviews = movieID =>{
    return fetch(`${BASE_URL}/movie/${movieID}/reviews?api_key=${API_KEY}`)
    .then(res => res.json())
}

export default {fetchMovieWithQuery, fetchMovieDetails, getTrending, BASE_IMG_URL, getActors, getReviews}