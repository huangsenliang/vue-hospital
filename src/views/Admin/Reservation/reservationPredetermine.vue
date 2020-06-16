<template>
  <!-- 预约设置：预约设置页面 -->
  <div class="reservation-predetermine hidden-scorll">
    <!-- 内容 -->
    <div class="reservation-body">
      <!-- 放号设置 -->
      <section>
        <div class="section-title">
          <span>放号设置</span>
        </div>
        <div class="setting-item flex align-items">
          <label class="sttting-label">放号时间</label>
          <div class="content">
            提前
            <el-select v-model="value" placeholder="请选择">
              <el-option
                v-for="item in options"
                :key="item.value"
                :label="item.label"
                :value="item.value"
              ></el-option>
            </el-select>放号，放号时间：每天
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
        <div class="setting-item flex align-items">
          <label class="sttting-label">号源过期时间</label>
          <div class="content">
            <el-checkbox v-model="checked">开启</el-checkbox>
          </div>
        </div>
        <div class="setting-item flex align-items">
          <label class="sttting-label"></label>
          <div class="content">
            号源将在就诊结束后时间
            <el-select v-model="value" placeholder="请选择">
              <el-option
                v-for="item in options"
                :key="item.value"
                :label="item.label"
                :value="item.value"
              ></el-option>
            </el-select>前1小时
            关闭预约
          </div>
        </div>
        <div class="setting-item flex align-items">
          <label class="sttting-label">现场预留号</label>
          <div class="content">
            <el-checkbox v-model="checked">开启</el-checkbox>
            <span class="tips">开启后，排班时可预留医生当天部分号源，供现场临时插号</span>
          </div>
        </div>
        <div class="setting-item flex align-items">
          <label class="sttting-label">会员预留号</label>
          <div class="content">
            <el-checkbox v-model="checked">开启</el-checkbox>
            <span class="tips">开启后，排班时可设置部分号源仅供会员预约</span>
          </div>
        </div>
      </section>
      <!-- 预约设置 -->
      <section>
        <div class="section-title">
          <span>预约设置</span>
        </div>
        <div class="setting-item flex align-items">
          <label class="sttting-label">预约时间</label>
          <div class="content">
            <el-radio v-model="radio" label="1">按上午、下午、晚上预约</el-radio>
          </div>
        </div>
        <div class="setting-item flex align-items">
          <label class="sttting-label"></label>
          <div class="content">
            <el-radio v-model="radio" label="2">按精确时间段预约</el-radio>
            <span class="tips">如患者可预约10:00 - 10:10就诊</span>
          </div>
        </div>
        <div class="setting-item flex align-items">
          <label class="sttting-label">微信预约支付</label>
          <div class="content">
            <el-checkbox v-model="checked">开启</el-checkbox>
            <span class="tips">开启后，患者在微信预约时需要支付挂号费</span>
          </div>
        </div>
        <div class="setting-item flex align-items">
          <label class="sttting-label">支付方式</label>
          <div class="content">
            <el-checkbox v-model="checked">微信</el-checkbox>
            <el-checkbox v-model="checked">会员卡余额</el-checkbox>
          </div>
        </div>
        <div class="setting-item flex align-items">
          <label class="sttting-label">微信预约限号</label>
          <div class="content">
            <el-checkbox v-model="checked">开启</el-checkbox>
            <span class="tips">开启后，可限制一个微信号在某时间段最多可预约的次数</span>
          </div>
        </div>
        <div class="setting-item flex align-items">
          <label class="sttting-label"></label>
          <div class="content">
            <el-select v-model="value" placeholder="请选择">
              <el-option
                v-for="item in options"
                :key="item.value"
                :label="item.label"
                :value="item.value"
              ></el-option>
            </el-select>内，在单个门店最多可预约
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
        <div class="setting-item flex align-items">
          <label class="sttting-label">退号抢号提醒</label>
          <div class="content">
            <el-checkbox v-model="checked">微信</el-checkbox>
            <span class="tips">医生号满后，患者可开启退号抢号提醒，第一时间抢号</span>
          </div>
        </div>
        <div class="setting-item flex align-items">
          <label class="sttting-label">诊前提醒</label>
          <div class="content">
            <span>短信通知</span>
            <span class="open-btn">开启</span>
            <span>微信服务号通知</span>
            <span class="open-btn">开启</span>
          </div>
        </div>
        <div class="setting-item flex align-items">
          <label class="sttting-label"></label>
          <div class="content">
            <span class="tips">预约时间前 2小时 提醒患者到店就诊， 总部可在【营销】-【消息推送】中设置短信/微信通知</span>
            <span class="link-set">去设置</span>
          </div>
        </div>
      </section>
      <!-- 微信退号退费设置 -->
      <section>
        <div class="section-title">
          <span>微信退号退费设置</span>
        </div>
        <div class="setting-item flex align-items">
          <label class="sttting-label">退好设置</label>
          <div class="content">
            <el-checkbox v-model="checked">允许退号</el-checkbox>
          </div>
        </div>
        <div class="setting-item flex align-items">
          <label class="sttting-label">退号规则</label>
          <div class="content">
            患者主动退号，需提前
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
      </section>
      <!-- 签到设置 -->
      <section>
        <div class="section-title">
          <span>签到设置</span>
        </div>
        <div class="setting-item flex align-items">
          <label class="sttting-label">预约签到</label>
          <div class="content">
            <el-checkbox v-model="checked">开启</el-checkbox>
            <span class="tips">开启后，预约患者需签到后，才会进待诊</span>
          </div>
        </div>
        <div class="setting-item flex align-items">
          <label class="sttting-label">扫码签到</label>
          <div class="content">
            <el-checkbox v-model="checked">开启</el-checkbox>
            <span class="tips">开启后，患者到店可扫描门店二维码自主签到（暂未支持自助缴费）</span>
          </div>
        </div>
      </section>
      <!-- 按钮 -->
      <div class="btn-wrapper">
        <button class="btn-primary" disabled>保存</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
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
      value: "",
      radio: "1",
      checked: true
    };
  }
};
</script>

<style lang="less" scoped>
.reservation-predetermine {
  height: 100%;
  overflow-y: auto;
  padding: 0 0 40px;
  .reservation-body {
    padding: 0 24px;
    section {
      padding: 24px 0 16px;
      // 标题
      .section-title {
        font-size: 14px;
        line-height: 14px;
        border-bottom: 1px solid #e6eaee;
        font-weight: 700;
        padding-bottom: 12px;
        margin-bottom: 24px;
      }
      // 行
      .setting-item {
        margin-bottom: 16px;
        label.sttting-label {
          width: 128px;
          color: @color_7a8794;
        }
        .content {
          color: #000;
          /deep/ .el-select {
            width: 100px;
            margin: 0 5px;
          }
          /deep/ .el-checkbox__label {
            color: #000;
            margin-right: 15px;
          }
          /deep/ .el-radio {
            margin-right: 20px;
          }
          // 提示文字
          .tips {
            font-size: 12px;
            color: @color_7a8794;
          }
          // 开启按钮
          .open-btn {
            color: #0eba52;
            margin-right: 40px;
            margin-left: 8px;
          }
          .link-set {
            color: #007aff;
            cursor: pointer;
            margin-left: 4px;
          }
        }
      }
    }
  }
}
</style>