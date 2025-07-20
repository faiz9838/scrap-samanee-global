// src/api/heroApi.js
import API from "../config/apiConfig";

export const fetchHeroData = async () => API.get('/hero');
export const createHeroData = async (hero) => API.post('/hero', hero);
export const updateHeroData = async (id, hero) => API.put(`/hero/${id}`, hero);
export const deleteHeroData = async (id) => API.delete(`/hero/${id}`);