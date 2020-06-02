<template>
  <!-- 门诊页面 -->
  <div class="outpatient flex">
    <!-- 引入自定义布局组件 -->
    <!-- 左侧内容 -->
    <Aside-Left-Wrapper>
      <!-- 搜索框 -->
      <div class="search-wrapper flex">
        <Search-Input size="140px" placeholder="姓名/手机/诊断"></Search-Input>
        <button @click="quickAccepts=true" class="button-success button-small quick-btn">快速接诊</button>
        <button style="marginLeft:5px" class="button-small">叫</button>
      </div>
      <!-- 标签-->
      <div class="tabs-wrapper flex">
        <ul class="tabs flex">
          <li class="tab" :class="{active:tabNum==0}" @click="tabNum=0">
            <span>门诊</span>
            <span>4</span>
          </li>
          <li class="tab" @click="tabNum=1" :class="{active:tabNum==1}">
            <span>网诊</span>
          </li>
        </ul>
        <div class="date-picker">
          <span>05-06</span>
          <i class="iconfont icon-xia"></i>
        </div>
      </div>
      <!-- 左侧切换内容 -->
      <div v-show="tabNum==0" class="content-mz-wrapper">
        <!-- 表格内容 -->
        <div v-show="!quickAccepts" class="table-wrapper-top">
          <ul class="table">
            <li
              :class="{active:itemNum==index}"
              @click="itemNum=index"
              v-for="(item,index) of 6"
              :key="index"
              class="row flex"
            >
              <span>小新</span>
              <span style="width:60px">05-06</span>
              <span style="width:44px">已收</span>
            </li>
          </ul>
          <div class="not-content">
            <span>没有更多内容了</span>
          </div>
        </div>
        <!-- 添加新患者 -->
        <div v-show="quickAccepts" class="table-wrapper-top" style="height:100%">
          <ul class="table">
            <li
              :class="{active:itemNum==index}"
              @click="itemNum=index"
              v-for="(item,index) of 6"
              :key="index"
              class="row flex"
            >
              <span>新患者</span>
              <span style="width:60px">05-06</span>
              <span style="width:44px">患者</span>
            </li>
          </ul>
        </div>
        <!-- 就诊历史 -->
        <div v-show="!quickAccepts" class="history-wrapper">
          <!-- 头部标题 -->
          <div class="history-title flex">
            <h4>就诊历史</h4>
            <span>(10)</span>
          </div>

          <!-- 表格内容 -->
          <div class="history-table-wrapper">
            <ul class="table">
              <li
                @click="showHistoryPopper=!showHistoryPopper"
                v-for="(item,index) of 6"
                :key="index"
                class="row flex"
              >
                <span class="designation">高血压</span>
                <span>钟南山</span>
                <span class="date">05-05</span>
                <!-- 弹窗信息 -->
                <div
                  v-clickoutside="handleClickOutSideShowHistoryPopper"
                  @click.stop
                  v-if="showHistoryPopper"
                  class="history-popper-wrapper"
                >
                  <!-- 引入自定义历史弹窗组件 -->
                  <History-Popper></History-Popper>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <!-- 左侧切换内容 -->
      <div v-show="tabNum==1" class="content-wz-wrapper">
        <span class="tip">网诊功能暂未开通</span>
      </div>
    </Aside-Left-Wrapper>
    <!-- 中间内容 -->
    <Main-Wrapper>
      <div class="main-content">
        <!-- 头部 -->
        <div class="header-wrapper flex">
          <div class="header-left flex">
            <h3>门诊</h3>
            <span v-show="!quickAccepts">(00003158)</span>
            <span class="count">第7次就诊</span>
          </div>

          <div v-show="!quickAccepts" class="header-right flex">
            <button class="button-primary button-small">修改</button>
            <button style="marginLeft:8px" class="button-small">打印</button>
            <button style="marginLeft:8px" class="button-small">计划随访</button>
          </div>

          <div v-show="quickAccepts" class="header-right-quick flex">
            <div style="marginRight:8px" class="btn">
              <button style="color:#005ed9" class="button-small btn2" @click="showtCost = true">费用预览</button>
              <el-dialog title="收货地址" :visible.sync="showtCost">5555</el-dialog>
            </div>

            <div class="btn" style="marginRight:8px">
              <button style="background:#007AFF;color:#fff" class="btn1 button-small" @click="quickAccepts=false">完成接诊</button>
            </div>

            <div class="mz-setting-wrapper" style="marginRight:8px">
              <i class="iconfont icon-ellipsis2" @click="showMzSetting=!showMzSetting" v-clickoutside="handleClickOutSideShowMzSettin"></i>
              <!-- 弹窗 -->
              <div
                class="setting-popper"
                v-show="showMzSetting"
              >
                <!-- 头部 -->
                <div class="setting-title flex">
                  <span>门诊设置</span>
                  <span class="btn">恢复默认</span>
                </div>
                <!-- 内容 -->
                <div class="setting-content">
                  <h5>默认病历分类</h5>
                  <div style="marginLeft:10px">
                    <el-radio v-model="radio" label="西医病历">西医病历</el-radio>
                    <el-radio v-model="radio" label="中医病历">中医病历</el-radio>
                  </div>
                </div>
                <div class="cut-line"></div>
                <div class="setting-content">
                  <h5>西医病历字段</h5>
                  <div style="marginLeft:10px">
                    <el-checkbox v-model="checked">主诉</el-checkbox>
                    <el-checkbox v-model="checked">现病史</el-checkbox>
                    <el-checkbox v-model="checked">既往史</el-checkbox>
                    <el-checkbox v-model="checked">体格检查</el-checkbox>
                    <el-checkbox v-model="checked">望闻切诊</el-checkbox>
                    <el-checkbox v-model="checked">诊断</el-checkbox>
                    <el-checkbox v-model="checked">辩证</el-checkbox>
                    <el-checkbox v-model="checked">治法</el-checkbox>
                  </div>
                </div>
                <div class="setting-content">
                  <h5>中医病历字段</h5>
                  <div style="marginLeft:10px">
                    <el-checkbox v-model="checked">主诉</el-checkbox>
                    <el-checkbox v-model="checked">主诉</el-checkbox>
                    <el-checkbox v-model="checked">主诉</el-checkbox>
                    <el-checkbox v-model="checked">主诉</el-checkbox>
                    <el-checkbox v-model="checked">主诉</el-checkbox>
                    <el-checkbox v-model="checked">主诉</el-checkbox>
                    <el-checkbox v-model="checked">主诉</el-checkbox>
                  </div>
                </div>
                <div class="cut-line"></div>
                <div class="setting-content">
                  <h5>处方类型</h5>
                  <div style="marginLeft:10px">
                    <el-checkbox v-model="checked">西药处方</el-checkbox>
                    <el-checkbox v-model="checked">注射输液</el-checkbox>
                    <el-checkbox v-model="checked">中医处方</el-checkbox>
                  </div>
                </div>
              </div>
            </div>

            <div class="btn" style="marginRight:8px">
              <button style="color:#005ed9" class="button-small btn2">删除</button>
            </div>
          </div>
        </div>
        <!-- 表格内容 -->
        <div class="table-content">
          <!-- 患者信息盒子 -->
          <div class="info-wrapper-top flex">
            <!-- 左边 -->
            <div class="info-left">
              <!-- 自定义组件 -->
              <Patient-Info
                name="毛波"
                sex="男"
                age="20"
                isDisabled="true"
                month="3"
                iphone="18244909680"
              ></Patient-Info>
            </div>
            <!-- 右边 -->
            <div class="info-right flex">
              <Select-Input disabled=true placeholder="请选择" :value="nameValue" :options="nameOptions"></Select-Input>
              <div class="input-search">
                <Input-Money :size="70" :value="moneyValue"></Input-Money>
              </div>
            </div>
          </div>
          <!-- 主诉记录 -->
          <div class="record-wrapper">
            <!-- 引入自定义主诉记录组件 -->
            <Record-Info @receiveSrc="receiveSrc"></Record-Info>
          </div>
          <!-- 搜索框 -->
          <div class="add-wrapper">
            <div class="add flex">
              <Prepend-Input :prependList="prependListCheck" placeholder="检查检验"></Prepend-Input>
              <Prepend-Input :prependList="prependListTreatment" placeholder="治疗理疗"></Prepend-Input>
              <Prepend-Input :prependList="prependListMaterial" placeholder="其他费用、材料商品"></Prepend-Input>
            </div>

            <!-- 上传图片展示 -->
            <div v-if="selectImg" class="img-wrapper flex">
              <div class="img-item" v-for="(item,index) of selectImg" :key="index">
                <img :src="item" alt />
                <i class="iconfont icon-del" @click="handleDelImg(index)"></i>
              </div>
            </div>
          </div>
          <!-- 添加处方 -->
          <div class="add-prescription-wrapper flex">
            <div class="left-btn">
              <button class="button-small">+西药处方</button>
              <button class="button-small">+输液处方</button>
              <button class="button-small">+中药处方</button>
            </div>
            <div class="right-btn">
              <button class="button-small">调用模板</button>
              <button class="button-small">保存模板</button>
            </div>
          </div>
          <!-- 医嘱事项 -->
          <div class="doctor-advice flex">
            <label for>医嘱事项</label>
            <!-- <input type="text" v-model="selectAdviceValue" @click="showAdvice=true" /> -->
            <!-- <textarea cols="40" v-model="selectAdviceValue" @click="showAdvice=true"></textarea> -->
            <div @click="showAdvice=true" class="textarea-wrapper">
              <el-input type="textarea" autosize v-model="selectAdviceValue"></el-input>
            </div>

            <!-- 弹窗 -->
            <div
              class="advice-popper-wrapper"
              v-if="showAdvice"
              v-clickoutside="handleClickOutSideShowAdvice"
            >
              <ul>
                <li v-for="(item,index) of showAdviceList" :key="index">
                  <span class="symptomsItem" @click="handleSelectAdvice(item)">{{item}}</span>
                </li>
              </ul>
              <!-- 关闭 -->
              <div class="close flex" @click="showAdvice=false">
                <i class="iconfont icon-guanbi"></i>
                <span>关闭</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Main-Wrapper>
    <!-- 右边内容 -->
    <Aside-Right-Wrapper>
      <!-- 头部 -->
      <div class="header-top">
        <h4>智能诊断</h4>
      </div>
      <!-- 内容 -->
      <div class="content-wrapper">
        <el-collapse v-model="activeNames" @change="handleCollapseChange">
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
    </Aside-Right-Wrapper>
  </div>
</template>

<script>
import AsideLeftWrapper from "@/components/Common/AsideLeftWrapper";
import AsideRightWrapper from "@/components/Common/AsideRightWrapper";
import MainWrapper from "@/components/Common/MainWrapper";
import SearchInput from "@/components/Common/SearchInput";
import HistoryPopper from "@/components/Common/HistoryPopper";
import PatientInfo from "@/components/Common/PatientInfo";
import SelectInput from "@/components/Common/SelectInput";
import InputMoney from "@/components/Common/InputMoney";
import RecordInfo from "@/components/Common/RecordInfo";
import PrependInput from "@/components/Outpatient/PrependInput";

export default {
  components: {
    AsideLeftWrapper,
    MainWrapper,
    AsideRightWrapper,
    SearchInput,
    HistoryPopper,
    PatientInfo,
    SelectInput,
    InputMoney,
    RecordInfo,
    PrependInput
  },
  props: ["name", "sex", "age", "isDisabled", "month", "iphone"],
  data() {
    return {
      activeNames: ["1"], // 智能诊断手风琴双向绑定
      showtCost: false, // 预览费用弹出窗控制变量
      checked: "",
      showMzSetting: false, // 门诊设置弹窗控制变量
      radio: "西医病历", // 病历类型
      quickAccepts: false, // 快速接诊控制变量
      selectAdviceValue: "", // 选取的医嘱内容双向绑定数值
      showAdvice: false, // 医嘱弹窗盒子显示隐藏控制变量
      showAdviceList: [
        "多喝热水",
        "饮食清淡，忌辛辣",
        "注意睡眠，不要熬夜",
        "注意睡眠，不要熬夜",
        "注意睡眠，不要熬夜",
        "注意睡眠，不要熬夜",
        "注意睡眠，不要熬夜",
        "注意睡眠，不要熬夜",
        "注意睡眠，不要熬夜",
        "注意睡眠，不要熬夜"
      ], // 医嘱盒子展示数据

      selectImg: [], // 选中上传图片的数据
      src: "",
      prependListCheck: [
        {
          name: "血常规",
          price: "￥66.00"
        },
        {
          name: "尿常规",
          price: "￥66.00"
        },
        {
          name: "红细胞",
          price: "￥66.00"
        },
        {
          name: "x光片检查",
          price: "￥66.00"
        },
        {
          name: "x光片检查",
          price: "￥66.00"
        },
        {
          name: "x光片检查",
          price: "￥66.00"
        },
        {
          name: "x光片检查",
          price: "￥66.00"
        }
      ], // 检查选择框数据：传给子组件PrependInput
      prependListTreatment: [
        {
          name: "血常规",
          price: "￥66.00"
        },
        {
          name: "尿常规",
          price: "￥66.00"
        },
        {
          name: "红细胞",
          price: "￥66.00"
        },
        {
          name: "x光片检查",
          price: "￥66.00"
        },
        {
          name: "x光片检查",
          price: "￥66.00"
        },
        {
          name: "x光片检查",
          price: "￥66.00"
        },
        {
          name: "x光片检查",
          price: "￥66.00"
        }
      ], // 检查选择框数据：传给子组件PrependInput
      prependListMaterial: [
        {
          name: "血常规",
          price: "￥66.00"
        },
        {
          name: "尿常规",
          price: "￥66.00"
        },
        {
          name: "红细胞",
          price: "￥66.00"
        },
        {
          name: "x光片检查",
          price: "￥66.00"
        },
        {
          name: "x光片检查",
          price: "￥66.00"
        },
        {
          name: "x光片检查",
          price: "￥66.00"
        },
        {
          name: "x光片检查",
          price: "￥66.00"
        }
      ], // 检查选择框数据：传给子组件PrependInput
      moneyValue: 50, // 门诊收费变量
      nameOptions: [
        // 下拉框医生姓名数据
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
      nameValue: "李思思", // 双向绑定的下拉框医生姓名选择值
      showHistoryPopper: false, // 历史记录详情弹窗控制变量
      tabNum: 0, // 标签样式激活变量
      itemNum: 0 // 左侧表格内容激活样式控制变量
    };
  },
  methods: {
    // 处理：
    handleCollapseChange(val) {
      console.log(val);
    },
    // 处理：点击除了设置弹窗盒子外触发
    handleClickOutSideShowMzSettin() {
      this.showMzSetting = false;
    },
    // 处理：医嘱选中的拼接值
    handleSelectAdvice(item) {
      if (this.selectAdviceValue.indexOf(item) == -1) {
        this.selectAdviceValue += "\n";
        this.selectAdviceValue += item;
      }
      // 去除开头的逗号
      this.selectAdviceValue = this.selectAdviceValue.replace(/^\n/g, "");
    },
    handleClickOutSideShowAdvice() {
      this.showAdvice = false;
    },
    // 处理：删除图片信息
    handleDelImg(index) {
      this.selectImg.splice(index, 1);
    },
    // 接受子组件的传参图片路径
    receiveSrc(src) {
      if (this.selectImg.indexOf(src) == -1) {
        this.selectImg.push(src);
      }
    },
    // 处理：点击处理此元素外触发
    handleClickOutSideShowHistoryPopper() {
      this.showHistoryPopper = false;
    },
    // 处理：点击标签页面激活
    handleClick(tab, event) {
      console.log(tab, event);
    },
    sendInd() {
      this.$emit("getInd", 3);
    }
  },
  created() {
    this.sendInd();
  }
};
</script>

<style scoped>
@import "../assets/css/Outpatient/Outpatient.css";
</style>