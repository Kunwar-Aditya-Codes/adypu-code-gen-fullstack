import { useMutation } from '@tanstack/react-query';
import useAxiosPrivate from '../hooks/useAxiosPrivate';
import { queryClient } from '../api/queryClient';
import { toast } from 'react-hot-toast';

type Course = {
  branch: string;
  code: string;
  semester: number;
  subject: string;
  year: number;
  _id: string;
  program: string;
  createdAt: string;
  college: string;
};

type Props = {
  courses: Course[];
  isAdmin: boolean;
};
const CourseTable = ({ courses, isAdmin }: Props) => {
  const axiosPrivate = useAxiosPrivate();

  const mutation = useMutation({
    mutationFn: async (id: string) =>
      await axiosPrivate.delete(`/courses`, {
        data: {
          id,
        },
        headers: {
          'Content-Type': 'application/json',
        },
      }),

    onSuccess: (data: any) => {
      queryClient.invalidateQueries({
        queryKey: ['courses'],
      });

      toast.success('Course Deleted Successfully!', {
        id: 'delete-course',
      });
    },

    onError: (error: any) => {
      console.log(error);
      toast.error('Error deleting course!', {
        id: 'delete-course',
      });
    },
  });

  const handleDelete = (id: string) => {
    mutation.mutate(id);
  };

  return (
    <div className='mt-4 max-h-[30rem] md:max-h-[34rem] overflow-hidden overflow-y-scroll overflow-x-scroll'>
      <table className='w-full table-auto  max-h-[10rem] text-center'>
        <thead className=''>
          <tr className='bg-[#00b8a3] text-xs sm:text-sm text-white'>
            <th className='px-4 py-4 md:text-base tracking-wide'>Created At</th>
            <th className='px-4 py-4 md:text-base tracking-wide '>Degree</th>
            <th className='px-4 py-4 md:text-base tracking-wide'>Program</th>
            <th className='px-4 py-4 md:text-base tracking-wide'>Course</th>
            <th className='px-4 py-4 md:text-base tracking-wide '>
              Course Code
            </th>
            <th className='px-4 py-4 md:text-base tracking-wide'>Year-Sem</th>
            {isAdmin && (
              <th className='px-4 py-4 md:text-base tracking-wide'>Action</th>
            )}
          </tr>
        </thead>

        <tbody className='text-xs sm:text-sm'>
          {courses.map((course) => (
            <tr
              key={course._id}
              className=' bg-[#f5fcfb] odd:bg-slate-200 text-black '
            >
              <td className='px-4 py-2 md:text-base font-normal'>
                {new Date(course.createdAt).toLocaleDateString('en-US', {
                  year: 'numeric',
                  month: 'short',
                  day: 'numeric',
                })}
                <br />
                {new Date(course.createdAt).toLocaleTimeString('en-US', {
                  hour: '2-digit',
                  minute: '2-digit',
                })}
              </td>

              <td className='px-4 py-2 md:text-base   font-normal'>
                {course.program}
              </td>
              <td className='px-4 py-2 md:text-base font-normal'>
                {course.branch}
              </td>
              <td className='px-4 py-2 md:text-base font-normal'>
                {course.subject}
              </td>
              <td className='px-4 py-2 md:text-base   font-normal'>
                {course.code}
              </td>

              <td className='px-4 py-2 md:text-base font-normal'>
                {course.year} year - {course.semester} sem
              </td>
              {isAdmin && (
                <td className='px-4 py-2 md:text-base font-normal'>
                  <button
                    onClick={() => handleDelete(course._id)}
                    className='bg-red-500 text-white px-2 py-1 rounded-md'
                  >
                    Delete
                  </button>
                </td>
              )}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};
export default CourseTable;
