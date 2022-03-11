<template>
  <div id="background">
    <div id="app"><Header /></div>
  </div>
</template>

<script>
import Header from './components/Header.vue';

export default {
  name: 'App',
  components: {
    Header,
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
