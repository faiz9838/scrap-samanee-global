import API from '../config/apiConfig'
export const fetchOurClients = async () => API.get('/clients')