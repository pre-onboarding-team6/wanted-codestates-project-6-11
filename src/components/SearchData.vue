<template>
  <div class="search-wrapper">
    <div class="search-row">
      <span class="search-title">검색 결과 ></span>
      <span class="search-company">
        <span class="company-text">
          {{ company }}
        </span>
      </span>
      <span class="clear" @click="clearResult">x</span>
    </div>
    <input
      class="search-input"
      type="text"
      v-model="searchValue"
      placeholder="기업명을 검색하세요"
      @keyup.enter="searchCompanyData"
    />
  </div>
</template>

<script>
import data from '../assets/data.json';
export default {
  data() {
    return {
      searchValue: '',
      company: '',
      result: {},
    };
  },
  methods: {
    searchCompanyData() {
      for (let compData of data) {
        const { name, result } = compData;
        if (name === this.searchValue) {
          this.company = name;
          this.result = result;
          this.searchValue = '';
          console.log(result);
          return;
        }
      }

      // 없는 데이터를 찾을 때 로직
      console.log('없음');
    },
    clearResult() {
      this.company = '';
    },
  },
};
</script>

<style>
.search-wrapper {
  display: flex;
  flex-direction: column;
  padding: 20px 15px;
}
.search-row {
  position: absolute;
  width: 360px;
  height: 62px;
  left: 0px;
  top: 72px;
}
.search-title {
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 0px;

  position: absolute;
  width: 234px;
  height: 22px;
  left: 16px;
  top: 20px;

  font-family: 'Noto Sans';
  font-style: normal;
  font-weight: 700;
  font-size: 16px;
  line-height: 140%;
  /* or 22px */

  /* Mono./Dark 020 . 727272 */

  color: #727272;
}
.input-wrapper {
  width: 100%;
  height: 40px;
  margin: 15px 0;
}
.search-company {
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  align-items: flex-start;
  padding: 0px 0px 0px 16px;

  position: absolute;
  width: 81px;
  height: 20px;
  left: 235px;
  top: 21px;

  font-family: 'Noto Sans';
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 140%;
  /* identical to box height, or 20px */

  text-align: right;

  /* Mono./Dark 020 . 727272 */

  color: #727272;
}
.company-text {
  /* 그레이비랩 */

  position: static;
  width: 65px;
  height: 20px;
  left: 16px;
  top: 0px;

  font-family: 'Noto Sans';
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 140%;
  /* identical to box height, or 20px */

  text-align: right;

  /* Mono./Dark 020 . 727272 */

  color: #727272;

  /* Inside auto layout */

  flex: none;
  order: 0;
  flex-grow: 0;
  margin: 0px 0px;
}
.search-input {
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 12px 16px;

  position: absolute;
  width: 328px;
  height: 48px;
  left: 16px;
  top: 134px;

  /* Mono./Light 010 . F8F8F8 */

  background: #f8f8f8;
  /* Mono./Light 020 . F2F2F2 */

  border: 1px solid #f2f2f2;
  box-sizing: border-box;
  border-radius: 4px;
}
.clear {
  cursor: pointer;
  position: absolute;
  width: 16px;
  height: 16px;
  left: 328px;
  top: 23px;
}
</style>
