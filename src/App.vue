<template>
  <HelloWorld></HelloWorld>
</template>

<script setup>
import HelloWorld from "./components/HelloWorld.vue";
</script>

<style lang="scss">
*{
  margin: 0;
  padding: 0;
}
#app{
  width: 100%;
  height: 100%;
  background: url("./assets/background.jpg") no-repeat;
  background-size: contain;
}
</style>
