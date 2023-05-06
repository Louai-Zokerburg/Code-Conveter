import React, { useState } from 'react';
import { HiOutlineSearch } from 'react-icons/hi';
import { MdOutlineArrowDropDown } from 'react-icons/md';

function DropDown({ languages }) {
  const [isOpen, setIsOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');
  const [language, setLanguage] = useState('');

  const filteredOptions = languages.filter((language) =>
    language.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const handleSearchTermChange = (event) => {
    setSearchTerm(event.target.value);
  };

  const selectLanguage = (selectedLanguage) => {
    setLanguage(selectedLanguage);
  };

  return (
    <div className='relative'>
      <button
        type='button'
        className='relative z-10 w-full flex justify-between px-4 py-2 text-lg font-medium text-text_color_light dark:text-text_color_dark bg-main_color_light dark:bg-main_color_dark'
        onClick={toggleDropdown}
      >
        {language || 'Python'}

        <MdOutlineArrowDropDown
          className={`${
            isOpen ? 'rotate-180' : 'rotate-0'
          } duration-300 text-2xl text-text_color_light dark:text-text_color_dark`}
        />
      </button>

      <div
        className={`${
          isOpen ? 'scale-y-100' : 'scale-y-0'
        } origin-top transition-all duration-300 z-20 w-full mt-2 bg-main_color_light dark:bg-main_color_dark rounded-md overflow-hidden`}
      >
        <div className='flex justify-start items-center border-b border-border_color_light dark:border-border_color_dark pl-3'>
          <div className=''>
            <HiOutlineSearch
              className='w-5 h-5 text-gray-400'
              aria-hidden='true'
            />
          </div>
          <input
            type='text'
            className='w-full pl-2 pr-3 py-3 border-none text-sm leading-5 bg-main_color_light dark:bg-main_color_dark placeholder-text_color_light dark:placeholder-text_color_dark focus:outline-none sm:text-sm caret-text_color_light dark:caret-text_color_dark text-text_color_light dark:text-text_color_dark'
            placeholder='Search language'
            value={searchTerm}
            onChange={handleSearchTermChange}
          />
        </div>

        <ul className='py-1 overflow-y-scroll max-h-[50vh]'>
          {filteredOptions.length > 0 ? (
            filteredOptions.map((language) => (
              <li
                key={language}
                className='px-4 py-2 text-sm text-text_color_light dark:text-text_color_dark hover:bg-btn_hover_color_light hover:dark:bg-btn_hover_color_dark cursor-pointer'
                onClick={() => {
                  setIsOpen(false);
                  setSearchTerm('');
                  // Do something with selected language
                  selectLanguage(language);
                }}
              >
                {language}
              </li>
            ))
          ) : (
            <p className='text-text_color_light dark:text-text_color_dark text-sm px-4 py-2 text-center'>
              No Match
            </p>
          )}
        </ul>
      </div>
    </div>
  );
}

export default DropDown;
