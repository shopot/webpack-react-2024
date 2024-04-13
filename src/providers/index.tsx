import { type JSX } from 'react';

import { withErrorBoundary } from 'react-error-boundary';

import { Loader } from 'components';
import { withSuspense } from 'lib/react';

import { I18nProvider } from './i18n-provider';
import { BrowserRouter } from './router-provider';

const Providers = (): JSX.Element => (
  <I18nProvider>
    <BrowserRouter />
  </I18nProvider>
);

const SuspendedProvider = withSuspense(Providers, {
  fallback: <Loader size="medium" />,
});

export const Provider = withErrorBoundary(SuspendedProvider, {
  fallbackRender: ({ error }: { error: Error }) => (
    <div>
      <p>Something went wrong:</p>
      <pre style={{ color: 'red' }}>{error.message}</pre>
    </div>
  ),
});
