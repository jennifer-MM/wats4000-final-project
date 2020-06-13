// Base API Configuration
import axios from 'axios';

export const API = axios.create({
    baseURL: '//rashrewind.com/proxy.php?csurl=https://jsonplaceholder.typicode.com/'
});

API.interceptors.request.use(function (config) {
    // Set common parameters for each request to the API.
    return config;
}, function (error) {
    return Promise.reject(error);
});