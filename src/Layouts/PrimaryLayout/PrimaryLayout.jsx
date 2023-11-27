import React from 'react';
import { Outlet } from 'react-router-dom';

import './primarylayout.css';
import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';

const PrimaryLayout = () => {
  return (
    <div className='layout-container'>
        <Header />
        <div className='content'>
            <Outlet />
        </div>
        <Footer />
    </div>
  )
}

export default PrimaryLayout
