import Image from 'next/image';
import SkyButton from '../components/SkyButton'

export default function Home() {

  return (
    <div className="  bg-blue-100">

      <div className="h-[37vh] flex justify-center">
        <div className="absolute w-full h-[30vh]">
          
          {/* Transition Button*/}
          <SkyButton />

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
