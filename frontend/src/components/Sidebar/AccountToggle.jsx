import React from "react";

function AccountToggle() {
    return <div className="border-b mb-4 mt-2 pb-4 border-stone-200">
        <button className="flex p-0.5 hover:bg-stone-200 rounded transition-colors relative gap2 w-full items-center">
            <img src='https://api.dicebear.com/9.x/miniavs/svg'
            alt="avatar"
            className="size-8 rounded shrink-0 bg-sky-800 shadow"
        />
        <div className="text-start ml-2">
            <span className="text-sm font-bold block">Lucien Rey</span>
            <span className="text-xs block text-stone-500">lucienrey@hotmail.com</span>
        </div>
        </button>
    </div>
}

export default AccountToggle;