import axios from "axios";

const API = axios.create({
  baseURL: "https://ventas20252-back.vercel.app/api", // Ajusta si usas otro puerto o despliegue
});

export default API;
 