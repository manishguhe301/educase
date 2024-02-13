import { useState } from 'react';
import TextField from '@mui/material/TextField';
import { useNavigate } from 'react-router-dom';

const SignIn = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();
  const isButtonDisabled = !email || !password;

  return (
    <div className='px-5'>
      <h1 className='text-[#1D2226] text-[28px] font-semibold mt-10 opacity-100 mb-[14px]'>
        Signin to your <br />
        PopX account
      </h1>
      <p className='text-[#1D2226] opacity-60 text-lg'>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit,
      </p>
      <div className='w-full mt-8 flex flex-col gap-[14px]'>
        <TextField
          id='outlined-basic'
          type='text'
          label='Email Address'
          variant='outlined'
          sx={{ width: '100%' }}
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder='Enter email address'
        />
        <TextField
          id='outlined-basic'
          type='text'
          label='Password'
          variant='outlined'
          sx={{ width: '100%' }}
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder='Enter password'
        />
        <button
          className={
            isButtonDisabled
              ? 'bg-[#CBCBCB] text-[#FFFFFF] w-full h-[46px] rounded-md text-base font-medium'
              : 'w-full h-[46px] text-base font-medium bg-[#6C25FF4B] text-[#1D2226] rounded-md'
          }
          disabled={isButtonDisabled}
          onClick={() => {
            navigate('/account-settings');
          }}
        >
          Login
        </button>
      </div>
    </div>
  );
};

export default SignIn;
