import request from "../http";

/*
 * 系统登录模块
 */

export default {
  productData(data) {
    return request("index/data",data)
  },
  detailsData(data) {
    return request("details",data)
  },
  detailsSell(data){
    return request("user/login",data)
  }
};
