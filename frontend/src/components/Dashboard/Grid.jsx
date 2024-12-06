import React from "react";
import { useTranslation } from 'react-i18next';
import StatsCards from "./StatsCards";

function Grid() {
    const { t } = useTranslation();

    return (
        <>
        <div className="px-4 mb-4">
        {t('title')}
        </div>
        <div className="px-4 grid gap-3 grid-cols-12">
            <StatsCards />
        </div>
        </>
    );
}

export default Grid