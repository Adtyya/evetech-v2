import axios from "axios";

const api = axios.create({
  // baseURL: "http://localhost:1337/api/",
  baseURL: "https://cms.evetechsolution.com/api/",
});

export default api;
