<template >
  <!-- 设置排班弹窗盒子 -->
  <div class="dialog-scheduling">
    <!-- 头部 -->
    <div class="header flex align-items">
      <div class="col shift">班次</div>
      <div class="col time">时间</div>
      <div class="col number">号源量</div>
      <div class="col consulting-room flex-item">诊室</div>
    </div>
    <!-- 内容 -->
    <div class="body">
      <!-- 端午加班 -->
      <ul class="row flex align-items">
        <li class="item1">
          <el-checkbox v-model="isOvertime">加班</el-checkbox>
        </li>
        <li class="item2">08:00-17:00</li>
        <li class="item3">
          <el-input :disabled="!isOvertime" v-model="input" placeholder="号源量"></el-input>
        </li>
        <li class="item4">
          <el-select v-model="value" :disabled="!isOvertime" placeholder="请选择诊室">
            <el-option
              v-for="item in options"
              :key="item.value"
              :label="item.label"
              :value="item.value"
            ></el-option>
          </el-select>
        </li>
      </ul>
      <!-- 上午 -->
      <ul class="row flex align-items">
        <li class="item1">
          <el-checkbox v-model="isMorning">上午</el-checkbox>
        </li>
        <li class="item2">09:00-12:00</li>
        <li class="item3">
          <el-input :disabled="!isMorning" v-model="input" placeholder="号源量"></el-input>
        </li>
        <li class="item4">
          <el-select v-model="value" :disabled="!isMorning" placeholder="请选择诊室">
            <el-option
              v-for="item in options"
              :key="item.value"
              :label="item.label"
              :value="item.value"
            ></el-option>
          </el-select>
        </li>
      </ul>
      <!-- 下午班 -->
      <ul class="row flex align-items">
        <li class="item1">
          <el-checkbox v-model="isAfternoon">下午班</el-checkbox>
        </li>
        <li class="item2">14:00-18:00</li>
        <li class="item3">
          <el-input :disabled="!isAfternoon" v-model="input" placeholder="号源量"></el-input>
        </li>
        <li class="item4">
          <el-select v-model="value" :disabled="!isAfternoon" placeholder="请选择诊室">
            <el-option
              v-for="item in options"
              :key="item.value"
              :label="item.label"
              :value="item.value"
            ></el-option>
          </el-select>
        </li>
      </ul>
      <!-- 夜班 -->
      <ul class="row flex align-items">
        <li class="item1">
          <el-checkbox v-model="isNight">夜班</el-checkbox>
        </li>
        <li class="item2">19:00-22:00</li>
        <li class="item3">
          <el-input :disabled="!isNight" v-model="input" placeholder="号源量"></el-input>
        </li>
        <li class="item4">
          <el-select v-model="value" :disabled="!isNight" placeholder="请选择诊室" style="height:28px">
            <el-option
              v-for="item in options"
              :key="item.value"
              :label="item.label"
              :value="item.value"
            ></el-option>
          </el-select>
        </li>
      </ul>
    </div>
    <!-- 按钮 -->
    <div class="btn-wrapper flex align-items justify-end">
      <button class="btn-primary" style="marginRight:10px">确定</button>
      <button class="btn-blank" @click="$emit('close')">取消</button>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      isOvertime: false,
      isMorning: false,
      isAfternoon: false,
      isNight: false,
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
      value: "选项1",
      input: ""
    };
  }
};
</script>

<style lang="less" scoped>
.dialog-scheduling {
  position: absolute;
  top: 100%;
  right: 0;
  z-index: 2000;
  width: 390px;
  font-size: 12px;
  background: #fff;
  -webkit-box-shadow: 0 2px 8px 0 rgba(0, 0, 0, 0.15);
  box-shadow: 0 2px 8px 0 rgba(0, 0, 0, 0.15);
  border-radius: 3px;
  border: 1px solid #b7b9c2;
  //   头部
  .header {
    height: 28px;
    background: #f5f7fb;
    padding-left: 8px;
    color: #7a8794;
    .time,
    .shift {
      width: 108px;
    }
    .number {
      width: 63px;
    }
  }
  // 内容
  .body {
    .row {
      margin: 8px;
      height: 32px;
      .item1 {
        /deep/ .el-checkbox {
          width: 108px;
          .el-checkbox__label {
            font-size: 12px;
          }
        }
      }
      .item2 {
        width: 171px;
        color: #7a8794;
      }
      .item3 {
        margin-right: 8px;
        /deep/ .el-input {
          font-size: 12px;
          width: 58px;
          .el-input__inner {
            padding: 0 5px;
            height: 28px !important;
          }
        }
      }
      .item4 {
        /deep/ .el-select .el-input.is-disabled .el-input__inner {
          width: 100%;
          font-size: 12px;
          height: 28px !important;
        }
        /deep/ .el-input__inner {
          height: 28px !important;
          font-size: 12px;
        }
      }
    }
  }
  // 按钮
  .btn-wrapper {
    padding: 0 15px;
    border-top: 1px solid #ddd;
    height: 40px;
    button {
      height: 28px;
    }
  }
}
</style>