import { type JSX, PropsWithChildren } from 'react';

import { I18nextProvider as ReactI18nextProvider } from 'react-i18next';

import { i18n } from 'config/i18n';

export const I18nProvider = ({ children }: PropsWithChildren): JSX.Element => (
  <ReactI18nextProvider defaultNS={'translation'} i18n={i18n}>
    {children}
  </ReactI18nextProvider>
);
