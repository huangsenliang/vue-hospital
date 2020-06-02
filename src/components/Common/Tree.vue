<template>
  <div class="tree">
    <div class="brother" v-for="(data, idx) of treeList" :key="idx">
      <div class="node">
        <div @click="handleClick(data)" class="flex title align-items">
          <img :src="data.url" alt class="node-expand" v-if="data.expand" />
          <img :src="data.activeUrl" alt class="node-expand" v-else />
          <span :class="{'is-active':data.expand}">
            {{data.name}}&nbsp;
            <span>{{data.children?data.children.length:''}}</span>
          </span>
        </div>

        <!-- <span class="node-menu">
          <span class="menu-item" title="添加同级节点" @click.stop="$emit('addBrother', $event, data)"></span>
          <span class="menu-item" title="添加下级节点" @click.stop="$emit('addChild', $event, data)"></span>
          <span class="menu-item" title="“删除”" @click.stop="$emit('deleteNode', $event, data)"></span>
        </span>-->
      </div>
      <div class="children" v-if="data.children && data.children.length" v-show="data.expand">
        <Tree
          @addBrother="addBrother"
          @addChild="addChild"
          @deleteNode="deleteNode"
          :treeList="data.children"
        ></Tree>
      </div>
    </div>
  </div>
</template>

<script>
import store from "@/store/store";
export default {
  name: "Tree",
  props: ["treeList"],
  data() {
    return {};
  },
  computed: {
    // count() {
    //   // return this.treeList.children.length
    //   this.treeList.forEach(item => {
    //     if (item.children) {
    //       console.log(item.children.length)
    //       return item.children.length;
    //     }else{
    //       console.log(item.children)
    //     }
    //   });
    // }
  },
  methods: {
    handleClick(data) {
      this.$store.commit("handleTreeList", data.id);
      // data.expand = !data.expand;
      // console.log("改变之后：",data.expand)
      // this.treeList.forEach(item=> {
      //   console.log(item);
      // });
    },
    addBrother(event, data) {
      this.$emit("addBrother", event, data);
    },
    addChild(event, data) {
      this.$emit("addChild", event, data);
    },
    deleteNode(event, data) {
      this.$emit("deleteNode", event, data);
    }
  }
};
</script>

<style lang="less" scoped>
@import "../../assets/css/Common/Tree.less";
</style> 

