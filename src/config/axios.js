import axios from 'axios'

const headers = {
    'Accept': 'application/json',
    'Content-Type': 'application/json',
    'Authorization': 'Basic '+ process.env.VUE_APP_TOKEN
}

const axiosClient = axios.create({
    baseURL: process.env.VUE_APP_SERVER + '/api/',
    headers
});


export default axiosClient
