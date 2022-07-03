import axios from "axios";

const ROOT_API = 'https://api-lk21.herokuapp.com/';
const API_VERSION = 'api/v1/';
const ROOT_API2 = 'https://api.themoviedb.org/3/movie/';
const API_KEY = 'api_key=10badd151dbb806d6e12dd2bf5f10f9d';
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
    console.log('Popular =>', axiosResponse.data);
    return axiosResponse.data;
}
export async function GetPopularMoviesDB() {
    const URL = 'popular';
    const response =  await axios.get(`${ROOT_API2}${URL}?${API_KEY}`);
    const axiosResponse =  response.data;
    console.log('Popular =>', axiosResponse.results);
    return axiosResponse.data;
}
export async function GetHDQualityMovie() {
    const URL = 'hd-quality';
    const response =  await axios.get(`${ROOT_API}${API_VERSION}/${URL}`);
    const axiosResponse =  response.data;
    console.log('hd-quality =>', axiosResponse.data);
    return axiosResponse.data;
}
export async function GetMovieByGenre() {
    const URL = 'genre?genre=';
    const response =  await axios.get(`${ROOT_API}${URL}action`);
    const axiosResponse =  response.data;
    console.log('hd-quality =>', axiosResponse.data);
    return axiosResponse.data;
}