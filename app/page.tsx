import Image from 'next/image';
import SkyButton from '../components/SkyButton'

export default function Home() {
  let role: string = "Research";
  let email: string = "jeff.lee@childrens.harvard.edu"

  return (
    <div className="  bg-blue-100">

      <div className="h-[37vh] flex justify-center">
        <div className="absolute w-full h-[30vh]">
          
          {/* Transition Button*/}
          <SkyButton />

        </div>
      </div>     
      
      <div className="absolute" style={{ top: '42%' }}>
          {/*Profile Pic*/}
          <div className="absolute top-0 left-0 z-10">
            <Image src="/profile.jpg" objectFit="cover" width="60" height="50" alt="Profile Picture" className="mt-5 ml-4"/>
          </div>

          {/*Badge*/}
          {/*Badge-Top*/}
          <div className="mt-3 bg-blue-200 border border-gray-400 p-1 ml-2 pl-4 pr-14 rounded-t-md broder-b-0">
            <p className="relative mt-2 justify-left left-16 text-sm font-bold">
              Jeff Youngjae Lee
            </p>
            <p className="relative justify-left left-16 text-xs mt-1">
              {role} Assistant I
            </p>
            <p className="relative justify-left left-16 text-xs">
              Ophthalmology
            </p>
            <p className="relative text-xs ">
              {email}
            </p> 
          </div>
          <div className="absolute top-20 left-1 z-10">
            <Image src="/BCHL.png" objectFit="cover" width="25" height="50" alt="BCH Logo" className="mt-6 ml-4"/>
          </div>

          {/*Badge-Bottom*/}
          <div className=" bg-blue-800 border border-gray-500 p-1 ml-2 pl-4 rounded-b-md border-t-0">
            <p className=" text-white font-bold relative justify-left left-7 text-xs">
              Boston Children's Hospital
            </p>
            <p className="text-white font-thin relative justify-left left-7 text-xxs">
              Until every child is well
            </p>
          </div>
      </div>

      <div className="flex w-full">
        <div className="relative flex flex-col w-1/4"></div>
        

        {/*Resume*/}
        <div className="flex flex-col w-3/5 ml-8">
          <h2 className="text-4xl font-bold mb-4 text-center text-transparent">
          Resume
          </h2>

          {/*Education*/}
          <p className="font-bold text-xl text-center">EDUCATION</p>
          <div className="flex items-end">
            <Image src="/vandy.jpg" width="75" height="75" alt="vandy logo"></Image>
            <span>
              Vanderbilt University- B.S. Chemistry
            </span>
          </div>

          {/*RESEARCH EXPERIENCE*/}
          <div>
          <p className="font-bold text-xl text-center mt-6">RESEARCH EXPERIENCE</p>
          <span className="mt-4 font-bold">
              Research Assistant at Dr. Michael P. Stone’s Biophysical Chemistry Lab
            </span>
            <ul className="list-disc pl-10">
                <li>Researched some of the fundamental questions surrounding the effects of DNA adducts and their correlations to carcinogenesis</li>
                <li>Studied the effects anthracycline drug (Pixantrone, Mitoxantrone) adducts could have on the human body</li>
                <li>Utilized techniques such as UV-Vis, NanoDrop, Reverse-phase HPLC, Mass Spec, cell culture, COSY/NOESY 2D NMR software, NMR, and X-ray Crystallography</li>
              </ul>

            <span className="mt-4 font-bold">
              Research Assistant at Dr. John A. McLean’s Mass Spectrometry Lab
            </span>
            <ul className="list-disc pl-10">
                <li>Researched non-commercial cyclic crown ethers and their guest-host capabilities compared to cyclodextrins (drug-delivery complexes)</li>
                <li>Operated Drift Tube Ion Mobility Spectrometry (DTIMS) to verify the identity of our analytes using 3 levels of confidence (m/z, CCS, EC50)</li>
                <li>Utilized Excel to analyze/organize data, constructed graphs and breakdown curves to expand the CCS trendlines and selectivity information beyond the crown ethers available as commercial standards. </li>
            </ul>

            <span className="mt-4 font-bold">
              Advanced Chemistry Capstone Lab 	
            </span>
            <ul className="list-disc pl-10">
                <li>Participated in self-conducted research projects on variations of well-known studies including Synthesis & Characterization of Au Nanoparticles, Ru Bpy Complexes, Urea, and Lacto-N-Tetraose</li>
                <li>Extensively utilized Raman Spectrometry, HPLC, UV-Vis, NMR, TEM, STA (TGA & DSC), Cyclic Voltammetry, Rotovap, IR Spectrometry, Fractional Distillation, TopSpin, R, and other Linux softwares</li>
                <li>Presented study results in weekly group meetings and biweekly presentations</li>
              </ul>

            <span className="mt-4 font-bold">
              Research Assistant at Dr. Jessika C. Boles’s Pyschology Lab	
            </span>
            <ul className="list-disc pl-10">
                <li>Conducting a study on the general medical practitioners’ knowledge on mental health resources that are available for patients</li>
            </ul>
          </div>
          
          {/*CLINICAL EXPERIENCE*/}
          <div>
          <p className="font-bold text-xl text-center mt-6">CLINICAL EXPERIENCE</p>
          <span className="mt-4 font-bold">
              Research Assistant at Dr. Michael P. Stone’s Biophysical Chemistry Lab
            </span>
            <ul className="list-disc pl-10">
                <li>Researched some of the fundamental questions surrounding the effects of DNA adducts and their correlations to carcinogenesis</li>
                <li>Studied the effects anthracycline drug (Pixantrone, Mitoxantrone) adducts could have on the human body</li>
                <li>Utilized techniques such as UV-Vis, NanoDrop, Reverse-phase HPLC, Mass Spec, cell culture, COSY/NOESY 2D NMR software, NMR, and X-ray Crystallography</li>
              </ul>

            <span className="mt-4 font-bold">
              Research Assistant at Dr. John A. McLean’s Mass Spectrometry Lab
            </span>
            <ul className="list-disc pl-10">
                <li>Researched non-commercial cyclic crown ethers and their guest-host capabilities compared to cyclodextrins (drug-delivery complexes)</li>
                <li>Operated Drift Tube Ion Mobility Spectrometry (DTIMS) to verify the identity of our analytes using 3 levels of confidence (m/z, CCS, EC50)</li>
                <li>Utilized Excel to analyze/organize data, constructed graphs and breakdown curves to expand the CCS trendlines and selectivity information beyond the crown ethers available as commercial standards. </li>
            </ul>

            <span className="mt-4 font-bold">
              Advanced Chemistry Capstone Lab 	
            </span>
            <ul className="list-disc pl-10">
                <li>Participated in self-conducted research projects on variations of well-known studies including Synthesis & Characterization of Au Nanoparticles, Ru Bpy Complexes, Urea, and Lacto-N-Tetraose</li>
                <li>Extensively utilized Raman Spectrometry, HPLC, UV-Vis, NMR, TEM, STA (TGA & DSC), Cyclic Voltammetry, Rotovap, IR Spectrometry, Fractional Distillation, TopSpin, R, and other Linux softwares</li>
                <li>Presented study results in weekly group meetings and biweekly presentations</li>
              </ul>

            <span className="mt-4 font-bold">
              Research Assistant at Dr. Jessika C. Boles’s Pyschology Lab	
            </span>
            <ul className="list-disc pl-10">
                <li>Conducting a study on the general medical practitioners’ knowledge on mental health resources that are available for patients</li>
            </ul>
          </div>
          
        </div>

      </div>
    </div>
  )
}
