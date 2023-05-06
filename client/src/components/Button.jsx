import React from 'react';

const Button = ({ text, handleClick }) => {
  return (
    <button
      type='submit'
      onClick={handleClick}
      className='mt-4 w-full py-2 lg:py-4 rounded-lg bg-primary_color hover:bg-primary_color_hover cursor-pointer border-none text-lg lg:text-xl font-semibold'
    >
      {text}
    </button>
  );
};

export default Button;
