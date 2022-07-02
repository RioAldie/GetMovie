import axios from "axios";

const ROOT_API = 'https://api-lk21.herokuapp.com/';
const API_VERSION = 'api/v1/'
export async function GetLastedMovie() {
    const URL = 'latest';
    const response =  await axios.get(`${ROOT_API}${API_VERSION}/${URL}`);
    const axiosResponse =  response.data;
    console.log('Movie =>', axiosResponse);
    return axiosResponse.data;
}
export async function GetPopularMovies() {
    const URL = 'popular';
    const response =  await axios.get(`${ROOT_API}${API_VERSION}/${URL}`);
    const axiosResponse =  response.data;
    console.log('Popular =>', axiosResponse.data);
    return axiosResponse.data;
}