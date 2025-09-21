import Main from '@/components/layout/Main';
import NotFound from '@/components/layout/NotFound';
import Common from '@/components/layout/Common';
import { createBrowserRouter } from 'react-router';
import Home from '@/pages/Home';
import Authenticated from '@/components/layout/Authenticated';
import Dashboard from '@/pages/Dashboard';

export default createBrowserRouter([
  {
    path: '/',
    element: <Main />,
    errorElement: <Main />,
    children: [
      // Handle Common Pages doesent require any authentication
      {
        path: '/',
        element: <Common />,
        children: [
          {
            index: true,
            element: <Home />,
          },
        ],
      },
      // Handle Pages that require authentication
      {
        path: '/dashboard/*',
        element: <Authenticated />,
        children: [
          {
            index: true,
            element: <Dashboard />,
          },
        ],
      },
      // Handle Pages that only unauthenticated users can access
      {
        path: '*',
        element: <NotFound />,
      },
    ],
  },
]);
