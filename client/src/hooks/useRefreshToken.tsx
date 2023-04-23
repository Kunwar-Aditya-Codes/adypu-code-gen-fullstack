import axios from '../api/axios';
import useAuth from './useAuth';

const useRefreshToken = () => {
  const { setAuth } = useAuth();

  const refreshToken = async () => {
    const response = await axios.get('/auth/refresh', {
      withCredentials: true,
    });

    if (response?.data?.accessToken) {
      setAuth((prev: any) => {
        return {
          ...prev,
          accessToken: response.data.accessToken,
        };
      });

      return response.data.accessToken;
    }
  };

  return refreshToken;
};

export default useRefreshToken;
