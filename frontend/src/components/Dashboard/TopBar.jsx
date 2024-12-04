import React from "react";
import { Link } from "react-router-dom";
import { FiSettings } from "react-icons/fi";

function TopBar() {
    const isDevelopment = import.meta.env.MODE === "development";

    return (
        <div className="border-b px-4 mb-4 mt-2 pb-4 border-stone-200">
            <div className="flex p-0.5 items-center justify-between">
                <div>
                    <span className="text-sm font-bold block">Good Morning, Lucien</span>
                    <span className="text-xs block text-stone-500"> Wednesday 4th December 2024</span>
                </div>
                <button 
                className="flex text-sm items-center gap-2 transition-colors rounded">
                    <span>Env: {import.meta.env.MODE}</span>
                </button>

                <button
  className={`px-2 py-1.5 font-medium rounded transition-colors ${
    isDevelopment
      ? "bg-green-500 text-white hover:bg-green-600"
      : "bg-gray-500 text-white hover:bg-gray-600"
  }`}
>
  {isDevelopment ? "Development Mode" : "Production Mode"}
</button>

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