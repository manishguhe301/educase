import avatar from '../../public/avatar.png';
import cam from '../../public/cam.png';

const AccountSettings = () => {
  return (
    <div className='flex flex-col h-full justify-between'>
      <div>
        <div className='h-[68px] bg-[#fff] w-full px-[15px] flex justify-start items-center' style={{ boxShadow: '0px 3px 6px #00000007' }}>
          <h1 className='text-lg font-medium text-[#1D2226] capitalize opacity-100'>
            Account Settings
          </h1>
        </div>
        <div className='py-[30px] px-5 flex justify-start items-start gap-5'>
          <div style={{ position: 'relative' }}>
            <img
              src={avatar}
              alt='avatar'
              className='h-[76px] w-[76px] opacity-100'
            />
            <img
              src={cam}
              alt='cam'
              className='w-[21px] h-[21px]'
              style={{
                position: 'absolute',
                bottom: '0',
                left: '50px',
              }}
            />
          </div>
          <div className='flex flex-col gap-[6px]'>
            <p className='text-[#1D2226] text-[15px] font-medium capitalize opacity-100'>
              Marry Doe
            </p>
            <p className='text-sm text-[#1D2226] opacity-100 capitalize'>
              Marry@Gmail.Com
            </p>
          </div>
        </div>
        <div className='pl-5 '>
          <p className='text-sm font-normal capitalize text-[#1D2226] opacity-100'>
            Lorem Ipsum Dolor Sit Amet, Consetetur Sadipscing Elitr, Sed Diam
            Nonumy Eirmod Tempor Invidunt Ut Labore Et Dolore Magna Aliquyam
            Erat, Sed Diam
          </p>
        </div>
        <div className='mt-5 border-[1px] border-gray-300 border-dashed' />
      </div>
      <div className='mt-5 border-[1px] border-gray-300 border-dashed mb-9' />
    </div>
  );
};

export default AccountSettings;
