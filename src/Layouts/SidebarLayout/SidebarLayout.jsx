import React from 'react';
import { Outlet } from 'react-router-dom';

import './sidebarlayout.css';
import Sidebar from '../../components/SideBar/Sidebar';

const SidebarLayout = () => {

    const aboutData = [
        {
            title: "personal-info",
            children: [{
                title: "bio",
                path: "/bio"
            }, {
                title: "interest",
                path: "/interest"
            }, {
                title: "education",
                children: [{
                    title: "high-school",
                    path: "/high-school"
                }, {
                    title: "university",
                    path: "/university"
                }]
            },]
        }
    ];

    return (
        <div className='main-container'>
            <div className="sidebar">
                <div className="sidebar__sidebar">
                    <Sidebar data={aboutData}>
                        _about-me
                    </Sidebar>
                </div>
                <div className="sidbar__content">
                    <Outlet />
                </div>
                <div className="sidebar__code">

                </div>
            </div>
        </div>
    )
}

export default SidebarLayout
