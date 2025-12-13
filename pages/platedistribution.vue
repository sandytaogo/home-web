<template>
    <div class="container">
        <div class="item">1</div>
        <div class="item">2</div>
        <div class="item">3</div>
        <div class="item">4</div>
    </div>
    <div class="container">
        <div class="item">1</div>
        <div class="item">2</div>
        <div class="item">3</div>
        <div class="item">4</div>
    </div>
    <div class="container">
        <div class="item">1</div>
        <div class="item">2</div>
        <div class="item">3</div>
        <div class="item">4</div>
    </div>
     <div class="banner">
        <h1 class="title">板块涨跌，热力分布</h1>
    </div>

    <!-- <div class="parallax-layout"> -->
    <div class="scroll-container">
        <div class="item">
            <img src="../assets/img/data-processing.jpg" no-prefetch loading="lazy" data-swiper-item="item"/>
        </div>
        <div class="item">
            <img src="../assets/img/analysis.png" no-prefetch loading="lazy" data-swiper-item="item"/>
        </div>
        <div class="item">
            <img src="../assets/img/finance-stock.png" no-prefetch loading="lazy" data-swiper-item="item"/>
        </div>
    </div>

</template>

<script setup lang="ts">
    import { reactive, ref} from 'vue'
    let num = ref(0);
    let currentIndex = 0;
    onMounted(() => {
        let parallaxLayout = document.querySelector(".parallax-layout");
        parallaxLayout?.addEventListener('wheel', function(event: any) {
            if (event.deltaY == 0) {
                return;
            } else if (event.deltaY > 0) {
                console.log('--------------------------------wheel down' + event)
            } else {
                console.log('--------------------------------wheel up' + event)
            }
        });
        parallaxLayout?.addEventListener('transitionend', function(event: any) {
            console.log('--------------------------------transitionend' + event)
        });
    });
</script>

<style scoped>
    .banner {
        text-align: center;
        background: linear-gradient(
            45deg, 
            rgba(0, 153, 68, .5) 0, rgba(0, 153, 68, .5) 25%, transparent 25%, transparent 50%, 
            rgba(0, 153, 68, .5) 50%, rgba(0, 153, 68, .5) 75%, transparent 75%, transparent
        );
        background-size: 100px 100px;
    }
    .title {
        color:#fbc0c0;
        font-size: 3em;
        transition: 0.5s;
        mix-blend-mode: difference;
    }
    .banner:hover .title {
        transform: translateX(-100px);
    }
    .container {
        display: flex;
    }
    .container .item {
        background-color: skyblue;
        border-radius: 10px;
        padding: 20px;
        margin: 10px;
        flex: 1; /* 让所有项目平分剩余空间 */
    }
    .croll-container {
        width: 100%;
        height: 100vh;
        position: relative;
    }
    .scroll-container .item {
        top: 0px;
        position: sticky;
        width: 100%;
        height: 100%;
        transition: 1s ease-in-out;
    }
    
    .item img {
        width: 100%;
        height: 100vh;
        object-fit: cover;
        transition: 1s ease-in-out;
    }
</style>