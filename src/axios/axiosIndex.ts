import axios from "axios";

const service = axios.create({
  baseURL: "http://localhost:5000",
  timeout: 5000,
});

//请求拦截
service.interceptors.request.use(
  (config) => {
    // 请求前的操作，例如设置请求头和添加token
    // config.headers = config.headers || {};
    // if (localStorage.eleToken) {
    //   config.headers.Authorization = localStorage.eleToken;
    // }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

//响应拦截
service.interceptors.response.use(
  (response) => {
    //获取相应数据后的操作
    const res = response.data;
    return res;
  },
  (error) => {
    //错误处理
    return Promise.reject(error);
  }
);

export default service;

const Request = (method: string, url: string, data: Object, config: Object) => {
  return service({
    method,
    url,
    data,
    ...config,
  }).then((response) => {
    return response;
  });
};
export const getRequest = (url: string, params: Object, config: Object) =>
  Request("get", url, params, config);

export const postRequest = (url: string, data: Object, config: Object) =>
  Request("post", url, data, config);

export const deleteRequest = (url: string, data: Object, config: Object) =>
  Request("delete", url, data, config);
