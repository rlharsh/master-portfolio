import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import './sidebar.css';

const Sidebar = ( { children, data }) => {

    const [expandedItems, setExpandedItems] = useState({});

    const toggleItem = (index) => {
        setExpandedItems(prevState => ({
          ...prevState,
          [index]: !prevState[index]
        }));
      };


      const renderData = (items, basePath = '', parentIndex = '') => {
        return items.map((item, index) => {
          const currentIndex = `${parentIndex}${index}`;
          const isParent = item.children && item.children.length > 0;

          return (
            <li key={currentIndex}>
              <span onClick={() => isParent && toggleItem(currentIndex)}>
                {isParent ? <i className={`ri-folder-fill ${item.color}`}></i> : <i className="ri-file-text-fill"></i>}
                {' '}
                {item.path ? (
                  <Link to={`${basePath}${item.path}`}>{item.title}</Link>
                ) : (
                  item.title
                )}
              </span>
              {isParent && expandedItems[currentIndex] && (
                <ul>{renderData(item.children, `${basePath}${item.path}/`, `${currentIndex}-`)}</ul>
              )}
            </li>
          );
        });
      };


    return (
        <div className='sidebar-container'>
            { children }
            <ul class='sidenav'>{data && renderData(data)}</ul>
        </div>
    )
}

export default Sidebar
