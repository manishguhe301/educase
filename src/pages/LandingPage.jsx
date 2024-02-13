import { useNavigate } from 'react-router-dom';

const LandingPage = () => {
  const navigate = useNavigate();
  return (
    <div className='flex flex-col justify-end h-full px-5'>
      <h1 className='text-[28px] font-medium mb-[10px]'>Welcome to PopX</h1>
      <p className='text-lg font-normal text-[#1D2226] opacity-60 '>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit,
      </p>
      <div className='mt-7 flex flex-col items-start gap-[10px]'>
        <button
          className='w-full h-[46px] rounded-md bg-[#6C25FF] text-base font-medium text-center opacity-100 text-[#fff]'
          onClick={() => navigate('/sign-up')}
        >
          Create Account
        </button>
        <button
          className='w-full h-[46px] rounded-md bg-[#6C25FF4B] text-base font-medium text-center opacity-100 text-[#1D2226]'
          onClick={() => navigate('/sign-in')}
        >
          Already Registered? Login
        </button>
      </div>
    </div>
  );
};

export default LandingPage;
