import axios from './axios';

export const fetchCourses = async () => {
  const { data } = await axios.get('/courses/fetch');

  return data;
};


