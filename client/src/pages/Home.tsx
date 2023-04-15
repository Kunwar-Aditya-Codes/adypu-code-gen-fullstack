import logo from '../assets/logo.jpg';

const Home = () => {
  return (
    <div className='glassmorph w-full lg:w-[65%] h-full mx-auto rounded-md p-2'>
      <div className='bg-white rounded-md p-1  '>
        <img
          src={logo}
          alt='Adypu Logo'
          className='rounded-md h-[8rem] w-auto object-contain mx-auto'
        />
      </div>
    </div>
  );
};
export default Home;
