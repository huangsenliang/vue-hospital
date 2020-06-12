<template>
  <div class="dialog-check-detail">
    <ul class="flex align-items th">
      <li class="item1 flex-item">
        <span>药品</span>
      </li>
      <li class="item2">
        <span>生产批号</span>
      </li>
      <li class="item3">
        <span>效期</span>
      </li>
      <li class="item4">
        <span>进价</span>
      </li>
      <li class="item5">
        <span>入库数量</span>
      </li>
      <li class="item6">
        <span>可退数量</span>
      </li>
    </ul>
    <div class="table-body">
      <ul v-for="(item,index) of 8" :key="index" class="flex align-items td">
        <li class="item1 flex-item text-ellipsis">
          <span>阿莫西林</span>
        </li>
        <li class="item2">
          <span>1892231</span>
        </li>
        <li class="item3">
          <span>2021-11-30</span>
        </li>
        <li class="item4">
          <span>10/盒</span>
        </li>
        <li class="item5">
          <span>10盒</span>
        </li>
        <li class="item6">
          <span>10盒</span>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="less" scoped>
.dialog-check-detail {
  position: absolute;
  width: 600px;
  height: 300px;
  background: @color_fffdec;
  border-radius: 3px;
  padding: 16px;
  border: 1px solid @color_cbb816;
  font-size: 14px;
  li {
    padding: 0 6px;
  }
  .item2 {
    width: 100px;
  }
  .item3 {
    width: 120px;
  }
  .item4 {
    width: 80px;
  }
  .item5 {
    width: 80px;
  }
  .item6 {
    width: 80px;
  }
  .th {
    border-bottom: 1px solid @color_dadbe0;
    height: 36px;
    font-weight: 700;
  }
  .table-body {
    max-height: 200px;
    overflow-y: auto;
    .td {
      height: 48px;
      border-bottom: 1px solid @color_dadbe0;
      > li:nth-child(n + 2) {
        color: @color_7a8794;
      }
    }
  }
}
</style>