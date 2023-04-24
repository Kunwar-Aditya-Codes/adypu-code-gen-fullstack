import { Link } from 'react-router-dom';
import logo from '../assets/logo.jpg';

const Home = () => {
  return (
    <div className='glassmorph shadow-md w-full lg:w-[65%] space-y-4 flex flex-col items-center  mx-auto rounded-md p-4'>
      <div className='bg-white rounded-md p-1 w-full '>
        <img
          src={logo}
          alt='Adypu Logo'
          className='rounded-md h-[8rem] w-auto object-contain mx-auto'
        />
      </div>

      <div className='bg-[#00b8a3] text-slate-900 rounded-md'>
        <h1 className='text-center  rounded-md uppercase py-3 text-2xl font-medium '>
          soe course code generator
        </h1>

        <p className='text-sm tracking-wider text-slate-900  rounded-md text-justify p-3'>
          Subject code generator app is a tool designed to simplify the process
          of generating subject codes for educational institutions. It allows
          administrators and teachers to quickly create unique codes for each
          subject offered by the institution, which can be used for various
          purposes such as record-keeping, grading, and reporting. The app
          offers a user-friendly interface, customizable settings, and the
          ability to generate codes in various formats, making it a valuable
          tool for streamlining administrative tasks and improving overall
          efficiency in educational institutions.
        </p>
      </div>

      <Link
        to='/view-courses'
        className='bg-white/70  transition ease-out hover:bg-white px-4 py-3 uppercase tracking-wider rounded-md'
      >
        View Courses
      </Link>
    </div>
  );
};
export default Home;
