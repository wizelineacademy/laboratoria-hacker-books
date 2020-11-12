import React from 'react';

const searchBar = () => {
  return (
      <div className="text-sm lg:flex-grow" style={{ marginLeft: '22rem' }}>
        <input 
        type="text" 
        className="px-4 py-2" 
        style={{ width: "22rem" }} 
        placeholder='What do you want to watch today' />
      </div>
  )
}

export default searchBar
