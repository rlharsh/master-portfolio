import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useData } from '../../Providers/DataContext';

import './sidebar.css';

const Sidebar = ( { children }) => {

    const [expandedItems, setExpandedItems] = useState({});
    const location = useLocation();
    const { currentMenuData } = useData();

    const baseUrl = location.pathname.split('/').slice(0, 3).join('/');

    const toggleItem = (index) => {
        setExpandedItems(prevState => ({
          ...prevState,
          [index]: !prevState[index]
        }));
      };

      const renderData = (items, parentIndex = '') => {
        return items.map((item, index) => {
            const currentIndex = `${parentIndex}${index}`;
            const isParent = item.children && item.children.length > 0;

            return (
                <li key={currentIndex}>
                    <span onClick={() => isParent && toggleItem(currentIndex)}>
                        {isParent ?
                            (expandedItems[currentIndex] ?
                                <i className="ri-arrow-down-s-line"><i className={`ri-folder-5-fill ${item.color}`}></i></i> :
                                <i className="ri-arrow-right-s-line"><i className={`ri-folder-fill ${item.color}`}></i></i>
                            ) :
                            <i className="ri-markdown-fill indent"></i>
                        }
                        {' '}
                        {item.path ? (
                            <Link to={`${baseUrl}/${item.path}`}>{item.title}</Link>
                        ) : (
                            item.title
                        )}
                    </span>
                    {isParent && expandedItems[currentIndex] && (
                        <ul>{renderData(item.children, `${currentIndex}-`)}</ul>
                    )}
                </li>
            );
        });
    };


    return (
        <div className='sidebar-container'>
            <h2>{children}</h2>
            <ul className='sidenav'>{currentMenuData && renderData(currentMenuData)}</ul>
        </div>
    )
}

export default Sidebar
