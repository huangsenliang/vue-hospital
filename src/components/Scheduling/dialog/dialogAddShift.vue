<template>
  <!-- 增加班次 -->
  <div class="dialog-add-shift dialog">
    <div class="cover-wrapper"></div>
    <!-- 内容 -->
    <div class="add-shift-body content-style">
      <!-- 头部 -->
      <div class="header flex align-items justify-between">
        <h4>增加班次</h4>
        <i class="iconfont icon-del" @click="$emit('close')"></i>
      </div>
      <!-- 表单内容 -->
      <div class="form-wrapper">
        <!-- 班次名称 -->
        <div class="form-item">
          <label class="form-label">
            班次名称
            <i class="iconfont icon-zhongdian"></i>
          </label>
          <div class="form-content">
            <el-input placeholder="请输入内容" v-model="input" clearable></el-input>
          </div>
        </div>
        <!-- 时间段 -->
        <div class="form-item">
          <label class="form-label">
            时间段
            <i class="iconfont icon-zhongdian"></i>
          </label>

          <div class="form-content flex align-items">
            <el-select v-model="value" placeholder="请选择">
              <el-option
                v-for="item in options"
                :key="item.value"
                :label="item.label"
                :value="item.value"
              ></el-option>
            </el-select>
            <span style="padding:5px;fontSize:16px">-</span>
            <el-select v-model="value" placeholder="请选择">
              <el-option
                v-for="item in options"
                :key="item.value"
                :label="item.label"
                :value="item.value"
              ></el-option>
            </el-select>
          </div>
        </div>
      </div>
      <!-- 按钮 -->
      <div class="btn-wrapper flex align-items justify-end">
        <button class="btn-primary" style="marginRight:10px">保存</button>
        <button class="btn-blank" @click="$emit('close')">取消</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      input: "",
      options: [
        {
          value: "选项1",
          label: "黄金糕"
        },
        {
          value: "选项2",
          label: "双皮奶"
        },
        {
          value: "选项3",
          label: "蚵仔煎"
        },
        {
          value: "选项4",
          label: "龙须面"
        },
        {
          value: "选项5",
          label: "北京烤鸭"
        }
      ],
      value: ""
    };
  }
};
</script>

<style lang="less" scoped>
.dialog-add-shift {
  font-size: 14px;
  .add-shift-body {
    width: 360px;
    background: #fff;
    border-radius: 3px;
    -webkit-box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
    // 头部
    .header {
      padding-left: 16px;
      height: 40px;
      border-bottom: 1px solid #e6eaee;
      background-color: #eff1f5;
      border-top-right-radius: 3px;
      border-top-left-radius: 3px;
      h4 {
        font-weight: 700;
      }
    }
    // 内容
    .form-wrapper {
      padding: 16px;
      .form-item {
        .form-label {
          display: block;
          margin-bottom: 5px;
          color: #7a8794;
          .icon-zhongdian {
            color: #ff9933;
          }
        }
      }
      .form-item:not(:last-child) {
        margin-bottom: 16px;
      }
    }
    // 按钮
    .btn-wrapper {
      height: 61px;
      border-bottom-left-radius: 4px;
      border-bottom-right-radius: 4px;
      border-top: 1px solid #e6eaee;
      padding: 0 16px;
    }
  }
}
</style>