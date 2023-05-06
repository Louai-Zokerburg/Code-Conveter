import React from 'react';
import { BsTrash } from 'react-icons/bs';
import { RiArrowRightSFill } from 'react-icons/ri';
import { TbTransform } from 'react-icons/tb';

const HistoryItem = ({ sourLang, targetLang }) => {
  return (
    <li className='w-full flex justify-between items-center rounded-lg mb-3 py-3 px-4 bg-btn_color_light dark:bg-btn_color_dark hover:bg-btn_hover_color_light dark:hover:bg-btn_hover_color_dark text-text_color_light dark:text-text_color_dark cursor-pointer duration-300'>
      <p className='flex justify-start items-center gap-x-2'>
        <TbTransform className='mr-2 opacity-70' />
        {sourLang} <RiArrowRightSFill /> {targetLang}
      </p>
      <button className='p-1 hover:text-danger_color duration-300 rounded-sm '>
        <BsTrash />
      </button>
    </li>
  );
};

export default HistoryItem;
