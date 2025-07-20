import API from "../config/apiConfig";
export const fetchProductCategories = async () => API.get('/productCategory');