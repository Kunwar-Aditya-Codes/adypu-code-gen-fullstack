import axios from './axios';

export const fetchCourses = async () => {
  const { data } = await axios.get('/courses/fetch');
  return data;
};

export const searchCourses = async (subject: string) => {
  const { data } = await axios.get('/courses/search', {
    params: {
      subject,
    },
  });

  return data;
};
