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
        <span
          class="clear"
          v-on:click="clearResult"
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
      </span>
    </div>
    <input
      class="search-input"
      type="text"
      v-model="searchValue"
      placeholder="기업명을 검색하세요"
      v-on:keyup.enter="searchCompanyData"
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
export default {
  name: 'SearchData',
  props: {
    companies: Array,
  },
  data() {
    return {
      searchValue: '',
      company: '',
      noResult: false,
    };
  },
  methods: {
    searchCompanyData() {
      console.log(this.searchValue);
      for (let compData of this.companies) {
        const { name } = compData;
        if (name === this.searchValue) {
          this.company = name;
          this.$emit('selectCompanyFromChild', compData);
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
      this.searchValue = '';
      this.$emit('selectCompanyFromChild', undefined);
    },
  },
};
</script>

<style>
.search-wrapper {
  display: flex;
  flex-direction: column;
  padding: 0px 15px;
  padding-bottom: 15px;
}
.search-row {
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 62px;

  font-family: 'Noto Sans';
  font-style: normal;
  line-height: 140%;

  color: #727272;
}
.search-title {
  display: flex;
  align-items: center;

  width: 234px;
  height: 22px;

  font-weight: 700;
  font-size: 16px;

  color: #727272;
}
.search-title > span {
  margin-right: 6px;
}
.input-wrapper {
  width: 100%;
  height: 40px;
  margin: 15px 0;
}
.search-company {
  display: flex;
  justify-content: space-between;
  align-items: center;

  width: 81px;
  height: 20px;

  font-weight: 400;
  font-size: 14px;
}
.company-text {
  color: #727272;
}
.search-input {
  padding: 12px 16px;
  height: 48px;
  background: #f8f8f8;
  border: 1px solid #f2f2f2;
  border-radius: 4px;
}
.clear {
  cursor: pointer;
  width: 16px;
  height: 16px;
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
