// CertsPage.tsx
import Certs from '@/components/Website/Certs';
import React from 'react';

type CertsPageProps = {
  isDarkTheme: boolean;
};

const CertsPage: React.FC<CertsPageProps> = ({ isDarkTheme }) => {
  const bgColor = isDarkTheme ? '#2C2F31' : 'rgb(219 234 254)';
  const textColor = isDarkTheme ? 'text-gray-300' : 'text-blue-500';
  return (
    <div className=" grid grid-cols-12 gap-4 mt-10">
      <div style={{ backgroundColor: bgColor }} className={`col-start-4 col-end-11 pb-10 rounded-md`}>
        <div className={`center-content mb-2 text-3xl sm:3xl md:3xl lg:text-4xl 2xl:text-5xl ${textColor}`}><strong>Certifications</strong></div>
        <Certs isDarkTheme={isDarkTheme} />
      </div>
    </div>
  );
}

export default CertsPage;
