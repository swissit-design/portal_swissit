import React from "react";
import { useTranslation } from 'react-i18next';
import { FiTrendingUp, FiTrendingDown } from "react-icons/fi"


function StatsCards() {
    const { t } = useTranslation();

    return (
        <>
        <Card 
            title="Spend this year"
            value="CHF 1200"
            pillText="2.7%"
            trend="up"
            period="From Jan 1st - Jul 31st"
        />
        <Card 
            title="Number of products"
            value="5"
            pillText="2.7%"
            trend="down"
            period="From Jan 1st - Jul 31st"
        />
        </>
    );
}

const Card = ({ title, value, pillText, trend, period }) => {
    return (
        <div className="p-4 col-span-6 rounded border border-stone-300">
            <div className="flex mb-8 items-start justify-between" >
                <div>
                    <h3 className="text-stone-500 mb-2 text-sm">{title}</h3>
                    <p className="text-3xl font-semibold">{value}</p>
                </div>
                <span className={`text-xs flex items-center gap-1 font-medium px-2 py-1 rounded ${trend === 'up' ? "bg-green-100 text-green-700" : "bg-red-100 text-red-700"}`} >
                    {trend === 'up' ? <FiTrendingUp /> : <FiTrendingDown />}
                    {pillText}
                </span>
            </div>
            <p className="text-xs text-slate-500">{period}</p>
        </div>
    );
}

export default StatsCards