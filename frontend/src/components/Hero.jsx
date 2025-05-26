const Hero = () => {
  return (
    <div className='py-10 bg-gray-100'>
      <div className='container mx-auto flex justify-center'>
        <div className='bg-white p-8 rounded-lg shadow w-full max-w-2xl text-center'>
          <h1 className='text-3xl font-bold mb-4'>MERN Authentication</h1>
          <p className='text-gray-600 mb-6'>
            MERN authentication that stores JWT in an HTTP-Only cookie. It also uses Redux Toolkit for State management and Tailwind CSS framework.
          </p>
          <div className='flex justify-center gap-4'>
            <a
              href='/login'
              className='bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded'
            >
              Sign In
            </a>
            <a
              href='/register'
              className='bg-gray-600 hover:bg-gray-700 text-white font-semibold py-2 px-4 rounded'
            >
              Sign Up
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;