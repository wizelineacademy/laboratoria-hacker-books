import React from 'react';
import ButtonSide from '../button/buttonSide';

const Sidebar = ({ props }) => {
  return (
    <div className='float-left bg-white rounded-lg p-6 shadow-md w-56 h-screen'>
      <h2 className="text-center">Hello I&apos;m Fulanito</h2>
      <hr className='pt-8' />
      <ButtonSide {...props}/>
      <hr className='pt-8' />
      <button className="bg-transparent w-full hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded">Category</button>
    </div>
  );
};

export default Sidebar;
