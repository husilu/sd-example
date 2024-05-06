import axiosInstance from './index';

const Api = {
    getModels: () => axiosInstance.get(`/sd/model/configs`),
    setModel: (modelName) => axiosInstance.get(`/set/sd/model?modelName=${modelName}`),
    createDBModel: model => axiosInstance.post(`/db/model/save`, model), //创建dreambooth模型配置信息，第一次创建可不传配置信息
    trainJob: (modelName) => axiosInstance.post(`/db/train/job?modelName=${modelName}&useTx2img=true`),  //执行dreambooth任务
    cancelJob: () => axiosInstance.get(`/db/cancel/job`),  //取消dreambooth任务
    getDbModels: (modelName) => axiosInstance.get(`/db/model/info?modelName=${modelName}`), //获取指定模型配置信息
    getDbModelNames: () => axiosInstance.get(`/db/model/name/list`), //查询dreambooth模型列表
    updateDbModelNames: (model) => axiosInstance.post(`/db/modified/model/info`,model) //查询模型名称
}

export default Api