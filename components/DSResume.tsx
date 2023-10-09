"use client"
import React, { useState } from 'react';

function DSResume() {
    const [activeTab, setActiveTab] = useState('education');

    const content = {
        education: 'Your education details go here.',
        skills: 'Your research details go here.',
        experience: 'Your clinical details go here.',
        credentials: 'Your leadership details go here.'
    };

    return (
        <div className="bg-black p-6 rounded-lg shadow-lg">
            {/* Tabs */}
            <div className="flex mb-4 border-b">
                {['education', 'skills', 'experience', 'credentials'].map(tab => (
                    <button
                        key={tab}
                        onClick={() => setActiveTab(tab)}
                        className={`mr-4 pb-2 ${activeTab === tab ? 'border-b-2 black font-semibold' : 'text-gray-400 hover:text-gray-200'}`}
                    >
                        {tab.charAt(0).toUpperCase() + tab.slice(1)}
                    </button>
                ))}
                </div>

                {/* Content */}
                <div>
                    {content[activeTab as keyof typeof content]}
                </div>
            </div>
    );
}

export default DSResume;