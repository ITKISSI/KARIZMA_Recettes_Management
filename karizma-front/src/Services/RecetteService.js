import axios from "axios";
const API_URL ="http://localhost:8080/recettes/";

const getAllRecettes = () => {
    return axios.get(`${API_URL}`);
}

const getRecette = (recetteId) => {
    return axios.get(`${API_URL}${recetteId}`);
}
const addRecette = (Recette) => {
    return axios.post(`${API_URL}`,Recette);
}
const deleteRecette = (recetteId) => {
    return axios.delete(`${API_URL}${recetteId}`);
}

const updateRecette = (id, updatedRecette) => {
    return axios.put(`${API_URL}${id}`, updatedRecette);
};

const RecetteService = {
    getRecette,
    getAllRecettes,
    addRecette,
    deleteRecette,
    updateRecette
};


export default RecetteService;