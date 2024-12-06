import React from "react";
import { Link } from "react-router-dom";
import { FiDollarSign, FiHome, FiLogOut, FiPackage, FiPaperclip, FiSettings, FiUser } from "react-icons/fi"

function RouteSelect() {
    return <div className="space-y-1">
        <Route Icon={FiHome} selected={true} title="Dashboard" link='/'></Route>
        <Route Icon={FiUser} selected={false} title="Client Info" link='user_info'></Route>
        <Route Icon={FiPackage} selected={false} title="Products" link='products'></Route>
        <Route Icon={FiPaperclip} selected={false} title="Invoices" link='invoices'></Route>
        <Route Icon={FiDollarSign} selected={false} title="Payment History" link='payment_history'></Route> 
        <Route Icon={FiSettings} selected={false} title="Settings" link='settings'></Route> 
        <Route Icon={FiLogOut} selected={false} title="Log out" link='logout'></Route> 
    </div>
}

const Route = ({ Icon, selected, title, link }) => {
    return (
        <button className={`flex items-center justify-start gap-2 w-full rounded px-2 py-1.5 test-sm transition-[box-shadow,_background-color,_color] ${
        selected ? "bg-white text-stone-950 shadow" : "hover:bg-stone-200 bg-transparent text-stone-500 shadow-none"}`}>
            <Icon className={selected ? "text-sky-700" :""} />
            <Link
                to={link}
                className={`text-sm font-medium ${
                    selected ? "text-stone-950" : "text-stone-500"
                }`}
            >
                {title}
            </Link>        
            </button>
    );
};

export default RouteSelect;

