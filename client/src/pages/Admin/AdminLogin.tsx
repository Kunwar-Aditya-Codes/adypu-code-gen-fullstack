import { Link } from 'react-router-dom';
import logo from '../../assets/logo.jpg';

const AdminLogin = () => {
  return (
    <div className='glassmorph p-2 w-full lg:w-[45%] space-y-6'>
      <div className='bg-white rounded-md p-1 w-full '>
        <img
          src={logo}
          alt='Adypu Logo'
          className='rounded-md h-[8rem] w-auto object-contain mx-auto'
        />
      </div>
      <form className='flex flex-col rounded-md justify-items-center space-y-6 bg-gradient-to-r from-[#690f49] to-[#b5197e] p-4'>
        <input
          type='email'
          autoComplete={'off'}
          placeholder='Enter admin email!'
          autoFocus
          className='px-2 py-3 text-white focus:border-b-2 outline-none  rounded-md bg-white/25  placeholder:text-slate-200'
        />
        <input
          type='password'
          autoComplete={'off'}
          placeholder='Enter admin password!'
          className='px-2 py-3 text-white focus:border-b-2 outline-none  rounded-md bg-white/25  placeholder:text-slate-200'
        />

        <button className='bg-white py-3 rounded-md text-lg uppercase tracking-widest'>
          Login
        </button>

        <Link to='/' className='w-fit mx-auto'>
          <p className=' text-xs  underline text-slate-300 underline-offset-4'>
            Go to home
          </p>
        </Link>
      </form>
    </div>
  );
};
export default AdminLogin;
