import axios from 'axios'

const api = axios.create({
    baseURL:'https://megatom-backend-2.herokuapp.com'
})

export default api