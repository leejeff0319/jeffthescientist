import React from 'react'
import { MdOutlineBedtimeOff } from 'react-icons/md';
import { GiCoffeeCup } from 'react-icons/gi';
import {BsClipboardData,
        BsAlarm} from 'react-icons/bs';


const DSHours = () => {
  return (
        <div style={{ backgroundColor: '#2C2F31' }} className="flex w-full mt-10 py-16 justify-center">  {/* Adjust styles as needed */}
                <div className="grid md:grid-cols-4 grid-cols-1 gap-4 items-center w-3/4 m-auto">
                    {/* Research Hours */}
                    <div className=" md:w-1/4 mx-auto">
                        <div className="flex">
                            <div className="w-5/12 text-right text-white border-r py-3 flex items-center justify-end">
                                <div className="self-center mr-3">
                                    <BsAlarm size={65} />
                                </div>
                            </div>
                            <div className="w-7/12 text-left px-3 py-3">
                                <h1 className="text-blue-500 font-bold text-4xl">300</h1>
                                <p className="text-gray-200 mb-1 text-xs">Hours Worked</p>
                            </div>
                        </div>
                    </div>

                    {/* Projects Completed */}
                    <div className="   md:w-1/4 mx-auto">
                        <div className="flex">
                            <div className="w-5/12 text-right text-white border-r py-3 flex items-center justify-end">
                                <div className="self-center mr-3">
                                    <BsClipboardData size={65} />
                                </div>
                            </div>
                            <div className="w-7/12 text-left px-3 py-3">
                                <h1 className="text-blue-500 font-bold text-4xl">3</h1>
                                <p className="text-gray-200 mb-1 text-xs">Projects Finished</p>
                            </div>
                        </div>
                    </div>

                    {/* Coffees */}
                    <div className="   md:w-1/4 mx-auto">
                        <div className="flex">
                            <div className="w-5/12 text-right text-white border-r py-3 flex items-center justify-end">
                                <div className="self-center mr-3">
                                    <GiCoffeeCup size={65} />
                                </div>
                            </div>
                            <div className="w-7/12 text-left px-3 py-3">
                                <h1 className="text-blue-500 font-bold text-4xl">600+</h1>
                                <p className="text-gray-200 mb-1 text-xs">Coffees Consumed</p>
                            </div>
                        </div>
                    </div>

                    {/* Nights spent */}
                    <div className="   md:w-1/4 mx-auto">
                        <div className="flex">
                            <div className="w-5/12 text-right text-white border-r py-3 flex items-center justify-end">
                                <div className="self-center mr-3">
                                    <MdOutlineBedtimeOff size={65} />
                                </div>
                            </div>
                            <div className="w-7/12 text-left px-3 py-3">
                                <h1 className="text-blue-500 font-bold text-4xl">154</h1>
                                <p className="text-gray-200 mb-1 text-xs">Nights Spent Up</p>
                            </div>
                        </div>
                    </div>
                </div>
        </div>
    )
}

export default DSHours