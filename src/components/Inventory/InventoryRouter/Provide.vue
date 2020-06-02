<template>
  <div class="provide-wrapper">
    <!-- 头部 -->
    <div class="provide-header flex">
      <Search-Input placeholder="供应商名称"></Search-Input>
      <button @click="showProvidePoppe=!showProvidePoppe" class="btn-success">新增供应商</button>
    </div>
    <!-- 表格 -->
    <div class="provide-body">
      <ul class="table-header flex">
        <li class="item1">
          <span>供应商</span>
        </li>
        <li class="item2">
          <span>启用状态</span>
        </li>
        <li class="item3">
          <span>许可证号</span>
        </li>
        <li class="item4">
          <span>联系人</span>
        </li>
        <li class="item5">
          <span>联系方式</span>
        </li>
        <li class="item6">
          <span>备注</span>
        </li>
      </ul>
      <ul v-for="(item,index) of 10" :key="index" class="flex row">
        <li class="item1">
          <span>华纳大药厂</span>
        </li>
        <li class="item2">
          <span>启用</span>
        </li>
        <li class="item3">
          xxx
          <span>许可证号</span>
        </li>
        <li class="item4">
          xxx
          <span>联系人</span>
        </li>
        <li class="item5">
          18244909680
          <span>联系方式</span>
        </li>
        <li class="item6">
          xxxx
          <span>备注</span>
        </li>
      </ul>
    </div>
    <!-- 底部 -->
    <div class="provide-footer flex">
      <el-pagination background layout="prev, pager, next" :total="1000"></el-pagination>
      <div class="right">
        共
        <span style="fontWeight: 700;">&nbsp;17&nbsp;</span>条记录
      </div>
    </div>
    <!-- 对话框 -->
    <div v-if="showProvidePoppe" class="provide-popper popper-wrapper">
      <div class="mask"></div>
      <div class="popper-style">
        <!-- 头部 -->
        <div class="popper-header flex">
          <h4>全量盘点</h4>
          <i
            @click="showProvidePoppe=false"
            class="icon-del iconfont"
            style="fontSize:25px;cursor:pointer;"
          ></i>
        </div>
        <!-- 表单内容 -->
        <div class="popper-body">
          <div class="form-item">
            <label for>
              <span>供应商名称</span>
              <i style="color: #f93;fontSize:18px" class="iconfont icon-zhongdian"></i>
            </label>
            <input type="text" />
          </div>
          <div class="form-item">
            <label for>启用状态</label>
            <el-radio v-model="state" label="1">备选项</el-radio>
            <el-radio v-model="state" label="2">备选项</el-radio>
          </div>
          <div class="form-item">
            <label for>许可证号</label>
            <input type="text" />
          </div>
          <div class="form-item">
            <label for>联系人</label>
            <input type="text" />
          </div>
          <div class="form-item">
            <label for>联系方式</label>
            <input type="text" />
          </div>
          <div class="form-item">
            <label for>备注</label>
            <textarea cols="30" rows="10"></textarea>
          </div>
        </div>
        <!-- 按钮 -->
        <div class="popper-footer flex">
          <div class="footer-right">
            <button style="marginRight:16px" class="btn-primary">确定</button>
            <button  @click="showProvidePoppe=false" class="btn-blank">取消</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import SearchInput from "../../Common/SearchInput";

export default {
  components: {
    SearchInput
  },
  data() {
    return {
      state: "2", // 单选按钮启动状态值绑定变量
      showProvidePoppe: false // 新增供应商弹窗显示隐藏控制变量
    };
  },
  methods: {},
  create() {}
};
</script>

<style scoped>
@import "../../../assets/css/Inventory/InventoryRouter/Provide/Provide.css";
</style>