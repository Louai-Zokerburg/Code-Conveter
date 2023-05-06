import { useEffect, useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import { Landing, Register, Login, Converter } from './pages';

function App() {
  const [theme, setTheme] = useState('light');

  useEffect(() => {
    if (!localStorage.getItem('theme')) localStorage.setItem('theme', theme);

    if (localStorage.getItem('theme') === 'dark') {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [theme]);

  const toggleTheme = () => {
    setTheme((prevTheme) => {
      if (prevTheme === 'dark') {
        localStorage.setItem('theme', 'light');

        return 'light';
      } else {
        localStorage.setItem('theme', 'dark');

        return 'dark';
      }
    });
  };

  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Landing />} />
        <Route path='/register' element={<Register />} />
        <Route path='/login' element={<Login />} />
        <Route path='/app' element={<Converter />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
