import CourseTable from '../../components/CourseTable';
import { fetchCourses } from '../../api/queries';
import { useQuery } from '@tanstack/react-query';
import { PowerIcon } from '@heroicons/react/24/solid';
import { useNavigate } from 'react-router-dom';
import AddModal from '../../components/AddModal';

const AdminDashboard = () => {
  const { isLoading, isError, data } = useQuery({
    queryKey: ['courses'],
    queryFn: fetchCourses,
  });

  const navigate = useNavigate();

  const logout = async () => {
    navigate('/admin');
  };

  return (
    <div className='glassmorph p-2 h-full w-full'>
      <div className='bg-gradient-to-r from-[#690f49] to-[#b5197e] flex items-center justify-between rounded-md p-2'>
        <label
          htmlFor='my-modal-3'
          className='bg-white/50 cursor-pointer transition ease-out hover:bg-[#e6e6e6] py-2 px-4 font-medium rounded-md text-sm uppercase tracking-widest outline-none'
        >
          New Course
        </label>

        <button
          onClick={logout}
          className='bg-white/50 transition ease-out hover:bg-[#e6e6e6] p-2 rounded-full'
        >
          <PowerIcon className='h-5 w-5' />
        </button>
      </div>

      {isLoading ? (
        <h1>Loading...</h1>
      ) : isError ? (
        <h1>Some Error Occurred!</h1>
      ) : (
        <CourseTable courses={data?.courses} />
      )}

      <AddModal />
    </div>
  );
};
export default AdminDashboard;
