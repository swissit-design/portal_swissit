import React from "react";
import { Link } from "react-router-dom";
import { FiDollarSign, FiHome, FiPaperclip, FiUser } from "react-icons/fi"

function RouteSelect() {
    return <div className="space-y-1">
        <Route Icon={FiHome} selected={true} title="Dashboard" link='/'></Route>
        <Route Icon={FiUser} selected={false} title="User Info" link='user_info'></Route>
        <Route Icon={FiPaperclip} selected={false} title="Client Invoices" link='client_invoices'></Route>
        <Route Icon={FiDollarSign} selected={false} title="Client Payment History" link='client_payment_history'></Route> 
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
            </Link>        </button>
    );
};

export default RouteSelect;

