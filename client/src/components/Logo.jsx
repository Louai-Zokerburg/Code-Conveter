import React from 'react';

import { IoIosClose } from 'react-icons/io';

import logoIcon from '../assets/images/logo_icon.svg';

const Logo = ({ isOpen = true }) => {
  return (
    <div className='w-full h-[60px] flex justify-start items-center py-3 px-4 border-b-2 border-border_color_light dark:border-border_color_dark text-text_color_light dark:text-text_color_dark'>
      <img src={logoIcon} alt='logo icon' className='mr-6 w-[28px]' />

      <h1 className='text-text_color_light dark:text-text_color_dark text-xl lg:text-2xl font-semibold'>
        CodeVerter
      </h1>

      {isOpen && (
        <button className='ml-auto p-[2px] text-3xl lg:hidden'>
          <IoIosClose />
        </button>
      )}
    </div>
  );
};

export default Logo;
