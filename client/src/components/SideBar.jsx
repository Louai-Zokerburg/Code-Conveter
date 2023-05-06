import React, { useState } from 'react';

import Logo from './Logo';
import History from './History';
import Settings from './Settings';

const SideBar = () => {
  const [isOpen, setIsOpen] = useState(true);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <aside
      onClick={toggleSidebar}
      className={`fixed ${
        isOpen ? 'left-0' : 'left-[-200px]'
      } top-0 w-[300px] h-screen flex flex-col border-r-2 border-border_color_light dark:border-border_color_dark bg-secondary_color_light dark:bg-secondary_color_dark duration-300`}
    >
      <Logo />
      <History />
      <Settings />
    </aside>
  );
};

export default SideBar;
