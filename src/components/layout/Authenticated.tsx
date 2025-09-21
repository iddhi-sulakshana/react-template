import { useAuthStore } from '@/stores/AuthStore';
import { Navigate, Outlet } from 'react-router';

export default function Authenticated() {
  const { token } = useAuthStore();

  return token ? <Outlet /> : <Navigate to='/sign-in' replace />;
}
