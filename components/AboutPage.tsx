// AboutPage.tsx
import React from 'react';

type AboutPageProps = {
    isDarkTheme: boolean;
};

const AboutPage: React.FC<AboutPageProps> = ({ isDarkTheme }) => {
    const bgColor = isDarkTheme ? '#2C2F31' : 'rgb(219 234 254)';
    const textColor = isDarkTheme ? 'text-gray-300' : 'text-blue-500';
    const blanketColor = isDarkTheme ? '#3E4143' : 'rgb(191 219 254)';

    return (
        <div className="flex ml-6 mr-1">
            <div className="flex-none w-1/5"></div>
            <div style={{ backgroundColor: bgColor }} className={`flex-grow w-4/5 rounded-md mt-10`}>
                <div className={`center-content text-3xl sm:3xl md:3xl lg:text-4xl 2xl:text-5xl ${textColor}`}><strong>About Me</strong></div>

                {/* Add Pictures */}
                <div className="center-content certs-container ">
                    <div style ={{background:`${blanketColor}`}} className={`p-5 rounded-md`}>
                        Picture of me
                    </div>
                </div>
                <div style ={{background:`${blanketColor}`}}className={`m-2 rounded-md p-2`}>
                    <p className={`text-left mx-3 ${textColor} text-xxs sm:text-sm md:text-base lg:text-lg xl:text-xl`}>
                        &emsp; Hello, welcome to my website! My name is Jeff, and I am currently working as a Research Assistant at Boston Children's Hospital.
                        I graduated from Vanderbilt University with B.S. in Chemistry as a part of my pre-medical track. But after going through some life-altering
                        events, I have picked up a new passion for data science and machine learning.
                        <br />
                        <br />
                        &emsp; I hope to be able to use my skills to help others in the future, and I am currently working on a few projects to help me get
                        started on my journey to become a data scientist. I am also working on a few projects to help me learn more about web development,
                        and this website is the very first one of them!
                        <br />
                        <br />
                        &emsp; I will not go into too much detail, but my ultimate goal as of right now is to be able to develop deep learning models to help
                        medical professionals interpret medical images and make better decisions for their patients. I personally find value in this field as
                        it aligns with my passion for medicine and my newfound passion for data science. I hope to be able to make a difference in the world!
                        <br />
                        <br />
                        &emsp; My other interests lie with working with reinforced deep learning models
                        to develop agents that can play games and solve problems. I loved playing games as a kid, especially for the sense of progression they
                        provide. But I always find it tedious and time-consuming to grind for hours everyday. So I want to develop agents that can play
                        games better than humans and provide me with these satisfactions of progression without me having to spend hours grinding. I am still
                        very new and learning, but please feel free to check some of my work in this field out in my Projects page!
                        <br />
                        <br />
                        &emsp;
                        If you have any suggestions or inquiries about my projects, please feel free to contact me through the contact form below!
                        Thank you very much for your time!
                    </p>
                </div>
            </div>
        </div>
    );
}

export default AboutPage;
