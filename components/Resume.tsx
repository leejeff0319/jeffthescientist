"use client"
import React, { useState } from 'react';

function Resume() {
    const [activeTab, setActiveTab] = useState('education');

    const content = {
        education: (
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
        research: (
            <div>
                <div className="flex justify-between mb-2 ">
                    <strong className="text-md">Research Assistant- Dr. Zhongjie Fu's Ophthalmology Lab</strong>
                    <span className="text-sm">06/2023 - Present</span>
                </div>
                <ul className="list-disc pl-5 mb-4 text-xs sm:text-xs md:text-sm lg:text-base">
                    <li>Boston Children's Hospital working under Dr. Zhongjie Fu and Dr. Lois Smith</li>
                    <li>Forefront of Ophthalmology research for Retinopathy of Prematurity and Age-related Macular Degeneration </li>
                </ul>
                <div className="flex justify-between mb-2">
                    <strong className="text-md">Research Assistant- Dr. Michael P. Stone’s Biophysical Chemistry Lab</strong>
                    <span className="text-sm">08/2021 - 05/2023</span>
                </div>
                <ul className="list-disc pl-5 mb-4 text-xs sm:text-xs md:text-sm lg:text-base">
                    <li>Researched effects of DNA adducts and their correlations to carcinogenesis</li>
                    <li>Studied the possibly detrimental effects of anthracycline drug adducts on the human body</li>
                    <li>Utilized techniques such as UV-Vis, NanoDrop, Reverse-phase HPLC, Mass Spec, cell culture, COSY/NOESY 2D NMR software, NMR, and X-ray Crystallography</li>
                </ul>
        
                <div className="flex justify-between mb-2 ">
                    <strong className="text-md">Research Assistant- Dr. John A. McLean’s Mass Spectrometry Lab</strong>
                    <span className="text-sm">01/2023 - 05/2023</span>
                </div>
                <ul className="list-disc pl-5 mb-4 text-xs sm:text-xs md:text-sm lg:text-base">
                    <li>Researched non-commercial cyclic crown ethers and their guest-host capabilities compared to cyclodextrins</li>
                    <li>Operated Drift Tube Ion Mobility Spectrometry (DTIMS) to verify the identity of our analytes using 3 levels of confidence (m/z, CCS, EC50)</li>
                    <li>Analyze data, constructed breakdown curves to expand the CCS trendlines and selectivity information beyond the crown ethers available as commercial standards</li>
                </ul>

                <div className="flex justify-between mb-2 ">
                    <strong className="text-md">Advanced Chemistry Capstone Lab</strong>
                    <span className="text-sm">08/2022 - 05/2023</span>
                </div>
                <ul className="list-disc pl-5 mb-4 text-xs sm:text-xs md:text-sm lg:text-base">
                    <li>Presented weekly on self-conducted research projects of well-known studies including Synthesis & Characterization of Au Nanoparticles, Ru Bpy Complexes, Urea, and Lacto-N-Tetraose</li>
                    <li>Extensively utilized Raman Spectrometry, HPLC, UV-Vis, NMR, TEM, STA (TGA & DSC), Cyclic Voltammetry, Rotovap, IR Spectrometry, Fractional Distillation, TopSpin, R, and Linux</li>
                </ul>

                <div className="flex justify-between mb-2 ">
                    <strong className="text-md">Research Assistant- Dr. Jessika C. Boles’s Pyschology Lab</strong>
                    <span className="text-sm">02/2023 - Present</span>
                </div>
                <ul className="list-disc pl-5 mb-4 text-xs sm:text-xs md:text-sm lg:text-base">
                    <li>Conducting a study on the general medical practitioners’ knowledge on mental health resources that are available for patients</li>
                </ul>
            </div>),
        clinical: 'Your clinical details go here.',
        leadership: 'Your leadership details go here.'
    };

    return (
        <div className="bg-white p-6 rounded-lg shadow-lg text-base sm:text-sm md:text-base lg:text-lg xl:text-xl 2xl:text-2xl">
            {/* Tabs */}
            <div className="flex mb-4 border-b justify-between">
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