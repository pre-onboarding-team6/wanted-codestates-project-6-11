<template>
  <div :class="isDouble ? 'square-container double' : 'square-container '">
    <div :class="isCompany ? 'square yellow' : 'square'" />
    <div :class="isDouble ? 'square double yellow' : ''" />
  </div>
</template>

<script>
export default {
  name: 'SquareIcon',
  props: {
    isDouble: Boolean,
    isCompany: Boolean,
  },
};
</script>

<style scoped>
.square-container {
  position: relative;
  width: 10px;
  height: 10px;
}
.square-container.double {
  width: 13px;
  height: 13px;
}
.square-container.double .square {
  position: absolute;
  top: -1px;
  left: -1px;
}
.square-container.double .square.yellow {
  top: 3px;
  left: 3px;
}

.square {
  width: 10px;
  height: 10px;
  background: rgba(110, 60, 249, 0.32);
  border: 2px solid #6e3cf9;
  margin: 3px 0;
}
.square.yellow {
  background: rgba(255, 194, 74, 0.32);
  border: 2px solid #ffc24a;
}
</style>
