import React from 'react';
import { Link } from 'react-router-dom';

import './aboutnav.css';

const AboutNav = () => {
  return (
    <div className='about-nav'>
        <Link to='/about/professional'><i className="ri-terminal-box-fill"></i></Link>
        <Link to='/about/personal'><i className="ri-user-fill"></i></Link>
        <Link to='/about/hobbies'><i className="ri-gamepad-fill"></i></Link>
    </div>
  )
}

export default AboutNav
