import axios from 'axios'

export default api = axios.create({
    baseURL: "https://buscadev-api.herokuapp.com"
})