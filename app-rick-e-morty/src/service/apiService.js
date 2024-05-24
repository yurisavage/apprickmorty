import axios from "axios";

const apiService = axios.create({
    baseURL: "https://rickandmortyapi.com/api/"
})

export default apiService