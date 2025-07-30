<template>
    <header-navbar></header-navbar>
    <slot />
    <footer-navbar></footer-navbar>
</template>


<script setup lang="ts">


    import Aos from 'aos';

    onMounted(() => {

        document.body.setAttribute('data-aos-easing', "ease-out-quad");
        document.body.setAttribute('data-aos-duration', "700");
        document.body.setAttribute('data-aos-delay', "0");

        Aos.init({
            duration: 1000,
            //easing:"ease-in-out-back"
        });
        
        // 配置观察选项:
        let config = { attributes: true, childList: true, subtree: true };
        if (window.IntersectionObserver) {
            let childNodes: any = document.querySelectorAll('div[data-aos=fade-up]');
            if (childNodes.length <= 0) {
                return;
            }
            let observer = new IntersectionObserver(function(mutations) {
                mutations.forEach(function(mutation: any) {
                    if  (mutation.isIntersecting) {
                        mutation.target.classList.add('aos-animate');
                    } else {
                        mutation.target.classList.remove('aos-animate');
                    }
                })
            });
            // 启动观察器实例置于该节点
            //observer.observe(childNodes[0]);
            //来停止观察。
            //observer.disconnect() 
        } else if ('WebKitMutationObserver' in window) {
            // new WebKitMutationObserver();
        } else if ('MozMutationObserver' in window) {
            // new MozMutationObserver();
        }
    });

</script>
