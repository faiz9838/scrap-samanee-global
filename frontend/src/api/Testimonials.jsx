import API from "../config/apiConfig";
export const fetchTestimonials = async () => API.get('/testimonials');