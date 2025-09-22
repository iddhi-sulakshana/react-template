import { useAuthStore } from '@/stores/AuthStore';
import { useEffect } from 'react';

export default function useValidate() {
  const { token, logout } = useAuthStore();
  // const validateTokenHandler = handleValidateToken();
  useEffect(() => {
    if (!token) return;
    // Validate token handler using request sending to the backend
    // const data = await validateTokenHandler(token);
    const random = Math.random();
    if (random > 0.5) {
      logout();
    }
  }, [token, logout]);
}
