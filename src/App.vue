<template>
  <div class="container">
  <div id="app">
  <div id="background">
    <div id="app"><Header /></div>
        <bar-chart :chartData="chartData" />
  </div>
</template>

<script>
import Header from './components/Header.vue';
import BarChart from './components/BarChart.vue';

export default {
  name: 'App',
  components: {
    Header,
    BarChart,
  },
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
};
</script>

<style>
#background {
  background: #e5e5e5;
}
#app {
  position: relative;
  width: 360px;
  height: 985px;
  margin: auto;
  background: #ffffff;
}
</style>
