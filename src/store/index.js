import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

// 引入模块
import layout from "./modules/layout";
import inventory from "./modules/inventory";
import admin from "./modules/admin";

export default new Vuex.Store({
  modules: {
    layout,
    inventory,
    admin
  }
});
