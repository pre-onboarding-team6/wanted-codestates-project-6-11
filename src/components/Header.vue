<template>
  <div class="header">
    <div class="title-wrapper">
      <div class="circle">
        <div class="arrow-wrapper">
          <img alt="Vue logo" src="../assets/arrow.png" />
        </div>
      </div>
      <div class="title">진단결과</div>
    </div>
    <div class="re-diagnosis" @click="reload">다시 진단하기</div>
  </div>
</template>

<script>
export default {
  methods: {
    reload() {
      window.location.reload();
    },
  },
};
</script>

<style>
.header {
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  width: 360px;
  height: 72px;
  padding: 16px;
  position: absolute;
  background: #ffffff;
  border-bottom: 1px solid rgb(241, 241, 241);
}
.title-wrapper {
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 0px;
  position: static;
  width: 219px;
  height: 34px;
  left: 16px;
  top: 19px;
}
.circle {
  width: 28px;
  height: 28px;
  border: 2px solid #121212;
  border-radius: 80px;
  margin-right: 12px;
}
.arrow-wrapper {
  margin: 5px;
}
img {
  margin-left: 40px;
  width: 10px;
  height: 10px;
}
.title {
  position: static;
  font-weight: 700;
  font-size: 24px;
}
.re-diagnosis {
  font-size: 16px;
  color: #6e3cf9;
  cursor: pointer;
}
</style>
