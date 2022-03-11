<template>
  <div>
    <div class="tab-container">
      <Tab
        :key="index"
        v-for="(tab, index) in tabs"
        :tabOrder="tab.order"
        :tabName="tab.content"
        v-bind="tab"
        v-model="currentTab"
      />
    </div>
  </div>
</template>

<script>
import { eventBus } from '../main.js';
import Tab from './tabs/Tab.vue';

export default {
  name: 'TabsComponent',
  components: {
    Tab,
  },
  props: {
    tabName: String,
  },
  data() {
    return {
      currentTab: 'tab1', // tab 구분 지표
      tabs: [
        { order: 'tab1', content: '모두' },
        { order: 'tab2', content: '본인' },
        { order: 'tab3', content: '회사' },
      ],
    };
  },
  created() {
    this.$on('input', (tab) => {
      this.currentTab = tab;
    });
  },
  watch: {
    currentTab() {
      console.log(this.currentTab);
      eventBus.$emit('selectTab', this.currentTab);
    },
  },
  computed: {
    current() {
      return this.tabs.find((el) => el.order === this.currentTab) || {};
    },
  },
};
</script>

<style scoped>
.tab-container {
  background-color: #f2f2f2;
  color: black;
  width: 100%;
  display: flex;
}
</style>
