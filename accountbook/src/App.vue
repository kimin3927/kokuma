<template>
  <v-app>
    <div id="left">
      <appHeader></appHeader>
      <router-view></router-view>
    </div>
      <appNav @makeIncome="makeIncome = true" @makeSpending="makeSpending = true"></appNav>
      <v-dialog v-model="makeIncome" scrollable max-width="100vh" transition="dialog-top-transition">
      <ModalEarning @close="makeIncome = false"></ModalEarning>
      </v-dialog>
      <v-dialog v-model="makeSpending" scrollable max-width="100vh" transition="dialog-top-transition">
      <ModalSpending></ModalSpending>
      </v-dialog>

  </v-app>
</template>

<script>

import appHeader from "../src/components/AppHeader.vue"
import AppNav from "../src/components/AppNav.vue"
import ModalEarning from "../src/views/ModalEarning.vue"
import ModalSpending from "../src/views/ModalSpending.vue"

export default {
  name: 'App',

  data: () => ({
    makeIncome: false,
    makeSpending: false
  }),
  methods:{

  },
  components : {
   appHeader : appHeader,
   appNav: AppNav,
   ModalEarning: ModalEarning,
   ModalSpending: ModalSpending
  }
};
</script>

<style>
#left{
  width: 85%;
}




</style>