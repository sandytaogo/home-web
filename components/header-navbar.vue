<template>
    <div class="header">
        <header class="affix">
            <div class="navbar">
                <div class="container nav-container">
                    <div class="navbar-header">
                        <!-- logo left -->
                        <NuxtLink to="/" target="_self" class="logo navbar-brand">
                            <svg class="text-highlighted block w-auto h-6" style="width: 130px; height: 100%;" viewBox="0 0 800 200" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M168 200H279C282.542 200 285.932 198.756 289 197C292.068 195.244 295.23 193.041 297 190C298.77 186.959 300.002 183.51 300 179.999C299.998 176.488 298.773 173.04 297 170.001L222 41C220.23 37.96 218.067 35.7552 215 34C211.933 32.2448 207.542 31 204 31C200.458 31 197.067 32.2448 194 34C190.933 35.7552 188.77 37.96 187 41L168 74L130 9.99764C128.228 6.95784 126.068 3.75491 123 2C119.932 0.245087 116.542 0 113 0C109.458 0 106.068 0.245087 103 2C99.9323 3.75491 96.7717 6.95784 95 9.99764L2 170.001C0.226979 173.04 0.00154312 176.488 1.90993e-06 179.999C-0.0015393 183.51 0.229648 186.959 2 190C3.77035 193.04 6.93245 195.244 10 197C13.0675 198.756 16.4578 200 20 200H90C117.737 200 137.925 187.558 152 164L186 105L204 74L259 168H186L168 200ZM89 168H40L113 42L150 105L125.491 147.725C116.144 163.01 105.488 168 89 168Z" fill="#00DC82"></path></svg>
                        </NuxtLink>
                        <!-- 移动端菜单 -->
                        <div class="header-mobile-menu" @click="handleMobileClick">
                            <span></span>
                            <span></span>
                            <span></span>
                        </div>
                    </div>
                
                    <!-- 菜单 -->
                    <nav id="top-navbar" class="">
                        <ul class="nav navbar-nav list-unstyled">
                            <li class="menu-list hover-open">
                                <a href="javascript:;" @click="handerHeaderShowClick" target="" class="btn-next collapsed top-navbar-text">
                                    社融数据
                                    <span class="iconfont icon-arrow-right hidden-md hidden-lg"></span>
                                </a>
                                <div class="nav-open menu-fixed-right header-content-n1" data-mod-name="child-component" data-mod-id="tabs[0]">
                                    <a href="javascript:;" class="btn-nav-back hidden-md hidden-lg">
                                        <span class="iconfont icon-arrow-lift"></span>
                                        返回主菜单
                                    </a>
                                    <div class="nav-ani ">
                                        <div class="title hidden-md hidden-lg">个人及家庭产品</div>
                                        <div class="mask"></div>
                                        <div class="container-custom">
                                            <div class="new-font-box">
                                                <div class="row">
                                                    <div class="col-md-6 header-content-n1">
                                                        <div class="new-font-box">
                                                            <ul class="row">
                                                                <li class="col-md-3 col-sm-3 col-xs-4">
                                                                    <a href="https://xinxinji.cn" target="_blank" class="" rel="noopener">
                                                                        <span class="menu-icon icon-website"></span>
                                                                        <p>1.0旧版本</p>
                                                                    </a>
                                                                </li>
                                                                
                                                                <li class="col-md-3 col-sm-3 col-xs-4">
                                                                    <a href="https://xinxinji.cn/stock/index.html?isOnline=0"  target="_blank" class="" rel="noopener">
                                                                        <span class="menu-icon icon-mobile"></span>
                                                                        <p>社融仿真</p>
                                                                    </a>
                                                                </li>
                                                                
                                                                <li class="col-md-3 col-sm-3 col-xs-4">
                                                                    <a href="https://xinxinji.cn/stock/index.html?isOnline=1"  target="_blank" class="" rel="noopener">
                                                                        <span class="menu-icon icon-website"></span>
                                                                        <p>社融实盘</p>
                                                                    </a>
                                                                </li>
                                                                
                                                                <li class="col-md-3 col-sm-3 col-xs-4">
                                                                    <a href="https://xinxinji.cn/finance/index.html" target="_blank" class="" rel="noopener">
                                                                        
                                                                        <span class="menu-icon icon-pic"></span>
                                                                        <p>金融可视化大屏</p>
                                                                    </a>
                                                                </li>
                                                                
                                                                <li class="col-md-3 col-sm-3 col-xs-4">
                                                                    <a href="https://www.cs.ecitic.com" target="_blank" class="" rel="noopener">
                                                                        
                                                                        <span class="menu-icon icon-website"></span>
                                                                        <p>中信证券</p>
                                                                    </a>
                                                                </li>
                                                                
                                                                <li class="col-md-3 col-sm-3 col-xs-4">
                                                                    <a href="https://www.htsc.com.cn" target="_blank" class="" rel="noopener">
                                                                        <span class="menu-icon icon-website"></span>
                                                                        <p>华泰证券</p>
                                                                    </a>
                                                                </li>
                                                                
                                                                <li class="col-md-3 col-sm-3 col-xs-4">
                                                                    <a href="https://www.gf.com.cn" target="_blank" class="" rel="noopener">
                                                                        <span class="menu-icon icon-website"></span>
                                                                        <p>广发证券</p>
                                                                    </a>
                                                                </li>
                                                                
                                                                <li class="col-md-3 col-sm-3 col-xs-4">
                                                                    <a href="https://www.cicc.com" target="_blank" class="" rel="noopener">
                                                                        <span class="menu-icon icon-website"></span>
                                                                        <p>中金公司</p>
                                                                    </a>
                                                                </li>

                                                                <li class="col-md-3 col-sm-3 col-xs-4">
                                                                    <a href="https://www.cmschina.com" target="_blank" class="" rel="noopener">
                                                                        <span class="menu-icon icon-website"></span>
                                                                        <p>招商证券</p>
                                                                    </a>
                                                                </li>

                                                            </ul>
                                                        </div>
                                                    </div>
                                                    
                                                    <div class="col-md-6"> 
                                                        <a href="#" target="_blank" rel="noopener">
                                                            <div class="right-logo"></div>
                                                        </a>
                                                    </div>
                                             
                                                    <a href="javascript:void(0);" @click="handerHeaderCloseClick" class="btn-close-nav-ani hidden-sm hidden-xs">
                                                        <span class="iconfont icon-close"></span>
                                                    </a>
                                                </div>
                                            </div>
                                        </div>
                                        
                                        <div class="nav-open-other" style="float:inline-end;">
                                            <div class="container-custom">
                                                <div class="row" style="display: block;">
                                                    <div class="col-md-3 col-sm-12 col-xs-12">
                                                        <a href="https://www.sse.com.cn" target="_blank" class="" rel="noopener">
                                                            <span class="iconfont icon-user"></span>
                                                            <span>上交所</span>
                                                            <span class="hwic_open-in-new3"></span>
                                                        </a>
                                                    </div>
                                                    
                                                    <div class="col-md-3 col-sm-12 col-xs-12 hidden-xs hidden-sm">
                                                        <a href="https://www.szse.cn/index/index.html" target="_blank" class="" rel="noopener">
                                                            <span class="iconfont icon-website"></span>
                                                            <span>深交所</span>
                                                            <span class="hwic_open-in-new3"></span>
                                                        </a>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        
                                    </div>
                                </div>
                            </li>

                            <li class="menu-list hover-open">
                                <a href="javascript:;" target="" class="btn-next collapsed top-navbar-text">
                                    在线实例
                                    <span class="iconfont icon-arrow-right hidden-md hidden-lg"></span>
                                </a>
                            </li>

                            <li class="menu-list hover-open">
                                <a href="javascript:;" target="" class="btn-next collapsed top-navbar-text">
                                    源码地址
                                    <span class="iconfont icon-arrow-right hidden-md hidden-lg"></span>
                                </a>
                            </li>

                            <li class="menu-list hover-open">
                                <a href="javascript:;" target="" class="btn-next collapsed top-navbar-text">
                                    在线文档
                                    <span class="iconfont icon-arrow-right hidden-md hidden-lg"></span>
                                </a>
                            </li>

                            <li class="menu-list hover-open">
                                <a href="javascript:;" target="" class="btn-next collapsed top-navbar-text">
                                    云服务提供商
                                    <span class="iconfont icon-arrow-right hidden-md hidden-lg"></span>
                                </a>
                            </li>
                        </ul>
                    </nav>
                
                    <!-- 右侧导航 -->
                    <div class="nav-right">
                        
                        <div class="btn-shop hidden-xs hidden-sm">
                            <a href="javascript:;" class="shop-icon js-shop-btn-open">
                                <span class="iconfont icon-bags"></span>
                            </a>
                            <div class="navsbox">
                                <div class="closes"><a href="javascript:;" class="btn-close js-shop-btn-close" ><span class="hwic_cross"></span></a></div>
                                <ul class="shop-nav">
                                    <!-- fix -->
                                    <li style="padding-right: 40px;" class=" hidden-xs hidden-sm">
                                        <a href="#"><span class="huawei-iconfont iconHUAWEIShopping3"></span>商城</a>
                                    </li>
                                    <!-- fix -->
                                    <li style="padding-right: 40px;" class=" hidden-md hidden-lg">
                                        <a href="#"><span class="huawei-iconfont iconHUAWEIShopping3"></span>商城</a>
                                    </li>
                                    <!-- fix -->
                                    <li style="padding-right: 40px;" class="">
                                        <a href="#"  target="_blank" rel="noopener"><span class="huawei-iconfont iconHUAWEIShopping3"></span>云</a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </header>
    </div>
</template>

<script lang="ts">

    import { defineComponent, ref, toRefs, nextTick, watch } from 'vue'

    const header_navbar = defineComponent({
        data () {
            return {
                headerMenuHeight: "500px"
            }
        },
        methods: {
            handleMobileClick : function(event :any) {
                try {
                    let element = document.querySelector('.header-mobile-menu');
                    let menuElement = document.querySelector('#top-navbar');
                    if (element && element.classList.contains('menu-box-show-icon')) {
                        element.classList.remove('menu-box-show-icon');
                        if (menuElement) {
                            menuElement.classList.remove("in");
                        }
                    } else if (element && element.classList) {
                        element.classList.add('menu-box-show-icon');
                        if (menuElement) {
                            menuElement.classList.add("in");
                        }
                    }
                } catch (e) {
                    alert(e);
                }
                console.log('Button clicked!');
            },
            /**
             * 显示窗口事件.
             * @param event 
             */
            handerHeaderShowClick (event: any) {
                let element = event.currentTarget;
                let siblings = Array.from(element.parentNode.children); // 将兄弟节点转换为数组
                let specificSiblings: any = siblings.filter((sibling: any) => sibling.className === "nav-open menu-fixed-right header-content-n1"); // 查找所有具有特定类的兄弟节点
                if (specificSiblings.length > 0) {
                    if (specificSiblings[0].style.display == 'block') {
                        specificSiblings[0].style.height = this.headerMenuHeight;
                        setTimeout(() => {
                            specificSiblings[0].style.height = '0px';
                        }, 0);
                        setTimeout(() => {
                            specificSiblings[0].style.display = "none";
                            specificSiblings[0].style.height = '';
                        }, 500);
                    } else {
                        specificSiblings[0].style.display = "block";
                        specificSiblings[0].style.height = '0px';
                        setTimeout(() => {
                            specificSiblings[0].style.height = this.headerMenuHeight;
                        }, 0);
                        setTimeout(() => {
                            specificSiblings[0].style.height = '';
                        }, 500);
                    }
                }
            },
            /**
             * 关闭窗口事件.
             * @param event 
             */
            handerHeaderCloseClick (event: any) {
                let node = event.currentTarget.closest('.header-content-n1');
                if (node) {
                    node.style.height = this.headerMenuHeight;
                    setTimeout(() => {
                        node.style.height = '0px';
                    }, 0);
                    setTimeout(() => {
                        node.style.display = "none";
                        node.style.height = '';
                    }, 500);
                }
            }
        }
    })

    export default header_navbar;

</script>

<style scoped>
    header .navbar {
        border: none;
        height: 66px;
        margin-bottom: 0;
    }

    .header {
        min-height: 66px;
        position: relative;
        z-index: 120;
    }

    .header .logo {
        width: 130px;
        margin-left: 15px;
    }

    header .navbar .navbar-header {
        background-color: #fff;
        background-image: url(../assets/img/bg-white.png) !important;
        background-repeat: no-repeat;
        background-size: 100%;
        box-shadow: 2px 0 10px rgba(0, 0, 0, .2);
        height: 66px;
        position: relative;
        z-index: 10;
    }

    .container-fluid>.navbar-collapse, .container-fluid>.navbar-header, .container>.navbar-collapse, .container>.navbar-header {
        margin-left: -15px;
        margin-right: -15px;
    }

    header.affix {
        position: fixed;
        top: 0;
        transition: transform .5s;
    }

    header .nav-right {
        display: none;
    }

    @media (max-width: 1050px) {

        header .navbar {
            border-bottom: 1px solid #e6e6e6;
            border-radius: 0;
            height: 66px;
            margin-bottom: 0;
        }

        .header-mobile-menu {
            float: right;
            width: 25px;
            padding: 25px 35px 15px 15px;
            cursor: pointer;
        }

        .header-mobile-menu > span{
            display: block;
            width: 25px;
            height: 3px;
            background: #3c4453;
            border-radius: 5px;
            margin-bottom: 5px;
            transition: transform 0.5s;
        }
        
        .menu-box-show-icon {
            position: relative;
        }
        .menu-box-show-icon > span:nth-child(2) {
            display: none;
        }
        .menu-box-show-icon > span:first-child {
            transform:rotate(45deg);
            position: absolute;
            top: 30px;
        }
        .menu-box-show-icon > span:last-child {
            transform:rotate(-45deg);
            position: absolute;
            top: 30px;
        }

        header .navbar nav#top-navbar {
            background-color: #f8f8f8;
            bottom: 0;
            left: 100%;
            overflow: hidden;
            padding: 0 15px 48px;
            position: fixed;
            top: 66px;
            -webkit-transition: all .5s;
            transition: all .5s;
            width: 100%;
        }

        header .navbar nav#top-navbar .navbar-nav li.menu-list a.btn-next {
            border-bottom: 1px solid #d4d4d4;
            font-weight: 500;
            padding: 15px 0;
        }

        header .navbar nav#top-navbar .navbar-nav li.menu-list {
            margin: 0 15px;
        }

        header .navbar nav#top-navbar .navbar-nav li.menu-list a.btn-next .icon-arrow-right {
            float: right;
            font-size: 20px;
        }

        header .navbar nav#top-navbar.in {
            left: 0;
        }
    }

    @media (min-width: 1051px) {
        html, body, header, footer {
            font-size: 18px;
        }
        header .container {
            width: 93.705%;
        }

        .header {
            min-height: 78px;
        }

        header .navbar .navbar-header {
            background-color: #fff;
            background-image: url(../assets/img/bg-white.png) !important;
            background-repeat: no-repeat;
            background-size: 100%;
            /* box-shadow: 2px 0 10px rgba(0, 0, 0, .2); */
            box-shadow: none;
            height: 66px;
            position: relative;
            z-index: 10;
            float: left;
        }

        header .navbar .navbar-header .logo {
            width: 130px;
            box-shadow: none;
        }

        header .navbar nav#top-navbar {
            background-color: #fff;
            height: inherit;
            left: 0;
            overflow: visible;
            padding-bottom: 0;
            position: absolute;
            right: 0;
            top: 0;
            -webkit-transition: all .3s;
            transition: all .3s;
        }
        header .navbar nav#top-navbar .navbar-nav li.menu-list a.top-navbar-text {
            background-color: transparent !important;
            border: none;
            box-sizing: border-box;
            font-size: .9em;
            height: 78px;
            line-height: 78px;
            padding: 0;
            font-weight: 700;
        }
        header .navbar nav#top-navbar .navbar-nav {
            display: flex;
            height: 100%;
            justify-content: center;
            padding-top: 0;
            text-align: center;
            width: 100%;
        }

        header .navbar ul.nav>li>a:after {
            content: "\e7b2";
            font-family: iconfont !important;
            font-size: 16px;
            position: absolute;
            right: -20px;
            top: 50%;
            transform: translateY(-48%);
            visibility: hidden;
        }

        header .navbar nav#top-navbar .navbar-nav li.menu-list {
            display: inline-block;
            margin: 0;
            padding: 0 1.5%;
        }

        header .navbar nav#top-navbar .navbar-nav li.menu-list a.top-navbar-text {
            background-color: transparent !important;
            border: none;
            box-sizing: border-box;
            font-size: 1em;
            height: 78px;
            line-height: 78px;
            padding: 0;
        }

        .header-mobile-menu {
            display: none;
        }
    }
    
</style>