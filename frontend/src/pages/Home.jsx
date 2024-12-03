import React from 'react';
import Sidebar from '../components/Sidebar/HomeSideBar';
import Dashboard from '../components/Dashboard/Dashboard'

function Home() {

    return (
        <main className="grid gap-4 p-4 grid-cols-[220px,_1fr]">
        <Sidebar />
        <Dashboard />
        </main>
    );
}

export default Home;