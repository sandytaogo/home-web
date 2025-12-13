<template>
    <div class="container">
        <div class="root-scroll">
            <div class="scroll-container">
                <div class="item pre"><img src="../assets/img/data-processing.jpg"></div>
                <div class="item cur"><img src="../assets/img/data-processing.jpg"></div>
                <div class="item next"><img src="../assets/img/data-processing.jpg"></div>
            </div>
        </div>
        <div style="height: 200px;"></div>
    </div>
</template>

<script lang="ts" setup>
    import {ref, computed} from 'vue'
    import aa from '../assets/img/data-processing.jpg';
    import bb from '../assets/img/analysis.png';
    import cc from '../assets/img/finance-stock.png';
    const imgs = ['data-processing.jpg', 'finance-stock.png', 'analysis.png']
    let currentIndex = 0;
    const imgName = ref(imgs[0]);
    const url = computed(()=> {
        const obj = new URL(`../assets/img/${imgName.value}`, import.meta.url);
        return obj.pathname;
    });
    let isAnimation = false;
    function creatItem(index: any) {
        const scrollContainer: any = document.querySelector('.scroll-container')
        let imgUrl = imgs[index]
        imgUrl = aa;
        if (index == 1) {
            imgUrl = bb;
        } else if (index == 2) {
            imgUrl = cc;
        }
        const item = document.createElement('div')
        item.classList.add('item')
        item.innerHTML = `<img src=${imgUrl} />`
        scrollContainer.appendChild(item)
        return item
    }
    function init() {
        const scrollContainer: any = document.querySelector('.scroll-container')
        scrollContainer.innerHTML = ''
        let preIndex = currentIndex - 1 < 0 ? imgs.length - 1 : currentIndex - 1
        let nextIndex = currentIndex + 1 > imgs.length - 1 ? 0 : currentIndex + 1
        creatItem(preIndex).classList.add('pre')
        creatItem(currentIndex).classList.add('cur')
        creatItem(nextIndex).classList.add('next')
    }
    
    onMounted(() => {
        const scrollContainer: any = document.querySelector('.scroll-container')
        init();
        scrollContainer.addEventListener('wheel', (event: any) => {
            if ((event.deltaY == 0)) {
                return
            }
            if (isAnimation) {
                return
            }
            isAnimation = true
            if (event.deltaY > 0) {
                //向下滚动
                scrollContainer.classList.add('scroll-down')
                currentIndex = currentIndex + 1 > imgs.length - 1 ? 0 : currentIndex + 1
            } else {
                //向上滚动
                scrollContainer.classList.add('scroll-up')
                currentIndex = currentIndex - 1 < 0 ? imgs.length - 1 : currentIndex - 1
            }
        })
        scrollContainer.addEventListener('transitionend', (event: any) => {
            isAnimation = false
            scrollContainer.classList.remove('scroll-up')
            scrollContainer.classList.remove('scroll-down')
            init()
        })
    });
</script>

<style scoped>
    
    .container {
        padding: 0;
        height: auto;
    }

    .root-scroll {
        position: sticky;
        width: 100%;
        padding: 0;
        margin: 0;
        box-sizing: border-box;
    }

    .scroll-container {
       
        height: 100vh;
    }

    ::v-deep .item {
        position: absolute;
        width: 100%;
        height: 100%;
        overflow: hidden; 
        transition: 1s ease-in-out;
    }
    
    ::v-deep .item img {
        position: absolute;
        width: 100%;
        height: 100vh;
        object-fit: cover;
        transition: 1s ease-in-out;
    }
    
    ::v-deep .item.pre, ::v-deep .item.next {
        z-index: 1;
        height: 0;
    }
    
    ::v-deep .item.pre {
        top: 0;
    }
    
    ::v-deep .item.next {
        bottom: 0
    }
    
    ::v-deep .item.pre img {
        transform: translateY(-10%);
    }
    
    ::v-deep .item.next img {
        bottom: 0;
        transform: translateY(10%);
    }
    
    ::v-deep .scroll-up .pre, ::v-deep .scroll-down .next {
        height: 100%;
    }
    
    ::v-deep .scroll-up .pre img {
        transform: translateY(0);
    }
    
    ::v-deep .scroll-up .cur img {
        transform: translateY(10%);
    }
    
    ::v-deep .scroll-down .next img {
        transform: translateY(0);
    }

    ::v-deep .scroll-down .cur img {
        transform: translateY(-10%);
    }

</style>