import axiosInstance from './index';

const Api = {
    getModels: () => axiosInstance.get(`/sd/model/configs`),
    setModel: (model) => axiosInstance.get(`/set/sd/model?${model}`)
}

export default Api