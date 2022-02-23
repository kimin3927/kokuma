<template>
  <v-card>
    <v-toolbar color="cyan" dark flat>
      <v-toolbar-title>Kim Account Book</v-toolbar-title>
      <v-spacer></v-spacer>
      <v-btn icon>
        <v-icon>mdi-magnify</v-icon>
      </v-btn>
      <v-btn icon>
        <v-icon>mdi-dots-vertical</v-icon>
      </v-btn>
			<v-app-bar-nav-icon></v-app-bar-nav-icon>
      <template v-slot:extension>
        <v-tabs v-model="tab">
          <v-tabs-slider color="yellow">1</v-tabs-slider>
          <router-link v-for="item in items" :key="item.name" :to="item.link">
            <v-tab>
              {{ item.name }} 
            </v-tab>
          </router-link>
        </v-tabs>
      </template>
    </v-toolbar>
  </v-card>
</template>



<script>
export default {
	name : "appHeader",
	data () {
		return {
			tab: null,
			items: [
				{name:"Home", link: "/"},
        {name:"지출관리", link: "/Spendings"}, 
        {name:'수입관리', link: "/Earnings"}, 
        {name:'자산관리', link: "/Assets"}, 
        {name:'카드관리', link: "/Card"}, 
        {name:'장기예측', link: "/Forecasting"},
			],
			text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
		}
	},
  }
</script>

<style>
@import '../resetting.css';

.v-slide-group__content {
	justify-content: space-around;
}

.v-tab {
  height: 100%;
  font-weight: 600 !important;
}

.v-tabs-slider-wrapper{
  height: 3px !important;
}

</style>

