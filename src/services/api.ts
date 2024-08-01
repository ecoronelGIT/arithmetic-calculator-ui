import axios from 'axios';

const api = axios.create({
    baseURL: 'https://your-api-url.com', // Cambia esto por la URL de tu API
    headers: {
        'Content-Type': 'application/json',
    },
});

export default api;