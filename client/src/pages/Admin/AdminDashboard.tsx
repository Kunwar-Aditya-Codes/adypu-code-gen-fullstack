import CourseTable from '../../components/CourseTable';
import { fetchCourses } from '../../api/queries';
import { useQuery } from '@tanstack/react-query';
import { PowerIcon } from '@heroicons/react/24/solid';
import { useNavigate } from 'react-router-dom';
import AddModal from '../../components/AddModal';
import { useState } from 'react';
import useSearchFilter from '../../hooks/useSearchFilter';
import useLogout from '../../hooks/useLogout';

const AdminDashboard = () => {
  const [searchInput, setSearchInput] = useState<string>('');

  const { isLoading, isError, data } = useQuery({
    queryKey: ['courses'],
    queryFn: fetchCourses,
  });

  const navigate = useNavigate();
  const logoutUser = useLogout();

  const logout = async () => {
    await logoutUser();
    navigate('/admin');
  };

  const searchFilteredData = useSearchFilter({
    course: data?.courses,
    searchInput,
  });

  return (
    <div className='glassmorph p-2 h-full w-full'>
      {/* Navigation */}
      <div className=' flex flex-col md:flex-row md:space-x-4 md:items-center md:space-y-0 items-start space-y-4 rounded-md p-2'>
        {/* 1st */}
        <div className='flex items-center md:flex-[0.15] justify-between w-full'>
          <label
            htmlFor='my-modal-3'
            className='bg-[#0069d9] text-white cursor-pointer transition ease-out hover:bg-[#0069d9]/50 py-3 px-4 font-medium rounded-md text-sm uppercase tracking-widest outline-none'
          >
            + New Course
          </label>
        </div>

        {/* 2nd */}
        <div className='flex flex-col space-y-3 md:space-x-4 md:space-y-0 md:flex-row md:items-center md:justify-end  w-full md:flex-[0.85] '>
          {/* Search Bar */}
          <div className='flex items-center  space-x-4 w-full md:w-[40%] '>
            <input
              value={searchInput}
              onChange={(e) => setSearchInput(e.target.value)}
              type='text'
              placeholder='Search Course'
              className='bg-white/70 w-full  text-black shadow-lg  rounded-md p-2 outline-none placeholder:text-slate-700'
            />

            <button
              onClick={logout}
              className='bg-white/70 shadow-lg transition ease-out hover:bg-white p-2 rounded-full'
            >
              <PowerIcon className='h-5 w-5' />
            </button>
          </div>
        </div>
      </div>

      {/* Table */}
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
          isAdmin={true}
        />
      )}

      <AddModal course={data?.courses} />
    </div>
  );
};
export default AdminDashboard;
