<template>
    <nav>
          <v-alert
  type="success"
  :value=false></v-alert>
      <div id="navHeader">
        <div id="levelBtnDiv" @click="controlView">
          <button>①</button>
          <button>②</button>
          <button>③</button>
          <button>all</button>
        </div>
        <div id="hideButtonDiv"><button id="hideButton" @click="hideBtnHandler"> &lt;&lt; </button></div>
      </div>
      <div id="tableNav">
        <ul>
          <li v-for="(item) of convertedRow" :key="item.id" v-html="item.subTitle" :class="item.status"></li>
        </ul>
      </div>
      <div id="finTableNav">
        <!-- <ul>
          <li v-for="item of NavItems" :key="item"> {{ item.title }}</li>
        </ul> -->
      </div>
    </nav>
</template>

<script>
export default {
  name: 'Nav',
  data(){
    return {
      showLevel: 2,
      NavItems: this.convertedRow
    }
  },
  computed: {
    convertedRow: function () {
      const datas = []
      for(let i = 0; i < this.$store.getters.getTableRow.length; i++){
        const data = {...this.$store.getters.getTableRow[i]};
        datas.push(data);
      }
      for(let item of datas){
        const no = String(item.no)
        const countDot = no.match(/./g).length - 1;
        const blank = '&nbsp;'.repeat(2 * countDot)
        let title = item.title ?? "";
        if(title.length > 10){
          switch(countDot){
            case 0 : title = /.{10}/.exec(title) + "..."; break
            case 2 : title = /.{10}/.exec(title) + "..."; break
            case 4 : title = /.{7}/.exec(title) + "..."; break
            case 6 : title = /.{5}/.exec(title) + "..."; break
          }
        }
        item.subTitle = `${blank}${no}.${title}`;
      }
      const result = datas.filter((item) => {
        return item.level <= this.showLevel
      })
      return result;
    },
    convertedFinishedRow: function() {
        // const newData = this.navRow.map((item) => {
        // const no = String(item.finNo)
        // const countDot = no.match(/./g).length - 1;
        // let blank = ' '
        // blank = blank.repeat(countDot)
        // let title = item.title ?? "";
        // if(title.length > 10){
        //   title = /.{10}/.exec(title) + "..."
        // }
        // return `${blank}${no}.${title}`;
      // })
      return 1;
    }
  },
  methods:{
    hideBtnHandler(){
      this.$emit("hide")
    },
    controlView(e){
      const clickedTarget = e.target;
      const div = document.querySelector("#levelBtnDiv")
      const buttons = [...div.children];
      let selectedValue;
      for(let i = 0; i < buttons.length; i++){
        if(clickedTarget == buttons[i]) {
          selectedValue = i + 1;
        }
      }
      if(selectedValue == 4) selectedValue = 5;
      if(selectedValue == undefined) selectedValue = 5;
      this.showLevel = selectedValue;
    }
  }
}
</script>

<style>
nav{
  background-color: rgba(157, 219, 221, 0.5);
  border-radius: 10px;
  margin: 0.5vw;
  padding: 0 0 0 0.5vw;
  overflow-y: auto;
  text-align: left;
}

#navHeader{
  display: flex;
  justify-content: space-between;
}

#levelBtnDiv{
  padding-top: 1vw;
  width: 8vw;
  height: 3vw;
}

#levelBtnDiv button{
  height: 1.5vw;
  width: 1.5vw;
  color: grey;
  padding: 0px 0px 5px 0px;
  border: none;
  border-radius: 5px;
  background-color: transparent;
  transition: 100ms;
}

#levelBtnDiv button:hover{
  background-color: rgb(187, 187, 187);
}

#levelBtnDiv button:active{
  background-color: rgb(137, 137, 137);
}

#hideButtonDiv{
  text-align:right;
  
}

#hideButton{
  width: 3vw;
  height: 3vw;
  border: 0;
  transition: 200ms;
}

#hideButton:hover{
  width: 3vw;
  height: 3vw;
  border: 0;
  background-color: rgba(255, 136, 0, 0.753);
}

#tableNav{
  min-height: 410px;
}


ul{
  padding:0;
}

li{
  list-style: none;
  font-size: 1.7vh;
}

.finish{
  text-decoration-line: line-through;
}


</style>