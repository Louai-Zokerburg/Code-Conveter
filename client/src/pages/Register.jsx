import React from 'react';
import { useNavigate } from 'react-router-dom';

import { From } from '../components';

import authPageImg from '../assets/images/auth_page_img.svg';

const Register = () => {
  const navigate = useNavigate();
  return (
    <section className='w-full h-screen flex items-start bg-white'>
      <div className='w-[65%] h-screen hidden lg:block overflow-hidden bg-main_color_dark'>
        <img
          src={authPageImg}
          alt='login/registration page image'
          className='w-full h-full'
        />
      </div>
      <div className='w-full lg:w-[35%] h-screen flex flex-col justify-center items-left p-8'>
        <From isLogin={false} />
        <p className='text-xs lg:text-sm text-text_color_light mt-4'>
          Already have account?{' '}
          <span
            className='text-primary_color cursor-pointer'
            onClick={() => navigate('/login')}
          >
            Login
          </span>
        </p>
      </div>
    </section>
  );
};

export default Register;
