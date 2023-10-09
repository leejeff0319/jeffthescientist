"use client"
import React, { useState } from 'react';

function Resume() {
    const [activeTab, setActiveTab] = useState('education');

    const content = {
        education: (
            <div className="flex items-center space-x-2">
                <img src="Gvandy.png" alt="Vanderbilt University" className="w-12 h-8"/>
                <span><strong>Vanderbilt University</strong>- B.S. Chemistry</span>
            </div>
        ),
        research: 'Your research details go here.',
        clinical: 'Your clinical details go here.',
        leadership: 'Your leadership details go here.'
    };

    return (
        <div className="bg-white p-6 rounded-lg shadow-lg">
            {/* Tabs */}
            <div className="flex mb-4 border-b">
                {['education', 'research', 'clinical', 'leadership'].map(tab => (
                    <button
                        key={tab}
                        onClick={() => setActiveTab(tab)}
                        className={`mr-4 pb-2 ${activeTab === tab ? 'border-b-2 border-blue-600 font-semibold' : 'text-gray-500 hover:text-gray-700'}`}
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

export default Resume;