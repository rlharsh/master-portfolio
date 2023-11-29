import React, { Children, useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

import './headertab.css';

const HeaderTab = ({ children, path, root = '/n' }) => {

    const [ selected, setSelected ] = useState(false);
    const location = useLocation();
    const navigate = useNavigate();

    console.log(root);

    useEffect(() => {
        if (location.pathname.startsWith(root)) {
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
