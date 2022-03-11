<script>
import { HorizontalBar } from 'vue-chartjs';

export default {
  extends: HorizontalBar,
  props: {
    user: Object,
    company: Object,
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
    resultData({ user, company }) {
      const labels = ['', '', '', '', ''];
      let userData = user.score.map((score) => {
        if (score > 5) return score * -1;
        return 10 - score;
      });
      let companyData = company?.score.map((score) => {
        if (score > 5) return score * -1;
        return 10 - score;
      });
      console.log(companyData);
      const data = {
        labels,
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
    this.renderChart(
      this.resultData({ user: this.user, company: this.company }),
      this.options,
    );
  },
};
</script>
