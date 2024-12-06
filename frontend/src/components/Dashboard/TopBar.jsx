import React, { useState } from "react";
import { useTranslation } from 'react-i18next';

function TopBar() {
    const [selectedLanguage, setSelectedLanguage] = useState("en");
    const { t, i18n } = useTranslation();
    const handleLanguageChange = (event) => {
      const language = event.target.value;
      setSelectedLanguage(language);
      i18n.changeLanguage(language);
    };
  
    return (
        <div className="border-b px-4 mb-4 mt-2 pb-4 border-stone-200">
            <div className="flex p-0.5 items-center justify-between">
                <div>
                    <span className="text-sm font-bold block">Good Morning, Lucien</span>
                    <span className="text-xs block text-stone-500"> Wednesday 4th December 2024</span>
                </div>

                {import.meta.env.MODE === "development" && (
                <button
                    className="flex text-sm items-center gap-2 bg-green-400  px-3 py-1.5 rounded"
                >
                    Development Mode
                </button>
                )}

                <select
                    value={selectedLanguage}
                    onChange={handleLanguageChange}
                    className="flex text-sm items-center gap-2 bg-stone-100 transition-colors px-3 py-1.5 rounded focus:outline-none">
                    <option value="en">English</option>
                    <option value="fr">Français</option>
                    <option value="de">Deutsch</option>
                </select>
            </div> 
        </div>
    );
}

export default TopBar