import { Outlet } from 'react-router-dom';

const Layout = () => {
  return (
    <div className='overflow-hidden bg-no-repeat bg-center  h-screen bg-[url("./assets/back.webp")] bg-black/20 bg-blend-color'>
      <div className='flex flex-col  h-full  '>
        <div className='mb-8 flex-grow p-4  flex items-center justify-center h-full max-w-[98rem] w-full'>
          <Outlet />
        </div>

        <footer className='text-slate-200 text-sm font-light text-center bg-white/30 backdrop-blur-md  px-4 py-3'>
          <p className=''>
            &copy; {new Date().getFullYear()} All Rights Reserved to
            <span className='font-medium text-white ml-1'>
              Ajeenkya D.Y.Patil University
            </span>
            .
          </p>
          <p>
            Design & Developed by
            <span className='font-medium text-white ml-1'>Basab Nath</span> &
            <span className='font-medium ml-1 text-white'>
              <a
                href='https://www.linkedin.com/in/kunwar-aditya-117633191/'
                target='_blank'
                rel='noreferrer'
              >
                Kunwar Aditya
              </a>
            </span>
            .
          </p>
        </footer>
      </div>
    </div>
  );
};
export default Layout;
