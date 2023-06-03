import React from "react";
import Navbar from '../components/NavBar'

const Layout = ({ children }) => {
  return (
    <>
      <Navbar/>
      {children}
    </>
  );
};

export default Layout
