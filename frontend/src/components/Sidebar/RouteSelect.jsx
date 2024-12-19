import React from "react";
import { Link } from "react-router-dom";
import { FiDollarSign, FiHome, FiLogOut, FiPackage, FiPaperclip, FiSettings, FiUser } from "react-icons/fi"
import { useTranslation } from 'react-i18next';

function RouteSelect() {
    const { t } = useTranslation();
    return <div className="space-y-1">
        <Route Icon={FiHome} selected={true} title={t('sidebar.dashboard')} link='/'></Route>
        <Route Icon={FiUser} selected={false} title={t('sidebar.client_info')} link='user_info'></Route>
        <Route Icon={FiPackage} selected={false} title={t('sidebar.products')} link='products'></Route>
        <Route Icon={FiPaperclip} selected={false} title={t('sidebar.invoices')} link='invoices'></Route>
        <Route Icon={FiDollarSign} selected={false} title={t('sidebar.payment_history')} link='payment_history'></Route> 
        <Route Icon={FiSettings} selected={false} title={t('sidebar.settings')} link='settings'></Route> 

        <div className="border-t pt-4 border-stone-200">
        <button className="flex items-center justify-start gap-2 w-full rounded px-2 py-1.5 test-sm transition-[box-shadow,_background-color,_color]  hover:bg-stone-200 bg-transparent text-stone-500 shadow-none">
            <Link to='logout' className="flex items-center">
                <FiLogOut />
            </Link>
            <Link
                to='logout'
                className="text-sm font-medium text-stone-500"
            >
               {t('sidebar.logout')}
            </Link>        
            </button>
            </div>
    </div>
}

const Route = ({ Icon, selected, title, link }) => {
    return (
        <button className={`flex items-center justify-start gap-2 w-full rounded px-2 py-1.5 test-sm transition-[box-shadow,_background-color,_color] ${
        selected ? "bg-white text-stone-950 shadow" : "hover:bg-stone-200 bg-transparent text-stone-500 shadow-none"}`}>
            <Link to={link} className="flex items-center">
                <Icon className={selected ? "text-sky-700" : ""} />
            </Link>
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

