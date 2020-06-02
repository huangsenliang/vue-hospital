import axios from "axios";
import qs from "qs";
import store from "../store/store";
import { Message } from "element-ui";

axios.defaults.timeout = 1000 * 10;   // 请求超时时间
axios.method = "get";
axios.defaults.baseURL = "http://192.168.0.106:9011/"; //开发地址/api


// axios.defaults.headers.post["Content-Type"] =
//   "application/x-www-form-urlencoded";    // 设置默认请求头


// 请求拦截
axios.interceptors.request.use(
  (config) => {
    console.log("进入请求拦截器...");
    //this.axios.post(
    //"user/signin",
    //{uname:dingding , upwd:123456}
    //)
    // qs模块转换参数形式
    if (config.method === "post") {
      config.data = qs.stringify(config.data);
      console.log("post请求的参数:", config.data);
      axios.defaults.headers.post["Content-Type"] =
        "application/x-www-form-urlencoded";
    }
    // 每次请求自动提交token
    console.log("请求的方式method:", config.method)
    console.log("请求的参数params:", config.params)
    console.log("请求的config:", config)
    if (localStorage.getItem("token")) {
      config.headers.Authorization = localStorage.getItem("token");
    }
    if (sessionStorage.getItem("token")) {
      config.headers.Authorization = sessionStorage.getItem("token");
    }
    if (store.getters.token) {
      config.headers.Authorization = store.getters.token;
    }
    return config;
  },
  (error) => {
    console.log("===发送请求拦截器报错===");
    console.log(error);
    console.log("===end===");
    return Promise.reject(error);
  }
);


// 响应拦截
axios.interceptors.response.use(
  (res) => {
    console.log("触发响应拦截器...");
    // if (res.data.token && res.status == 200) {
    if (res.status == 200) {
      localStorage.setItem("token", res.data.token);
      localStorage.setItem("user_name", res.data.user_name);
      localStorage.setItem("isLogin", true);
      return Promise.resolve(res);

      // 数据返回成功保存用户名和登录状态
      // store.commit("handleToken", res.data.token);
      // store.commit("handleUserName", res.data.uname);
      // store.commit("isLogin", true);
      // 在本地存储中保存token
      // if (res.remember === "true") {
      //   localStorage.setItem("token", res.data.token);
      // } else {
      //   sessionStorage.setItem("token", res.data.token);
      // }

      // } else if (res.data.code == -1) {
      //   localStorage.setItem("token", '');
      //   localStorage.setItem("user_name", '');
      //   localStorage.setItem("isLogin", false);

      // store.commit("handleToken", '');
      // store.commit("isLogin", false);
      // store.commit("handleUserName", "");
      //alert(res.data.msg+" 请先登录 !");
      // } else if (res.data.status == 403) {
      // localStorage.setItem("token", '');
      // localStorage.setItem("user_name", '');
      // localStorage.setItem("isLogin", false);

      // store.commit("handleToken", '');
      // localStorage.removeItem("token");
      // sessionStorage.removeItem("token");
      // store.commit("isLogin", false);
      // store.commit("handleUserName", "");


    } else {
      return Promise.reject(res);
    }

  },
  (error) => {
    if (error.response.status) {
      switch (error.response.status) {
        // 401: 未登录
        // 未登录则跳转登录页面，并携带当前页面的路径
        // 在登录成功后返回当前页面，这一步需要在登录页操作。                
        case 401:
          router.replace({
            path: '/login',
            query: {
              redirect: router.currentRoute.fullPath
            }
          });
          break;

        // 403 token过期
        // 登录过期对用户进行提示
        // 清除本地token和清空vuex中token对象
        // 跳转登录页面                
        case 403:
         Message({
            message: '登录过期，请重新登录',
            duration: 1000,
            // forbidClick: true
          });
          // 清除token
          localStorage.removeItem('token');
          // localStorage.setItem("user_name", '');
          localStorage.setItem("isLogin", false);
          // 跳转登录页面，并将要浏览的页面fullPath传过去，登录成功后跳转需要访问的页面 
          setTimeout(() => {
            router.replace({
              path: '/login',
              query: {
                redirect: router.currentRoute.fullPath
              }
            });
          }, 1000);
          break;

        // 404请求不存在
        case 404:
          Message({
            message: '网络请求不存在',
            duration: 1500,
          });
          break;
        // 其他错误，直接抛出错误提示
        default:
          Message({
            message: error.response.data.message,
            duration: 1500,
          });
      }
      return Promise.reject(error.response);
    }
  }
);

const request = function (url, data = {}) {
  // post请求需要转化参数
  console.log("data的数据:", data);
  return new Promise((resolve) => {
    axios({
      url,
      method: data.method,
      params: data.params,
    })
      .then(res => {
        console.log(res);
        resolve("请求结果：",res);
      })
      .catch(err => {
        console.log("请求错误")
      });
  });
};

export default request;
