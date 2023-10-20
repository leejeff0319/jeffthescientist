// CertsPage.tsx
import Certs from '@/components/Certs';
import React from 'react';


type CertsPageProps = {

};

const CertsPage: React.FC<CertsPageProps> = ({ }) => {
  return (
    <>
      <div className='relative center-content scale-container'>      
          <Certs />
      </div>

    </>
  );
}

export default CertsPage;
