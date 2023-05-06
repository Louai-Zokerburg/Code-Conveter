import React, { useState } from 'react';

import { BiHide, BiShow } from 'react-icons/bi';

const FromRow = ({ isPass, label, type, placeholder, value, handleChange }) => {
  const [showContent, setShowContent] = useState(false);
  return (
    <div className='w-full mb-4'>
      <h4 className='text-text_color_light text-sm lg:text-lg mb-2 font-semibold'>
        {label}
      </h4>

      <div className='w-full flex justify-between px-4 lg:px-6 items-center bg-input_bg_color rounded-lg overflow-hidden'>
        <input
          type={isPass ? (showContent ? 'text' : 'password') : type}
          className='w-full py-2 lg:py-4 text-sm lg:text-lg text-text_color_light placeholder:text-gray-400 font-semibold bg-transparent outline-none'
          value={value}
          onChange={(e) => handleChange(e.target.value)}
          placeholder={placeholder}
        />

        {isPass && (
          <div
            onClick={() => setShowContent(!showContent)}
            className='cursor-pointer'
          >
            {showContent ? <BiShow /> : <BiHide />}
          </div>
        )}
      </div>
    </div>
  );
};

export default FromRow;
