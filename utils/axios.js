import axios from "axios";

const api = axios.create({
  // baseURL: "http://localhost:1337/api/",
  baseURL: "https://evetechsolution-be.vercel.app/api",
});

export default api;
