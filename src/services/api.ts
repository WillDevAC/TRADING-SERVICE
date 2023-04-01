import axios from 'axios'

const api = axios.create({
    baseURL: 'http://localhost:3333',
    headers: {
        'Access-Control-Allow-Origin': '*',
        'Accept': 'application/json',
        'Content-Type': 'application/json',
    },
    timeout: 40000,
    validateStatus: (status: any) => {
        return true;
    },
})

export { api }