import CourseTable from '../../components/CourseTable';
import { fetchCourses } from '../../api/queries';
import { useQuery } from '@tanstack/react-query';

const AdminDashboard = () => {
  const { isLoading, isError, data } = useQuery({
    queryKey: ['todos'],
    queryFn: fetchCourses,
  });

  return (
    <div className='glassmorph p-2 h-full w-full'>
      <div className='bg-gradient-to-r from-[#690f49] to-[#b5197e] rounded-md p-2'>
        <button
          type='submit'
          className='bg-[#e6e6e6] py-2 px-4 font-medium rounded-md text-sm uppercase tracking-widest outline-none'
        >
          New Code
        </button>
      </div>

      {isLoading ? (
        <h1>Loading...</h1>
      ) : isError ? (
        <h1>Some Error Occurred!</h1>
      ) : (
        <CourseTable courses={data?.courses} />
      )}
    </div>
  );
};
export default AdminDashboard;
