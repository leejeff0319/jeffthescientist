import React, { useState } from 'react';
import Image from 'next/image';

function Resume() {
    const [activeTab, setActiveTab] = useState('education');

    const content = {
        education: (
            <div>
                <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-2 text-xxs sm:text-md md:text-xl lg:text-xl 2xl:text-2xl">
                        <Image
                            src="/Gvandy.png"
                            width={50}
                            height={50}
                            alt="Vanderbilt University Logo" className="w-12 h-8" />
                        <span><strong>Vanderbilt University</strong>- B.S. Chemistry</span>
                    </div>
                    <div className="text-xxs sm:text-sm md:text-base lg:text-lg xl:text-xl">
                        <span>GPA: 3.53</span>
                    </div>
                </div>
                <ul className="list-disc pl-5 mt-1 text-xxs sm:text-sm md:text-base lg:text-lg xl:text-xl">
                    <li>Co-founded <a href="https://www.cupps.org/" target="_blank" rel="noopener noreferrer" className="text-black hover:underline"><strong>CUPPS.org</strong></a></li>
                    <li>Co-directed the <strong>“I&#39;m Good, How Are You”</strong> Podcast</li>
                    <li>Elected <strong>Pledge Class President </strong>of Alpha Phi Omega</li>
                    <li><strong>3.78 GPA</strong> during the final 3 Semesters while taking 18 credit hours and working 20+ hours/week</li>
                </ul>
            </div>
        ),

        research: (
            <div>
                <div className="flex justify-between mb-2 text-xs sm:text-base md:lg lg:text-lg 2xl:text-2xl">
                    <span className="text-md"><strong>Dr. Zhongjie Fu&#39;s Ophthalmology Lab</strong>- Research Assistant</span>
                    <span className="text-xxs sm:text-sm md:text-base lg:text-lg xl:text-xl">06/2023 - Present</span>
                </div>
                <ul className="list-disc pl-5 mb-4 text-xxs sm:text-sm md:text-base lg:text-lg xl:text-xl">
                    <li>Boston Children&#39;s Hospital working under <strong>Dr. Zhongjie Fu</strong> and <strong>Dr. Lois Smith</strong></li>
                    <li>Forefront of Ophthalmology research for <strong>Retinopathy of Prematurity</strong> and Age-related Macular Degeneration </li>
                </ul>
                <div className="flex justify-between mb-2 text-xs sm:text-base md:lg lg:text-lg 2xl:text-2xl">
                    <span className="text-md"><strong>Dr. Michael P. Stone&#39;s Biophysical Chemistry Lab</strong>- Research Assistant</span>
                    <span className="text-xxs sm:text-sm md:text-base lg:text-lg xl:text-xl">08/2021 - 05/2023</span>
                </div>
                <ul className="list-disc pl-5 mb-4 text-xxs sm:text-sm md:text-base lg:text-lg xl:text-xl">
                    <li>Researched effects of <strong>DNA adducts</strong> and their correlations to <strong>carcinogenesis</strong></li>
                    <li>Studied the possibly detrimental effects of <strong>anthracycline drug adducts</strong> on the human body</li>
                    <li>Utilized techniques such as UV-Vis, NanoDrop, Reverse-phase HPLC, Mass Spec, cell culture, COSY/NOESY 2D NMR software, NMR, and X-ray Crystallography</li>
                </ul>

                <div className="flex justify-between mb-2 text-xs sm:text-base md:lg lg:text-lg 2xl:text-2xl">
                    <span className="text-md"><strong>Dr. John A. McLean&#39;s Mass Spectrometry Lab</strong>- Research Assistant</span>
                    <span className="text-xxs sm:text-sm md:text-base lg:text-lg xl:text-xl">01/2023 - 05/2023</span>
                </div>
                <ul className="list-disc pl-5 mb-4 text-xxs sm:text-sm md:text-base lg:text-lg xl:text-xl">
                    <li>Researched non-commercial <strong>cyclic crown ethers</strong> for their <strong>guest-host capabilities</strong> compared to cyclodextrins</li>
                    <li>Operated Drift Tube Ion Mobility Spectrometry (DTIMS) to verify the identity of our analytes using 3 levels of confidence (m/z, CCS, EC50)</li>
                    <li>Analyze data, constructed breakdown curves to expand the CCS trendlines and selectivity information beyond the crown ethers available as commercial standards</li>
                </ul>

                <div className="flex justify-between mb-2 text-xs sm:text-base md:lg lg:text-lg 2xl:text-2xl">
                    <strong className="text-md">Advanced Chemistry Capstone Lab</strong>
                    <span className="text-xxs sm:text-sm md:text-base lg:text-lg xl:text-xl">08/2022 - 05/2023</span>
                </div>
                <ul className="list-disc pl-5 mb-4 text-xxs sm:text-sm md:text-base lg:text-lg xl:text-xl">
                    <li><strong>Presented self-conducted research projects weekly</strong> consisting of well-known studies including Synthesis & Characterization of Au Nanoparticles, Ru Bpy Complexes, Urea, and Lacto-N-Tetraose</li>
                    <li>Extensively utilized Raman Spectrometry, HPLC, UV-Vis, NMR, TEM, STA (TGA & DSC), Cyclic Voltammetry, Rotovap, IR Spectrometry, Fractional Distillation, TopSpin, R, and Linux</li>
                </ul>

                <div className="flex justify-between mb-2 text-xs sm:text-base md:lg lg:text-lg 2xl:text-2xl">
                    <span className="text-md"><strong>Dr. Jessika C. Boles&#39;s Pyschology Lab</strong>- Research Assistant</span>
                    <span className="text-xxs sm:text-sm md:text-base lg:text-lg xl:text-xl">02/2023 - Present</span>
                </div>
                <ul className="list-disc pl-5 mb-4 text-xxs sm:text-sm md:text-base lg:text-lg xl:text-xl">
                    <li>Conducting a study on the general medical practitioners&#39; knowledge on <strong>mental health resources that are available for patients</strong></li>
                </ul>
            </div>
        ),

        clinical: (
            <div>
                <div className="flex justify-between mb-2 text-xs sm:text-base md:lg lg:text-lg 2xl:text-2xl">
                    <span className="text-md"><strong>Vanderbilt University Medical Center</strong>- Mobility Technician</span>
                    <span className="text-xxs sm:text-sm md:text-base lg:text-lg xl:text-xl">02/2023 - Present</span>
                </div>
                <ul className="list-disc pl-5 mb-4 text-xxs sm:text-sm md:text-base lg:text-lg xl:text-xl">
                    <li>Joined the VUMC Ortho/Spine medical team and <strong>aided in the recovery process</strong> of Ortho/Spine patients who recently underwent surgeries</li>
                    <li><strong>Worked alongside nurses and care partners</strong> to provide the most pleasant stay possible for patients</li>
                </ul>

                <div className="flex justify-between mb-2 text-xs sm:text-base md:lg lg:text-lg 2xl:text-2xl">
                    <span className="text-md"><strong>Next Steps</strong>- Ambassador</span>
                    <span className="text-xxs sm:text-sm md:text-base lg:text-lg xl:text-xl">02/2022 - 05/2023</span>
                </div>
                <ul className="list-disc pl-5 mb-4 text-xxs sm:text-sm md:text-base lg:text-lg xl:text-xl">
                    <li>Helped ease the experience faced by students with learning disabilities as they <strong>assimilated into the college environment</strong> </li>
                    <li>Provided these students with an <strong>inclusive, transformational</strong> postsecondary education in academics, social and career development, and independent living while honoring <strong>equality, compassion,</strong> and <strong>excellence</strong> in all endeavors</li>
                </ul>

                <div className="flex justify-between mb-2 text-xs sm:text-base md:lg lg:text-lg 2xl:text-2xl">
                    <span className="text-md"><strong>Vanderbilt Premedical Society</strong>- Spring Break Service Trip</span>
                    <span className="text-xxs sm:text-sm md:text-base lg:text-lg xl:text-xl">03/05/2022- 03/12/2022</span>
                </div>
                <ul className="list-disc pl-5 mb-4 text-xxs sm:text-sm md:text-base lg:text-lg xl:text-xl">
                    <li>Partnered with International Volunteer HQ (IVHQ) and Maximo Nivel Guatemala, to <strong>provide clinical volunteering</strong> in five rural villages of Guatemala</li>
                    <li><strong>Set up free health clinics</strong> with two local physicians of internal medicine in parts of the country where medical care is out of reach. </li>
                </ul>

                <div className="flex justify-between mb-2 text-xs sm:text-base md:lg lg:text-lg 2xl:text-2xl">
                    <strong className="text-md">Licenced Emergency Medical Technician</strong>
                    <span className="text-xxs sm:text-sm md:text-base lg:text-lg xl:text-xl">Since 08/2022</span>
                </div>
                <ul className="list-disc pl-5 mb-4 text-xxs sm:text-sm md:text-base lg:text-lg xl:text-xl">
                    <li><strong>NREMT</strong>-certified and licensed in the states of California & Tennessee</li>
                </ul>
            </div>
        ),

        leadership: (
            <div>
                <div className="flex justify-between mb-2 text-xs sm:text-base md:lg lg:text-lg 2xl:text-2xl">
                    <span className="text-md"><strong>ScribeAmerica</strong>- Special Operations Ambassador</span>
                    <span className="text-xxs sm:text-sm md:text-base lg:text-lg xl:text-xl">06/2022 - 06/2023</span>
                </div>
                <ul className="list-disc pl-5 mb-4 text-xxs sm:text-sm md:text-base lg:text-lg xl:text-xl">
                    <li><strong>Orchestrated </strong> ScribeAmerica implementation projects at 3 new sites by <strong>communicating effectively</strong> in between the physicians and team members to ensure the highest quality experiences for both parties</li>
                    <li><strong>Coached, mentored</strong>, evaluated, and provided feedback to candidates as they progressed through the training program</li>
                    <li>Utilized <strong>medical terminologies</strong> to create a personalized chart for each patient. Recognized for my abilities and was <strong>offered 2 promotions within just 6 months</strong> of starting. </li>
                    <li>Familiar with Epic, Athena, Docutap, and SpekeNotes</li>
                </ul>

                <div className="flex justify-between mb-2 text-xs sm:text-base md:lg lg:text-lg 2xl:text-2xl">
                    <span className="text-md"><strong>“I&#39;m Good, How Are You?” Podcast</strong>- Co-director</span>
                    <span className="text-xxs sm:text-sm md:text-base lg:text-lg xl:text-xl">09/2022 - Present</span>
                </div>
                <ul className="list-disc pl-5 mb-4 text-xxs sm:text-sm md:text-base lg:text-lg xl:text-xl">
                    <li>Started in hopes of <strong>raising the importance of mental health</strong> amongst college students and the general public</li>
                    <li>Interviewed Vanderbilt University <strong>Psychology professors</strong> Dr. Balch, Dr. Boles, Dr. Hollon, and Dr. Olatunji to provide our audience with informative and entertaining knowledge about topics surrounding mental health </li>
                </ul>

                <div className="flex justify-between mb-2 text-xs sm:text-base md:lg lg:text-lg 2xl:text-2xl">
                    <span className="text-md"><strong>CUPPS.org</strong>- Co-founder</span>
                    <span className="text-xxs sm:text-sm md:text-base lg:text-lg xl:text-xl">01/2022 - Present</span>
                </div>
                <ul className="list-disc pl-5 mb-4 text-xxs sm:text-sm md:text-base lg:text-lg xl:text-xl">
                    <li>Provided help to pre-med and high school students from <strong>underserved communities</strong> by providing free tutoring and information sessions</li>
                </ul>

                <div className="flex justify-between mb-2 text-xs sm:text-base md:lg lg:text-lg 2xl:text-2xl">
                    <span className="text-md"><strong>Alpha Phi Omega</strong>- Pledge Class President</span>
                    <span className="text-xxs sm:text-sm md:text-base lg:text-lg xl:text-xl">10/2021- 05/2023</span>
                </div>
                <ul className="list-disc pl-5 mb-4 text-xxs sm:text-sm md:text-base lg:text-lg xl:text-xl">
                    <li>Served as the <strong>elected Pledge Class President</strong> by working alongside the other board members to <strong>coordinate community service & bonding events</strong> for the pledges and brothers</li>
                </ul>
            </div>
        )
    };

    return (
        <div className="bg-white p-6 mx-auto rounded-lg shadow-lg">
            {/* Tabs */}
            <div className="flex mb-4 border-b justify-between text-xxs sm:text-sm md:text-base lg:text-lg xl:text-xl">
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