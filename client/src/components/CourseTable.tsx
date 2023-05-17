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
};
const CourseTable = ({ courses }: Props) => {
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
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};
export default CourseTable;
