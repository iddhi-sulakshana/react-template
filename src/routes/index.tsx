import Main from '@/components/layout/Main';
import { createBrowserRouter } from 'react-router';

export default createBrowserRouter([
  {
    path: '/',
    element: <Main />,
    errorElement: <Main />,
    children: [],
  },
]);
