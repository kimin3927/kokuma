<template>
	<canvas id="myChart" height="50vh"></canvas>
</template>

<script>
import Chart from 'chart.js'

export default {
	name : 'ddd',
	mounted(){
		const ctx = document.getElementById('myChart');
		const myChart = new Chart(ctx, {
			type: 'line',
			data: {
				labels: ['2021-01-01', '2021-01-02', '2021-01-03', '2021-01-04', '2021-01-05', '2021-01-06','2021-01-07', '2021-01-08', '2021-01-09', '2021-01-10', '2021-01-11', '2021-01-12','2021-01-13', '2021-01-14', '2021-01-15', '2021-01-16', '2021-01-17', '2021-01-18','2021-01-19', '2021-01-20', 'Yellow', 'Green', 'Purple', 'Orange'],
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
</script>

<style>
	#myChart{
		/* display: inline !important;
		width: 100% !important;
		height: 200px !important; */
	}
</style>
