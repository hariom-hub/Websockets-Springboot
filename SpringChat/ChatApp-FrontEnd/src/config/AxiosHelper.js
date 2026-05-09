import axios from "axios";
export const API_URL = 'http://localhost:8080'; // backend url
export const httpClient = axios.create({
    baseURL: API_URL
});