import React from 'react';

interface iSearchbar {
  placeholder: string;
}

const searchBar: React.FC<iSearchbar> = ({ placeholder }) => {
  return (
      <div className="text-sm lg:flex-grow" style={{ marginLeft: '22rem' }}>
        <input 
        type="text" 
        className="px-4 py-2" 
        style={{ width: "22rem" }} 
        placeholder={placeholder} />
      </div>
  )
}

export default searchBar

/* 'What do you want to watch today' */