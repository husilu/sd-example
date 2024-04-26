import axiosInstance from './index';
const basePath = '/img'

const Api = {
    txtToimg: (data) => axiosInstance.get(`${basePath}/txt2img`, { params: data}),
    imgToimg: (data) => axiosInstance.post(`${basePath}/img2img`, data),
    imglist: (type) => axiosInstance.get(`${basePath}/get/list/${type}`), // 获取图片列表
    download: (type, fileName) => axiosInstance.get(`${basePath}/download/${type}?fileName=${fileName}`),
    delImg: (type, fileName) => axiosInstance.post(`${basePath}/remove/${type}`, {fileName}), // 删除图片
}

export default Api