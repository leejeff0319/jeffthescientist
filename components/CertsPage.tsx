// CertsPage.tsx
import Certs from '@/components/Certs';
import React from 'react';

type CertsPageProps = {
  isDarkTheme: boolean;
};

const CertsPage: React.FC<CertsPageProps> = ({ isDarkTheme }) => {
  const bgColor = isDarkTheme ? '#2C2F31' : 'rgb(219 234 254)';
  const textColor = isDarkTheme ? 'text-gray-300' : 'text-blue-500';
  return (
    <div className="flex ml-6 mr-1">
      <div className="flex-none w-1/5"></div>
      <div style={{ backgroundColor: bgColor }} className={`flex-grow w-4/5 pb-10 rounded-md mt-10`}>
        <div className={`center-content text-3xl sm:3xl md:3xl lg:text-4xl 2xl:text-5xl ${textColor}`}><strong>Certifications</strong></div>
        <Certs isDarkTheme={isDarkTheme} />
      </div>
    </div>
  );
}

export default CertsPage;
