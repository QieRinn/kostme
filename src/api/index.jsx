import axios from 'axios';

const Api = axios.create({
    //set default endpoint API
    baseURL: 'http://localhost:5050/api/v1'
})

export default Api