import ProtectedItem from '@/components/layout/ProtectedItem';
import { Button } from '@/components/ui/button';
import { useAuthStore } from '@/stores/AuthStore';
import { Navigate, NavLink, Outlet } from 'react-router';

export default function Dashboard() {
  const { logout, token } = useAuthStore();

  if (!token) return <Navigate to='/sign-in' replace />;
  return (
    <div className='h-full'>
      <h1>Dashboard</h1>
      <Button onClick={logout}>Sign out</Button>
      <ProtectedItem roles={['admin']}>
        <NavLink to='/dashboard/admin-only'>Admin Only</NavLink>
      </ProtectedItem>
      <NavLink to='/dashboard/anyone'>Anyone</NavLink>
      <div className='bg-accent h-full w-full'>
        <Outlet />
      </div>
    </div>
  );
}
