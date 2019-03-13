import axios from 'axios';

const api = axios.create({
  baseURL: 'http://localhost:3000',
  headers: {
    'Content-Type': 'application/vnd.api+json',
    Authorization: `Bearer 65d42fb0b7bfca72c0244274537180a03df41d7b8ed683bf1f5e16428d37579e`,
  },
});

export default api;
