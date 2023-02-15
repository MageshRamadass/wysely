<template>
  <div>
    <ChartLinetc  :height="310" :data="lineChartData">
    </ChartLinetc>
  </div>
</template>

<script>
import ChartLinetc from './ChartLinetc.vue';

export default ({
  components: {
    ChartLinetc,
  },
  data() {
    return {
      /* eslint-disable */
      lineChartData: {
        labels: ["Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
        datasets: [
          {
            label: "Tradecurve one",
            fill: true,
            tension: 0.4,
            pointRadius: 1.5,
            borderWidth: 3,
            borderColor: "#1890FFe0",
            backgroundColor: "#1890FFe0",
            data: [30, 90, 40, 140, 290, 290, 340, 230, 400],
            pointBackgroundColor: "white",
            pointBorderColor: "white",
          },

          {
            label: "Tradecurve two",
            fill: true,
            tension: 0.4,
            pointRadius: 1.5,
            borderWidth: 3,
            borderColor: "#B37FEB",
            backgroundColor: "#B37FEB",
            data: [50, 40, 300, 220, 500, 250, 400, 230, 500],
            pointBackgroundColor: "white",
            pointBorderColor: "white",
          }],
      },
    }
  },
})

</script>