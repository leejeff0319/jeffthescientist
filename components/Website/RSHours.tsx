import React from 'react'
import {
    GiFizzingFlask,
    GiCoffeeCup
} from 'react-icons/gi';
import { FaBriefcaseMedical } from 'react-icons/fa';
import { MdOutlineBedtimeOff } from 'react-icons/md';

const RSHours = () => {
    return (
        <div className="flex w-full mt-10  bg-blue-100 py-16 justify-center">  {/* Adjust styles as needed */}
                <div className="grid md:grid-cols-4 grid-cols-1 gap-4 items-center w-3/4 m-auto">
                    {/* Research Hours */}
                    <div className="   md:w-1/4 mx-auto">
                        <div className="flex">
                            <div className="w-5/12 text-right text-purple-400 border-r py-3 flex items-center justify-end">
                                <div className="self-center mr-3">
                                    <GiFizzingFlask size={65} />
                                </div>
                            </div>
                            <div className="w-7/12 text-left px-3 py-3">
                                <h1 className="text-blue-400 font-bold text-4xl">2000+</h1>
                                <p className="text-black mb-1 text-xs">Research Hours</p>
                            </div>
                        </div>
                    </div>

                    {/* Clinical Hours */}
                    <div className="   md:w-1/4 mx-auto">
                        <div className="flex">
                            <div className="w-5/12 text-right text-red-600 border-r py-3 flex items-center justify-end">
                                <div className="self-center mr-3">
                                    <FaBriefcaseMedical size={65} />
                                </div>
                            </div>
                            <div className="w-7/12 text-left px-3 py-3">
                                <h1 className="text-blue-400 font-bold text-4xl">250</h1>
                                <p className="text-black mb-1 text-xs">Clinical Hours</p>
                            </div>
                        </div>
                    </div>

                    {/* Coffees */}
                    <div className="   md:w-1/4 mx-auto">
                        <div className="flex">
                            <div className="w-5/12 text-right text-green-400 border-r py-3 flex items-center justify-end">
                                <div className="self-center mr-3">
                                    <GiCoffeeCup size={65} />
                                </div>
                            </div>
                            <div className="w-7/12 text-left px-3 py-3">
                                <h1 className="text-blue-400 font-bold text-4xl">600+</h1>
                                <p className="text-black mb-1 text-xs">Coffee Consumed</p>
                            </div>
                        </div>
                    </div>

                    {/* Nights spent */}
                    <div className="   md:w-1/4 mx-auto">
                        <div className="flex">
                            <div className="w-5/12 text-right text-gray-400 border-r py-3 flex items-center justify-end">
                                <div className="self-center mr-3">
                                    <MdOutlineBedtimeOff size={65} />
                                </div>
                            </div>
                            <div className="w-7/12 text-left px-3 py-3">
                                <h1 className="text-blue-400 font-bold text-4xl">154</h1>
                                <p className="text-black mb-1 text-xs">Nights Spent Up</p>
                            </div>
                        </div>
                    </div>
                </div>
        </div>
    )
}

export default RSHours

