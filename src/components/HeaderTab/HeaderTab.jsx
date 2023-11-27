import React, { Children, useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

import './headertab.css';

const HeaderTab = ({ children, path }) => {

    const [ selected, setSelected ] = useState(false);
    const location = useLocation();
    const navigate = useNavigate();

    useEffect(() => {
        if (path === location.pathname) {
            setSelected(true);
        } else {
            setSelected(false);
        }
    }, [location.pathname, path]);

    const handleTabClick = () => {
        navigate(path);
    }

    return (
        <div onClick={handleTabClick} className={`tab ${selected ? `tab--selected` : ``}`}>{ children }</div>
    );
}

export default HeaderTab
