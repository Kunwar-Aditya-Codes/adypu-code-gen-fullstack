import { Link, useLocation, useNavigate } from 'react-router-dom';
import logo from '../../assets/logo.jpg';
import { useState } from 'react';
import toast from 'react-hot-toast';
import { privateAxios } from '../../api/axios';
import useAuth from '../../hooks/useAuth';

const AdminLogin = () => {
  const { setAuth } = useAuth();

  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');

  const navigate = useNavigate();
  const location = useLocation();
  const from = location?.state?.from?.pathname || '/admin/dashboard';

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    toast.loading('Logging in...', {
      id: 'admin',
    });

    if (!email || !password) {
      toast.error('All fields required!', {
        id: 'admin',
      });
      return;
    }

    if (!email.includes('adypu.edu.in')) {
      toast.error('Invalid format!', {
        id: 'admin',
      });
      return;
    }

    try {
      const response: any = await privateAxios('/auth/admin/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        data: {
          email,
          password,
        },
      });

      if (response?.status === 200) {
        setAuth({
          accessToken: response?.data?.accessToken,
        });

        navigate(from, { replace: true });
      }

      toast.success('Success', {
        id: 'admin',
      });
    } catch (error) {
      console.log(error);
      toast.error('Some internal error occurred!', {
        id: 'admin',
      });
    }
  };

  return (
    <div className='glassmorph p-2 w-full lg:w-[45%] space-y-6'>
      <div className='bg-white rounded-md p-1 w-full '>
        <img
          src={logo}
          alt='Adypu Logo'
          className='rounded-md h-[8rem] w-auto object-contain mx-auto'
        />
      </div>
      <form
        onSubmit={handleSubmit}
        className='flex flex-col rounded-md justify-items-center space-y-6 bg-[#00b8a3] p-4'
      >
        <input
          type='email'
          autoComplete={'off'}
          value={email}
          name='email'
          placeholder='Enter admin email!'
          onChange={(e) => setEmail(e.target.value)}
          autoFocus
          className='px-2  py-3 text-slate-900  focus:border-b-2 outline-none  rounded-md bg-white/25 tracking-wide text-lg  placeholder:text-slate-900'
        />
        <input
          type='password'
          autoComplete={'off'}
          value={password}
          name='password'
          onChange={(e) => setPassword(e.target.value)}
          placeholder='Enter admin password!'
          className='px-2  py-3 text-slate-900  focus:border-b-2 outline-none  rounded-md bg-white/20 tracking-wide text-lg  placeholder:text-slate-900'
        />

        <button
          type='submit'
          className='bg-white/70 hover:bg-white transition ease-out font-medium  py-3 rounded-md text-lg uppercase tracking-widest outline-none'
        >
          Login
        </button>

        <Link to='/' className='w-fit mx-auto'>
          <p className=' text-sm  underline text-slate-700 font-medium underline-offset-4'>
            Go to home
          </p>
        </Link>
      </form>
    </div>
  );
};
export default AdminLogin;
