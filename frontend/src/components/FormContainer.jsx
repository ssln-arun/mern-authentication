const FormContainer = ({ children }) => {
  return (
    <div className='container mx-auto mt-10 flex justify-center'>
      <div className='w-full max-w-md bg-white shadow p-6 rounded'>
        {children}
      </div>
    </div>
  );
};

export default FormContainer;
