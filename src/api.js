import axios from 'axios';

const API_KEY = 'YOUR-API-KEY-YERE';

const api = axios.create({
  baseURL: `https://api.outsidein.dev/${API_KEY}`,
});

export default api;
