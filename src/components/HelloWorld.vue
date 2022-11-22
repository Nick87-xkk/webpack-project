<template>
  <p>Hello World</p>
  <h1>{{ count }}</h1>

  <button @click="add">add</button>
  <button @click="reset">reset</button>
</template>

<script setup>
import {onMounted, ref} from "vue";

const count = ref(0)
const add = () => {
  count.value++;
}
const reset = () => {
  count.value = 0;
}
onMounted(()=>{
  console.log('throw an error')
})
</script>

<style scoped>
</style>
