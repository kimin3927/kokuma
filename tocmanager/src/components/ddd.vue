<template>
	<canvas id="myChart" height="50vh"></canvas>
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
      return this.$store.getters.getPeriod
    }
  },
	mounted(){
    setTimeout(this.showChart(), 500)
	},
  updated() {
    setTimeout(this.showChart(), 500)
  },
  methods : {
    showChart(){
    console.log(this.totalPeriod)
    const ctx = document.getElementById('myChart');
    const myChart = new Chart(ctx, {
      type: 'line',
      data: {
        labels: this.totalPeriod,
        datasets: [{
          label: '# of regist',
          data: [5, 4, 3, 2, 2, 1, 3, 6, 2, 3, 1, 3],
          backgroundColor: [
            'green'
          ],
          borderColor: [
            'rgba(255, 99, 132, 1)',
            'rgba(54, 162, 235, 1)',
            'rgba(255, 206, 86, 1)',
            'rgba(75, 192, 192, 1)',
            'rgba(153, 102, 255, 1)',
            'rgba(255, 159, 64, 1)'
          ],
          borderWidth: 3
        },
        {
          label: '# of finish',
          data: [3, 1, 6, 7, 5, 4, 2, 4, 2, 3, 3, 3],
          backgroundColor: [
            'yellow'
          ],
          borderColor: [
            'rgba(255, 99, 132, 1)',
            'rgba(54, 162, 235, 1)',
            'rgba(255, 206, 86, 1)',
            'rgba(75, 192, 192, 1)',
            'rgba(153, 102, 255, 1)',
            'rgba(255, 159, 64, 1)'
          ],
          borderWidth: 3
        }]
      },
      options: {
        scales: {
          y: {
            beginAtZero: true
          }
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
