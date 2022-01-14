<template>
    <nav>
      <div id="hideButtonDiv"><button id="hideButton" @click="hideBtnHandler"> &lt;&lt; </button></div>
      <div id="tableNav">
        <ul>
          <li v-for="item of convertedRow" :key="item" v-html="item"></li>
        </ul>
      </div>
      <div id="finTableNav">
        <ul>
          <li v-for="item of convertedFinishedRow" :key="item"> {{testcount}}</li>
        </ul>
      </div>
    </nav>
</template>

<script>
export default {
  name: 'Nav',
  data(){
    return{
    }
  },
  props: ['tableRow', 'navRow'],
  computed: {
     testcount() {
      return this.$store.getters.getCount;
    },
    convertedRow: function () {
      const newData = this.tableRow.map((item) => {
        const no = String(item.no)
        const countDot = no.match(/./g).length - 1;
        let blank = '&nbsp;'
        blank = blank.repeat(countDot)
        let title = item.title ?? "";
        if(title.length > 10){
          title = /.{10}/.exec(title) + "..."
        }
        return `${blank}${no}.${title}`;
      })

      return newData;
    },
    convertedFinishedRow: function() {
        const newData = this.navRow.map((item) => {
        const no = String(item.finNo)
        const countDot = no.match(/./g).length - 1;
        let blank = ' '
        blank = blank.repeat(countDot)
        let title = item.title ?? "";
        if(title.length > 10){
          title = /.{10}/.exec(title) + "..."
        }
        return `${blank}${no}.${title}`;
      })
      return newData;
    }
  },
  methods:{
    hideBtnHandler(){
      this.$emit("hide")
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
}


</style>