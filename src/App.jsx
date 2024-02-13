import { Route, Routes } from 'react-router-dom';
import LandingPage from './pages/LandingPage';
import SignUp from './pages/SignUp';
import SignIn from './pages/SignIn';
import AccountSettings from './pages/AccounSettings';
import ScrollToTop from './components/ScrollToTop';

const App = () => {
  return (
    <div className='flex justify-center '>
      <div className='flex flex-col w-[375px] h-[812px] bg-[#F7F8F9] opacity-100  pb-[41px] border-[1px] border-gray-300'>
        <ScrollToTop />
        <Routes>
          <Route exact path='/' element={<LandingPage />} />
          <Route path='/sign-up' element={<SignUp />} />
          <Route path='/sign-in' element={<SignIn />} />
          <Route path='/account-settings' element={<AccountSettings />} />
        </Routes>
      </div>
    </div>
  );
};

export default App;
