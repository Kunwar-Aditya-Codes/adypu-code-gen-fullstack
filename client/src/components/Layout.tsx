import { Outlet } from 'react-router-dom';

const Layout = () => {
  return (
    <div className='flex overflow-hidden bg-no-repeat bg-center items-center justify-center p-4 h-screen bg-[url("./assets/back.webp")] bg-black/20 bg-blend-color '>
      <div className='max-h-[45rem] flex items-center justify-center h-full max-w-[90rem] w-full'>
        <Outlet />
      </div>
    </div>
  );
};
export default Layout;
