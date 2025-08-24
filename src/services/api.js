import axios from "axios";

const API = axios.create({
  baseURL: "http://localhost:4000/api", // Ajusta si usas otro puerto o despliegue
});

export default API;
 