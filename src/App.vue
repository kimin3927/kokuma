<template>
  <div id="app">
    <!-- <button @click="kimin"> {{ kkkk.message }}</button> -->
    <Header :message="this.kkkk"/>
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
    Header,Footer
  },
   data: function () {
      return {
        Header: document.querySelector("#header"),
        person: {
          koko: 'kimin'
        },
        kkkk: {
          message: "최초의",
        }
      }
    },


    methods:{
      kimin(){
        if(this.kkkk.message === "1"){
          this.kkkk.message = "학교"  
        } else this.kkkk.message = "1";
        console.log(this.$el)
      }
    }
};
</script>

<style>
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
