import axios from '../config/axios';

const resource = 'karfarmas'

const servicesRepository = {
    getAddress() {
        return axios.get(`${resource}/address`);
    },
    upsertAddress(params) {
        return axios.post(`${resource}/address`, params);
    },
}

export default servicesRepository
