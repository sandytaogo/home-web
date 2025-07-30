
import { baseURL } from "process";

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  ssr: true,
  compatibilityDate: '2025-05-15',
  devtools: { enabled: process.env.NODE_ENV == "development" || false },
  modules: [
    '@nuxtjs/i18n'
  ],
  css:[
    '~/css/style.css',
    '~/assets/fonts/iconfont.css'
  ],
  app: {
    baseURL:'/v2',
    buildAssetsDir: process.env.NODE_ENV == "development" ? "/_nuxt/": 'nuxt',
    head: {
      title: '数据分析',
      htmlAttrs: {
        lang: 'en',
      },
      meta:[
        {charset: 'utf-8' },
        {content: "IE=edge,chrome=1", "http-equiv": "X-UA-Compatible"},
        { name: 'viewport', content: 'width=device-width, initial-scale=1, maximum-scale=1.0, user-scalable=0' },
        {name:'description', content:'软件开发,数据分析,金融分析'},
        {name:"keyword", content:"金融,金融分析,数据分析,软件开发,计算机软件"},
      ],
      link: [
        { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      ]
    }
  },
  i18n: {
    lazy: true,
    locales: ['en', 'zh'], // 配置语种
    defaultLocale: 'zh', // 默认语种
    strategy: 'no_prefix',
    vueI18n: '../i18n.config.ts', // 通过vueI18n配置
    detectBrowserLanguage: {
      useCookie: true,
      fallbackLocale: 'zh'
    }
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
      apiBase: '/api'
    }
  },
  devServer: {
    host:'0.0.0.0',
    port:3050,
    url:'http://127.0.0.1:3050'
  },
  vite: {
    plugins:[],
    css: {
      preprocessorOptions: {
        scss: {
          api: 'modern-compiler'
        }
      }
    },
    build: {
      target: ['es2015', 'chrome52'],
    }
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
  }
})
