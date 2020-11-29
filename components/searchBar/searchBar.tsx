import React, { useState } from 'react';

interface iSearchbar {
  placeholder: string;
}

const searchBar: React.FC<iSearchbar> = ({ placeholder }) => {
  const [value, setValue] = useState('');

  const handleChange = (e) => {
    setValue(e.target.value);
  };

  return (
    <div className='text-sm lg:flex-grow' style={{ marginLeft: '22rem' }}>
      <input
        type='text'
        className='px-4 py-2'
        style={{ width: '22rem' }}
        placeholder={placeholder}
        value={value}
        onChange={handleChange}
      />
    </div>
  );
};

export default searchBar;
