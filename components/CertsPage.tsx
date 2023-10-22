// CertsPage.tsx
import Certs from '@/components/Certs';
import React from 'react';


type CertsPageProps = {

};

const CertsPage: React.FC<CertsPageProps> = ({ }) => {
  return (
    <div className="flex ml-6 mr-1">
      <div className="flex-none w-1/5"></div>
      <div className="flex-grow w-4/5 bg-blue-100 pb-10 rounded-md">
        <div className='center-content text-3xl sm:3xl md:3xl lg:text-4xl 2xl:text-5xl text-blue-500' ><strong>Certifications</strong></div>
        <Certs />
      </div>
    </div>
  );
}

export default CertsPage;
