<script>
import { Radar } from 'vue-chartjs';

const options = {
  responsive: true,
  maintainAspectRatio: false,
  elements: {
    line: {
      borderWidth: 2,
    },
  },
};

export default {
  extends: Radar,
  props: {
    selectedCompany: Object,
    user: Object,
    selectedTab: String,
  },
  mounted() {
    if (this.selectedCompany && this.selectedTab === '모두') {
      this.renderChart(
        {
          labels: ['적극적인', '자신있는', '책임있는', '개인주의', '수평적인'],
          datasets: [
            {
              label: this.user.name,
              backgroundColor: 'rgba(110, 60, 249, 0.32)',
              borderColor: 'rgba(110,60,249,1)',
              pointBackgroundColor: 'rgba(110,60,249,1)',
              pointBorderColor: '#fff',
              pointHoverBackgroundColor: '#fff',
              pointHoverBorderColor: 'rgba(110,60,249,1)',
              data: this.user.score,
            },
            {
              label: this.selectedCompany.name,
              backgroundColor: 'rgba(255, 193, 74, 0.32)',
              borderColor: 'rgba(255,211,53,1)',
              pointBackgroundColor: 'rgba(255,211,53,1)',
              pointBorderColor: '#fff',
              pointHoverBackgroundColor: '#fff',
              pointHoverBorderColor: 'rgba(255,211,53,1)',
              data: this.selectedCompany.score,
            },
          ],
        },
        options,
      );
    } else if (!this.selectedCompany || this.selectedTab === '본인') {
      this.renderChart(
        {
          labels: ['적극적인', '자신있는', '책임있는', '개인주의', '수평적인'],
          datasets: [
            {
              label: this.user.name,
              backgroundColor: 'rgba(110, 60, 249, 0.32)',
              borderColor: 'rgba(110,60,249,1)',
              pointBackgroundColor: 'rgba(110,60,249,1)',
              pointBorderColor: '#fff',
              pointHoverBackgroundColor: '#fff',
              pointHoverBorderColor: 'rgba(110,60,249,1)',
              data: this.user.score,
            },
          ],
        },
        options,
      );
    } else if (this.selectedCompany && this.selectedTab === '회사') {
      this.renderChart(
        {
          labels: ['적극적인', '자신있는', '책임있는', '개인주의', '수평적인'],
          datasets: [
            {
              label: this.selectedCompany.name,
              backgroundColor: 'rgba(255, 193, 74, 0.32)',
              borderColor: 'rgba(255,211,53,1)',
              pointBackgroundColor: 'rgba(255,211,53,1)',
              pointBorderColor: '#fff',
              pointHoverBackgroundColor: '#fff',
              pointHoverBorderColor: 'rgba(255,211,53,1)',
              data: this.selectedCompany.score,
            },
          ],
        },
        options,
      );
    }
  },
};
</script>
