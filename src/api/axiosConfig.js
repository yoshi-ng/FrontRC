import { env } from "node:process";

// src/api/axiosConfig.js
import axios from "axios";
// Obtener la URL base de la variable de entorno
const apiUrl = process.env.URL;
// Crear una instancia de Axios con la configuración base
const api = axios.create({ baseURL: apiUrl });

export default api;

import "../../src/.env";
