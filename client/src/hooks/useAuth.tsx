import { useContext } from 'react';
import AuthContext from '../context/AuthProvider';
import jwtDecode from 'jwt-decode';

const useAuth = () => {
  const { auth, setAuth, persist, setPersist } = useContext<any>(AuthContext);

  let role = '';

  if (auth?.accessToken) {
    const decodedToken: any = jwtDecode(auth.accessToken);
    role = decodedToken.role;
  }

  return { auth, setAuth, role, persist, setPersist };
};
export default useAuth;
