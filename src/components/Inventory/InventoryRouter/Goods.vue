<template>
  <div class="goods-wrapper">
    <!-- 头部 -->
    <div class="goods-content-header flex">
      <!-- 头部左侧表单 -->
      <div class="left flex">
        <Select-Input :options="goodsOptionsList" placeholder="全部类型"></Select-Input>
        <div class="input-search">
          <Search-Input placeholder="药品名称/条形码"></Search-Input>
        </div>
      </div>
      <!-- 头部右侧 -->
      <div class="right flex">
        <!-- 新建药品 -->
        <div style="marginRight:8px">
          <button @click="showDrug=!showDrug" class="btn1 button-small button-success">新建药品</button>
          <!-- 遮罩层 -->
          <div v-if="showDrug" class="popper-wrapper">
            <div class="mask"></div>
            <div class="drug-content-wrapper popper-style">
              <!-- 头部 -->
              <div class="header-search flex">
                <div class="header-left flex">
                  <div class="input-wrapper" style="width:460px">
                    <Search-Input placeholder="输入注册证号"></Search-Input>
                  </div>
                  <button class="button-small button-success">搜索</button>
                </div>
                <div class="header-right">
                  <i
                    @click="showDrug=false"
                    class="icon-del iconfont"
                    style="fontSize:25px;cursor:pointer;"
                  ></i>
                </div>
              </div>
              <!-- 内容 -->
              <div class="content-body" style="display: flex;">
                <div class="left">
                  <!-- 通用名 -->
                  <div class="form-wrapper">
                    <div class="form-item">
                      <label for>
                        <span>通用名</span>
                        <i class="icon-zhongdian iconfont"></i>
                      </label>
                      <input type="text" />
                    </div>
                    <div class="form-item">
                      <label for>
                        <span>药品类型</span>
                      </label>
                      <div class="select-wrapper flex">
                        <Select-Input></Select-Input>
                        <Select-Input></Select-Input>
                      </div>
                    </div>
                    <div class="form-item">
                      <label for>
                        <span>商品名</span>
                        <i class="icon-zhongdian iconfont"></i>
                      </label>
                      <input type="text" />
                    </div>
                    <div class="form-item">
                      <label for>
                        <span>生产厂家</span>
                        <i class="icon-zhongdian iconfont"></i>
                      </label>
                      <input type="text" />
                    </div>
                    <div class="form-item">
                      <label for>
                        <span>国药准字</span>
                        <i class="icon-zhongdian iconfont"></i>
                      </label>
                      <input type="text" />
                    </div>
                    <div class="form-item">
                      <label for>
                        <span>条形码</span>
                        <i class="icon-zhongdian iconfont"></i>
                      </label>
                      <input type="text" />
                    </div>
                  </div>
                  <!-- 剂量 -->
                  <div class="form-wrapper flex">
                    <div class="form-item">
                      <label for>
                        <span>剂量</span>
                        <i class="icon-zhongdian iconfont"></i>
                      </label>
                      <div class="goods-num flex">
                        <div class="num">
                          <input style="width:130px" type="text" />
                          <div></div>
                        </div>
                        <div class="goods-dosageformunit">
                          <input style="width:80px" type="text" />
                          <div></div>
                        </div>
                        <span style="margin:10px 0 0 15px">*</span>
                      </div>
                    </div>
                    <div class="form-item">
                      <label for>
                        <span>制剂</span>
                        <i class="icon-zhongdian iconfont"></i>
                      </label>
                      <div class="goods-num flex">
                        <div class="num">
                          <input style="width:130px" type="text" />
                          <div></div>
                        </div>
                        <div class="goods-dosageformunit">
                          <input style="width:80px" type="text" />
                          <div></div>
                        </div>
                        <span style="margin:8px 0 0 15px">/</span>
                      </div>
                    </div>
                    <div
                      @click="showUnit=!showUnit"
                      class="form-item"
                      style=" alignItems: flex-end;display:flex"
                    >
                      <button class="button-small unit">{{unit}}</button>
                      <ul v-show="showUnit" class="flex unit-li-wrapper">
                        <li
                          @click="unit=item"
                          v-for="(item,index) of unitList"
                          :key="index"
                          class="item"
                          :class="{'is-selected':unit===item}"
                        >
                          <span>{{item}}</span>
                        </li>
                      </ul>
                    </div>
                  </div>
                  <!-- 价格 -->
                  <div class="form-wrapper flex" style="borderBottom:0">
                    <!-- 零售价格 -->
                    <div class="form-item" style="marginTop:3px">
                      <label for>
                        <span>零售价格</span>
                        <i class="icon-zhongdian iconfont"></i>
                      </label>
                      <div class="price-wrapper flex">
                        <span class="symbol">￥</span>
                        <input type="text" />
                        <div class="price-num">
                          <span>/盒</span>
                        </div>
                      </div>
                    </div>
                    <!-- 允许拆零售 -->
                    <div class="form-item">
                      <label for>
                        <el-checkbox v-model="checkedAgree">允许拆零售</el-checkbox>
                      </label>
                      <div class="price-wrapper flex">
                        <span class="symbol">￥</span>
                        <input
                          :class="{'is-disabled':checkedAgree==true}"
                          :disabled="checkedAgree"
                          type="text"
                        />
                        <div class="price-num">
                          <span></span>
                        </div>
                      </div>
                    </div>
                    <!-- 进项税率 -->
                    <div class="form-item flex" style="display:flex;marginTop:5px">
                      <div class="left-tax">
                        <label for>进项税率</label>
                        <div class="flex">
                          <input type="text" />
                          <div class="tax">
                            <span>%</span>
                          </div>
                          <span style="padding:5px 0 0 8px">-</span>
                        </div>
                      </div>

                      <div class="right-tax">
                        <label for>销项税率</label>
                        <div class="flex">
                          <input type="text" />
                          <div class="tax">
                            <span>%</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="right">
                  <div class="detail-code">
                    <label class="goods-code-type">药品编码</label>
                    <div class="code-wrapper">
                      <input type="text" placeholder="系统生成或自定义" />
                      <i class="iconfont icon-iconfront-"></i>
                    </div>
                  </div>
                  <div class="detail-code">
                    <label class="goods-code-type">社保编码</label>
                    <div class="code-wrapper">
                      <input type="text" placeholder="-" />
                      <i class="iconfont icon-iconfront-"></i>
                    </div>
                  </div>
                  <div class="detail-code">
                    <label class="goods-code-type">本位码</label>
                    <div class="code-wrapper">
                      <input type="text" placeholder="-" />
                      <i class="iconfont icon-iconfront-"></i>
                    </div>
                  </div>
                </div>
              </div>
              <!-- 底部按钮 -->
              <div class="footer-wrapper clear-float">
                <Footer-Btn>
                  <button @click="showDrug=false" class="button-small">取消</button>
                  <button class="button-small">保存并继续</button>
                  <button class="button-small">完成</button>
                </Footer-Btn>
              </div>
            </div>
          </div>
        </div>
        <!-- 新建物资 -->
        <div style="marginRight:8px">
          <button @click="showSupplies=!showSupplies" class="btn1 button-small button-success">新建物资</button>
          <div v-if="showSupplies" class="popper-wrapper">
            <div class="mask"></div>
            <div class="supplies-content-wrapper popper-style">
              <!-- 头部 -->
              <div class="header-search flex">
                <div class="header-left flex">
                  <div class="input-wrapper" style="width:460px">
                    <Search-Input placeholder="输入注册证号"></Search-Input>
                  </div>
                  <button class="button-small button-success">搜索</button>
                </div>
                <div class="header-right">
                  <i
                    @click="showSupplies=false"
                    class="icon-del iconfont"
                    style="fontSize:25px;cursor:pointer;"
                  ></i>
                </div>
              </div>
              <!-- 内容 -->
              <div class="content-body" style="display: flex;">
                <div class="left">
                  <!-- 通用名 -->
                  <div class="form-wrapper">
                    <div class="form-item">
                      <label for>
                        <span>物资名称</span>
                        <i class="icon-zhongdian iconfont"></i>
                      </label>
                      <input type="text" />
                    </div>
                    <div class="form-item">
                      <label for>
                        <span>物资类型</span>
                      </label>
                      <Select-Input></Select-Input>
                    </div>
                    <div class="form-item">
                      <label for>
                        <span>进口/国产</span>
                        <i class="icon-zhongdian iconfont"></i>
                      </label>
                      <input type="text" />
                    </div>
                    <div class="form-item">
                      <label for>
                        <span>生产厂家</span>
                        <i class="icon-zhongdian iconfont"></i>
                      </label>
                      <input type="text" />
                    </div>
                    <div class="form-item">
                      <label for>
                        <span>条形码</span>
                        <i class="icon-zhongdian iconfont"></i>
                      </label>
                      <input type="text" />
                    </div>
                    <div class="form-item">
                      <label for>
                        <span>注册证名称</span>
                        <i class="icon-zhongdian iconfont"></i>
                      </label>
                      <input type="text" />
                    </div>
                    <div class="form-item">
                      <label for>
                        <span>注册证号</span>
                        <i class="icon-zhongdian iconfont"></i>
                      </label>
                      <input type="text" />
                    </div>
                  </div>
                  <!--规格 -->
                  <div class="form-wrapper flex">
                    <div class="form-item" style="margin:0 8px 0 0px">
                      <label for>
                        <span>规格</span>
                      </label>
                      <div class="goods-num flex">
                        <div class="num">
                          <input style="width:153px" type="text" />
                        </div>
                        <span style="margin:10px 0 0 8px">*</span>
                      </div>
                    </div>
                    <!-- 包装数量 -->
                    <div style="margin:0 20px 0 0px" class="form-item">
                      <label for>
                        <span>包装数量</span>
                        <i class="icon-zhongdian iconfont"></i>
                      </label>
                      <div class="goods-num flex">
                        <div class="num">
                          <input style="width:103px" type="text" />
                        </div>
                      </div>
                    </div>

                    <!-- 单位 -->
                    <div
                      @click="showSmallUnit=!showSmallUnit"
                      class="form-item"
                      style="margin:0 8px 0 0px"
                      v-clickoutside="handleClickOutSideShowSmallUnit"
                    >
                      <label for>
                        <span>最小单位</span>
                        <i class="icon-zhongdian iconfont"></i>
                      </label>
                      <button class="button-small unit">{{SuppliesSmallUnit}}</button>
                      <ul v-show="showSmallUnit" class="flex unit-li-wrapper">
                        <li
                          @click="SuppliesSmallUnit=item"
                          v-for="(item,index) of smallUnitList"
                          :key="index"
                          class="item"
                          :class="{'is-selected':SuppliesSmallUnit===item}"
                        >
                          <span>{{item}}</span>
                        </li>
                      </ul>
                    </div>
                    <span style="margin: 32px 8px 0 0">/</span>
                    <!-- 单位 -->
                    <div
                      @click="showPackUnit=!showPackUnit"
                      class="form-item"
                      v-clickoutside="handleClickOutSideShowPackUnit"
                    >
                      <label for>
                        <span>包装单位</span>
                        <i class="icon-zhongdian iconfont"></i>
                      </label>
                      <button class="button-small unit">{{SuppliesPackUnit}}</button>
                      <ul v-show="showPackUnit" class="flex unit-li-wrapper">
                        <li
                          @click="SuppliesPackUnit=item"
                          v-for="(item,index) of smallUnitList"
                          :key="index"
                          class="item"
                          :class="{'is-selected':SuppliesPackUnit===item}"
                        >
                          <span>{{item}}</span>
                        </li>
                      </ul>
                    </div>
                  </div>
                  <!-- 价格 -->
                  <div class="form-wrapper flex" style="borderBottom:0">
                    <!-- 允许对外销售 -->
                    <div class="form-item">
                      <label for>
                        <el-checkbox v-model="checkedSuppliesForeignSales">允许对外销售</el-checkbox>
                      </label>
                      <div class="price-wrapper flex">
                        <span class="symbol">￥</span>
                        <input
                          :class="{'is-disabled':checkedSuppliesForeignSales==true}"
                          :disabled="checkedSuppliesForeignSales"
                          type="text"
                        />
                        <div class="price-num">
                          <span></span>
                        </div>
                      </div>
                    </div>
                    <!-- 允许拆零售 -->
                    <div class="form-item">
                      <label for>
                        <el-checkbox v-model="checkedSuppliesAgree">允许拆零售</el-checkbox>
                      </label>
                      <div class="price-wrapper flex">
                        <span class="symbol">￥</span>
                        <input
                          :class="{'is-disabled':checkedSuppliesAgree==true}"
                          :disabled="checkedSuppliesAgree"
                          type="text"
                        />
                        <div class="price-num">
                          <span></span>
                        </div>
                      </div>
                    </div>
                    <!-- 进项税率 -->
                    <div class="form-item flex" style="display:flex;marginTop:5px">
                      <div class="left-tax">
                        <label for>进项税率</label>
                        <div class="flex">
                          <input type="text" />
                          <div class="tax">
                            <span>%</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="right">
                  <div class="detail-code">
                    <label class="goods-code-type">药品编码</label>
                    <div class="code-wrapper">
                      <input type="text" placeholder="系统生成或自定义" />
                      <i class="iconfont icon-iconfront-"></i>
                    </div>
                  </div>
                  <div class="detail-code">
                    <label class="goods-code-type">社保编码</label>
                    <div class="code-wrapper">
                      <input type="text" placeholder="-" />
                      <i class="iconfont icon-iconfront-"></i>
                    </div>
                  </div>
                  <div class="detail-code">
                    <label class="goods-code-type">本位码</label>
                    <div class="code-wrapper">
                      <input type="text" placeholder="-" />
                      <i class="iconfont icon-iconfront-"></i>
                    </div>
                  </div>
                </div>
              </div>
              <!-- 底部按钮 -->
              <div class="footer-wrapper clear-float">
                <Footer-Btn>
                  <button @click="showSupplies=false" class="button-small">取消</button>
                  <button class="button-small">保存并继续</button>
                  <button class="button-small">完成</button>
                </Footer-Btn>
              </div>
            </div>
          </div>
        </div>
        <!-- 新增商品 -->
        <div style="marginRight:8px">
          <button @click="showGoods=!showGoods" class="btn1 button-small button-success">新建商品</button>
          <div v-if="showGoods" class="popper-wrapper">
            <div class="mask"></div>
            <div class="goods-content-wrapper popper-style">
              <!-- 头部 -->
              <div class="header-title flex">
                <h4>新增商品</h4>
                <div class="header-right">
                  <i
                    @click="showGoods=false"
                    class="icon-del iconfont"
                    style="fontSize:25px;cursor:pointer;"
                  ></i>
                </div>
              </div>
              <!-- 内容 -->
              <div class="content-body">
                <!-- 商品名 -->
                <div class="form-wrapper">
                  <div class="form-item">
                    <label for>
                      <span>商品名</span>
                      <i class="icon-zhongdian iconfont"></i>
                    </label>
                    <input type="text" />
                  </div>
                  <div class="form-item">
                    <label for>
                      <span>商品类型</span>
                    </label>
                    <Select-Input></Select-Input>
                  </div>
                  <div class="form-item">
                    <label for>
                      <span>生产厂家</span>
                      <i class="icon-zhongdian iconfont"></i>
                    </label>
                    <input type="text" />
                  </div>
                  <div class="form-item">
                    <label for>
                      <span>国药准字</span>
                      <i class="icon-zhongdian iconfont"></i>
                    </label>
                    <input type="text" />
                  </div>
                  <div class="form-item">
                    <label for>
                      <span>条形码</span>
                      <i class="icon-zhongdian iconfont"></i>
                    </label>
                    <input type="text" />
                  </div>
                </div>
                <!-- 规格信息 -->
                <div class="form-wrapper flex">
                  <div class="form-item" style="margin:0 8px 0 0px">
                    <label for>
                      <span>规格</span>
                    </label>
                    <div class="goods-num flex">
                      <div class="num">
                        <input style="width:153px" type="text" />
                      </div>
                      <span style="margin:10px 0 0 8px">*</span>
                    </div>
                  </div>
                  <!-- 包装数量 -->
                  <div style="margin:0 20px 0 0px" class="form-item">
                    <label for>
                      <span>包装数量</span>
                      <i class="icon-zhongdian iconfont"></i>
                    </label>
                    <div class="goods-num flex">
                      <div class="num">
                        <input style="width:103px" type="text" />
                      </div>
                    </div>
                  </div>

                  <!-- 单位 -->
                  <div
                    @click="showSmallUnit=!showSmallUnit"
                    class="form-item"
                    style="margin:0 8px 0 0px"
                    v-clickoutside="handleClickOutSideShowSmallUnit"
                  >
                    <label for>
                      <span>最小单位</span>
                      <i class="icon-zhongdian iconfont"></i>
                    </label>
                    <button class="button-small unit">{{goodSmallUnit}}</button>
                    <ul v-show="showSmallUnit" class="flex unit-li-wrapper">
                      <li
                        @click="goodSmallUnit=item"
                        v-for="(item,index) of smallUnitList"
                        :key="index"
                        class="item"
                        :class="{'is-selected':goodSmallUnit===item}"
                      >
                        <span>{{item}}</span>
                      </li>
                    </ul>
                  </div>
                  <span style="margin: 32px 8px 0 0">/</span>
                  <!-- 单位 -->
                  <div
                    @click="showPackUnit=!showPackUnit"
                    class="form-item"
                    v-clickoutside="handleClickOutSideShowPackUnit"
                  >
                    <label for>
                      <span>包装单位</span>
                      <i class="icon-zhongdian iconfont"></i>
                    </label>
                    <button class="button-small unit">{{goodsPickUnit}}</button>
                    <ul v-show="showPackUnit" class="flex unit-li-wrapper">
                      <li
                        @click="goodsPickUnit=item"
                        v-for="(item,index) of smallUnitList"
                        :key="index"
                        class="item"
                        :class="{'is-selected':goodsPickUnit===item}"
                      >
                        <span>{{item}}</span>
                      </li>
                    </ul>
                  </div>
                </div>
                <!-- 价格 -->
                <div class="form-wrapper flex" style="borderBottom:0">
                  <!-- 允许对外销售 -->
                  <div class="form-item">
                    <label for>
                      <el-checkbox v-model="checkedGoodsForeignSales">允许对外销售</el-checkbox>
                    </label>
                    <div class="price-wrapper flex">
                      <span class="symbol">￥</span>
                      <input
                        :class="{'is-disabled':checkedGoodsForeignSales==true}"
                        :disabled="checkedGoodsForeignSales"
                        type="text"
                      />
                      <div class="price-num">
                        <span></span>
                      </div>
                    </div>
                  </div>
                  <!-- 允许拆零售 -->
                  <div class="form-item">
                    <label for>
                      <el-checkbox v-model="checkedGoodsAgree">允许拆零售</el-checkbox>
                    </label>
                    <div class="price-wrapper flex">
                      <span class="symbol">￥</span>
                      <input
                        :class="{'is-disabled':checkedGoodsAgree==true}"
                        :disabled="checkedGoodsAgree"
                        type="text"
                      />
                      <div class="price-num">
                        <span></span>
                      </div>
                    </div>
                  </div>
                  <!-- 进项税率 -->
                  <div class="form-item flex" style="display:flex;marginTop:5px">
                    <div class="left-tax">
                      <label for>进项税率</label>
                      <div class="flex">
                        <input type="text" />
                        <div class="tax">
                          <span>%</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <!-- 底部按钮 -->
              <div class="footer-wrapper clear-float">
                <Footer-Btn>
                  <button @click="showGoods=false" class="button-small">取消</button>
                  <button class="button-small">保存并继续</button>
                  <button class="button-small">完成</button>
                </Footer-Btn>
              </div>
            </div>
          </div>
        </div>
        <button style="marginRight:8px" class="button-small btn2">智能对码</button>
        <button @click="handleToWarnset" class="button-small btn2">预警设置</button>
        <div class="upload">
          <i class="iconfont icon-upload"></i>
        </div>
      </div>
    </div>
    <!-- 表格内容 -->
    <div class="goods-table">
      <ul>
        <li class="flex th">
          <div class="item1 item flex">
            <span>药名</span>
            <div class="right flex">
              <i class="shang"></i>
              <i class="xia"></i>
            </div>
          </div>

          <div class="item2 item">
            <span>规格</span>
          </div>

          <div class="item3 item">
            <span>厂家</span>
          </div>

          <div class="item4 item">
            <span>类型</span>
          </div>

          <div class="item5 item flex">
            <span>售价</span>
            <div class="flex right">
              <i class="shang"></i>
              <i class="xia"></i>
            </div>
          </div>

          <div class="item6 item flex">
            <span>最近进价</span>
            <div class="flex right">
              <i class="shang"></i>
              <i class="xia"></i>
            </div>
          </div>

          <div class="item7 item flex">
            <div class="warning-info-wrapper">
              <i class="warning-count">83</i>
              <div class="warning-info">
                <span>83种药品物资有效日期低于预警值</span>
              </div>
            </div>

            <span>最近效期</span>
            <div class="flex right">
              <i class="shang"></i>
              <i class="xia"></i>
            </div>
          </div>

          <div class="item8 item flex">
            <div class="warning-info-wrapper">
              <i class="warning-count">8</i>
              <div class="warning-info">
                <span>8种药品物资有效日期低于预警值</span>
              </div>
            </div>
            <span>毛利率</span>
            <div class="right flex">
              <i class="shang"></i>
              <i class="xia"></i>
            </div>
          </div>

          <div class="item9 flex item">
            <div class="warning-info-wrapper">
              <i class="warning-count">3</i>
              <div class="warning-info">
                <span>3种药品物资有效日期低于预警值</span>
              </div>
            </div>
            <span>当前库存</span>
            <div class="right flex">
              <i class="shang"></i>
              <i class="xia"></i>
            </div>
          </div>

          <div class="item10 flex item">
            <span>日均销量</span>
            <div class="flex right">
              <i class="shang"></i>
              <i class="xia"></i>
            </div>
            <div class="turnover-info-wrapper">
              <i class="icon-wenhao iconfont"></i>
              <div class="turnover-info">
                <span>最近30天的日均销量</span>
              </div>
            </div>
          </div>

          <div class="item11 item flex">
            <div class="warning-info-wrapper">
              <i class="warning-count">13</i>
              <div class="warning-info">
                <span>13种药品物资有效日期低于预警值</span>
              </div>
            </div>
            <span>周转天数</span>
            <div class="flex right">
              <i class="shang"></i>
              <i class="xia"></i>
            </div>
            <div class="turnover-info-wrapper">
              <i class="icon-wenhao iconfont"></i>
              <div class="turnover-info">
                <span>最近30天的日均销量</span>
              </div>
            </div>
          </div>
        </li>
        <li @click="handleDetailsInfo" v-for="(item,index) of 10" :key="index" class="flex td">
          <div class="item1 flex item">
            <span style="color: rgb(10, 140, 234);">金银花</span>
          </div>
          <div class="item2 flex item">
            <span>中药饮片</span>
          </div>
          <div class="item3 flex item">
            <span></span>
          </div>
          <div class="item4 flex item">
            <span>中药</span>
          </div>
          <div class="item5 flex item">
            <span>6.00</span>
          </div>
          <div class="item6 flex item">
            <span>-</span>
          </div>
          <div class="item7 flex item">
            <span>-</span>
          </div>
          <div class="item8 flex item">
            <span>-</span>
          </div>
          <div class="item9 flex item">
            <span>785g</span>
          </div>
          <div class="item10 flex item">
            <span>88.0g</span>
          </div>
          <div class="item11 flex item">
            <span>9天</span>
          </div>
        </li>
      </ul>
    </div>
    <!-- 商品详情弹窗 -->
    <div v-if="showDetailsPopper" class="popper-wrapper">
      <div class="mask"></div>
      <div class="popper-style details-popper">
        <!-- 头部 -->
        <div class="popper-header flex">
          <Tabs :tabsList="tabsList"></Tabs>
          <div class="header-right">
            <i
              @click="showDetailsPopper=false"
              class="icon-del iconfont"
              style="fontSize:25px;cursor:pointer;"
            ></i>
          </div>
        </div>
        <!-- 内容 -->
        <div class="popper-body">
          <router-view :infoData="infoData" @closeDetailsPopper="showDetailsPopper = false;"></router-view>
        </div>
      </div>
    </div>
    <!-- 分页 -->
    <div class="pag-wrapper flex">
      <el-pagination background layout="prev, pager, next" :total="1000"></el-pagination>
      <div class="right">
        共
        <span style="fontWeight: 700;">&nbsp;2008&nbsp;</span>种药品，合计成本
        <span style="fontWeight: 700;">&nbsp;268,739,520.3&nbsp;</span> ，售价
        <span style="fontWeight: 700;">&nbsp;774,911,728.64&nbsp;</span>
      </div>
    </div>
  </div>
</template>

<script>
import SelectInput from "../../Common/SelectInput";
import SearchInput from "../../Common/SearchInput";
import Calendar from "../../Common/Calendar";
import Tabs from "../../Common/Tabs";
import FooterBtn from "../FooterBtn";

export default {
  components: {
    SelectInput,
    SearchInput,
    FooterBtn,
    Calendar,
    Tabs
  },
  data() {
    return {
      infoData: null, // 药品信息弹窗数据对象
      showDetailsPopper: false, // 商品详情页面显示隐藏控制变量
      tabsList: [
        { title: "药品信息", name: "DetailsInfo" },
        { title: "批次信息", name: "BatchInfo" },
        { title: "进销存清单", name: "List" },
        { title: "预警设置", name: "Warning" }
      ], // 商品详情标签数据

      checkedGoodsAgree: false, // 新建商品拆零销售双向绑定控制变量
      checkedGoodsForeignSales: false, // 新建商品拆零销售双向绑定控制变量
      goodSmallUnit: null, // 新增商品最小单位选中的双向绑定值
      goodsPickUnit: null, // 新增商品包装单位选中的双向绑定值
      showGoods: false, // 新增商品弹窗盒子显示隐藏控制变量
      checkedSuppliesAgree: false, // 新建物资拆零销售双向绑定控制变量
      checkedSuppliesForeignSales: false, // 对外销售双向绑定控制变量
      showPackUnit: false, // 物资包装单位盒子显示隐藏控制变量
      SuppliesPackUnit: null, // 物资包装单位选中值
      SuppliesSmallUnit: null, // 物资选中的最小单位
      showSmallUnit: false, // 物资最小单位盒子显示隐藏控制变量
      smallUnitList: [
        "片",
        "颗",
        "粒",
        "个",
        "支",
        "只",
        "丸",
        "枚",
        "张",
        "贴",
        "包",
        "袋",
        "条",
        "根",
        "快",
        "板",
        "盒",
        "瓶",
        "桶",
        "罐",
        "筒",
        "盆",
        "箱",
        "件",
        "卷",
        "捆",
        "把",
        "套",
        "双",
        "米",
        "付",
        "台",
        "部",
        "本",
        "g",
        "ml"
      ], // 物资最小单位数据列表
      showDrug: false, // 新建药品弹窗盒子显示隐藏控制变量
      showSupplies: false, // 新建物资弹窗盒子显示隐藏控制变量
      checkedAgree: false, // 是否允许拆零售卖
      unitList: [
        "盒",
        "瓶",
        "袋",
        "包",
        "板",
        "桶",
        "罐",
        "箱",
        "支",
        "片",
        "枚",
        "个"
      ], // 药品单位数据列表
      showUnit: false, // 药品单位盒子显示隐藏控制变量
      unit: null, // 药品选中的单位
      activeName: "first",
      goodsOptionsList: [
        {
          value: "西药",
          label: "西药"
        },
        {
          value: "中成药",
          label: "中成药"
        },
        {
          value: "中药饮片",
          label: "中药饮片"
        },
        {
          value: "中药颗粒",
          label: "中药颗粒"
        },
        {
          value: "医用材料",
          label: "医用材料"
        },
        {
          value: "后勤材料",
          label: "后勤材料"
        },
        {
          value: "固定资产",
          label: "固定资产"
        },
        {
          value: "自制成品",
          label: "自制成品"
        },
        {
          value: "保健药品",
          label: "保健药品"
        },
        {
          value: "保健食品",
          label: "保健食品"
        },
        {
          value: "其他商品",
          label: "其他商品"
        }
      ]
    };
  },
  methods: {
    // 处理商品详情信息
    handleDetailsInfo() {
      this.showDetailsPopper = true;
      this.$api.getGoods({ params: { id: 1 } }).then(res => {
        this.infoData = res.data;
      });
    },

    /**************************/

    // 处理：跳转到warnset.vue页面
    handleToWarnset() {
      this.$router.push({ path: "/home/warnset" });
    },
    // 处理：点击除了ShowSmallUni元素外触发
    handleClickOutSideShowSmallUnit() {
      this.showSmallUnit = false;
    },
    // 处理：点击除了ShowPackUnit元素外触发
    handleClickOutSideShowPackUnit() {
      this.showPackUnit = false;
    },
    // 处理：标签切换
    handleClick(tab, event) {
      this.$router.push({ name: tab.name });
    },
    sendInd() {
      this.$emit("getInd", 7);
    }
  },
  created() {
    this.sendInd();
  }
};
</script>

<style scoped>
@import "../../../assets/css/Inventory/InventoryRouter/Goods/Goods.css";
</style>