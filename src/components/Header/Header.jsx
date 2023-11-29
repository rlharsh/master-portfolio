import React, { useState } from 'react';

import './header.css';
import HeaderTab from '../HeaderTab/HeaderTab';

const Header = () => {

    const [ menuShowing, setMenuShowing ] = useState(false);

    const toggleMenu = () => {
        setMenuShowing(prevState => !prevState);
    };

    return (
        <header className="header">

            <div className="header__name">
                <p>ronald_harsh</p>
            </div>

            <div className={`header__tabs ${menuShowing ? 'show' : ''}`}>
                <HeaderTab path='/'>_home</HeaderTab>
                <HeaderTab path='/about/professional' root='/about'>_about</HeaderTab>
                <HeaderTab path='/projects' root='/projects'>_projects</HeaderTab>
                <HeaderTab path='/blog' root='/blog'>_blog</HeaderTab>
            </div>

            <div className="header__menu">
                <button className='clear-button text' onClick={toggleMenu}>
                    {
                        menuShowing ? <i className="ri-close-line"></i> : <i className="ri-menu-line"></i>
                    }
                </button>
            </div>

            <div className="header__contact">
                <HeaderTab path='/contact'>_contact-me</HeaderTab>
            </div>

        </header>
    )
}

export default Header
