import logo from '../assets/logo.jpg';

const Home = () => {
  return (
    <div className='glassmorph shadow-md w-full lg:w-[65%] space-y-4 h-full mx-auto rounded-md p-2'>
      <div className='bg-white rounded-md p-1  '>
        <img
          src={logo}
          alt='Adypu Logo'
          className='rounded-md h-[8rem] w-auto object-contain mx-auto'
        />
      </div>
      <h1 className='text-center text-white rounded-md uppercase py-3 text-2xl font-medium bg-gradient-to-r from-[#690f49] to-[#b5197e]'>
        soe course code generator
      </h1>
    </div>
  );
};
export default Home;
