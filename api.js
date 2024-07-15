// src/api.js
import axios from 'axios';

const api = axios.create({
  baseURL: 'http://localhost:3000/api', // Asegúrate de que esta URL coincida con la URL de tu backend
});

export default api;
