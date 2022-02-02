<template>
  <div>
    <canvas id="myChart" height="50vh"></canvas>
  </div>
</template>

<script>
import Chart from 'chart.js'

export default {
	name : 'ddd',
	data(){
		return{
      kimin: 1,
		}
	},
  computed : {
    totalPeriod(){
      return this.$store.getters.getPeriod;
    },
    registDates(){
      const fullTime = this.totalPeriod;
      const registDates = this.$store.getters.getRegistDates;
      const result = [];
      for(let i = 0; i < fullTime.length; i++){
        let number =0;
        for(let j = 0; j < registDates.length; j++){
          if(registDates[j] == fullTime[i]){
            number++
          }
        }
        result.push(number);
      }
      return result;
    },
    finDates(){
      const fullTime = this.totalPeriod;
      const findDates = this.$store.getters.getFinDates;
      const result = [];
      for(let i = 0; i < fullTime.length; i++){
        let number =0;
        for(let j = 0; j < findDates.length; j++){
          if(findDates[j] == fullTime[i]){
            number++
          }
        }
        result.push(number);
      }
      return result;
    }
  },
  watch: {
    totalPeriod: function () {
      this.showChart(this.totalPeriod, this.registDates, this.finDates);
    }
  },
	mounted(){
    this.showChart(this.totalPeriod, this.registDates, this.finDates);
	},
  methods : {
    showChart(period, regist, fin){
    const ctx = document.getElementById('myChart');
    const myChart = new Chart(ctx, {
      type: 'line',
      data: {
        labels: period,
        datasets: [{
          label: '# of regist',
          data: regist,
          backgroundColor: [
            'rgba(0,250,0,0.5)'
          ],
          borderColor: [
            'rgba(0,250,0,0.5)'
          ],
          borderWidth: 2
        },
        {
          label: '# of finish',
          type: 'bar',
          data: fin,
          backgroundColor: [
            'rgba(255, 99, 132, 1)',
          ],
          borderColor: [
            'rgba(255, 0, 0, 1)',
          ],
          borderWidth: 3
        }]
      },
      options: {
        // dataset :{barPercentage: 0.4},
        scales: {
          y: {
            beginAtZero: true
          },
          xAxes: [{ 
            barPercentage: 0.4
          }]
        }
      }
    });
    console.log(myChart)
    }
  }
}
</script>

<style>
	#myChart{
		/* display: inline !important;
		width: 100% !important;
		height: 200px !important; */
	}
</style>
