<template>
  <div id="background">
    <div id="app">
      <header-bar />
      <search-data
        :companies="companies"
        v-on:selectCompanyFromChild="selectCompany"
      />
      <radar-graph
        :selectedCompany="selectedCompany"
        :currentTab="selectedTab"
        :user="user"
        :key="Date.now()"
      />
      <tabs
        :currentTab="selectedTab"
        :tabs="tabApi"
        v-on:selectTabFromChild="selectTab"
      />
      <bar-chart
        :currentTab="selectedTab"
        :user="user"
        :company="selectedCompany"
        :key="Date.now() + 1"
      />
    </div>
  </div>
</template>

<script>
import HeaderBar from './components/HeaderBar.vue';
import BarChart from './components/BarChart.vue';
import SearchData from './components/SearchData.vue';
import RadarGraph from './components/RadarGraph.vue';
import Tabs from './components/Tabs.vue';
import { companies, user } from './assets/dummy.js';

export default {
  name: 'App',
  components: {
    HeaderBar,
    BarChart,
    SearchData,
    RadarGraph,
    Tabs,
  },
  data() {
    return {
      companies,
      user,
      selectedCompany: undefined,
      selectedTab: '모두',
      tabApi: ['모두', '본인', '회사'],
    };
  },
  methods: {
    selectTab: function (tab) {
      this.selectedTab = tab;
    },
    selectCompany: function (company) {
      this.selectedCompany = company;
    },
  },
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
