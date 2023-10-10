"use client"
import React, { useState } from 'react';

function DSResume() {
    const [activeTab, setActiveTab] = useState('education');

    const content = {
        education:(
            <div>
                <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-2">
                        <img src="Gvandy.png" alt="Vanderbilt University" className="w-12 h-8"/>
                        <span><strong>Vanderbilt University</strong>- B.S. Chemistry</span>
                    </div>
                    <span>GPA: 3.53</span>
                </div>
                <ul className="list-disc pl-5 mt-1 text-sm md:text-base lg:text-lg">
                        <li>Co-founded <strong>CUPPS.org</strong></li>
                        <li>Co-directed the <strong>“I’m Good, How Are You”</strong> Podcast</li> 
                        <li>Elected <strong>Pledge Class President </strong>of Alpha Phi Omega</li>
                        <li><strong>3.78 GPA</strong> during the final 3 Semesters</li>
                </ul>
            </div>
            ),
        skills: 'Your research details go here.',
        interests: 'Your clinical details go here.',
        credentials: 'Your leadership details go here.'
    };

    return (
        <div className="bg-black text-white p-6 rounded-lg shadow-lg text-base sm:text-sm md:text-base lg:text-lg xl:text-xl 2xl:text-2xl">
            {/* Tabs */}
            <div className="flex mb-4 border-b justify-between">
                {['education', 'skills', 'interests', 'credentials'].map(tab => (
                    <button
                        key={tab}
                        onClick={() => setActiveTab(tab)}
                        className={`mr-4 pb-2 ${activeTab === tab ? 'border-b-2 black text-white font-semibold' : 'text-white hover:text-blue-200'}`}
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