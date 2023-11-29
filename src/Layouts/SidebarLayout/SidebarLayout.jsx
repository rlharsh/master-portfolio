import React, { useEffect } from 'react';
import { Outlet, useNavigate, useLocation } from 'react-router-dom';

import './sidebarlayout.css';
import Sidebar from '../../components/SideBar/Sidebar';
import AboutNav from '../../components/AboutNav/AboutNav';

import { useData } from '../../Providers/DataContext';

const SidebarLayout = () => {

    const location = useLocation();
    const { currentMenuData, updateMenuData } = useData();

    useEffect(() => {
        updateMenuData(location.pathname);
    }, [location.pathname]);

    return (
        <div className='main-container'>
            <div className="sidebar">
                <div className="sidebar__data">
                    <AboutNav />
                </div>
                <div className="sidebar__sidebar">
                    <Sidebar data={ currentMenuData }>
                        _about-me
                    </Sidebar>
                </div>
                <div className="sidebar__content">
                    <Outlet />
                </div>
                <div className="sidebar__code">
                    I am some code!
                </div>
            </div>
        </div>
    )
}

export default SidebarLayout
