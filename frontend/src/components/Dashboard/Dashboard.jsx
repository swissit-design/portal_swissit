import React from "react";
import TopBar from "./TopBar";
import { useTranslation } from 'react-i18next';

function Dashboard() {
    const { t } = useTranslation();

    return (
        <div className="bg-white rounded-lg pb-4 shadow h-[200vh]">
            <TopBar />
            {t('title')}
        </div>
    );
}

export default Dashboard