import { type RouteObject } from 'react-router-dom';

import { ErrorBoundary } from 'components';
import { LazyComponentType } from 'types';

export const homeRoutes: RouteObject[] = [
  {
    path: '/',
    // TODO: need to create lazy wrapper
    lazy: async (): LazyComponentType => {
      const HomePage = (await import('./home-page/home-page')).default;

      return {
        element: <HomePage />,
      };
    },
    errorElement: <ErrorBoundary />,
  },
];
