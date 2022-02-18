<template>
  <v-navigation-drawer absolute permanent right >
    <!-- expand-on-hover -->
    <template v-slot:prepend>
      <v-list-item two-line>
        <v-list-item-avatar>
          <img src="../assets/kimin.png">
        </v-list-item-avatar>

        <v-list-item-content>
          <v-list-item-title>Kimin</v-list-item-title>
          <v-list-item-subtitle>Logged In</v-list-item-subtitle>
        </v-list-item-content>
      </v-list-item>
    </template>

    <v-divider></v-divider>
    
    <v-list dense>
      <v-list-item>
        <div class="naveItemDivWrapper">
          <div class="navItemDiv" @click="popUpIncome">
            <v-list-item-icon style="margin-right:1vh">
              <v-icon > {{'mdi-cart-variant'}} </v-icon>
            </v-list-item-icon>
            <v-list-item-content>
              <v-list-item-title > 수입입력 </v-list-item-title>
            </v-list-item-content>
          </div>
          <div class="navItemDiv" @click="popUpSpending">
            <v-list-item-icon style="margin-right:1vh">
              <v-icon> {{'mdi-view-dashboard'}} </v-icon>
            </v-list-item-icon>
            <v-list-item-content>
              <v-list-item-title> 지출입력 </v-list-item-title>
            </v-list-item-content>
          </div>
        </div>
      </v-list-item>
      <v-divider></v-divider>
      <v-list-item v-for="item in items" :key="item.title" class="navItem">
        <v-list-item-icon>
          <v-icon>{{ item.icon }}</v-icon>
        </v-list-item-icon>
        <v-list-item-content>
          <v-list-item-title>{{ item.title }}</v-list-item-title>
        </v-list-item-content>
      </v-list-item>
    </v-list>
    
  </v-navigation-drawer>
</template>

<script>
  export default {
    name: "AppNav",
    data () {
      return {
        items: [
          { title: 'Dashboard', icon: 'mdi-view-dashboard' },
          { title: 'Photos', icon: 'mdi-image' },
          { title: 'About', icon: 'mdi-help-box' },
        ],
        right: null,
      }
    },
    methods:{
      popUpIncome(){
        this.$emit("makeIncome")
      },
      popUpSpending(){
        this.$emit("makeSpending")
      }
    }
  }
</script>

<style>
  #rlals{
    width: 100%;
    height: 100%;
    background-color: indianred;
  }
  .naveItemDivWrapper{
    width:100%;
    padding-left:3px;
    display: flex;
    justify-content: space-between !important;
    margin-bottom: 8px;
  }
  .navItemDiv{
    display:flex;
    width: 12vh; 
    min-width: 100px;
    border-radius: 9px;
  }

  .navItemDiv:active{
    background-color: rgb(197, 194, 194);
  }

  .navItem:active{
    background-color: rgb(197, 194, 194);
  }


</style>