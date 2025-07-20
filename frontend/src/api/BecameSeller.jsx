import API from "../config/apiConfig";

export const becameSeller = async (data) => {
    try {
        const response = await API.post('/resellers', data);
        return response.data;
    } catch (error) {
        console.error("Error becoming a seller:", error);
        throw error;
    }
}