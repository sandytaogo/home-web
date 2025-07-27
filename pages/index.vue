<template>
  <div class="swiper-container">
    <div class="swiper-wrapper" @click="handerClick">
      <img class="swiper-slide" src="../assets/img/4.jpeg" style="width: 100%;">
      <img class="swiper-slide" src="../assets/img/finance.png" style="width: 100%;">
      <!-- <img class="swiper-slide" src="../assets/img/aa.gif" style="width: 100%;">
      <img class="swiper-slide" src="../assets/img/5907266c5a59f4d2e6c10b2505f0686d.gif" style="width: 100%;">
      <img class="swiper-slide" src="../assets/img/data-processing.jpg" style="width: 100%;"> -->
    </div>
  </div>
  <div>
    <!-- <NuxtRouteAnnouncer />
    <NuxtWelcome /> -->
  </div>
</template>

<script setup lang="ts">
  const handerClick = () => {
    alert('点击了我');
  }

</script>
<style scoped>
  .swiper-container {
    list-style: none;
    margin-left: auto;
    margin-right: auto;
    overflow: hidden;
    padding: 0;
    position: relative;
  }

  .swiper-wrapper {
    box-sizing: content-box;
    display: flex;
    height: 100%;
    position: relative;
    transition-property: transform;
    width: 100%;
    z-index: 1;
  }

  .swiper-slide {
    flex-shrink: 0;
    height: 100%;
    position: relative;
    transition-property: transform;
    width: 100%;
  }

</style>

