import * as React from 'react';
import { runApp } from 'ice';
import LocaleProvider from '@/components/LocaleProvider';
import { getLocale } from '@/utils/locale';

const locale = getLocale();
const appConfig = {
  logger: {
    smartLoglevel: true,
  },
  app: {
    rootId: 'ice-container',
    addProvider: ({ children }) => <LocaleProvider locale={locale}>{children}</LocaleProvider>,
  },
};
runApp(appConfig);
