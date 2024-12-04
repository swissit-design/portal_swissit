import React from "react";
import { Link } from 'react-router-dom';

function ContactUs() {
    return <div className="flex sticky top-[calc(100vh_-_48px_)] flex-col h-12 border-t px-2 border-stone-300 justify-end text-xs">
        <div className="flex item-center justify-between"> 
            <div>
                <p className="font-bold">Having trouble?</p>
                <p className="text-stone-500">Contact us...</p>
            </div>
            <Link  to='/support' className="px-2 py-1.5 font-medium bg-stone-200 hover:bg-stone-200 transition-colors rounded">
            Support
            </Link>
        </div>
    </div>
}

export default ContactUs;