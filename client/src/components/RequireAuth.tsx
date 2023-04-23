import { useLocation, Navigate, Outlet } from 'react-router-dom';
import useAuth from '../hooks/useAuth';

const RequireAuth = ({ role }: { role: string }) => {
  const { role: authRole } = useAuth();
  const location = useLocation();

  return authRole === role ? (
    <Outlet />
  ) : role === 'admin' ? (
    <Navigate to='/admin' state={{ from: location }} replace />
  ) : (
    <Navigate to='/student' state={{ from: location }} replace />
  );
};
export default RequireAuth;
