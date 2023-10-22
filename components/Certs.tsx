import React, { useEffect, useState } from 'react';

const Certs = () => {

    return (
        <div>
            <div className="certs-container-right "> 
                <div className=" bg-blue-300 p-5 rounded-md"> {/*add skills here*/}
                    <div className="hero ">
                        <img className="logo" src="" alt="" />
                        <img className="front-image" src="GADA_fi_transparent.png" alt="GADA front image" />
                        <img className="bg-certs" src="GADA.png" alt="GADA certificate" />
                    </div>
                </div>
            </div>

            <div className="certs-container">  
                <div className=" bg-blue-300 p-5 rounded-md"> {/*add skills here*/}
                    <div className="hero ">
                        <img className="logo" src="" alt="" />
                        <img className="front-image" src="p4e_fi.png" alt="" width='400px' />
                        <img className="bg-certs" src="p4e.png" alt="" />
                    </div>
                </div>
            </div>

            <div className="certs-container-right"> 
                <div className=" bg-blue-300 p-5 rounded-md"> {/*add skills here*/}
                    <div className="hero  ">
                        <img className="logo" src="" alt="" />
                        <img className="front-image" src="GDA_fi_transparent.png" alt="" />
                        <img className="bg-certs" src="GDA.png" alt="" />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Certs;