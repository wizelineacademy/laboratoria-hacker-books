import { countReset } from 'console';
import React, { useState } from 'react';

// Components
import SearchSVG from '../svg/searchSVG';

interface iSearchbar {
  placeholder: string;
  value?: string;
  setValue?: (e: any) => void;
}

const searchBar: React.FC<iSearchbar> = ({ placeholder, value, setValue }) => {
  const handleChange = (e) => {
    setValue(e.target.value);
  };

  const handleClick = (e) => {
    e.preventDefault();
    setValue(value);
    setValue('');
  };

  return (
      <form
        onSubmit={handleClick}
        className='text-sm lg:flex-grow flex items-center'
        style={{ marginLeft: '18rem' }}
      >
        <input
          type='text'
          className='px-4 py-2'
          style={{ width: '22rem' }}
          placeholder={placeholder}
          value={value}
          onChange={handleChange}
        />
        <button
          type='submit'
          value='submit'
          className='bg-white'
          style={{ padding: '6.5px .5rem' }}
        >
          <SearchSVG />
        </button>
      </form>
  );
};

export default searchBar;
