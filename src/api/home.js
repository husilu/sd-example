import axiosInstance from './index';

const Api = {
    getModels: () => axiosInstance.get(`/sd/model/configs`)
}

export default Api