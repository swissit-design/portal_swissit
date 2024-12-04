// src/components/Sidebar.js
import React, { useState, useEffect } from 'react';
import AccountToggle from './AccountToggle';
import Search from './Search';
import RouteSelect from './RouteSelect'
import ContactUs from './ContactUs';

function Sidebar() {
    return (
    <div className="overflow-y-scroll sticky top-4 h-[calc(100vh-48px)]">
        <AccountToggle  />
        {/* <Search  /> */}
        <div>
        <RouteSelect />
        </div>
        <ContactUs />
    </div>);
    }
export default Sidebar;
