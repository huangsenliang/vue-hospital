<template>
  <!-- 右侧智能诊断组件 -->
  <div class="intelligent-diagnosis">
    <!-- 头部 -->
    <div class="header-top">
      <h4>智能诊断</h4>
    </div>
    <!-- 内容 -->
    <div class="content-wrapper">
      <el-collapse v-model="activeNames">
        <el-collapse-item title="1、急性上呼吸道感染" name="1">
          <div class="diagnosis-suggestion flex">
            <span class="left">伴随:</span>
            <ul class="right flex">
              <li>
                <span class="item selected">流涕</span>
              </li>
              <li>
                <span class="item">流涕</span>
              </li>
              <li>
                <span class="item">流涕</span>
              </li>
              <li>
                <span class="item">食欲不振</span>
              </li>
              <li>
                <span class="item">流涕</span>
              </li>
              <li>
                <span class="item">打喷嚏</span>
              </li>
            </ul>
          </div>
          <div class="diagnosis-suggestion flex">
            <span class="left">查体:</span>
            <ul class="right flex">
              <li>
                <span class="item selected">流涕</span>
              </li>
              <li>
                <span class="item">流涕</span>
              </li>
              <li>
                <span class="item">流涕</span>
              </li>
              <li>
                <span class="item">食欲不振</span>
              </li>
              <li>
                <span class="item">流涕</span>
              </li>
              <li>
                <span class="item">打喷嚏</span>
              </li>
            </ul>
          </div>
          <div class="diagnosis-suggestion flex">
            <span class="left">检验:</span>
            <ul class="right flex">
              <li>
                <span class="item selected">痰鸣音</span>
              </li>
              <li>
                <span class="item">干啰音</span>
              </li>
              <li>
                <span class="item">流涕</span>
              </li>
              <li>
                <span class="item">咳嗽后啰音消失</span>
              </li>
              <li>
                <span class="item">流涕</span>
              </li>
              <li>
                <span class="item">打喷嚏</span>
              </li>
            </ul>
          </div>
        </el-collapse-item>
        <el-collapse-item title="2、急性支气管炎" name="2">
          <div class="diagnosis-suggestion flex">
            <span class="left">伴随:</span>
            <ul class="right flex">
              <li>
                <span class="item selected">流涕</span>
              </li>
              <li>
                <span class="item">流涕</span>
              </li>
              <li>
                <span class="item">流涕</span>
              </li>
              <li>
                <span class="item">食欲不振</span>
              </li>
              <li>
                <span class="item">流涕</span>
              </li>
              <li>
                <span class="item">打喷嚏</span>
              </li>
            </ul>
          </div>
          <div class="diagnosis-suggestion flex">
            <span class="left">查体:</span>
            <ul class="right flex">
              <li>
                <span class="item selected">流涕</span>
              </li>
              <li>
                <span class="item">流涕</span>
              </li>
              <li>
                <span class="item">流涕</span>
              </li>
              <li>
                <span class="item">食欲不振</span>
              </li>
              <li>
                <span class="item">流涕</span>
              </li>
              <li>
                <span class="item">打喷嚏</span>
              </li>
            </ul>
          </div>
          <div class="diagnosis-suggestion flex">
            <span class="left">检验:</span>
            <ul class="right flex">
              <li>
                <span class="item selected">痰鸣音</span>
              </li>
              <li>
                <span class="item">干啰音</span>
              </li>
              <li>
                <span class="item">流涕</span>
              </li>
              <li>
                <span class="item">咳嗽后啰音消失</span>
              </li>
              <li>
                <span class="item">流涕</span>
              </li>
              <li>
                <span class="item">打喷嚏</span>
              </li>
            </ul>
          </div>
        </el-collapse-item>
        <el-collapse-item title="3、急性支气管炎" name="3">
          <div class="diagnosis-suggestion flex">
            <span class="left">伴随:</span>
            <ul class="right flex">
              <li>
                <span class="item selected">流涕</span>
              </li>
              <li>
                <span class="item">流涕</span>
              </li>
              <li>
                <span class="item">流涕</span>
              </li>
              <li>
                <span class="item">食欲不振</span>
              </li>
              <li>
                <span class="item">流涕</span>
              </li>
              <li>
                <span class="item">打喷嚏</span>
              </li>
            </ul>
          </div>
          <div class="diagnosis-suggestion flex">
            <span class="left">查体:</span>
            <ul class="right flex">
              <li>
                <span class="item selected">流涕</span>
              </li>
              <li>
                <span class="item">流涕</span>
              </li>
              <li>
                <span class="item">流涕</span>
              </li>
              <li>
                <span class="item">食欲不振</span>
              </li>
              <li>
                <span class="item">流涕</span>
              </li>
              <li>
                <span class="item">打喷嚏</span>
              </li>
            </ul>
          </div>
          <div class="diagnosis-suggestion flex">
            <span class="left">检验:</span>
            <ul class="right flex">
              <li>
                <span class="item selected">痰鸣音</span>
              </li>
              <li>
                <span class="item">干啰音</span>
              </li>
              <li>
                <span class="item">流涕</span>
              </li>
              <li>
                <span class="item">咳嗽后啰音消失</span>
              </li>
              <li>
                <span class="item">流涕</span>
              </li>
              <li>
                <span class="item">打喷嚏</span>
              </li>
            </ul>
          </div>
        </el-collapse-item>
        <el-collapse-item title="4、急性支气管炎" name="4">
          <div class="diagnosis-suggestion flex">
            <span class="left">伴随:</span>
            <ul class="right flex">
              <li>
                <span class="item selected">流涕</span>
              </li>
              <li>
                <span class="item">流涕</span>
              </li>
              <li>
                <span class="item">流涕</span>
              </li>
              <li>
                <span class="item">食欲不振</span>
              </li>
              <li>
                <span class="item">流涕</span>
              </li>
              <li>
                <span class="item">打喷嚏</span>
              </li>
            </ul>
          </div>
          <div class="diagnosis-suggestion flex">
            <span class="left">查体:</span>
            <ul class="right flex">
              <li>
                <span class="item selected">流涕</span>
              </li>
              <li>
                <span class="item">流涕</span>
              </li>
              <li>
                <span class="item">流涕</span>
              </li>
              <li>
                <span class="item">食欲不振</span>
              </li>
              <li>
                <span class="item">流涕</span>
              </li>
              <li>
                <span class="item">打喷嚏</span>
              </li>
            </ul>
          </div>
          <div class="diagnosis-suggestion flex">
            <span class="left">检验:</span>
            <ul class="right flex">
              <li>
                <span class="item selected">痰鸣音</span>
              </li>
              <li>
                <span class="item">干啰音</span>
              </li>
              <li>
                <span class="item">流涕</span>
              </li>
              <li>
                <span class="item">咳嗽后啰音消失</span>
              </li>
              <li>
                <span class="item">流涕</span>
              </li>
              <li>
                <span class="item">打喷嚏</span>
              </li>
            </ul>
          </div>
        </el-collapse-item>
        <el-collapse-item title="5、急性支气管炎" name="5">
          <div class="diagnosis-suggestion flex">
            <span class="left">伴随:</span>
            <ul class="right flex">
              <li>
                <span class="item selected">流涕</span>
              </li>
              <li>
                <span class="item">流涕</span>
              </li>
              <li>
                <span class="item">流涕</span>
              </li>
              <li>
                <span class="item">食欲不振</span>
              </li>
              <li>
                <span class="item">流涕</span>
              </li>
              <li>
                <span class="item">打喷嚏</span>
              </li>
            </ul>
          </div>
          <div class="diagnosis-suggestion flex">
            <span class="left">查体:</span>
            <ul class="right flex">
              <li>
                <span class="item selected">流涕</span>
              </li>
              <li>
                <span class="item">流涕</span>
              </li>
              <li>
                <span class="item">流涕</span>
              </li>
              <li>
                <span class="item">食欲不振</span>
              </li>
              <li>
                <span class="item">流涕</span>
              </li>
              <li>
                <span class="item">打喷嚏</span>
              </li>
            </ul>
          </div>
          <div class="diagnosis-suggestion flex">
            <span class="left">检验:</span>
            <ul class="right flex">
              <li>
                <span class="item selected">痰鸣音</span>
              </li>
              <li>
                <span class="item">干啰音</span>
              </li>
              <li>
                <span class="item">流涕</span>
              </li>
              <li>
                <span class="item">咳嗽后啰音消失</span>
              </li>
              <li>
                <span class="item">流涕</span>
              </li>
              <li>
                <span class="item">打喷嚏</span>
              </li>
            </ul>
          </div>
        </el-collapse-item>
      </el-collapse>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      activeNames: ["1"] // 智能诊断手风琴双向绑定
    };
  }
};
</script>

<style lang="less" scoped>
.intelligent-diagnosis {
  /*头部*/
  .header-top h4 {
    font-weight: 700;
    height: 48px;
    line-height: 48px;
    text-align: center;
    background-color: #f2f2f2;
    font-size: 16px;
    border-bottom: 1px solid #ced0da;
  }
  /*内容*/
  .content-wrapper {
    padding: 0 16px;
    .el-collapse-item__header {
      font-weight: 700;
    }
    .el-collapse-item__content {
      padding-bottom: 16px;
      padding-left: 16px;
    }
    .diagnosis-suggestion {
      color: #7a8794;
      margin-bottom: 12px;

      /*激活样式*/
      span.selected {
        color: #fff;
        background-color: #ced0da;
      }
      .left {
        min-width: 32px;
      }
      .right {
        flex-wrap: wrap;
        font-size: 13px;
        .item {
          padding: 4px 6px;
          margin-bottom: 2px;
          margin-right: 4px;
          border-radius: 12px;
          line-height: 13px;
          font-size: 13px;
          cursor: pointer;
        }
      }
    }
  }
}
</style>