import { useQuery } from '@tanstack/react-query';
import { fetchCourses } from '../../api/queries';
import CourseTable from '../../components/CourseTable';
import { PowerIcon } from '@heroicons/react/24/solid';
import { useNavigate } from 'react-router-dom';
import useSearchFilter from '../../hooks/useSearchFilter';
import { useState } from 'react';

const StudentDashboard = () => {
  const [searchInput, setSearchInput] = useState<string>('');

  const { isLoading, isError, data } = useQuery({
    queryKey: ['courses'],
    queryFn: fetchCourses,
    refetchOnWindowFocus: false,
  });

  const navigate = useNavigate();

  const logout = async () => {
    navigate('/student');
  };

  const searchFilteredData = useSearchFilter({
    course: data?.courses,
    searchInput,
  });

  return (
    <div className='glassmorph p-2 h-full flex flex-col w-full'>
      <div className='bg-transparent flex items-center justify-between space-x-4 rounded-md p-2'>
        <input
          value={searchInput}
          onChange={(e) => setSearchInput(e.target.value)}
          type='text'
          placeholder='Search Course'
          className='bg-white/70 w-full md:w-[40%] text-black shadow-lg  rounded-md p-2 outline-none placeholder:text-slate-700'
        />
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
        <CourseTable
          courses={searchInput === '' ? data?.courses : searchFilteredData}
        />
      )}
    </div>
  );
};
export default StudentDashboard;
