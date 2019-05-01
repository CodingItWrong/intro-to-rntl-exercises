import axios from 'axios';

const api = axios.create({
  baseURL: 'https://api.reactnativetesting.io',
  headers: {
    Authorization: `Bearer Dedc1IXu3PmuFfYx1mw5DczLQe1xeSA4VGudQf5lM04`,
  },
});

export default api;
