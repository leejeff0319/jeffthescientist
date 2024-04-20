// AboutPage.tsx
import React from 'react';
import Image from 'next/image';

type AboutPageProps = {
    isDarkTheme: boolean;
};

const AboutPage: React.FC<AboutPageProps> = ({ isDarkTheme }) => {
    const bgColor = isDarkTheme ? '#2C2F31' : 'rgb(219 234 254)';
    const textColor = isDarkTheme ? 'text-gray-300' : 'text-blue-500';
    const blanketColor = isDarkTheme ? '#3E4143' : 'rgb(191 219 254)';

    return (
        <div className=" grid grid-cols-12 gap-4 mt-10">
            <div style={{ backgroundColor: bgColor }} className={`col-start-4 col-end-11 rounded-md `}>
                <div className={`center-content text-3xl sm:3xl md:3xl lg:text-4xl 2xl:text-5xl ${textColor}`}><strong>About Me</strong></div>
                <div className="center-content certs-container ">
                    <div style ={{background:`${blanketColor}`}} className={`p-5 rounded-md`}>
                        <Image src='/Me_DS.JPEG' width={300} height={300} alt="image of me" />
                    </div>
                </div>
                <div style ={{background:`${blanketColor}`}}className={`m-2 rounded-md p-2`}>
                    <p className={`text-left mx-3 ${textColor} text-xxs sm:text-sm md:text-base lg:text-lg xl:text-xl`}>
                        Hello everyone, welcome to my website! My name is <strong>Jeff</strong>, and I am currently working as a <strong>Research Assistant at Boston Children&#39;s Hospital </strong>
                        under Dr. Zhongjie Fu and Dr. Lois E Smith in the Ophthalmology department. I graduated from <strong>Vanderbilt University</strong> with B.S. in Chemistry 
                        as a part of my <strong>pre-medical</strong> track. I genuinely loved and enjoyed every moment I spent at Vanderbilt, and still cannot believe that I have graduated and 
                        started my career already. I resonate strongly with their <strong>Dare to Grow</strong> message, and I have been practicing it ever since my time at Vanderbilt University. 
                        One prime example of which would be when I discovered a new passion for data science and machine learning a couple months ago after undergoing some pivotal life events.
                        <br />
                        <br />
                        I aim to use my skills in <strong>research, medicine, data science,</strong> and <strong>machine learning</strong> to help others in the future. I am currently working on a few projects 
                        to help me get started on my journey towards this goal. I am also working on a few web development projects to help me learn more about this field as well,
                        and this website is the very first one of them! I am hoping that there are many more to come, and I will soon be able to display them on this portfolio website as well.
                        <br />
                        <br />
                        My ultimate goal right now is to <strong>develop deep learning models and softwares to help medical professionals</strong> interpret medical images and 
                        make quicker and more accurate decisions for their patients. I personally resonate and find value in this field as it aligns with my passion for medicine and my 
                        newfound passion for data science. 
                        <br />
                        <br />
                        As a first step towards achieving this goal, I am currently participating on a related project with <strong>Korbato-Health</strong> under supervision of Dr. Ryuichiro Yagi and Dr. Shinichi Goto in developing ECG interpretation
                        devices/softwares using deep learning models. 
                        I will make a difference in the world!
                        <br />
                        <br />
                        If you have any suggestions or inquiries about my projects, please feel free to contact me through the contact form below!
                        Thank you very much for your time!
                        <br />
                        <br />
                        <strong>P.S. Please feel free to try resizing this window in different dimensions to explore how the page layout adjusts to these changes!</strong>
                    </p>
                </div>
            </div>
        </div>
    );
}

export default AboutPage;
