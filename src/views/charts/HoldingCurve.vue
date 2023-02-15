<template>
  <div>
    <ChartLinehc :height="310" :data="lineChartData"></ChartLinehc>
  </div>
</template>

<script>
import ChartLinehc from './ChartLinehc.vue';

export default ({
  components: {
    ChartLinehc,
  },
  data() {
    return {
      /* eslint-disable */
      lineChartData: {
        labels: ["Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
        datasets: [
          {
            label: "Holdingcurve one",
            fill: true,
            tension: 0.4,
            pointRadius: 1.5,
            borderWidth: 3,
            borderColor: "#FF8D24e0",
            backgroundColor: "#FF8D24e0",
            data: [30, 290, 90, 40, 140, 290, 230, 340, 400],
            pointBackgroundColor: "white",
            pointBorderColor: "white",
          },

          {
            label: "Holdingcurve two",
            fill: true,
            tension: 0.4,
            pointRadius: 1.5,
            borderWidth: 3,
            borderColor: "#46C631",
            backgroundColor: "#46C631",
            data: [50, 250, 400, 230, 40, 300, 450, 220, 500],
            pointBackgroundColor: "white",
            pointBorderColor: "white",
          }],
      },
    }
  },
})

</script>