<template>
  <button :class="[checkFocus, 'tab']" v-on:click="onTabClick">
    <Icon
      :isDouble="tabName === '모두' ? true : false"
      :isCompany="tabName === '회사' ? true : false"
    />
    <span :class="[checkFocus, 'type']">{{ tabName }}</span>
  </button>
</template>

<script>
import Icon from './Icon.vue';

export default {
  name: 'TabComponent',
  components: {
    Icon,
  },
  props: {
    tabName: String,
    value: String,
  },
  computed: {
    checkFocus() {
      return this.tabName === this.value ? 'focus' : '';
    },
  },
  methods: {
    onTabClick: function () {
      this.$emit('changeFromChild', this.tabName);
    },
  },
};
</script>

<style scoped>
.tab {
  display: flex;
  background-color: #f2f2f2;
  margin: 1px;
  border-radius: 3px;
  padding: 15px 30px;
  display: flex;
  flex: 1;
  justify-content: center;
  align-content: center;
  border: none;
  cursor: pointer;
}
.tab:hover {
  background-color: #fff;
}
.tab.focus {
  background-color: #fff;
}

.type {
  font-size: 12px;
  color: #727272;
  margin-left: 3px;
}
.type.focus {
  color: black;
}
</style>
