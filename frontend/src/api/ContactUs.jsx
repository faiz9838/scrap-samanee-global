import API from '../config/apiConfig'
export const postContactUs = async (data) => API.post('/contact-us', data)