import axios from "axios";

const ROOT_API = 'https://api-lk21.herokuapp.com/';
const API_VERSION = 'api/v1/';
const ROOT_API2 = 'https://api.themoviedb.org/3/movie/';
const API_KEY = 'api_key=10badd151dbb806d6e12dd2bf5f10f9d';
const ROOT_API3 = 'https://api.themoviedb.org/3/discover/movie';
const ROOT_SEARCH = 'https://api.themoviedb.org/3/search/movie'
export async function GetLastedMovie() {
    const URL = 'latest';
    const response =  await axios.get(`${ROOT_API}${API_VERSION}/${URL}`);
    const axiosResponse =  response.data;
    return axiosResponse.data;
}
export async function GetPopularMovies() {
    const URL = 'popular';
    const response =  await axios.get(`${ROOT_API}${API_VERSION}/${URL}`);
    const axiosResponse =  response.data;
    return axiosResponse.data;
}
export async function GetPopularMoviesDB() {
    const URL = 'popular';
    const response =  await axios.get(`${ROOT_API2}${URL}?${API_KEY}`);
    const axiosResponse =  response.data;
    return axiosResponse.results;
}
export async function GetHDQualityMovie() {
    const URL = 'hd-quality';
    const response =  await axios.get(`${ROOT_API}${API_VERSION}/${URL}`);
    const axiosResponse =  response.data;
    return axiosResponse.data;
}
export async function GetLatestMovieDB() {
    const URL = 'top_rated';
    const response =  await axios.get(`${ROOT_API2}${URL}?${API_KEY}`);
    const axiosResponse =  response.data;
    return axiosResponse.results;
}
export async function GetUpcomingMovieDB() {
    const URL = 'upcoming';
    const response =  await axios.get(`${ROOT_API2}${URL}?${API_KEY}`);
    const axiosResponse =  response.data;
    return axiosResponse.results;
}
export async function GetMovieByGenreDB(genre_id: string) {
    const GENRE = 'with_genres=';
    const response =  await axios.get(`${ROOT_API3}?${API_KEY}&${GENRE}${genre_id}`);
    const axiosResponse =  response.data;
    return axiosResponse.results;
}
export async function GetMovieBySearch(query: string) {
    const QUERY = `query="${query}"`;
    const response =  await axios.get(`${ROOT_SEARCH}?${API_KEY}&${QUERY}`);
    const axiosResponse =  response.data;
    return axiosResponse;
}