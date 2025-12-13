
import path from "path";
import { baseURL } from "process";
import { visualizer } from 'rollup-plugin-visualizer'

// https://nuxt.com/docs/api/configuration/nuxt-config

export default defineNuxtConfig({
  ssr: true,
  compatibilityDate: '2025-05-15',
  devtools: { enabled: process.env.NODE_ENV == "development" || false },
  modules: [
    'nuxt-proxy',
    '@nuxtjs/i18n'
  ],
  plugins: [
    
  ],
  css:[
    '~/css/style.css',
    '~/assets/fonts/iconfont.css',
    '@vuemap/vue-amap/dist/style.css'
  ],
  app: {
    baseURL:'/v2',
    buildAssetsDir: process.env.NODE_ENV == "development" ? "/_nuxt/": 'nuxt',
    head: {
      title: '数据分析',
      htmlAttrs: {
        lang: 'zh',
      },
      meta:[
        {charset: 'utf-8' },
        {content: "IE=edge,chrome=1", "http-equiv": "X-UA-Compatible"},
        {name: 'viewport', content: 'width=device-width, initial-scale=1, maximum-scale=1.0, user-scalable=0' },
        {name:'description', content:'软件开发,数据分析,金融分析'},
        {name:"keyword", content:"金融,金融分析,数据分析,软件开发,计算机软件"},
      ],
      link: [
        { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      ]
    }
  },
  i18n: {
    lazy: false,
    locales: [
      {code: 'en', iso: 'en-US', name: 'English'},
      {code: 'zh', iso: 'zh-CN', name: '中文'}
    ], // 配置语种
    defaultLocale: 'zh', // 默认语种
    strategy: 'no_prefix',  // 所有语言共用同一路径，不加前缀
    vueI18n: '../i18n.config.ts', // 通过vueI18n配置
    detectBrowserLanguage: {
      useCookie: true,
      //fallbackLocale: 'zh-CN'
    }
  },
  experimental: {
    inlineSSRStyles: true
  },
  router: {
    options: {
      
    }
  },
  routeRules: {
    '/': {prerender: true},
    '/api/**': {cors: true},
    // '/old-page': {redirect:'new-page'},
    '/admin/**': {ssr:false}
  },
  runtimeConfig: {
    "server": false,
    "client": true,
    "browser": true,
    "prerender": false,
    // The private keys which are only available server-side
    apiSecret: '123',
    // Keys within public are also exposed client-side
    public: {
      apiBase: '/'
    }
  },
  devServer: {
    host:'0.0.0.0',
    port:3050,
    url:'http://127.0.0.1:3050'
  },
  nitro: {
    devProxy: {
      '/stock': {
        target: process.env.STOCK_API,  
        changeOrigin: true,
      }
    },
    // 服务端请求代理规则
    routeRules: {
      "/stock/**": {
        proxy: process.env.STOCK_API,
      }
    },
    output: {
      // 静态站点生成（SSG）时，页面输出到 dist 目录，每个页面一个 HTML 文件
      dir: '.output/public',
      publicDir: '.output/public',
    },
    // 静态生成：每个路由生成独立 HTML 文件（nuxt generate 时生效）
    prerender: {
      autoSubfolderIndex: true, // 生成 /about/index.html 而非 /about.html
    }
  },
  vite: {
    plugins:[
      visualizer(),
    ],
    css: {
      preprocessorOptions: {
        scss: {
          api: 'modern-compiler'
        }
      }
    },
    optimizeDeps: {
      exclude: ['@vuemap/vue-amap']
    },
    server: {
      proxy: {
        "/stock/**": {
          target: "https://xinxinji.cn",
          changeOrigin: true,
          rewrite: path => path.replace(/^\/stock\//, '')
        }
      }
    },
    build: {
      cssCodeSplit: true, // 开启CSS
      sourcemap: false,
      rollupOptions: { 
        output: {
          // 自定义 chunk 命名规则，清晰区分页面
          // chunkFileNames: '.output/public/js/[name].[hash].js',
          // entryFileNames: '.output/public/js/[name].[hash].js',
          // assetFileNames: '.output/public/[ext]/[name].[hash].[ext]',
          manualChunks: (id: any) => {
            //console.log(id)
            if (id.includes('.scss')) {
              return 'style';
            }
            id.includes('node_modules') ? 'vendor' : null 
          }
        }
      },
      target: ['es2015', 'chrome52'],
    }
  },
  // 4. 关闭实验性的 chunk 优化（如需）
  experimental: {
    //inlineSSRStyles: false, // 禁用 SSR 样式内联
  },
  build: {
    // babel: {
    //   presets: [
    //     [
    //       '@babel/preset-env',
    //       {
    //         targets: {
    //           // 这里指定目标浏览器的版本
    //           browsers: ['> 1%', 'last 2 versions', 'IE 11']
    //         },
    //         useBuiltIns: 'usage', // 按需引入polyfills
    //         corejs: 3 // 使用core-js的版本
    //       }
    //     ]
    //   ]
    // }
    analyze:true
  }
})
