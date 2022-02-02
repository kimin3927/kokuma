<template>
  <v-app>
      <appHeader></appHeader>
      <appNav></appNav>
  </v-app>
</template>

<script>

import appHeader from "../src/components/AppHeader.vue"
import AppNav from "../src/components/AppNav.vue"

export default {
  name: 'App',

  data: () => ({
    //
  }),
  components : {
   appHeader : appHeader,
   appNav: AppNav
  }
};
</script>

<style>
  @import './resetting.css';


</style>