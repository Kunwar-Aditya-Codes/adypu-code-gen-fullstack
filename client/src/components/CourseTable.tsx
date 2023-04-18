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
    <div className='bg-gradient-to-r from-[#690f49] to-[#b5197e] p-2 mt-8 rounded-md '>
      <table className='table w-full text-center'>
        <thead className=''>
          <tr className='border-b-2 border-white'>
            <th className='px-4 py-4 md:text-base tracking-wide'>Code</th>
            <th className='px-4 py-4 md:text-base tracking-wide'>Subject</th>
            <th className='px-4 py-4 md:text-base tracking-wide'>Branch</th>
            <th className='px-4 py-4 md:text-base tracking-wide'>Year</th>
            <th className='px-4 py-4 md:text-base tracking-wide'>Semester</th>
          </tr>

          {courses.map((course) => (
            <tr key={course._id} className=''>
              <td className='px-4 py-2 md:text-base font-normal'>
                {course.code}
              </td>
              <td className='px-4 py-2 md:text-base font-normal'>
                {course.subject}
              </td>
              <td className=' px-4 py-2 md:text-base font-normal'>
                {course.branch}
              </td>
              <td className=' px-4 py-2 md:text-base font-normal'>
                {course.year}
              </td>
              <td className=' px-4 py-2 md:text-base font-normal'>
                {course.semester}
              </td>
            </tr>
          ))}
        </thead>
      </table>
    </div>
  );
};
export default CourseTable;
