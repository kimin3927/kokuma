<template>
  <div id="app" @click="bodyClick">
    <Header />
    <div>
      <router-view></router-view>
      <Footer />
    </div>
    
  </div>
</template>
<script>
import Header from './components/layout/Header.vue'
import Footer from './components/layout/Footer.vue'

export default {
  name: "App",
  components: {
    Header,Footer,
  },
   data: function () {
      return {
        kimin: null,
      }
    },
    computed : {
      clickedBody(){
        return this.$store.getters.getBodyClicked;
      },
      onItems(){
        // return this.$store.getters.getOnItems;
      }
    },
    methods:{
      bodyClick(e){
        // const onItems = document.querySelectorAll(".on")
      }
    }
};
</script>

<style>

header{
  position:fixed;
}

router-view{
  position: relative;
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}

Footer{
  position: absolute;
}
</style>
