import React, { useState } from 'react';

import { BsTrash } from 'react-icons/bs';
import { MdOutlineDarkMode } from 'react-icons/md';
import ToggleButton from './ToggleButton';

const Settings = () => {
  const [isDark, setIsDark] = useState(true);

  const toggleTheme = () => {
    setIsDark(!isDark);
  };

  return (
    <ul className='w-full h-[calc(100%-60px-60%)] flex flex-col justify-start items-start list-none px-4 pt-4 border-b-2 border-border_color_light dark:border-border_color_dark overflow-y-scroll custom-scrollbar'>
      <h4 className='text-gray-600 dark:text-gray-400 mb-2'>SETTINGS</h4>

      <li className='w-full flex justify-between items-center rounded-lg mb-3 py-3 px-4 bg-btn_color_light dark:bg-btn_color_dark hover:bg-btn_hover_color_light dark:hover:bg-btn_hover_color_dark text-text_color_light dark:text-text_color_dark cursor-pointer duration-300'>
        <p className='flex justify-start items-center gap-x-2'>
          <BsTrash className='mr-2' />
          Clear History
        </p>
      </li>

      <li
        onClick={toggleTheme}
        className='w-full flex justify-between items-center rounded-lg mb-3 py-3 px-4 bg-btn_color_light dark:bg-btn_color_dark hover:bg-btn_hover_color_light dark:hover:bg-btn_hover_color_dark text-text_color_light dark:text-text_color_dark cursor-pointer duration-300'
      >
        <p className='flex justify-start items-center gap-x-2'>
          {' '}
          <MdOutlineDarkMode className='mr-2' /> Dark Mode
        </p>
        <ToggleButton isDark={isDark} />
      </li>

      <li className='w-full flex justify-center items-center rounded-lg mb-3 py-3 px-4 bg-danger_color hover:bg-danger_color_hover text-white cursor-pointer duration-300'>
        <p className='flex justify-start items-center gap-x-2'>Logout</p>
      </li>
    </ul>
  );
};

export default Settings;
