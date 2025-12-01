<script lang="ts" setup>
    const { locale, setLocale, locales, t } = useI18n();
</script>
<template>
    <footer>
        <div class="container-custom">
  
        <div class="footer-nav row">
            
            <div data-mod-name="child-component" data-mod-id="navs[0]" class="col-md-2">
                <h3 class="collapsed" data-toggle="collapse" data-target="#footer-list-0" aria-controls="footer-list-0" aria-expanded="false">
                    {{t('footer.menu.about')}}
                    <span class="iconfont icon-arrow-down hidden-md hidden-lg"></span>
                </h3>
                <ul class="list-unstyled collapse navbar-collapse" id="footer-list-0">
                    
                    <li>
                        <NuxtLink to="about" target="_self"> {{t('footer.menu.platformIntroduction')}}</NuxtLink>
                    </li>
                
                    <li>
                        <a href="#" target="_blank" rel="noopener">
                            {{t('footer.menu.recruitTalents')}}
                        </a>
                    </li>
                    
                    <li>
                        <a href="#" target="_blank" rel="noopener">
                            {{t('footer.menu.supplier')}}
                        </a>
                    </li>
                    
                    <li>
                        <a href="#" target="_self"  class="read-more">
                            <span>
                                {{t('footer.menu.more')}}
                            </span><span class="iconfont icon-arrow-right"></span>
                        </a>
                    </li>
                    
                </ul>
            </div>
            
            <div data-mod-name="child-component" data-mod-id="navs[1]" class="col-md-2">
                <h3 class="collapsed" data-toggle="collapse" data-target="#footer-list-1" aria-controls="footer-list-1" aria-expanded="false">
                    {{t('footer.menu.newsAndCampaign')}}
                    <span class="iconfont icon-arrow-down hidden-md hidden-lg"></span>
                </h3>
                <ul class="list-unstyled collapse navbar-collapse" id="footer-list-1">
                    
                    <li>
                        <a href="https://tv.cctv.com/cctv2" target="_blank" >
                            {{t('footer.menu.financeNews')}}
                        </a>
                    </li>
                    
                    <li>
                        <a href="https://www.globaltimes.cn" target="_blank" >
                            {{t('footer.menu.globalTimes')}}
                        </a>
                    </li>
                    
                    <li>
                        <a href="https://www.stcn.com" target="_blank" >
                            {{t('footer.menu.securitiesTimes')}}
                        </a>
                    </li>
                    
                </ul>
            </div>
            
            <div data-mod-name="child-component" data-mod-id="navs[2]" class="col-md-2">
                <h3 class="collapsed" data-toggle="collapse" data-target="#footer-list-2" aria-controls="footer-list-2" aria-expanded="false">
                    {{ t('footer.menu.discoverData') }}
                    <span class="iconfont icon-arrow-down hidden-md hidden-lg"></span>
                </h3>
                <ul class="list-unstyled collapse navbar-collapse" id="footer-list-2">
                    
                    <li>
                        <a href="#" target="_self">
                            技术专栏
                        </a>
                    </li>
                    
                    <li>
                        <a href="#" target="" >
                            跃升数字生产力
                        </a>
                    </li>
                    
                    <li>
                        <a href="https://www.nvidia.cn" target="_blank" >
                            探索智能世界
                        </a>
                    </li>
                    
                    <li>
                        <a href="#" target="_self" >
                            出版物
                        </a>
                    </li>
                    
                </ul>
            </div>
            
            <div data-mod-name="child-component" data-mod-id="navs[3]" class="col-md-2">
                <h3 class="collapsed" data-toggle="collapse" data-target="#footer-list-3" aria-controls="footer-list-3" aria-expanded="false">
                    {{t('footer.menu.ourProducts')}}
                    <span class="iconfont icon-arrow-down hidden-md hidden-lg"></span>
                </h3>
                <ul class="list-unstyled collapse navbar-collapse" id="footer-list-3">
                    
                    <li>
                        <a href="#" target="_self" >
                            个人及家庭产品
                        </a>
                    </li>
                    
                    <li>
                        <a href="#" target="_self" >
                            企业业务产品
                        </a>
                    </li>
                    
                    <li>
                        <a href="#" target="_self" >
                            运营商网络产品
                        </a>
                    </li>
                    
                    <li>
                        <a href="#" target="_self" >
                         {{t('footer.menu.cloudService')}}
                        </a>
                    </li>
                    
                </ul>
            </div>
            
            <div data-mod-name="child-component" data-mod-id="navs[4]" class="col-md-2">
                <h3 class="collapsed" data-toggle="collapse" data-target="#footer-list-4" aria-controls="footer-list-4" aria-expanded="false">
                    {{t('footer.menu.technologySupport')}}
                    <span class="iconfont icon-arrow-down hidden-md hidden-lg"></span>
                </h3>
                <ul class="list-unstyled collapse navbar-collapse" id="footer-list-4">
                    
                    <li>
                        <a href="#" target="_self" >
                            {{t('footer.menu.consumerTechnologySupport')}}
                        </a>
                    </li>
                    
                    <li>
                        <a href="#" target="_self" >
                             {{t('footer.menu.cloudTechnologySupport')}}
                        </a>
                    </li>
                    
                    <li>
                        <a href="#" target="_blank" rel="noopener">
                            {{t('footer.menu.enterpriseTechnologySupport')}}
                        </a>
                    </li>
                    
                    <li>
                        <a href="#" target="_blank"  rel="noopener">
                            运营商技术支持
                        </a>
                    </li>
                    
                    <li>
                        <a href="#" target="_self">
                            安全应急响应
                        </a>
                    </li>
                    
                </ul>
            </div>
            
        </div>
        <div data-mod-name="child-component" data-mod-id="bootom_links" style="min-height: 46px;float: left;width: 100%;" class="footer-other-linkbox">
            <div class="footer-other-link">
                <ul class="link list-unstyled">
                    
                    <li>
                        <a href="#" target="_self" >
                            金融预测
                        </a>
                    </li>
                    
                    <li>
                        <a href="#" target="_blank" rel="noopener">
                            云服务
                        </a>
                    </li>
                    
                    <li>
                        <a href="" target="_blank" rel="noopener">
                            云JDC社区
                        </a>
                    </li>
                    
                    <li>
                        <a href="#" target="_blank" rel="noopener">
                            金融心声社区
                        </a>
                    </li>
                    
                </ul>
            </div>
            <ul class="share-box list-unstyled">
                
                <li>
                    <a href="#" target="_blank" rel="noopener"><span class="hwic_sina-weibo"></span></a>
                </li>
                
                <li>
                    <a href="#" class="js-wechat-follow" >
                        <span class="hwic_sharing_wechat"></span>
                        <div class="wechat-qrcode">
                            <button class="js-wechat-share-close-btn share-close" data-target=".share-open">×</button>
                            <h4></h4>
                            <div class="qrcode">
                                <img data-src="" class="lazyload" alt="">
                                <p></p>
                            </div>
                        </div>
                    </a>
                </li>
                
                <li>
                    <a href="#" target="_blank" rel="noopener"><span class="hwic_toutiao"></span></a>
                </li>
                
                <li>
                    <a href="#"  target="_blank" rel="noopener"><span class="hwic_zhihu"></span></a>
                </li>
                
            </ul>
        </div>
    </div>
    </footer>
</template>