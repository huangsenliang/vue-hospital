const actions = {}
// 数据
const state = {
  tabName: sessionStorage.getItem('adminTabName'),  // 导航栏切换标签索引
}
// getters 只会依赖 state 中的成员去更新
const getters = {
    adminTabName:(state)=>state.adminTabName,
}

const mutations = {
  // const mutations = {  // 必须的  同步 没有回调处理事情
  setTabName(staten,name) {
    staten.adminTabName = name;
    sessionStorage.setItem('adminTabName', name);
  },

}

export default {
    namespaced: true,
    state,
    getters,
    mutations,
    actions
};
