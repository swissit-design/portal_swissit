import React from "react";
import { Link } from "react-router-dom";
import { FiSettings } from "react-icons/fi";

function TopBar() {
    return (
        <div className="border-b px-4 mb-4 mt-2 pb-4 border-stone-200">
            <div className="flex p-0.5 items-center justify-between">
                <div>
                    <span className="text-sm font-bold block">Good Morning, Lucien</span>
                    <span className="text-xs block text-stone-500"> Wednesday 4th December 2024</span>
                </div>
                <Link 
                to='settings'
                className="flex text-sm items-center gap-2 bg-stone-100 transition-colors hover:bg-sky-100 hover:text-sky-700 px-3 py-1.5 rounded">
                    <FiSettings />
                    <span>Settings</span>
                </Link>
            </div> 
        </div>
    );
}

export default TopBar