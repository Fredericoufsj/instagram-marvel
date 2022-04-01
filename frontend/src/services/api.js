import axios from "axios";

const api = axios.create({
    baseURL:"https://instagram-marvel.herokuapp.com/"
})

export default api;