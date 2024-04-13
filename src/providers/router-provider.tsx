import { RouterProvider } from 'react-router-dom';

import { router } from 'routes';

export const BrowserRouter = (): JSX.Element => <RouterProvider router={router} />;
