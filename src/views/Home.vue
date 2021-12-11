<template>
  <div class="home">
    <h1>Welcome to Home1</h1>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'

export default {
  name: 'home',
  components: {
    HelloWorld
  }
}
</script>
<style>
  h1{
    text-align: left;
  }
</style>