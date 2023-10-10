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
                        <li><strong>3.78 GPA</strong> during the final 3 Semesters while taking 18 credit hours and working 20+ hours/week</li>
                </ul>
            </div>
            ),

        research: (
            <div>
                <div className="flex justify-between mb-2 ">
                    <span className="text-md"><strong>Research Assistant</strong>- Dr. Zhongjie Fu's Ophthalmology Lab</span>
                    <span className="text-sm">06/2023 - Present</span>
                </div>
                <ul className="list-disc pl-5 mb-4 text-xs sm:text-xs md:text-sm lg:text-base">
                    <li>Boston Children's Hospital working under Dr. Zhongjie Fu and Dr. Lois Smith</li>
                    <li>Forefront of Ophthalmology research for Retinopathy of Prematurity and Age-related Macular Degeneration </li>
                </ul>
                <div className="flex justify-between mb-2">
                <span className="text-md"><strong>Research Assistant</strong>- Dr. Michael P. Stone’s Biophysical Chemistry Lab</span>
                    <span className="text-sm">08/2021 - 05/2023</span>
                </div>
                <ul className="list-disc pl-5 mb-4 text-xs sm:text-xs md:text-sm lg:text-base">
                    <li>Researched effects of DNA adducts and their correlations to carcinogenesis</li>
                    <li>Studied the possibly detrimental effects of anthracycline drug adducts on the human body</li>
                    <li>Utilized techniques such as UV-Vis, NanoDrop, Reverse-phase HPLC, Mass Spec, cell culture, COSY/NOESY 2D NMR software, NMR, and X-ray Crystallography</li>
                </ul>
        
                <div className="flex justify-between mb-2 ">
                <span className="text-md"><strong>Research Assistant</strong>- Dr. John A. McLean’s Mass Spectrometry Lab</span>
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
                <span className="text-md"><strong>Research Assistant</strong>- Dr. Jessika C. Boles’s Pyschology Lab</span>
                    <span className="text-sm">02/2023 - Present</span>
                </div>
                <ul className="list-disc pl-5 mb-4 text-xs sm:text-xs md:text-sm lg:text-base">
                    <li>Conducting a study on the general medical practitioners’ knowledge on mental health resources that are available for patients</li>
                </ul>
            </div>
        ),

        clinical: (
            <div>
                <div className="flex justify-between mb-2 ">
                    <span className="text-md"><strong>Vanderbilt University Medical Center</strong>- Mobility Technician</span>
                    <span className="text-sm">02/2023 - Present</span>
                </div>
                <ul className="list-disc pl-5 mb-4 text-xs sm:text-xs md:text-sm lg:text-base">
                    <li>Joined the VUMC Ortho/Spine medical team and aided in the recovery process of Ortho/Spine patients who underwent recent surgeries</li>
                    <li>Cooperated with nurses and care partners to provide the most pleasant stay possible for patients</li>
                </ul>

                <div className="flex justify-between mb-2 ">
                <span className="text-md"><strong>Next Steps</strong>- Ambassador</span>
                    <span className="text-sm">02/2022 - 05/2023</span>
                </div>
                <ul className="list-disc pl-5 mb-4 text-xs sm:text-xs md:text-sm lg:text-base">
                    <li>Helped students with learning disabilities assimilate into the college environment </li>
                    <li>Provided these students with an inclusive, transformational postsecondary education in academics, social and career development, and independent living while honoring equality, compassion, and excellence in all endeavors</li>
                </ul>

                <div className="flex justify-between mb-2 ">
                <span className="text-md"><strong>Vanderbilt Premedical Society</strong>- Spring Break Service Trip</span>
                    <span className="text-sm">03/05/2022- 03/12/2022</span>
                </div>
                <ul className="list-disc pl-5 mb-4 text-xs sm:text-xs md:text-sm lg:text-base">
                    <li>Partnered with International Volunteer HQ (IVHQ) and Maximo Nivel Guatemala, to provide clinical volunteering in five rural villages of Guatemala</li>
                    <li>Set up clinics with two local physicians of internal medicine to provide free clinics in parts of the country where medical care is out of reach. </li>
                </ul>

                <div className="flex justify-between mb-2 ">
                    <strong className="text-md">Licenced Emergency Medical Technician</strong>
                    <span className="text-sm">Since 08/2022</span>
                </div>
                <ul className="list-disc pl-5 mb-4 text-xs sm:text-xs md:text-sm lg:text-base">
                    <li><strong>NREMT</strong>-certified and licensed in the states of California & Tennessee</li>
                </ul>
            </div>
        ),

        leadership:(
            <div>
                <div className="flex justify-between mb-2 ">
                    <span className="text-md"><strong>Special Operations Ambassador</strong>- ScribeAmerica</span>
                    <span className="text-sm">06/2022 - 06/2023</span>
                </div>
                <ul className="list-disc pl-5 mb-4 text-xs sm:text-xs md:text-sm lg:text-base">
                    <li>Led ScribeAmerica 3 implementation projects at new sites, communicating effectively in between the physicians at new sites and members of my team to ensure the highest quality experiences for both parties</li>
                    <li>Coached, mentored, evaluated, and provided feedback to candidates as they progressed through the training program</li>
                    <li>Utilized appropriate medical terminologies to create a personalized chart for each patient. Recognized for my abilities and was offered two promotions within just 6 months of working. </li>
                    <li>Familiar with Epic, Athena, Docutap, SpekeNotes</li>
                </ul>

                <div className="flex justify-between mb-2 ">
                    <span className="text-md"><strong>“I’m Good, How Are You?” Podcast</strong>- Co-director</span>
                    <span className="text-sm">09/2022 - Present</span>
                </div>
                <ul className="list-disc pl-5 mb-4 text-xs sm:text-xs md:text-sm lg:text-base">
                    <li>Started in hopes of raising the importance of mental health amongst college students and the general public</li>
                    <li>Interviewed Vanderbilt University Psychology Professors <strong>Dr. Balch, Dr. Boles, Dr. Hollon, and Dr. Olatunji</strong> to provide our audience with informative and entertaining knowledge about topics surrounding mental health </li>
                </ul>

                <div className="flex justify-between mb-2 ">
                    <span className="text-md"><strong>CUPPS.org</strong>- Co-founder</span>
                    <span className="text-sm">01/2022 - Present</span>
                </div>
                <ul className="list-disc pl-5 mb-4 text-xs sm:text-xs md:text-sm lg:text-base">
                    <li>Provided help to pre-med and high school students from underserved communities by providing free tutoring and information sessions</li>
                </ul>

                <div className="flex justify-between mb-2 ">
                    <span className="text-md"><strong>Alpha Phi Omega</strong>- Pledge Class President</span>
                    <span className="text-sm">10/2022- 05/2023</span>
                </div>
                <ul className="list-disc pl-5 mb-4 text-xs sm:text-xs md:text-sm lg:text-base">
                    <li>Dedicated hundreds of hours to serving the fraternity, campus, community, and nation</li>
                    <li>Served my pledge class as the elected Pledge Class President by working alongside the other board members to coordinate service opportunities & bonding events for the pledges and brothers of the fraternity</li>
                </ul>
            </div>
        )
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