import React, { useState } from 'react';
import { PiSmileyWinkDuotone } from "react-icons/pi";

const Docs = () => {
    return (
        <div className="flex justify-center items-center bg-gray-100 px-4 py-14">
            {/* Responsive Box */}
            <div className="max-w-2xl w-full bg-white shadow-md rounded-lg p-6 text-center">
                <div className="flex items-center justify-center space-x-2">
                    {/* Text */}
                    <p className="text-xl font-bold text-gray-800 animate-wiggle relative">
                        Do you like to know more about AI@PFH?{' '}
                        <a
                            href="/Docs/KI_Arbeiten_PFH_FINALER_ENTWURF.pdf"
                            download
                            className="text-blue-600 hover:underline relative group"
                        >
                            Click here
                            {/* Tooltip */}
                            <span className="absolute left-1/2 -translate-x-1/2 bottom-full mb-2 w-max bg-blue-700 text-white text-sm rounded-md px-2 py-1 opacity-0 group-hover:opacity-100 transition-opacity">
                                Essential documents
                            </span>
                        </a>
                    </p>
                    {/* Icon */}
                    <PiSmileyWinkDuotone className="text-blue-600 text-3xl" />
                </div>
            </div>
        </div>
    );
};

export default Docs;
