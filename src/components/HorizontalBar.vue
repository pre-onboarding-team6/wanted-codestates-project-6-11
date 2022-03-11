<script>
import { HorizontalBar } from 'vue-chartjs';

export default {
  extends: HorizontalBar,
  props: {
    chartData: Object,
  },
  data() {
    return {
      options: {
        legend: {
          display: false,
        },
        tooltips: {
          enabled: true,
          mode: 'label',
          backgroundColor: '#E1F1F6',
          bodySpacing: 2,
          titleFontColor: 'black',
          bodyFontColor: 'black',
          callbacks: {
            // label: function (tooltips) {
            //   return tooltips.yAxes * -1;
            // },
          },
        },
        scales: {
          yAxes: [
            {
              gridLines: {
                display: false,
              },
              grid: {
                drawBorder: false,
                color: '#000000',
              },
            },
          ],
          xAxes: [
            {
              gridLines: {
                display: false,
              },
              ticks: {
                display: false,
                min: -10,
                max: 10,
              },
            },
          ],
        },
        responsive: true,
        maintainAspectRatio: true,
      },
    };
  },
  methods: {
    resultData(chartData) {
      let initial = Object.values(chartData.initial);
      let user = chartData.user && Object.values(chartData.user);
      let userData = user.map((score) => {
        if (score > 5) return score * -1;
        return 10 - score;
      });
      let company = chartData.company && Object.values(chartData.company);
      let companyData = company.map((score) => {
        if (score > 5) return score * -1;
        return 10 - score;
      });
      const data = {
        labels: initial,
        datasets: [
          {
            label: '사용자',
            data: userData,
            fill: true,
            backgroundColor: '#6847F0',
            categoryPercentage: 0.5,
            barPercentage: 0.5,
          },
          {
            label: '기업',
            data: companyData,
            fill: false,
            backgroundColor: '#FFC34C',
            categoryPercentage: 0.5,
            barPercentage: 0.5,
          },
        ],
      };
      return data;
    },
  },
  mounted() {
    this.renderChart(this.resultData(this.chartData), this.options);
  },
};
</script>
