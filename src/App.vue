<template>
  <div class="container">
    <bar-chart :chartData="chartData" />
  </div>
</template>

<script>
import BarChart from './components/BarChart.vue';

export default {
  name: 'App',
  components: { BarChart },
  data() {
    return {
      chartData: {
        user: {
          aggressive: 8,
          confident: 10,
          responsible: 10,
          indivisual: 3,
          horizontal: 6,
        },
        company: {
          aggressive: 10,
          confident: 9,
          responsible: 9,
          indivisual: 5,
          horizontal: 3,
        },
        initial: {
          aggressive: '',
          confident: '',
          responsible: '',
          indivisual: '',
          horizontal: '',
        },
      },
    };
  },
};
</script>

<style scoped>
.container {
  margin: 10px;
  width: 360px;
  height: 812px;
  border: 1px solid #ddd;
}
</style>
