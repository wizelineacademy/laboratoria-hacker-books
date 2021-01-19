import React from 'react';

// Components
import Navbar from '../navbar/navbar';
import Main from '../main/main';
import Footer from '../footer/footer';
import Sidebar from '../sidebar/sidebar';

const Layout = ({ children }) => {
  return (
    <>
      <Navbar color='white' />
      <Sidebar props />
      <Main>{children}</Main>
      <Footer />
    </>
  );
};

export default Layout;
