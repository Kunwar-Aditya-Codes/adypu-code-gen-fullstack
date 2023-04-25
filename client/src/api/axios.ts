import axios from 'axios';

const baseURL = 'http://localhost:5000/api/v1';
// const baseURL = 'https://adypu-code-generator.onrender.com/api/v1';

export default axios.create({
  baseURL,
});

export const privateAxios = axios.create({
  baseURL,
  withCredentials: true,
});
