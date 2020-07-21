<template>
  <!--<div class="input-wrapper">
    <input type="text" placeholder="请输入要查询的关键字" v-model="val" @blur="search" @focus="onTiaozhuan" />
    <svg class="icon" aria-hidden="true">
      <use xlink:href="#icon-sousuo" />
    </svg>
  </div>-->
  <Header :title="title" :color="color"></Header>
  <Search @searchprop="searchprop"></Search>
</template>

<script>
import { reactive, toRefs } from "vue"
import  Search  from "./Search.vue"
import  Header  from "./Header.vue"
import { usesourceDataInject } from "../stores/index1.js"

export default {
  name: "Search1",
  components:{
      Search,
      Header
    },
  setup(props, { root }) {
   let { searchData, setsearchData } = usesourceDataInject();
    
    const state = reactive({
    
      // searchData: computed({//使用数据管理，就不需要使用comouted
      //   get: () => {
      //     return store.searchData;
      //   },
      //   set: (val) => {
      //     store.searchData = val;
      //   },
      // }),
     
      // defaultColor: "red"
     color: "#666",
      title: "CNODE",
  
    });

  

    const searchprop = ()=>{
      console.log("event:",event);
    }
    return {
      //search
      ...toRefs(state)
    };
  }
};
</script>

<style scoped lang="less">
div.input-wrapper {
  width: 100%;
  // height: 150px;
  display: flex;
  border: 2px solid red;
  padding: 8px 6px;
  justify-content: space-between;
  align-items: center;
  input {
    display: block;
    border: none;
    outline: none;
    font-size: 16px;
  }
  svg {
    display: block;
    cursor: pointer;
    padding: 5px;
  }
}
</style>
