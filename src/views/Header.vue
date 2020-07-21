<template>
  <div :style="{ background: color ? color : dafaultColor }">{{ title }}</div>
</template>

<script>
import { reactive, toRefs, computed } from "vue";
export default {
  props: {
    title: String,
    color: String
  },

  setup() {
    const state = reactive({
      // defaultColor: "red"
      defaultColor: "yellow"
    });
    return { ...toRefs(state) };
  }
};
</script>

<style scoped>
div {
  padding:20px 0;
  width: 100%;
  text-align: center;
  color: white;
}
</style>
