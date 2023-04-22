import CourseTable from '../../components/CourseTable';
import { fetchCourses } from '../../api/queries';
import { useQuery } from '@tanstack/react-query';
import { PowerIcon } from '@heroicons/react/24/solid';
import { useNavigate } from 'react-router-dom';
import AddModal from '../../components/AddModal';
import { useState } from 'react';

const AdminDashboard = () => {
  const [searchInput, setSearchInput] = useState<string>('');

  const { isLoading, isError, data } = useQuery({
    queryKey: ['courses'],
    queryFn: fetchCourses,
  });

  const navigate = useNavigate();

  const logout = async () => {
    navigate('/admin');
  };

  const searchFilteredData = data?.courses.filter((course: any) => {
    const result =
      searchInput === ''
        ? course
        : course.subject.toLowerCase().includes(searchInput.toLowerCase());

    return result;
  });

  return (
    <div className='glassmorph p-2 h-full w-full'>
      <div className='bg-transparent flex items-center justify-between rounded-md p-2'>
        <label
          htmlFor='my-modal-3'
          className='bg-[#0069d9] text-white cursor-pointer transition ease-out hover:bg-[#0069d9]/50 py-3 px-4 font-medium rounded-md text-sm uppercase tracking-widest outline-none'
        >
          + New Course
        </label>

        <div className='flex items-center flex-[0.8] justify-end space-x-6'>
          {/* Filter Bar */}
          <input
            value={searchInput}
            onChange={(e) => setSearchInput(e.target.value)}
            type='text'
            placeholder='Search Course'
            className='bg-white/50 w-full md:w-[40%] text-black shadow-lg  rounded-md p-2 outline-none placeholder:text-slate-700'
          />
          <button
            onClick={logout}
            className='bg-white/50 shadow-lg transition ease-out hover:bg-[#e6e6e6] p-2 rounded-full'
          >
            <PowerIcon className='h-5 w-5' />
          </button>
        </div>
      </div>

      {isLoading ? (
        <h1>Loading...</h1>
      ) : isError ? (
        <h1>Some Error Occurred!</h1>
      ) : (
        <CourseTable
          courses={
            searchFilteredData?.length !== 0
              ? searchFilteredData
              : data?.courses
          }
        />
      )}

      <AddModal course={data?.courses} />
    </div>
  );
};
export default AdminDashboard;
