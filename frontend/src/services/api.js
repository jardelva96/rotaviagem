import axios from "axios";

const api = axios.create({
  baseURL: "http://localhost:5283/api", // Certifique-se de que a porta está correta.
});

export default api;
