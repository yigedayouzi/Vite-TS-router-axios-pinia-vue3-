<template>
  <button type="button" @click="toPage">helloWorld</button>
  <div class="card">
    <button type="button" @click="increment">count is {{ count }}</button>
  </div>
  <p>
    Vite5
    <a href="https://cn.vitejs.dev/" target="_blank">https://cn.vitejs.dev/</a>
  </p>
  <p>
    Vue3
    <a href="https://cn.vuejs.org/" target="_blank"
      >https://www.typescriptlang.org/zh/</a
    >
  </p>
  <p>
    TS
    <a href="https://www.typescriptlang.org/docs/handbook/" target="_blank"
      >https://www.typescriptlang.org/zh/</a
    >
  </p>
  <p>
    Axios
    <a href="https://github.com/axios/axios" target="_blank"
      >https://github.com/axios/axios</a
    >
  </p>
  <p>
    Router4
    <a href="https://router.vuejs.org/zh/" target="_blank"
      >https://router.vuejs.org/zh/</a
    >
  </p>
  <p>
    Pinia
    <a href="https://pinia.vuejs.org/zh/" target="_blank"
      >https://pinia.vuejs.org/zh/</a
    >
  </p>
</template>

<script setup lang="ts">
import { useCounterStore } from "../store/storeIndex";
import { storeToRefs } from "pinia";
import { useRouter } from "vue-router";
const store = useCounterStore();
const { count } = storeToRefs(store);
const router = useRouter();
const { increment } = store;
const toPage = () => {
  router.push("/helloWorld");
};
</script>
<style scoped>
.read-the-docs {
  color: #888;
}
</style>
