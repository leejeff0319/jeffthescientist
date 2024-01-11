import React from 'react';
import Image from 'next/image';


type CertsProps = {
    isDarkTheme: boolean;
};

const Certs: React.FC<CertsProps> = ({ isDarkTheme }) => {
    const bgColorClass = isDarkTheme ? 'bg-gray-500' : 'bg-blue-300';

    return (
        <div>
            <div className="certs-container ">
                <div className={`${bgColorClass} p-5 rounded-md flex`}> {/*add skills here*/}
                    <div className="hero ">
                        {/* <Image className="logo" src="" alt="" /> */}
                        <Image className="front-image"
                            src="/TensorFlow_fi.png"
                            width={600}
                            height={300}
                            alt="deep learning front-image"
                        />
                        <Image className="bg-certs"
                            src="/TF.png"
                            width={600}
                            height={300}
                            alt="TensorFlow Developer Certificate"
                        />
                    </div>
                </div>
            </div>

            <div className="certs-container-right ">
                <div className={`${bgColorClass} p-5 rounded-md flex`}> {/*add skills here*/}
                    <div className="hero ">
                        {/* <Image className="logo" src="" alt="" /> */}
                        <Image className="front-image"
                            src="/META_BE_fi.png"
                            width={600}
                            height={300}
                            alt="backend front image"
                        />
                        <Image className="bg-certs"
                            src="/META_BE.png"
                            width={600}
                            height={300}
                            alt="Meta's back end developer certificate"
                        />
                    </div>
                </div>
            </div>

            <div className="certs-container ">
                <div className={`${bgColorClass} p-5 rounded-md flex`}> {/*add skills here*/}
                    <div className="hero ">
                        {/* <Image className="logo" src="" alt="" /> */}
                        <Image className="front-image"
                            src="/META_FE_fi.png"
                            width={600}
                            height={300}
                            alt="HTML, CSS, and Javascript front image"
                        />
                        <Image className="bg-certs"
                            src="/META_FE.png"
                            width={600}
                            height={300}
                            alt="Meta's front end developer certificate"
                        />
                    </div>
                </div>
            </div>


            <div className="certs-container-right ">
                <div className={`${bgColorClass} p-5 rounded-md flex`}> {/*add skills here*/}
                    <div className="hero ">
                        {/* <Image className="logo" src="" alt="" /> */}
                        <Image className="front-image"
                            src="/GADA_fi_transparent.png"
                            width={600}
                            height={300}
                            alt="Google Advanced Data Analytics front image"
                        />
                        <Image className="bg-certs"
                            src="/GADA.png"
                            width={600}
                            height={300}
                            alt="Google Advanced Data Analytics certificate"
                        />
                    </div>
                </div>
            </div>

            <div className="certs-container">
                <div className={`${bgColorClass} p-5 rounded-md`}> {/*add skills here*/}
                    <div className="hero ">
                        {/* <Image className="logo" src="" alt="" /> */}
                        <Image className="front-image"
                            src="/p4e_fi.png"
                            width={600}
                            height={300}
                            alt="Python for Everybody Specialization front image" />
                        <Image className="bg-certs"
                            src="/p4e.png"
                            width={600}
                            height={300}
                            alt="Python for Everybody Specialization certificate" />
                    </div>
                </div>
            </div>

            <div className="certs-container-right">
                <div className={`${bgColorClass} p-5 rounded-md`}> {/*add skills here*/}
                    <div className="hero  ">
                        {/* <Image className="logo" src="" alt="" /> */}
                        <Image className="front-image"
                            src="/GDA_fi_transparent.png"
                            width={600}
                            height={300}
                            alt="Google Data Analytics front image"
                        />
                        <Image className="bg-certs"
                            src="/GDA.png"
                            width={600}
                            height={300}
                            alt="Google Data Analytics Certificate"
                        />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Certs;