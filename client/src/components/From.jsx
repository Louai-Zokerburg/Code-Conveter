import React, { useState } from 'react';

import FromRow from './FromRow';
import Button from './Button';

const From = ({ isLogin }) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  return (
    <form className='w-full flex flex-col items-start justify-center'>
      <h1 className='text-text_color_light text-2xl lg:text-4xl font-semibold mb-8'>
        {isLogin ? 'Login' : 'Register'}
      </h1>

      {!isLogin && (
        <FromRow
          label='Name'
          type='text'
          placeholder='Enter name'
          value={name}
          handleChange={(newName) => setName(newName)}
        />
      )}

      <FromRow
        isPass={false}
        label='Email'
        type='email'
        placeholder='Enter email'
        value={email}
        handleChange={(newEmail) => setEmail(newEmail)}
      />

      <FromRow
        isPass={true}
        label='Password'
        type='password'
        placeholder='Enter password'
        value={password}
        handleChange={(newPassword) => setPassword(newPassword)}
      />

      <Button
        text={isLogin ? 'Login' : 'Register'}
        handleClick={(e) => {
          e.preventDefault();
          console.log('froom login');
        }}
      />
    </form>
  );
};

export default From;
