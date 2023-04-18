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

      <div className='bg-gradient-to-r from-[#690f49] to-[#b5197e] text-white rounded-md'>
        <h1 className='text-center  rounded-md uppercase py-3 text-2xl font-medium '>
          soe course code generator
        </h1>

        <p className='text-xs tracking-wider text-slate-200 rounded-md text-justify p-3'>
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

      <Link to='/student'>
        <button className='bg-white/70 uppercase tracking-widest font-medium px-8 py-3 hover:bg-[#901464] transition ease-out duration-[250ms] hover:text-white text-lg text-center rounded-md'>
          Login
        </button>
      </Link>
    </div>
  );
};
export default Home;
