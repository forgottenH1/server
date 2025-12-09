// client/src/utils/apiClient.js
import axios from 'axios';

// 1. Create a custom instance of axios
const apiClient = axios.create({
    baseURL: 'http://localhost:5000/api', // Base URL for all backend calls
});

// 2. Add a request interceptor
// This runs BEFORE every request is sent
apiClient.interceptors.request.use((config) => {
    // Get the authentication token from local storage
    const token = localStorage.getItem('authToken');
    
    // If a token exists, add it to the Authorization header
    if (token) {
        config.headers.Authorization = `Bearer ${token}`;
    }
    
    return config;
}, (error) => {
    return Promise.reject(error);
});

export default apiClient;