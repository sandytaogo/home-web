<template>
  <div class="swiper-container">
    <div class="swiper-wrapper">
      <img class="swiper-slide" src="../assets/img/data-processing.jpg" data-swiper-item="item">
      <img class="swiper-slide" src="../assets/img/finance.jpeg" loading="lazy" data-swiper-item="item">
      <img class="swiper-slide" src="../assets/img/300.jfif" loading="lazy" data-swiper-item="item">
      <!-- <img class="swiper-slide" src="../assets/img/aa.gif" style="width: 100%;"> -->
    </div>

    <div class="swiper-button-prev" @click="handerSwiperPrev" tabindex="0" role="button" aria-label="Previous slide"></div>
    <div class="swiper-button-next" @click="handerSwiperNext" tabindex="0" role="button" aria-label="Next slide"></div>
  </div>


   <div class="project-service aos-init" data-aos="fade-up">
		<div class="container">

      <div class="title">
        <div class="title-name">项目服务</div>
        <div class="title-sub">Project services</div>
      </div>
					
      <div class="projects donghua animation Xfade-in">
        <div class="project-li">
          <div class="project-li-icon"><img src="assets/img/xm-icon1.png"></div>
          <div class="project-li-title">品牌网站设计</div>
          <div class="project-li-xq">塑造符合企业品牌气质的官方形象，企业文化，客户至上。</div>
        </div>
        
        <div class="project-li ">
          <div class="project-li-icon"><img src="assets/img/xm-icon2.png"></div>
          <div class="project-li-title">小程序定制开发</div>
          <div class="project-li-xq">新用户链接技术产品，操作和APP类似。打开界面免下载安装，操作流畅。</div>
        </div>
        
        <div class="project-li ">
          <div class="project-li-icon"><img src="assets/img/xm-icon3.png"></div>
          <div class="project-li-title">微信H5开发</div>
          <div class="project-li-xq">移动端图文、视听、交互体验，营销型移动端网站。</div>
        </div>
        
        <div class="project-li">
          <div class="project-li-icon"><img src="assets/img/xm-icon4.png"></div>
          <div class="project-li-title">软件定制</div>
          <div class="project-li-xq">专业技术骨干,10年一线开发经验,量身定制,按时交付.标准化服务保质保量</div>
        </div>
      </div>
	  
    </div>
	</div>

  <div class="gaode-map">
    <!-- http://127.0.0.1/media/rgzn/media.key -->
    <!-- <NuxtRouteAnnouncer />
    <NuxtWelcome /> -->
  </div>
</template>

<script setup lang="ts">

  import { reactive } from 'vue'
 
  // 定义
  const state = reactive({
    currentIndex: 0,
    swiperTimeout:0
  })

  const handerSwiperPrev = () => {
    if (state.currentIndex <= 0) {
      return;
    }
    initSwiper();
    var swiperWrapper: any = document.querySelector('.swiper-wrapper');
    var childNodes = document.querySelectorAll('.swiper-wrapper img[data-swiper-item=item]');
    state.currentIndex --;
    swiperWrapper.style.left = - (100 * state.currentIndex) + "%";
  }

  const handerSwiperNext = () => {
    var swiperWrapper: any = document.querySelector('.swiper-wrapper');
    var childNodes = document.querySelectorAll('.swiper-wrapper img[data-swiper-item=item]');
    if (state.currentIndex < childNodes.length - 1) {
      initSwiper();
      state.currentIndex ++;
      swiperWrapper.style.left = - (100 * state.currentIndex) + "%";
    }
  }

  const initSwiper = function() {
    var swiperWrapper: any = document.querySelector('.swiper-wrapper');
    var childNodes = document.querySelectorAll('.swiper-wrapper img[data-swiper-item=item]');
    if (childNodes.length > 0) {
      clearInterval(state.swiperTimeout);
      let swiperTimeout : any = setInterval(() => {
        swiperWrapper.style.left = - (100 * state.currentIndex) + "%";
        state.currentIndex ++;
        if (state.currentIndex >= childNodes.length) {
          state.currentIndex = 0;
        }
      }, 7000);
      state.swiperTimeout = swiperTimeout;
    }
  }

  onMounted(() => {
    initSwiper();
  })
  
</script>
<style scoped>
  .swiper-container {
    height: 90vh;
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
    transition: all 1s;
    transition-timing-function: ease-out;
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

  .swiper-button-next, .swiper-button-prev {
    align-items: center;
    font-family: iconfont !important;
    color: var(--swiper-navigation-color, var(--swiper-theme-color));
    cursor: pointer;
    display: flex;
    height: var(--swiper-navigation-size);
    justify-content: center;
    margin-top: calc(var(--swiper-navigation-size) * -1 / 2);
    position: absolute;
    top: 50%;
    width: calc(var(--swiper-navigation-size) / 44 * 27);
    z-index: 10;
  }

  .swiper-button-prev {
    left: 2%;
  }
  .swiper-button-prev:before {
      color: #fff;
      content: "\e650"
  }

  .swiper-button-next {
    right: 2%;
  }
  .swiper-button-next:before {
     color: #fff;
    content: "\e64f"
  }

  .gaode-map {
    width: 300px;
    height: 200px;
  }

  @media (max-width: 1050px) {
    .swiper-container {
      height: 50vh;
    }
  }

  @media (min-width: 1051px) {
    .swiper-button-next, .swiper-button-prev {
      font-size: 35px;
      line-height: 35px;
      visibility: hidden;
    }

    .swiper-container:hover div[role=button] {
      visibility: visible;
      opacity: 1;
    }

    .passbars-slick-box .swiper-button-next:hover:before,.passbars-slick-box .swiper-button-prev:hover:before {
      visibility: visible;
      opacity: 1;
    }
    
  }

</style>

