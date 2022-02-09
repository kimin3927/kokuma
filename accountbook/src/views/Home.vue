<template>
  <v-container id="main">
    <v-card id="myCard">
      <v-card-title>대시보드</v-card-title>
      <div id="chartWrapper">
        <div class="chart">
          <img src="../assets/chart/1.png" alt="">   <!-- "../assets/chart/two.PNG"-->
        </div>
        <div class="chart">
          <img src="../assets/chart/1.png" alt="">
        </div>
        <div class="chart">
          <img src="../assets/chart/1.png" alt="">
        </div>
        <div class="chart">
          <img src="../assets/chart/1.png" alt="">
        </div>
        <div class="chart">
          <img src="../assets/chart/1.png" alt="">
        </div>
        <div class="chart">
          <img src="../assets/chart/1.png" alt="">
        </div>
      </div>
    </v-card>
</v-container>
</template>

<script>
  
  export default {
    name: 'Home',
  }
</script>

<style>
#main{
  margin: 0 0 0 0;
  padding: 5px 3px 3px 3px;
  width: 97%;
  height: 100%;
  max-width: none;
}

#myCard{
  width: 100%;
  height: 100%;
}

.chart{
  border:1px solid green;
  width: 50vh;
  height: 40vh;
  margin: 5vh 5vh 5vh 5vh;
}
#chartWrapper{
  display: flex;
  justify-content: space-evenly;
  flex-wrap: wrap;
}

img{
  width:100%;
}
</style>