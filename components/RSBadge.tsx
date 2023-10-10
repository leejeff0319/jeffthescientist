import React from 'react';
import Image from 'next/image';

const RSBadge: React.FC = () => {
    return (
        <div className="absolute top-100">
            {/*Profile Pic*/}
            <div className="absolute top-0 left-0 z-10">
                <Image src="/profile.jpg" objectFit="cover" width="60" height="50" alt="Profile Picture" className="mt-5 ml-4"/>
            </div>

            {/*Badge*/}
            {/*Badge-Top*/}
            <div className="mt-3 bg-blue-200 border border-gray-400 p-1 ml-2 pl-4 pr-14 rounded-t-md broder-b-0">
                <p className="relative mt-2 justify-left left-16 text-sm font-bold">
                    Jeff Youngjae Lee
                </p>
                <p className="relative justify-left left-16 text-xs mt-1">
                    Research Assistant I
                </p>
                <p className="relative justify-left left-16 text-xs">
                    Ophthalmology
                </p>
                <p className="relative text-xs ">
                    jeff.lee@childrens.harvard.edu
                </p> 
            </div>
            <div className="absolute top-20 left-1 z-10">
                <Image src="/BCHL.png" objectFit="cover" width="25" height="50" alt="BCH Logo" className="mt-6 ml-4"/>
            </div>

            {/*Badge-Bottom*/}
            <div className="bg-blue-800 border border-gray-500 p-1 ml-2 pl-4 rounded-b-md border-t-0">
                <p className="text-white font-bold relative justify-left left-7 text-xs">
                    Boston Children's Hospital
                </p>
                <p className="text-white font-thin relative justify-left left-7 text-xxs">
                    Until every child is well
                </p>
            </div>
        </div>
    );
}

export default RSBadge;
