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

export const createCourse = async (inputData: any) => {
  const { data } = await axios.post('/courses', inputData, {
    headers: {
      'Content-Type': 'application/json',
    },
  });

  return data;
};
