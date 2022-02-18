<template>
  <div class="asset">
    <h1>This is an 자산 page</h1>
    <input v-model="rlals" type="text">
    <button-tab>
      <h1>123</h1>
    </button-tab>
    <button-tab>
    </button-tab>
  </div>
</template>


<script>
import ButtonTab from "../components/ButtonTab.vue"

export default {
  name: 'Assets',
  data(){
		return {
      rlals:null
		}
  },
  components:{
    ButtonTab : ButtonTab
  }
}

</script>

<style>

</style>