import { useQuery } from '@tanstack/react-query';
import { fetchCourses } from '../../api/queries';
import CourseTable from '../../components/CourseTable';
import { PowerIcon } from '@heroicons/react/24/solid';
import { useNavigate } from 'react-router-dom';

const StudentDashboard = () => {
  const { isLoading, isError, data } = useQuery({
    queryKey: ['courses'],
    queryFn: fetchCourses,
    refetchOnWindowFocus: false,
  });

  const navigate = useNavigate();

  const logout = async () => {
    navigate('/student');
  };

  return (
    <div className='glassmorph p-2 h-full flex flex-col w-full'>
      <div className='bg-transparent flex items-center justify-end rounded-md p-2'>
        <button
          onClick={logout}
          className='bg-white/50 transition ease-out hover:bg-[#e6e6e6] p-2 rounded-full'
        >
          <PowerIcon className='h-5 w-5' />
        </button>
      </div>

      {isLoading ? (
        <div className='flex items-center justify-center flex-grow h-max w-full'>
          <h1 className='text-4xl animate-pulse text-center font-bold uppercase tracking-wider'>
            Loading...
          </h1>
        </div>
      ) : isError ? (
        <div className='flex items-center justify-center h-full w-full'>
          <h1 className='text-4xl font-bold text-center uppercase tracking-wider'>
            Some Error Occurred!
          </h1>
        </div>
      ) : (
        <CourseTable courses={data?.courses} />
      )}
    </div>
  );
};
export default StudentDashboard;
