// src/components/Sidebar.js
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

function Sidebar( {sidebarData}) {
    return (
    <div className="h-full w-64 bg-gray-800 text-white fixed left-0 top-0 overflow-y-auto">
        <div className="p-4">
        <h2 className="text-xl font-bold">SwissIT Portal</h2>
        <ul className="mt-4">
            {sidebarData.map((item, index) => (
            <li key={index} className="mt-2">
                <Link
                to={item.link}
                className="flex items-center py-2 px-4 text-gray-300 hover:bg-gray-700 hover:text-white"
                >
                <item.icon className="h-6 w-6 mr-2" />
                {item.name}
                </Link>
                {item.subItems.length > 0 && (
                <ul className="ml-4">
                    {item.subItems.map((subItem, subIndex) => (
                    <li key={subIndex}>
                        <Link
                        to={subItem.link}
                        className="flex items-center py-2 px-4 text-gray-300 hover:bg-gray-700 hover:text-white"
                        >
                        <subItem.icon className="h-6 w-6 mr-2" />
                        {subItem.name}
                        </Link>
                    </li>
                    ))}
                </ul>
                )}
            </li>
            ))}
        </ul>
        </div>
    </div>);
    }
export default Sidebar;
