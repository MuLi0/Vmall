<template>
  <!-- 顶部搜索框 -->
  <div class="headerSearchWrap">
    <img class="logo" src="https://res.vmallres.com/portal/1.23.1.300SP01/h5/images/logo_white.png" alt="">
    <!-- 搜索框 -->
    <div class="searchBtn">
      <svg class="magnifier" width="16" height="16" viewBox="0 0 1024 1024">
        <path
          d="M744.758 704.861l143.275 143.25c12.497 12.497 12.497 32.758 0 45.255s-32.758 12.497-45.255 0l-143.686-143.691c16.388-13.702 31.662-28.692 45.666-44.814zM442.667 85.333c197.35 0 357.333 159.984 357.333 357.333 0 88.502-32.174 169.489-85.464 231.903v0l-0.944 1.101c-2.851 3.312-5.762 6.571-8.731 9.776l9.674-10.877c-3.963 4.641-8.042 9.179-12.233 13.61-2.5 2.643-5.032 5.239-7.602 7.796-0.895 0.89-1.782 1.764-2.674 2.633-2.996 2.92-6.063 5.806-9.18 8.637-1.208 1.097-2.431 2.193-3.663 3.282-2.857 2.525-5.744 4.995-8.67 7.419-0.589 0.488-1.169 0.965-1.75 1.441-61.596 50.386-140.317 80.613-226.098 80.613-197.35 0-357.333-159.984-357.333-357.333s159.984-357.333 357.333-357.333zM442.667 149.333c-162.004 0-293.333 131.33-293.333 293.333s131.33 293.333 293.333 293.333c162.004 0 293.333-131.33 293.333-293.333s-131.33-293.333-293.333-293.333z"
          fill="#000000" fill-opacity="0.6"></path>
      </svg>
      <div class="searchContent">{{ searchContent }}</div>
    </div>
    <!-- 消息 -->
    <div class="message">
      <svg width="24" height="24" viewBox="0 0 1024 1024">
        <path
          d="M661.333 128c176.731 0 320 143.269 320 320 0 174.964-140.418 317.131-314.708 319.957l-5.292 0.043h-72.085l-161.287 161.294c-11.997 11.997-31.15 12.477-43.719 1.44l-1.536-1.44c-11.997-11.997-12.477-31.15-1.44-43.719l1.44-1.536 170.667-170.667c5.501-5.501 12.799-8.792 20.514-9.303l2.113-0.070h85.333c141.385 0 256-114.615 256-256 0-139.971-112.334-253.705-251.767-255.966l-302.9-0.034c-141.385 0-256 114.615-256 256 0 139.971 112.334 253.705 251.767 255.966l4.233 0.034h32c17.673 0 32 14.327 32 32 0 17.042-13.322 30.972-30.12 31.946l-1.88 0.054h-32c-176.731 0-320-143.269-320-320 0-174.964 140.418-317.131 314.708-319.957l5.292-0.043h298.667zM298.667 394.667c29.455 0 53.333 23.878 53.333 53.333s-23.878 53.333-53.333 53.333c-29.455 0-53.333-23.878-53.333-53.333s23.878-53.333 53.333-53.333zM512 394.667c29.455 0 53.333 23.878 53.333 53.333s-23.878 53.333-53.333 53.333c-29.455 0-53.333-23.878-53.333-53.333s23.878-53.333 53.333-53.333zM725.333 394.667c29.455 0 53.333 23.878 53.333 53.333s-23.878 53.333-53.333 53.333c-29.455 0-53.333-23.878-53.333-53.333s23.878-53.333 53.333-53.333z"
          fill="#000000" fill-opacity="1"></path>
      </svg>
    </div>
    <!-- 登录 -->
    <div class="login">登录</div>
  </div>
  <!-- 产品类别Tags -->
  <div class="goodsTypeBtn">
    <van-tabs v-model:active="goodsTypeVal" shrink>
      <van-tab class="tag" title="标签"></van-tab>
      <van-tab class="tag" title="标签"></van-tab>
      <van-tab class="tag" title="标签"></van-tab>
      <van-tab class="tag" title="标签"></van-tab>
        <van-tab class="tag" title="标签"></van-tab>
    </van-tabs>
  </div>
</template>

<script>
import { ref, reactive } from "vue"
export default {
  name: "IndexWrap",
  data() {
    return {
      searchContent: "P40"
    }
  },
  setup() {
    const goodsTypeVal = ref(0);
    return { goodsTypeVal };
  }
};
</script>

<style scoped>
/* 顶部搜索框 开始 */
.headerSearchWrap {
  padding: 0 16px;
  position: relative;
  height: 58px;
}

.headerSearchWrap img.logo {
  position: absolute;
  left: 16px;
  top: 16px;
}

.headerSearchWrap .searchBtn {
  position: absolute;
  top: 9px;
  left: 112px;
  width: 188px;
  height: 40px;
  background-color: rgb(241, 243, 242);
  border-radius: 20px;
}

.headerSearchWrap .magnifier {
  position: absolute;
  left: 12px;
  top: 12px;
}

.headerSearchWrap .searchContent {
  opacity: 0.6;
  font-size: 16px;
  position: absolute;
  left: 30px;
  top: 9px;
  width: 150px;
}

.headerSearchWrap .message {
  position: absolute;
  right: 65px;
  top: 20px;
  height: 24px;
  width: 24px;
}

.headerSearchWrap .login {
  position: absolute;
  right: 16px;
  top: 20px;
  font-weight: 500px;
  height: 18px;
  font-size: 14px;
  text-align: right;
}

/* 顶部搜索框 结束 */
/* 货物标签 开始 */
.goodsTypeBtn   {

}

.goodsTypeBtn ::v-deep .van-tab {
  font-size: 12px;
  height: auto;
  width: auto;
  margin:10px 4px;
  opacity: 0.9;
padding-top: 3px ;
  text-align: center;
  border-radius: 20px;
  background-color:rgb(226, 230, 229);
}
.goodsTypeBtn ::v-deep .van-tabs__line{
  display: none;
}

/* 货物标签 结束 */</style>
