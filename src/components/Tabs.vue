<template>
  <div>
    <div class="tab-container">
      <Tab
        :key="index"
        v-for="(tab, index) in tabs"
        :tabName="tab"
        :value="currentTab"
        v-on:changeFromChild="changeTab"
      />
    </div>
  </div>
</template>

<script>
import Tab from './tabs/Tab.vue';

export default {
  name: 'TabsComponent',
  components: {
    Tab,
  },
  props: {
    currentTab: String,
    tabs: Array,
  },
  methods: {
    changeTab: function (tab) {
      this.$emit('selectTabFromChild', tab);
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
