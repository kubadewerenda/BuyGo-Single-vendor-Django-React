import React from 'react';
import NavBar from '../components/ui/NavBar';
import Footer from '../components/ui/Footer'
import { Outlet } from 'react-router-dom';

const MainLayout = () => {
  return (
    <>
        <NavBar />
        <Outlet />
        <Footer />
    </>
  )
}

export default MainLayout