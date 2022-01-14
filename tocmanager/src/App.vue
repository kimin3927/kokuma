<template>
  <div id="app">
    <div id="left">
      <div id="navShowBtnDiv" v-if=navBtn>
        <button id="navShowBtn" @click="toggleNav">&gt;&gt;</button>
      </div>
      <!-- <Nav @hide="toggleNav" :tableRow="tableItems" :navRow="finTableItems"></Nav> -->
    </div>
    <div id="right">
      <Header></Header>
      <Main @connect="connectTable2Nav" @finish="connectFinishedItem"></Main>
    </div>
  </div>
</template>

<script>
import Header from './components/Header.vue'
// import Nav from './components/Nav.vue'
import Main from './components/Main.vue'

export default {
  name: 'App',
  data(){
    return{
      tableItems:[],
      finTableItems:[],
      navBtn: false
    }
  },
  components: {
    Header,
    // Nav,
    Main,
  },
  methods: {
    connectTable2Nav(data){
      this.tableItems = [...data];
    },
    connectFinishedItem(item){
      this.finTableItems = [...item]
    },
    toggleNav(){
      const nav = document.querySelector("Nav")
      const left = document.querySelector("#left")
      const right = document.querySelector("#right")
      if(this.navBtn == false){
        nav.style.width = 0;
        nav.style.margin = 0;
        nav.style.padding = 0;
        left.style.width = '3vw';
        right.style.width = '95vw'
        setTimeout(() => {
          this.navBtn = true;
        }, 400)
      } else {
        nav.style.width = '12vw';
        nav.style.margin = '0.5vw';
        nav.style.padding = '0 0 0 0.5vw';
        left.style.width = '13vw';
        right.style.width = '86vw'
        this.navBtn = false;
      }
    }
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  width: 99vw;
  height: 97vh;
  display: flex;
}
#left{
  width: 13vw;
  transition: 300ms;
}
#right{
  width: 86vw;
  transition: 300ms;
}

Nav {
  height: 100%;
  transition: 200ms;
}

#navShowBtnDiv{
  margin-top: 0.5vw;
  width: 3vw;
  height: 3vw;
  border: 0;
  opacity: 1;
  transition: 300ms;
}

#navShowBtn{
  width: 3vw;
  height: 3vw;
  background-color:transparent;
  border: 0;
  font-size: 110%;
  color: rgba(128, 128, 128, 0.212);
  transition: 300ms;
}

#navShowBtn:hover{
  width: 3vw;
  height: 3vw;
  border: 0;
  background-color: rgba(255, 136, 0, 0.753);
  color: grey;
  opacity: 1;
  z-index: 1;
}

@media screen and (max-width: 768px) { 
  #left{
    display: none;
  }
  #right{
    width: 98%;
  }
}



</style>


