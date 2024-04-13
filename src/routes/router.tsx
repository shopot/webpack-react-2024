import { RedirectFunction, createBrowserRouter, redirect } from 'react-router-dom';

import { ErrorBoundary, GeneralLayout } from 'components';
import { homeRoutes } from 'features/home';
import { NotFoundPage } from 'features/misc';

type RedirectType = ReturnType<RedirectFunction>;

export const router = createBrowserRouter([
  {
    errorElement: <ErrorBoundary />,
    children: [
      {
        element: <GeneralLayout />,
        children: [...homeRoutes],
      },
      {
        path: '*',
        loader: (): RedirectType => redirect('/404'),
      },
      {
        path: '/404',
        element: <NotFoundPage />,
      },
    ],
  },
]);
