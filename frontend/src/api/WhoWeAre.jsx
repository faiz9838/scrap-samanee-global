// src/api/WhoWeAre.jsx
import API from "../config/apiConfig";

export const fetchWhoWeAre = async () => API.get('/who-we-are');