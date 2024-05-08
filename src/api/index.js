import axios from 'axios';
import { message } from 'antd';
import store from '../store'; // 假设你的Redux store被导出为store
import { logout } from '../store/reducers/authReducer'; // 导入loginSuccess action

const instance = axios.create({
  baseURL: 'http://124.71.223.180:8088',
  // baseURL: 'http://localhost:8088',
});

// 添加请求拦截器
instance.interceptors.request.use(function (config) {
  // 在发送请求之前做些什么
  const token = store.getState().auth.token;
   if(token) {
    config.headers.token = token
   }
  return config;
}, function (error) {
  // 对请求错误做些什么
  return Promise.reject(error);
});

// 添加响应拦截器
instance.interceptors.response.use(function (response) {
  // 2xx 范围内的状态码都会触发该函数。
  // 对响应数据做点什么
  const data = response.data;
   if (data.responseCode !== '000') {
      message.warning(data.responseDesc);
   }
   if (data.responseCode === 102){
    window.location.href ='/login';
    store.dispatch(logout())
    return Promise.reject(data.responseDesc);
  }
   return response.data;
}, function (error) {
  // 超出 2xx 范围的状态码都会触发该函数。
  // 对响应错误做点什么
  // message.warning(error)
  return Promise.reject(error);
});

export default instance