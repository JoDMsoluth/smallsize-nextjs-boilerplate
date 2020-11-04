import axios from 'axios';

// axios setting
export const client = axios.create();

export const backUrl =
    process.env.NODE_ENV === 'production'
        ? process.env.SERVER_URL
        : 'http://localhost:3060/';

client.defaults.baseURL = backUrl;

// client.defaults.withCredentials = true;
// intercepter setting
axios.interceptors.response.use(
    (response) => {
        return response;
    },
    (error) => {
        return Promise.reject(error);
    }
);

export { getPost } from './apis';
