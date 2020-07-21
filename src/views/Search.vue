<template>
  <div class="input-wrapper">
    <input
      type="text"
      placeholder="请输入要查询的关键字"
      v-model="val"
      v-on:input="onTiaozhuan"
    />
    <!--<input type="text" placeholder="请输入要查询的关键字" v-model="val"/>-->
    <svg class="icon" aria-hidden="true" @click="$emit(`searchprop`, event)">
      <use xlink:href="#icon-sousuo" />
    </svg>
  </div>
</template>

<script>
import { reactive, toRefs } from "vue";
//import { store } from "../stores/index1.js";
import { usesourceDataInject } from "../stores/index1.js";
//console.log("usesourceDataInject:",usesourceDataInject);
import router from "../router";
export default {
  name: "Search",
  // props:{
  //   searchprop:{
  //     type: Function
  //   }
  // },
  setup(props, cxt) {
    console.log("props:", props);
    console.log("context-context:", cxt);
    let { searchData, setsearchData } = usesourceDataInject();

    const state = reactive({
      val: "",
      // searchData: computed({//使用数据管理，就不需要使用comouted
      //   get: () => {
      //     return store.searchData;
      //   },
      //   set: (val) => {
      //     store.searchData = val;
      //   },
      // }),
    });

    // const search = () => {
    //   window.console.log(
    //     "state.val:",
    //     state.val,
    //     "---state.searchData:",
    //     state.searchData,
    //     "---store.searchData:",
    //     searchData
    //   );

    //   setsearchData(state.val);
    //   window.console.log(
    //     "state.val:",
    //     state.val,
    //     "---state.searchData:",
    //     state.searchData,
    //     "---store.searchData:",
    //     searchData
    //   );
    //   //state.val=== "" ? : root.$router.push("panel");
    //   if (state.val === "") {
    //     alert("输入搜索内容");
    //   } else {
    //     router.push("contact");
    //   }
    // };

    const onTiaozhuan = () => {
      console.log("context:", cxt);
      //context.root.$route.push({ path: "search" });
      console.log("当搜索框获得焦点的时候，跳转到新的界面");
      console.log("router:", router.currentRoute.value.fullPath);
     // if(){
        router.push({ path: "/search" }); //跳转不了
      //}
      
    };

    return {
      ...toRefs(state),
      //search,
      onTiaozhuan,
    };
  },
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
