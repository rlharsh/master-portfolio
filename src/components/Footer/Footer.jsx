import React from 'react';

import './footer.css';

const Footer = () => {
  return (
    <footer className='footer'>
        <div className="footer__social">
            <p>_find-me:</p>
        </div>
        <div className="footer__social__container">
            <i className="ri-twitter-fill"></i>
            <i className="ri-linkedin-box-fill"></i>
        </div>
        <div className="github">
                <p>@ronaldharsh</p>
                <i className="ri-github-fill"></i>
        </div>
    </footer>
  )
}

export default Footer
