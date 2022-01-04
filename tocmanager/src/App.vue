<template>
  <div id="app">
    <Header></Header>
    <Main @connect="connectTable2Nav"></Main>
    <Nav :tableRow="tableRow"></Nav>
  </div>
</template>

<script>
import Header from './components/Header.vue'
import Nav from './components/Nav.vue'
import Main from './components/Main.vue'

export default {
  name: 'App',
  data(){
    return{
      tableRow:[],
      kimin:  1 * 1,
    }
  },
  components: {
    Header,
    Nav,
    Main,
  },
  methods: {
    connectTable2Nav(data){
      this.tableRow = [...data];
      console.log(data)
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
  height: 98vh;
  display: grid;
  grid-template-columns: 1% 13% 85% 1%;
  grid-template-rows: 0% 15% 85% 0%;
  grid-template-areas: 
  ". . . ."
  ". h h ."
  ". n m ."
  ". . . ."
  ;
}

Header{
  grid-area: h;
}

Main{
  grid-area: m;
}

Nav {
  grid-area: n;
  border: 1px solid red;
}

</style>


