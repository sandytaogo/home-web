<template>
  <div class="swiper-container">
    <div class="swiper-wrapper">
      <img class="swiper-slide" src="../assets/img/data-processing.jpg" no-prefetch loading="lazy" data-swiper-item="item">
      <img class="swiper-slide" src="../assets/img/analysis.png" loading="lazy" data-swiper-item="item">
      <img class="swiper-slide" src="../assets/img/finance-stock.png" loading="lazy" data-swiper-item="item">
      <!-- <img class="swiper-slide" src="../assets/img/dd.png" loading="lazy" data-swiper-item="item">
      <img class="swiper-slide" src="../assets/img/finance.jpeg" loading="lazy" data-swiper-item="item">
      <img class="swiper-slide" src="../assets/img/300.jfif" loading="lazy" data-swiper-item="item"> -->
      <!-- <img class="swiper-slide" src="../assets/img/aa.gif" style="width: 100%;"> -->
    </div>

    <div class="swiper-button-prev" @click="handerSwiperPrev" tabindex="0" role="button" aria-label="Previous slide"></div>
    <div class="swiper-button-next" @click="handerSwiperNext" tabindex="0" role="button" aria-label="Next slide"></div>
  </div>

  <div class="project-service aos-init" data-aos="fade-up">
    <div class="container">
        <div class="title" style="float: none; clear: both; display: table;">
          <div class="title-name">大盘概况</div>
          <div class="title-sub">社融信息分布</div>
        </div>

        <div class="projects donghua animation Xfade-in">
          <div  class="finance-area">
            <finance-overview :financeOverview="risk.riskFinance" :resize="risk.resize"></finance-overview>
          </div>
        </div>
    </div>
  </div>

  <div class="project-service aos-init" data-aos="fade-up">
    <div class="container">
        <div class="title" style="float: none; clear: both; display: table;">
          <div class="title-name">金融媒体</div>
          <div class="title-sub">金融新概念新格局</div>
        </div>

        <div class="projects donghua animation Xfade-in">
          <div class="artplayer-app"></div>
        </div>
    </div>
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

  <div class="project-service aos-init" data-aos="fade-up">
		<div class="container">

      <div class="title">
        <div class="title-name">CONTACT US</div>
        <div class="title-sub">联系方式</div>
      </div>
					
      <div class="projects donghua animation Xfade-in">
        <div class="lxwm">
            <div class="lxwm-right">
              <div id="my_map_container" class="my-map">
                <ClientOnly>
                  <ElAmap @init="initMap" :center="center" :zoom="zoom" ref="map"></ElAmap>
                </ClientOnly>
              </div>
              <div class="lx-d4">
								<p><img src="assets/img/lx-icon1.png"><span>地址：珠海市香洲区</span></p>
								<p><img src="assets/img/lx-icon2.png"><span>邮箱：sandytaogo@163.com</span></p>
								<p><img src="assets/img/lx-icon3.png"><span>官网：xinxinji.cn</span></p>
							</div>
            </div>
        </div>
        
      </div>
    </div>
  </div>

  <div class="gaode-map">
    <!-- <NuxtRouteAnnouncer />
    <NuxtWelcome /> -->
  </div>
</template>

<script setup lang="ts">

  import { reactive, ref} from 'vue'
  import Artplayer from 'artplayer';
  import Hls from 'hls.js';
  import {ElAmap} from "@vuemap/vue-amap";
  import {initMapApi} from "~/util/amap/load";
  import httpRequest from '~/util/request';
  import { debounce } from '~/util/utils';

  definePageMeta({
    prefetch: false, // 禁用此页面的预取
  });

  const risk = reactive({
    riskFinance : {},
    resize: {width: 0, height: 0}
  });

  let currentIndex = 0;
  let swiperTimeout = 0;
  // 定义
  const state = reactive({
    
    lng:113.543785,
    lat:22.265811
  })

  const zoom = ref(13);
  const center = ref([113.543785, 22.265811]);

  onBeforeMount(() => {
    initMapApi()
  })

  onMounted(async () => {
    initSwiper();
    
    setTimeout(() => {
      queryFinance();
      initMeidaComponet();
    }, 2000);
    
    setInterval(async () => {
     queryFinance();
    }, 5000);

    window.onresize = debounce(function() {	
      risk.resize = {width: document.body.clientWidth, height: document.body.clientHeight};
		}, 500);

  })
  onUnmounted(()=> {

  });

  /**
   * 加载金融大盘概况.
   */
  const queryFinance = async ()=> {
    let financeData = await httpRequest.get('/stock/dashboard/asset?isOnline=1&t=' + Date.now());
    if (financeData) {
      risk.riskFinance = financeData;
    }
  };

  const initMeidaComponet = () => {
      let o: any = {
        container: '.artplayer-app',
        volume: 0.5,
        isLive: false,
        muted: false,
        autoplay: false,
        pip: true,
        autoSize: true,
        autoMini: false,
        screenshot: false,
        setting: true,
        loop: false,
        flip: true,
        playbackRate: true,
        aspectRatio: true,
        fullscreen: true,
        fullscreenWeb: false,
        subtitleOffset: true,
        miniProgressBar: true,
        mutex: true,
        backdrop: true,
        playsInline: true,
        autoPlayback: true,
        airplay: true,
        poster:'../../media/zgzbsc/title.jpg',
        type: 'm3u8',
        url: '../../media/zgzbsc/index.m3u8',
        customType: {
           m3u8: function(video: any, url: string, art: any) {
            if (Hls.isSupported()) {
                if (art.hls) {
                  art.hls.destroy();
                }
                const hls = new Hls();
                hls.loadSource(url);
                hls.attachMedia(video);
                art.hls = hls;
                art.hls.on(Hls.Events.ERROR, (event: any, data: any) => {
                  // 监听出错事件
                  console.log('加载失败');
                });
                art.on('destroy', () => hls.destroy());
            } else if (video.canPlayType('application/vnd.apple.mpegurl')) {
                video.src = url;
            } else {
                art.notice.show = 'Unsupported playback format: m3u8';
            }
          }
        }
      };
      let art = new Artplayer(o);
      return art;
  }

  const initMap = (map: any) => {
    //level: level, keyboardEnable:true, dragEnable:true, scrollWheel:true, doubleClickZoom:true
    //地图工具条插件，可以用来控制地图的缩放和平移
    const toolBar = new AMap.ToolBar({ruler: true, direction: true, locate: false});
    map.addControl(toolBar);

    map.plugin('AMap.HawkEye', ()=> {
      const hawkEye = new AMap.HawkEye();
      map.addControl(hawkEye);
    })

    //地图鹰眼插件，默认在地图右下角显示缩略图
    map.addControl(new AMap.OverView({isOpen: true})); 

    //高德地图JS API 普通点标记Marker
    let marker = new AMap.Marker({title:'研发中心', position:[state.lng, state.lat]});
    map.add(marker);

    map.on('mapmove', (event: any) => {
      var center = map.getCenter();
      var latitude = center.lat;
      var longitude = center.lng;
      console.debug('current position point latitude' + latitude + '度，longitude' + longitude + '度')
    });

    marker.on('click', (event: any) => {
      let info_window: AMap.InfoWindow = new AMap.InfoWindow({autoMove: true,isCustom: false});
      info_window.setContent('<h5 style="text-align: center;font-size: 1.2em;">软件研发中心</h5><div>邮箱：sandytaogo@163.com</div> ');
      
      info_window.open(map, event.lnglat);
    });

    //支持创建经纬度对象、获取经纬度信息及坐标转换功能
    //const LngLat = new AMap.LngLat(113.518788, 22.225681);
    map.viewMode = "3D"; //设置地图模式
  }

  const handerSwiperPrev = () => {
    if (currentIndex <= 0) {
      return;
    }
    initSwiper();
    var swiperWrapper: any = document.querySelector('.swiper-wrapper');
    var childNodes = document.querySelectorAll('.swiper-wrapper img[data-swiper-item=item]');
    currentIndex --;
    swiperWrapper.style.left = - (100 * currentIndex) + "%";
  }

  const handerSwiperNext = () => {
    var swiperWrapper: any = document.querySelector('.swiper-wrapper');
    var childNodes = document.querySelectorAll('.swiper-wrapper img[data-swiper-item=item]');
    if (currentIndex < childNodes.length - 1) {
      initSwiper();
      currentIndex ++;
      swiperWrapper.style.left = - (100 * currentIndex) + "%";
    }
  }

  const initSwiper = function() {
    var swiperWrapper: any = document.querySelector('.swiper-wrapper');
    var childNodes = document.querySelectorAll('.swiper-wrapper img[data-swiper-item=item]');
    if (childNodes.length > 0) {
      clearInterval(swiperTimeout);
        let timeout : any = setInterval(() => {
        swiperWrapper.style.left = - (100 * currentIndex) + "%";
        currentIndex ++;
        if (currentIndex >= childNodes.length) {
          currentIndex = 0;
        }
      }, 7000);
      swiperTimeout = timeout;
    }
  }

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

  .artplayer-app {
    width: 100%;
    height: 60em;
  }

  .lxwm {
    float: left;
    width: 100%;
    background-position: center left;
    background-image: url(assets/img/lxwmbg.jpg);
    background-repeat: no-repeat;
  }

  .lxwm-right {
      width: 50%;
      float: right;
      padding: 0px 30px;
  }

  .lx-d4 p {
    font-size: 20px;
    color: #666666;
    height: 50px;
    line-height: 50px;
    margin-bottom: 0px;
  }
  .lx-d4 p img {
    height: 36px;
    margin-right: 10px;
  }

  .lx-d4 p {
      font-size: 20px;
      color: #666666;
      height: 50px;
      line-height: 50px;
      margin-bottom: 0px;
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


  .finance-area {
    width: 100%; 
    height: 600px; 
    margin-bottom: 1em;
  }

  .gaode-map {
    width: 300px;
    height: 200px;
  }

  .my-map {
      margin: 0 auto;
      width: 660px;
      height: 250px;
      overflow: hidden;
      border-radius: 15px;
      background: url('assets/img/location.png') no-repeat;
      background-size: 100% 100%;
  }

  @media (max-width: 1050px) {
    .swiper-container {
      height: 33vh;
    }

    .artplayer-app {
      width: 100%;
      height: 20em;
    }

    .finance-area {
      height: 400px; 
    }

    .my-map {
      width: 100%;
    }
    .lxwm-right {
        width: 100%;
        padding: 15px;
    }

    .lx-d3 {
        float: left;
        width: 100%;
        margin: 1rem 0rem;
    }

    .lx-d4 {
        float: left;
        width: 100%;
    }

       /* 横屏样式 */
    @media screen and (orientation: landscape) {
      .swiper-container {
        height: 100vh;
      }
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

