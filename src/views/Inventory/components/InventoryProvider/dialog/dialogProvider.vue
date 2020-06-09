<template>
<!-- 添加供应商弹窗组件 -->
  <div class="dialog-provider dialog">
    <div class="cover-wrapper"></div>
    <div class="content-style provider-content">
      <!-- 头部 -->
      <div class="popper-header flex">
        <h4>全量盘点</h4>
        <i
          @click="$emit('showDialogProvider')"
          class="icon-del iconfont"
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
          <button  @click="$emit('showDialogProvider')" class="btn-blank">取消</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      state: "2" // 单选按钮启动状态值绑定变量
    };
  }
};
</script>

<style lang="less" scoped>
.dialog-provider {
  /*对话框*/
  .provider-content {
    background: #fff;
    /*头部*/
    .popper-header {
      height: 40px;
      -ms-align-items: center;
      -webkit-align-items: center;
      align-items: center;
      -ms-justify-content: space-between;
      -webkit-justify-content: space-between;
      justify-content: space-between;
      border-bottom: 1px solid #e6eaee;
      background-color: #eff1f5;
      border-top-right-radius: 3px;
      border-top-left-radius: 3px;
      padding-left: 24px;
      h4 {
        font-size: 16px;
        font-weight: 700;
        color: #000;
      }
    }
    /*表单内容*/
    .popper-body {
      padding: 24px 24px 8px;
      min-width: 378px;
      width: 378px;
      height: 378px;
      .form-item {
        display: -webkit-box;
        display: -webkit-flex;
        display: -ms-flexbox;
        display: flex;
        -webkit-box-align: center;
        -webkit-align-items: center;
        -ms-flex-align: center;
        align-items: center;
        margin-bottom: 16px;
        label {
          width: 90px;
          text-align: left;
          color: @color_7a8794;
        }
        input {
          border: 1px solid @color_ced0da;
          height: 32px;
          border-radius: 4px;
          padding-left: 10px;
        }
        textarea {
          border: 1px solid @color_ced0da;
          border-radius: 4px;
          width: 244px;
          height: 64px;
          padding: 10px;
        }
      }
    }
    /*按钮*/
    .popper-footer {
      justify-content: flex-end;
      -webkit-box-sizing: border-box;
      box-sizing: border-box;
      line-height: 1;
      height: auto;
      padding: 14px 16px;
      border-bottom-left-radius: 4px;
      border-bottom-right-radius: 4px;
      border-top: 1px solid #e6eaee;
    }
  }
}
</style>