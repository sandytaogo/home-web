import en from './locales/en.json'
import zh_CN from './locales/zh_CN.json'

export default {
    legacy: true, // 是否兼容之前
    locale: 'zh',
    fallbackLocale: 'en',
    messages: {
      zh: zh_CN,
      en: en
    }
}