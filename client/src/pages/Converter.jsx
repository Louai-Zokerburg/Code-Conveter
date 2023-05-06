import React from 'react';
import DropDown from '../components/DropDown';
import { languages } from '../utils.js/languages';

const Converter = () => {
  return (
    <div className='p-8 bg-secondary_color_light dark:bg-secondary_color_dark h-screen'>
      <DropDown languages={languages} />
    </div>
  );
};

export default Converter;
