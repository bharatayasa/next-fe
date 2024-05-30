import axios from 'axios';

const baseUrl = "https://test.api.sahabatlautlestari.com";

export const getAllSpecies = async () => {
    const response = await axios.get(`${baseUrl}/species/all`);
    return response.data;
};

export const getSpeciesById = async (id) => {
    const response = await axios.get(`${baseUrl}/species/${id}`);
    return response.data;
};

export const addSpecies = async (speciesData) => {
    const response = await axios.post(`${baseUrl}/species`, speciesData);
    return response.data;
};

export const loginAdmin = async (username, password) => {
    const response = await axios.post(`${baseUrl}/auth/login`, { username, password });
    return response.data;
};

module.exports = {
    getAllSpecies, 
    getSpeciesById, 
    addSpecies, 
    loginAdmin
}
