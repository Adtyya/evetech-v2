import axios from "axios";

const api = axios.create({
  baseURL: "https://cms.evetechsolution.com/api/",
});

export default api;
