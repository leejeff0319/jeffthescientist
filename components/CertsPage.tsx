// CertsPage.tsx
import Certs from '@/components/Certs';
import React from 'react';


type CertsPageProps = {

};

const CertsPage: React.FC<CertsPageProps> = ({ }) => {
  return (
    <>
      <div className="grid grid-cols-12 gap-4 mt-10">
        <div className="col-start-4 col-end-10">
          <Certs />
        </div>
      </div>

    </>
  );
}

export default CertsPage;
