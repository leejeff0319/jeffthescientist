// AnimationDocPage.tsx
import React from 'react';


type AnimationDocPageProps = {
    isDarkTheme: boolean;
};

const AnimationDocPage: React.FC<AnimationDocPageProps> = ({ isDarkTheme }) => {
    const bgColor = isDarkTheme ? '#2C2F31' : 'rgb(219 234 254)';
    const textColor = isDarkTheme ? 'text-gray-300' : 'text-blue-500';
    const blanketColor = isDarkTheme ? '#3E4143' : 'rgb(191 219 254)';
    const aniImage = isDarkTheme ? 'Webdoc-Night.PNG' : 'Webdoc-Day.PNG';

    return (
        <div style= {{background:`${bgColor}`}}className={`w-full mt-20 mb-20 pt-6 pb-6`}>

                {/* Title */}
                <div className={`flex flex-col w-full items-center ${textColor} text-lg sm:text-xl md:text-3xl lg:text-4xl 2xl:text-5xl mb-2`}>
                    <h1><strong>Animation Journey</strong></h1>
                </div>

                {/* Image and Text Container */}
                <div className="flex justify-between items-start">
                    {/* Text */}
                    <div className={`flex-grow ml-2 mr-2 rounded-md p-1 ${textColor} text-xxs sm:text-sm md:text-md lg:text-xl xl:text-2xl 2xl:text-2xl `}>
                        <p className='mx-2'>
                            &emsp;&emsp;I built this website using <strong>Next.js, Typescript,</strong> and <strong>Tailwind CSS</strong>. This documentation goes over my throught processes
                            as I was building this website. It also covers some of the problems I faced and how I solved them. I hope this documentation will
                            be useful in showing you what type of person I am and how I approach problems.
                        </p>
                    </div>
                    {/* Image */}
                    <div style={{ background: `${blanketColor}`,width:'700px'}} className="flex p-3 rounded-md ml-2">
                        <img src={`${aniImage}`} width="700" height="500" alt="Animation Journey Thumbnail"/>
                    </div>

                    
                </div>
                </div>

    );
}

export default AnimationDocPage;