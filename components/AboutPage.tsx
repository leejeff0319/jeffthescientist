// AboutPage.tsx
import React from 'react';

type AboutPageProps = {
    isDarkTheme: boolean;
};

const AboutPage: React.FC<AboutPageProps> = ({ isDarkTheme }) => {
    const bgColor = isDarkTheme ? '#2C2F31' : 'rgb(219 234 254)';
    const textColor = isDarkTheme ? 'text-gray-300' : 'text-blue-500';
    const bgColorClass = isDarkTheme ? 'bg-gray-500' : 'bg-blue-300';

    return (
        <div className="flex ml-6 mr-1">
            <div className="flex-none w-1/5"></div>
            <div style={{ backgroundColor: bgColor }} className={`flex-grow w-4/5 pb-10 rounded-md mt-10`}>
                <div className={`center-content text-3xl sm:3xl md:3xl lg:text-4xl 2xl:text-5xl ${textColor}`}><strong>About Me</strong></div>
                <div className={`text-left mx-5 ${textColor}`}>
                    Hi
                </div>

                {/* Add Pictures */}
                <div className="certs-container-right ">
                    <div className={`${bgColorClass} p-5 rounded-md`}>
                        Picture of me
                    </div>
                </div>

            </div>
        </div>
    );
}

export default AboutPage;
