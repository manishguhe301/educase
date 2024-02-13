import { TextField } from '@mui/material';
import { useState } from 'react';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import { useNavigate } from 'react-router-dom';

const SignUp = () => {
  const [name, setName] = useState('Marry Doe');
  const navigate = useNavigate();

  return (
    <div className='flex flex-col justify-between h-full px-5'>
      <div>
        <h1 className='text-[#1D2226] text-[28px] font-semibold mt-10 opacity-100 mb-[30px]'>
          Create your
          <br /> PopX account
        </h1>
        <div className='flex flex-col gap-5'>
          <TextField
            id='outlined-basic'
            className='signUp'
            type='text'
            label='Full Name*'
            variant='outlined'
            sx={{ width: '100%' }}
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder='Enter Full Name*'
          />
          <TextField
            id='outlined-basic'
            className='signUp'
            type='text'
            label='Phone number*'
            variant='outlined'
            sx={{ width: '100%' }}
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder='Enter Phone Number'
          />{' '}
          <TextField
            id='outlined-basic'
            className='signUp'
            type='text'
            label='Email Address'
            variant='outlined'
            sx={{ width: '100%' }}
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder='Enter email address'
          />{' '}
          <TextField
            id='outlined-basic'
            className='signUp'
            type='text'
            label='Password *'
            variant='outlined'
            sx={{ width: '100%' }}
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder='Enter Password'
          />{' '}
          <TextField
            id='outlined-basic'
            className='signUp'
            type='text'
            label='Company name'
            variant='outlined'
            sx={{ width: '100%' }}
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder='Enter Company name'
          />
          <FormControl>
            <p className='text-[13px] text-[#1D2226]'>Are you an Agency?*</p>
            <RadioGroup
              row
              aria-labelledby='demo-row-radio-buttons-group-label'
              name='row-radio-buttons-group'
              defaultValue='yes'
            >
              <FormControlLabel
                value='yes'
                control={<Radio size='small' />}
                label='Yes'
              />
              <FormControlLabel
                value='no'
                control={<Radio size='small' />}
                label='No'
              />
            </RadioGroup>
          </FormControl>
        </div>
      </div>
      <button
        className='w-full h-[46px] rounded-md bg-[#6C25FF] text-base font-medium text-center opacity-100 text-[#fff]'
        onClick={() => {
          navigate('/account-settings');
        }}
      >
        Create Account
      </button>
    </div>
  );
};

export default SignUp;
