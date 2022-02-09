<template>
  <v-app>
      <appHeader></appHeader>
      <appNav @makeIncome="makeIncome = true" @makeSpending="makeSpending = true"></appNav>
      <router-view></router-view>
      <v-dialog v-model="makeIncome" scrollable max-width="100vh" transition="dialog-bottom-transition">
      <ModalEarning></ModalEarning>
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




</style>