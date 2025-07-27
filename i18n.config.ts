import en from './locales/en.json'
import zh from './locales/zh_CN.json'

export default defineI18nConfig(() => {
  return {
    legacy: false, // 是否兼容之前
    fallbackLocale: 'zh',
    messages: {
      en,
      zh,
    }
  }
})