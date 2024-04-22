import axiosInstance from './index';
const basePath = '/img'

const Api = {
    txtToimg: (data) => axiosInstance.get(`${basePath}/txt2img`, { params: data}),
    imgToimg: (data) => axiosInstance.get(`${basePath}/img2img`, data),
    imglist: (type) => axiosInstance.get(`${basePath}/get/list/${type}`) // 获取图片列表
}

export default Api