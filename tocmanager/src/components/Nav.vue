<template>
    <nav>
      <ul @click="change11">
        <li v-for="item of convertedRow" :key="item">{{item}}</li>
      </ul>
      <!-- <span v-for="item of kimin" :key=item>{{item}}</span> -->
    </nav>
</template>

<script>
export default {
  name: 'Nav',
  data(){
    return{
      // kimin: this.findTitle(),
      tableItems : [],
    }
  },
  props: ['tableRow'],
  computed: {
    // 계산된 getter
    convertedRow: function () {
      // `this` 는 vm 인스턴스를 가리킵니다.

      const newData = this.tableRow.map((item) => {
        return item.no +"."+ /..../.exec(item.title) + "...";
      })
      return newData;
    }
  },
  methods:{
    change11:function () {
      this.tableRow = [1,2,3]
    }
    // findTitle(){
    //   let title = this.tableRow.title;
    //   console.log(title)
    //   if(title.length > 10) {
    //     title = /........./.exec(title) + "...";
    //   }
    //   console.log(title)
    //   return title;
    // }
  }
}
</script>

<style>
nav{
    background-color: rgba(157, 219, 221, 0.5);
    border-radius: 10px;
    margin: 0.5vw;
    padding-left: 0.5vw;
    overflow-y: auto;
    text-align: left;
}

ul{
  padding:0;
}

li{
    list-style: none;
}
</style>