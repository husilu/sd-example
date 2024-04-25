import axiosInstance from './index';
const basePath = '/user'

const Api = {
    loginApi: (data) => axiosInstance.post(`${basePath}/login`, data),
    registerApi: (data) => axiosInstance.post(`${basePath}/register`, data),
    EditApi: (data) => axiosInstance.post(`${basePath}/modifie`, data),
    userDetail: () => axiosInstance.get(`${basePath}/get/user/detail`)
}

export default Api