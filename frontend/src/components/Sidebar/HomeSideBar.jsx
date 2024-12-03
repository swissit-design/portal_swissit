// src/components/Sidebar.js
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import AccountToggle from './AccountToggle';
import Search from './Search';
import RouteSelect from './RouteSelect'

function Sidebar() {
    return (
    <div className="overflow-y-scroll sticky top-4 h-[calc(100vh-32px-48px)]">
        <AccountToggle  />
        {/* <Search  /> */}
        <div>
        <RouteSelect />
        </div>
    </div>);
    }
export default Sidebar;
