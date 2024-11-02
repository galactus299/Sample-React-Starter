/* eslint-disable quote-props */
import i18n from 'i18next'
import { initReactI18next } from 'react-i18next'
import en from './locales/en-US.json'
import cn from './locales/zh-CN.json'
import {LOCAL_STORAGE_KEYS} from "./utils/Storages";

const resources = {
  en: {
    translation: { ...en }
  },

  cn: {
    translation: { ...cn }
  },
}

i18n.use(initReactI18next).init({
  resources,
  lng: localStorage.getItem(LOCAL_STORAGE_KEYS.SELECTED_LANGUAGE) || 'en',
  fallbackLng: 'en',
  interpolation: {
    escapeValue: false
  }
})

export default i18n
