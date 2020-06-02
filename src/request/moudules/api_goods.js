import request from "../http";

/*
 * 系统登录模块
 */

export default {
  getGoods(data){
    return request("goods/getGoods",data);
  },
};
