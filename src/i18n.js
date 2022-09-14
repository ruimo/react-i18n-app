import i18n from "i18next";
import { initReactI18next } from "react-i18next";

import enCommonMsg from '@ruimo/react-i18n-common/en.json';
import jaCommonMsg from '@ruimo/react-i18n-common/ja.json';

import enMsg from './en.json';
import jaMsg from './ja.json';

const resources = {
  ja: {
      common: jaCommonMsg,
      app: jaMsg,
  },
  en: {
      common: enCommonMsg,
      app: enMsg
  }
};

i18n
  .use(initReactI18next)
  .init({
    resources,
    lng: 'ja',
    fallbackLng: 'ja'
  });

export default i18n;
