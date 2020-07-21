<template>
  <!-- <div id='root'>
    <img src='./logo.png' />
    <div id='nav'>
      <router-link to='/'> Home</router-link>
      <router-link to='/contact'>Contact </router-link>
    </div>
    <router-view />
  </div>-->
  <router-view />
</template>

<script>
import { setup, ref } from "vue";
import { usesourceDataProvide } from "./stores/index1";
//import Main from './views/Main.vue';
export default {
  name: "App",
  //components:{Main}
  setup() {
    usesourceDataProvide();
    return {};
  },
};
</script>

<style scoped>
#root {
  text-align: center;
  font-family: "Lucida Sans", "Lucida Sans Regular", "Lucida Grande",
    "Lucida Sans Unicode", Geneva, Verdana, sans-serif;
}

img {
  width: 200px;
}

#nav {
  font-size: 1.5em;
  margin-bottom: 30px;
}

a {
  text-decoration: none;
  margin: 30px 25px;
  color: #333;
}

a:hover {
  text-decoration: underline;
  color: ;
}
</style>

<style>
* {
  font-size: 16px;
}
</style>
<style>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
.icon {
  width: 2em;
  height: 2em;
  vertical-align: -0.3em;
  fill: currentColor;
  overflow: hidden;
}
</style>
