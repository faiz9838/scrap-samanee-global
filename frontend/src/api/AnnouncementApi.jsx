import API from "../config/apiConfig";
export const fetchAnnouncement = async () => API.get('/announcement');