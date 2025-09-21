import { Outlet, useRouteError } from 'react-router';
import Loadingbar from './Loadingbar';
import ErrorDisplay from './ErrorDisplay';
import useTheme from '@/hooks/useTheme';

const Main = () => {
  // Handle theme change when the first page loaded hook
  useTheme();
  const error = useRouteError();

  if (error) {
    console.error(error);
    return (
      <main className='h-screen w-screen flex flex-col items-center justify-center bg-center bg-cover'>
        <ErrorDisplay error={error} />
      </main>
    );
  }
  return (
    <div className='h-screen w-screen'>
      <Loadingbar />
      <Outlet />
    </div>
  );
};

export default Main;
