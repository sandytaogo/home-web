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
                            <li class="menu-list hover-open" @click="handerHeaderShowClick">
                                <a href="javascript:;" target="" class="btn-next collapsed top-navbar-text">
                                    社融数据
                                    <span class="iconfont icon-arrow-right hidden-md hidden-lg"></span>
                                </a>
                                <div class="nav-open menu-fixed-right header-content-n1" data-mod-name="child-component" data-mod-id="tabs[0]">
                                    <a href="javascript:;" @click="handerCloseChildMenuClick" class="btn-nav-back hidden-md hidden-lg">
                                        <span class="iconfont icon-arrow-lift"></span>
                                        返回主菜单
                                    </a>
                                    <div class="nav-ani ">
                                        <div class="title hidden-md hidden-lg">社融数据</div>
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
                                                                        <p>可视化大屏</p>
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

                            <li class="menu-list hover-open" @click="handerHeaderShowClick" >
                                <a href="javascript:;" target="" class="btn-next collapsed top-navbar-text">
                                    在线实例
                                    <span class="iconfont icon-arrow-right hidden-md hidden-lg"></span>
                                </a>
                                <div class="nav-open menu-fixed-right header-content-n1" data-mod-name="child-component" data-mod-id="tabs[3]">
                                    <a href="javascript:;" @click="handerCloseChildMenuClick" class="btn-nav-back hidden-md hidden-lg">
                                        <span class="iconfont icon-arrow-lift"></span>
                                        返回主菜单
                                    </a>
                                    <div class="nav-ani ">
                                        <div class="title hidden-md hidden-lg">在线实例</div>
                                        <div class="mask"></div>
                                        <div class="container-custom">
                                            <div class="">
                                                <div class="row">
                                                    <div class="col-md-4 header-content-n1">
                                                        <h3 class="collapsed" data-toggle="collapse" data-target="#header-list-130" aria-controls="header-list-130" aria-expanded="true">
                                                            菜单列表<span class="iconfont icon-arrow-down"></span>
                                                            <div class="line"></div>
                                                        </h3>
                                                        
                                                        <div class="row collapse navbar-collapse " id="header-list-130">
                                                            <div class="">
                                                                <div class="list-nav">
                                                                    <ul class="list-unstyled">
                                                                        <li>
                                                                            <a href="https://xinxinji.cn/stock/index.html?isOnline=0" target="_blank" rel="noopener">
                                                                                社融仿真
                                                                            </a>
                                                                        </li>
                                                                        
                                                                        <li>
                                                                            <a href="https://xinxinji.cn/user/index" target="_blank" rel="noopener">
                                                                                后台管理系统
                                                                            </a>
                                                                        </li>
                                                                        
                                                                        <li>
                                                                            <a href="https://xinxinji.cn/bpm/index.html" target="_blank" rel="noopener">
                                                                                在线流程设计
                                                                            </a>
                                                                        </li>
                                                                         <li>
                                                                            <a href="https://www.sse.com.cn/market/bonddata/statistic/" target="_blank" class="read-more" rel="noopener">
                                                                                融资额统计
                                                                            </a>
                                                                        </li>
                                                                        <li>
                                                                            <a href="https://xinxinji.cn/finance/index.html" target="_blank" rel="noopener">
                                                                                金融可视化大屏
                                                                            </a>
                                                                        </li>
                                                                    </ul>
                                                                </div>
                                                            </div>
                                                            
                                                        </div>
                                                        
                                                    </div>
                                                    
                                                    <div class="col-md-4">
                                                        <h3 class="collapsed" data-toggle="collapse" data-target="#header-list-131" aria-controls="header-list-131" aria-expanded="true">
                                                            服务监控<span class="iconfont icon-arrow-down"></span>
                                                            <div class="line"></div>
                                                        </h3>
                                                        <div class="row collapse navbar-collapse " id="header-list-131">
                                                            <div class="">
                                                                <div class="list-nav">
                                                                    <ul class="list-unstyled">
                                                                        <li>
                                                                            <a href="https://xinxinji.cn/user/hystrix/monitor?stream=https%3A%2F%2Fxinxinji.cn%2Fstock%2Factuator%2Fhystrix.stream&title=stock-application" target="_blank" rel="noopener">
                                                                                Hystrix容灾监控平台
                                                                            </a>
                                                                        </li>
                                                                        <li>
                                                                            <a href="https://xinxinji.cn/user/zipkin/" target="_blank" rel="noopener">
                                                                                Zipkin微服务链路平台
                                                                            </a>
                                                                        </li>
                                                                        <li>
                                                                            <a href="https://xinxinji.cn/junit/jacoco/index.html" target="_blank" rel="noopener">
                                                                                框架单元测试报告
                                                                            </a>
                                                                        </li>
                                                                        <li>
                                                                            <a href="https://xinxinji.cn/vue-vite-analysis/bpmn-stats.html" target="_blank" rel="noopener">
                                                                                工程化依赖分析
                                                                            </a>
                                                                        </li>
                                                                        <li>
                                                                            <a href="javascript:void(0);" class="read-more" target="_blank" rel="noopener">
                                                                                <span>查看更多</span>
                                                                                <span class="iconfont icon-arrow-right"></span>
                                                                            </a>
                                                                        </li>
                                                                    </ul>
                                                                </div>
                                                            </div>
                                                            
                                                        </div>
                                                        
                                                    </div>
                                                    
                                                    <div class="col-md-4">
                                                        <h3 class="collapsed" data-toggle="collapse" data-target="#header-list-132" aria-controls="header-list-132" aria-expanded="true">
                                                            AI辅助工具<span class="iconfont icon-arrow-down"></span>
                                                            <div class="line"></div>
                                                        </h3>
                                                        
                                                        <div class="row collapse navbar-collapse " id="header-list-132">
                                                            
                                                            <div class="">
                                                                <div class="list-nav">
                                                                    <ul class="list-unstyled">
                                                                        <li>
                                                                            <a href="https://xinxinji.cn/ai/imagetotext.html" class="read-more" target="_blank" rel="noopener">
                                                                                AI图像识别升级中
                                                                            </a>
                                                                        </li>
                                                                    </ul>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <a href="javascript:;" @click="handerHeaderCloseClick" class="btn-close-nav-ani hidden-sm hidden-xs">
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
        name: 'header_component',
        data () {
            return {
                clientWidth: 0,
                headerMenuHeight: "490px"
            }
        },
        mounted () {
            let self = this;
            self.clientWidth = document.body.clientWidth;
            //监听屏幕宽度
            window.onresize = () => {
                if(self.clientWidth !== document.body.clientWidth) {
                    self.clientWidth = document.body.clientWidth;
                }
            }
        },
        watch: {
                
        },
        methods: {
            handleMobileClick : function(event :any) {
                try {
                    let element = document.querySelector('.header-mobile-menu');
                    let menuElement = document.querySelector('#top-navbar');
                    if (element && element.classList.contains('menu-box-show-icon')) {
                        element.classList.remove('menu-box-show-icon');
                        if (menuElement) {
                            let elementNodes = document.querySelectorAll('.menu-fixed-right');
                            for (let i = 0; i < elementNodes.length; i++ ) {
                                let child = elementNodes[i];
                                if (child.classList && child.getAttribute("data-mod-name") == 'child-component') {
                                    child.classList.remove("in");
                                }
                            }
                        }
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
                let menuElments: any = document.querySelectorAll(".menu-list");
                for (let i = 0; i < menuElments.length; i++) {   
                    menuElments[i].classList.remove('active');
                };
                element.parentNode.classList.add('active');
                console.log(element);
               
                let siblings = Array.from(element.children); //将兄弟节点转换为数组
                // getAttribute('')
                let specificSiblings: any = siblings.filter((sibling: any) => 
                    sibling.className === "nav-open menu-fixed-right header-content-n1" ||
                    sibling.className === "nav-open menu-fixed-right header-content-n1 in"
                ); // 查找所有具有特定类的兄弟节点
                
                if (specificSiblings.length > 0) {
                    if (this.clientWidth < 1051) {
                        let element = specificSiblings[0];
                        if (element && element.classList.contains('in')) {
                            element.classList.remove('in');
                        } else if (element && element.classList) {
                            element.classList.add('in');
                        }
                    } else if (specificSiblings[0].style.display == 'block') {
                        specificSiblings[0].style.height = this.headerMenuHeight;
                        //连续操作属性不能保证立即渲染，让浏览器强制渲染实现过度效果.
                        requestAnimationFrame (() => {
                           specificSiblings[0].style.height = '0px';
                        });
                        setTimeout(() => {
                            specificSiblings[0].style.display = "none";
                            specificSiblings[0].style.height = '';
                        }, 500);
                    } else {
                        
                        let elementShows = document.querySelectorAll('.nav-open.menu-fixed-right.header-content-n1');
                        elementShows.forEach((element: any) => {
                            element.style.display = "none";
                        });
                        specificSiblings[0].style.display = "block";
                        specificSiblings[0].style.height = '0px';
                        //连续操作属性不能保证立即渲染，读取属性让浏览器强制渲染实现过度效果.
                        document.body.clientWidth;
                        specificSiblings[0].style.height = this.headerMenuHeight;
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
                    }, 24);
                    setTimeout(() => {
                        node.style.display = "none";
                        node.style.height = '';
                    }, 500);
                }
            },
            /**
             * 关闭子菜单事件.
             * @param event 
             */
            handerCloseChildMenuClick (event: any) {
                let elementNodes = document.querySelectorAll('.menu-fixed-right');
                for (let i = 0; i < elementNodes.length; i++ ) {
                    let child = elementNodes[i];
                    if (child.classList && child.getAttribute("data-mod-name") == 'child-component') {
                        child.classList.remove("in");
                    }
                }
            }
        }
    })

    export default header_navbar;

</script>