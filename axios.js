import Axios from 'axios';

const AxiosInstance = Axios.create({
    baseURL: 'http://localhost:3000'
});

export default AxiosInstance;