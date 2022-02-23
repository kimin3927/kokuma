<template>
  <v-app>
    <div id="left">
      <appHeader></appHeader>
      <router-view></router-view>
    </div>
      <appNav @makeIncome="makeIncome = true" @makeSpending="makeSpending = true"></appNav>
      <v-dialog v-model="makeIncome" scrollable max-width="800px" transition="dialog-top-transition">
      <ModalEarning 
      @close="makeIncome = false"
      
      ></ModalEarning>
      </v-dialog>
      <v-dialog v-model="makeSpending" scrollable max-width="800px" transition="dialog-top-transition">
      <ModalSpending @close="makeSpending = false"></ModalSpending>
      </v-dialog>

  </v-app>
</template>

<script>

import appHeader from "../src/components/AppHeader.vue"
import AppNav from "../src/components/AppNav.vue"
import ModalSpending from "./views/ModalSpending.vue"
import ModalEarning from "./views/ModalEarning.vue"
import mixins from "./mixins/mixins"

export default {
  name: 'App',
  mixins: [mixins],
  data: () => ({
    makeIncome: false,
    makeSpending: false
  }),
  methods:{
  },
  components : {
   appHeader : appHeader,
   appNav: AppNav,
   ModalSpending: ModalSpending,
   ModalEarning: ModalEarning
  }
};
</script>

<style>
#left{
  width: 85%;
}




</style>