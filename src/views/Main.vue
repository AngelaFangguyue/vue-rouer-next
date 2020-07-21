<template>
  <!--<span>1111</span>-->
  <!--<div id="root">
    <img src="./logo.png" />
    <div id="nav">
      <router-link to="/">Home</router-link>
      <router-link to="/contact">Contact</router-link>
    </div>
    <router-view />
  </div>
  <Header1 />
  <Search1 />
  <Panel1 />-->
  <Header :title="title" :color="color"></Header>
  <Search />
  <Panel1></Panel1>
</template>

<script>
import Header from "./Header.vue";
import Search from "./Search.vue";
import Panel1 from "./Panel1.vue";
import { reactive, toRefs } from "vue";
export default {
  components: {
    Search,
    Panel1,
    Header,
  },
  setup() {

    const state = reactive({
      color: "#666",
      title: "CNODE",
    });

    return { ...toRefs(state) };
  },
};
</script>
