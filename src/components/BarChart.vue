<template>
  <section>
    <div class="bar-chart-title">
      <span class="title-result1">MY RESULT</span>
      <span class="title-result2">나의 결과는?</span>
    </div>
    <div class="bar-chart-container">
      <div class="bar-chart-left">
        <ul class="left-list">
          <li>
            <span
              class="user-score"
              v-for="(item, index) in userData"
              :key="index"
              >{{ item }}/{{ MAXIMUM }}</span
            >
          </li>
          <li>
            <span v-for="item in leftCategory" :key="item.id">{{
              item.item
            }}</span>
          </li>
        </ul>
      </div>
      <div>
        <horizontal-bar
          :user="user"
          :company="company"
          :width="150"
          :height="180"
        />
      </div>
      <div class="bar-chart-right">
        <ul class="right-list">
          <li>
            <span v-for="item in rightCategory" :key="item.id">{{
              item.item
            }}</span>
          </li>
          <li>
            <span
              class="user-score"
              v-for="(item, index) in userData"
              :key="index"
              >{{ 10 - item }}/{{ MAXIMUM }}</span
            >
          </li>
        </ul>
      </div>
    </div>
  </section>
</template>

<script>
import HorizontalBar from './HorizontalBar.vue';
const MAXIMUM = 10;

export default {
  props: {
    user: Object,
    company: Object,
  },
  components: {
    HorizontalBar,
  },
  data() {
    return {
      userData: this.user.score,
      MAXIMUM,
      leftCategory: [
        { id: 1, item: '적극성' },
        { id: 3, item: '자신감' },
        { id: 5, item: '책임감' },
        { id: 7, item: '개인성향' },
        { id: 9, item: '수평사고' },
      ],
      rightCategory: [
        { id: 2, item: '수동성' },
        { id: 4, item: '신중함' },
        { id: 6, item: '무심함' },
        { id: 8, item: '조직성향' },
        { id: 10, item: '위계사고' },
      ],
    };
  },
};
</script>
<style scoped>
.bar-chart-title {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
}
.title-result1 {
  font-family: 'Agenor';
  font-style: normal;
  width: 100px;
  font-size: 12px;
  line-height: 140%;
  color: #121212;
  font-weight: 700;
  letter-spacing: 0.32em;
  text-align: center;
}
.title-result2 {
  width: 200px;
  font-weight: 700;
  font-size: 36px;
  line-height: 140%;
  text-align: center;
  color: #121212;
}
.bar-chart-container {
  height: 160px;
  display: flex;
  flex-direction: row;
  justify-content: center;
}
.user-score {
  font-size: 14px;
  font-weight: 600;
}
.max {
  font-size: 10px;
}
ul {
  padding-top: 15px;
  height: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
}
li {
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}
span {
  text-align: center;
  width: 50px;
  font-size: 14px;
}
</style>
