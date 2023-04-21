type Course = {
  branch: string;
  code: string;
  semester: number;
  subject: string;
  year: number;
  _id: string;
};

type Props = {
  courses: Course[];
};
const CourseTable = ({ courses }: Props) => {
  return (
    <div className='mt-4 '>
      <table className='w-full table-auto text-center'>
        <thead className=''>
          <tr className='bg-[#00b8a3] text-white'>
            <th className='px-4 py-4 md:text-base tracking-wide '>Code</th>
            <th className='px-4 py-4 md:text-base tracking-wide'>Subject</th>
            <th className='px-4 py-4 md:text-base tracking-wide'>Branch</th>
            <th className='px-4 py-4 md:text-base tracking-wide'>Year</th>
            <th className='px-4 py-4 md:text-base tracking-wide  '>Semester</th>
          </tr>
        </thead>

        <tbody className=''>
          {courses.map((course) => (
            <tr
              key={course._id}
              className=' bg-[#f5fcfb] odd:bg-slate-200 text-black '
            >
              <td className='px-4 py-2 md:text-base   font-normal'>
                {course.code}
              </td>
              <td className='px-4 py-2 md:text-base font-normal'>
                {course.subject}
              </td>
              <td className='px-4 py-2 md:text-base font-normal'>
                {course.branch}
              </td>
              <td className='px-4 py-2 md:text-base font-normal'>
                {course.year}
              </td>
              <td className='px-4 py-2 md:text-base font-normal'>
                {course.semester}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};
export default CourseTable;
