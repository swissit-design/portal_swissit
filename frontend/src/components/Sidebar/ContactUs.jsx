import React from "react";
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

function ContactUs() {
    const { t } = useTranslation();
    return <div className="flex sticky top-[calc(100vh_-_48px_)] flex-col h-12 border-t px-2 border-stone-300 justify-end text-xs">
        <div className="flex item-center justify-between"> 
            <div>
                <p className="font-bold">{t('contact_us.top')}</p>
                <p className="text-stone-500">{t('contact_us.bottom')}</p>
            </div>
            <Link  to='/support' className="px-2 py-1.5 font-medium bg-stone-200 hover:bg-stone-200 transition-colors rounded">
            {t('contact_us.button')}
            </Link>
        </div>
    </div>
}

export default ContactUs;