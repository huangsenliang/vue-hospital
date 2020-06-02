import Vue from 'vue'
import Vuex from 'vuex'
 
Vue.use(Vuex)
 
const actions = {}
// 数据
const state = {
  user_name: localStorage.getItem('user_name'),   // 从本地存储中获取用户名字
  isLogin : localStorage.getItem('isLogin'),  // 从本地存储中获取登录状态
  token : localStorage.getItem('token')  // 从本地存储中获取token
}
// getters 只会依赖 state 中的成员去更新
const getters = {
  userName: (state) => state.user_name,
  isLogin :(state) => state.isLogin,
  token:(state) => state.token,
}

const mutations = {
  // 保存用户名
  handleUserName: (state, user_name) => {
      state.user_name = user_name
      localStorage.setItem('user_name', user_name)  
  },
  // 保存登录状态
  isLogin(state,status){
    state.isLogin = status;
    localStorage.setItem('isLogin', status)
  },
  // 保存token值
  handleToken(state,status){
    state.token = status;
    localStorage.setItem('token', status)
  },
  // 退出登录状态
  LoginOut (state){
    localStorage.clear();
    state.user_name = '';
    state.isLogin = false;
  },
 
}
 
const store = new Vuex.Store({
  actions,
  mutations,
  state,
  getters
})
export default store;