<style>
.chartmdl {
  position: relative;
  text-align: center;
}

.chartctn {
  position: absolute;
  top: 55%;
  left: 50%;
  transform: translate(-50%, -50%);
}
</style>

<template>
  <div class="chartmdl">

    <div class="chartctn">
      <span class="title" style="color: #505359; ">0.00</span>

      <p class="body-2"
        style="color: #FF8D24; letter-spacing: 0.16em; text-transform: uppercase; ">
        Net Wealth
      </p>
    </div>
    <canvas id="myChart" width="100%" height="100%"></canvas>
  </div>
</template>
<script>
export default {
  data() {
    return {
      /* eslint-disable */

    };
  },
  mounted() {
    const ctx = document.getElementById('myChart').getContext('2d');
     let myChart = new Chart(ctx, {
      type: 'doughnut',
      data: {
        labels: ['Positions', 'Holdings', 'Currency', 'Commodity'],
        datasets: [{
          data: [322800.00, 489800.00, 67300.00, 92570.00,],
          backgroundColor: [
            // '#1877F2',
            // '#FF8D24',
            // '#2ECE14',
            // '#00B2FE',
            'grey',

          ],
        }]
      },
      options: {
        legend: {
          display: false,
        },
        cutoutPercentage: 75,
        scales: {
          y: {
            beginAtZero: true
          }
        }
      }
    }
   
    );
    console.log("myChart check",myChart);
  }
}
</script>