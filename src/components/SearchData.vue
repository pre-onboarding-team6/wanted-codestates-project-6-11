<template>
  <div class="search-wrapper">
    <div class="search-row">
      <span class="search-title"
        ><span>검색 결과</span>
        <svg
          width="6"
          height="10"
          viewBox="0 0 6 10"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M1 1L5 5L1 9"
            stroke="#727272"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          /></svg
      ></span>
      <span class="search-company" :class="{ hide: this.company === '' }">
        <span class="company-text">
          {{ company }}
        </span>
      </span>
      <span
        class="clear"
        @click="clearResult"
        :class="{ hide: this.company === '' }"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          xmlns:xlink="http://www.w3.org/1999/xlink"
          x="0px"
          y="0px"
          viewBox="0 0 330 330"
        >
          <g id="XMLID_28_">
            <path
              fill="#d2d2d2"
              id="XMLID_29_"
              d="M165,0C120.926,0,79.492,17.163,48.328,48.327c-64.334,64.333-64.334,169.011-0.002,233.345
		C79.49,312.837,120.926,330,165,330c44.072,0,85.508-17.163,116.672-48.328c64.334-64.334,64.334-169.012,0-233.345
		C250.508,17.163,209.072,0,165,0z M239.246,239.245c-2.93,2.929-6.768,4.394-10.607,4.394c-3.838,0-7.678-1.465-10.605-4.394
		L165,186.213l-53.033,53.033c-2.93,2.929-6.768,4.394-10.607,4.394c-3.838,0-7.678-1.465-10.605-4.394
		c-5.859-5.857-5.859-15.355,0-21.213L143.787,165l-53.033-53.033c-5.859-5.857-5.859-15.355,0-21.213
		c5.857-5.857,15.355-5.857,21.213,0L165,143.787l53.031-53.033c5.857-5.857,15.355-5.857,21.213,0
		c5.859,5.857,5.859,15.355,0,21.213L186.213,165l53.033,53.032C245.104,223.89,245.104,233.388,239.246,239.245z"
            />
          </g></svg
      ></span>
    </div>
    <input
      class="search-input"
      type="text"
      v-model="searchValue"
      placeholder="기업명을 검색하세요"
      @keyup.enter="searchCompanyData"
    />
    <div
      :class="{ show: this.noResult, hide: !this.noResult }"
      class="no-result"
    >
      <span>기업 정보가 없습니다.</span>
    </div>
  </div>
</template>

<script>
import data from '../assets/data.json';
export default {
  data() {
    return {
      searchValue: '',
      company: '',
      noResult: false,
    };
  },
  methods: {
    searchCompanyData() {
      for (let compData of data) {
        const { name, result } = compData;
        if (name === this.searchValue) {
          this.company = name;
          this.searchValue = '';
          this.$emit('search_result', result);
          return;
        }
      }

      // 기업 정보가 없는 경우
      this.showAndHideMessage();
      this.clearResult();
    },
    showAndHideMessage() {
      this.noResult = true;
      setTimeout(() => {
        this.noResult = false;
      }, 2000);
    },
    clearResult() {
      this.company = '';
      this.$emit('search_result', {});
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

  font-family: 'Noto Sans';
  font-style: normal;
  line-height: 140%;

  color: #727272;
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

  font-weight: 700;
  font-size: 16px;

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

  font-weight: 400;
  font-size: 14px;

  text-align: right;
}
.company-text {
  /* 그레이비랩 */

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
.hide {
  display: none;
}
.no-result {
  position: absolute;
  left: 80px;
  top: 138px;

  width: 200px;
  height: 40px;
  border-radius: 10px;
  box-shadow: 0px 2px 3px 1px rgba(184, 184, 184, 0.72);
  background: #fff;

  justify-content: center;
  align-items: center;
}
.show {
  display: flex;
}
</style>
