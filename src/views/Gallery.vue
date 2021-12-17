<template>
  <div class="Gallery">
    <button @click="this.kimin">kkkkkkkkkkkk</button>
    <ul>
      <li v-for="item in this.testComputed">{{ item }}</li>
    </ul>
    <img src="https://www.kia.com/content/dam/kwcms/kr/ko/images/vehicles/4thsorento-hybrid/gallery/20210708/img_4thsorento-hev_gallery01.jpg" alt="">
    <img src="https://www.kia.com/content/dam/kwcms/kr/ko/images/vehicles/4thsorento-hybrid/gallery/20210708/img_4thsorento-hev_gallery02.jpg" alt="">
  </div>
</template>
<script>

export default { 
    name: "Header",
    data: function () {
      return {
        flag: true,
      }
    },
    computed: {
      // 계산된 getter
      testComputed: function () {
        let data = [];
        if(this.flag) {
          data= [1,2,3,4,5,6,7];
        } else {
          data= ['a','b','c']
        }


        return data;
      }
    },
    methods:{
      kimin(){
        this.flag = !this.flag;
      }
    }
}

</script>

<style>
  h1{
    text-align: center;
  }
  .Gallery{
    display: flex;
    position: absolute;
    top: 15vh;
    width:80%;
    height: 1000px;
    margin-left: 10%;
    margin-right: 10%;
  }

  .Gallery > img{
    width: 50%;
  }

</style>