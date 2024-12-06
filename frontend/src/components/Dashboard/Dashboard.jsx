import React from "react";
import TopBar from "./TopBar";
import { useTranslation } from 'react-i18next';
import Grid from "./Grid";

function Dashboard() {
    const { t } = useTranslation();

    return (
        <div className="bg-white rounded-lg pb-4 shadow h-[200vh]">
            <TopBar />
            <Grid />
        </div>
    );
}

export default Dashboard