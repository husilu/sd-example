import axiosInstance from './index';

const Api = {
    getModels: () => axiosInstance.get(`/sd/model/configs`),
    setModel: (model) => axiosInstance.get(`/set/sd/model?${model}`),
    modelDetail: (model) => axiosInstance.get(`/db/model/info?modelName=${model}`), // 查询模型配置信息
    editModel: (data) => axiosInstance.post(`/db/modified/model/info`, data), // 修改模型配置信息
    saveModel: (data) => axiosInstance.post(`/db/model/save`, data), // 保存模型配置信息
    trainJob: (name) => axiosInstance.get(`/db/train/job?modelName=${name}&useTx2img=true`), // 执行任务
    cancelJob: () => axiosInstance.get(`/db/cancel/job`) // 取消任务
}

export default Api