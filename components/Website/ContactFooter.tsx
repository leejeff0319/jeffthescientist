import React from 'react';
import {sendEmail} from "@/actions/sendEmail"
import ContactFooterBtn from '@/components/Website/ContactFooterBtn';
import toast from "react-hot-toast"

interface ContactFooterProps {
    isDark: boolean;
}

const ContactFooter: React.FC<ContactFooterProps> = ({ isDark }) => {
    
    return (
        <div className={`container mx-auto py-10 `}>
            <div className="flex flex-wrap -mx-4 justify-center">
                <div className="w-full lg:w-2/3 px-4">
                    <div style = {{background:`${isDark ? '#2C2F31' : 'white'}`}}className={`p-6 rounded shadow-2xl`}>
                        <h4 className={`text-xl font-bold mb-1 ${isDark ? 'text-white' : 'text-black'}`}>Do you have any recommendations/feedbacks?</h4>
                        <p className={` text-xs font-bold mb-4 ${isDark ? 'text-white' : 'text-black'}`}>Please let me know where I can improve on!</p>
                        <form action={async (formData) =>{
                            const {data, error} = await sendEmail(formData);
                            if (error) {
                                toast.error(error);
                                return;
                            }

                            toast.success("Email sent successfully!");
                        }}>
                            <div className="mb-4">
                                <input style={{ backgroundColor: isDark ? '#2C2F31' : 'white', color: isDark ? 'white' : 'black' }}
                                className="w-full p-3 border rounded" 
                                name="senderName"
                                type="text" 
                                maxLength={100}
                                placeholder="Name" 
                                required />
                            </div>
                            <div className="mb-4">
                                <input 
                                style={{ backgroundColor: isDark ? '#2C2F31' : 'white', color: isDark ? 'white' : 'black' }}
                                className="w-full p-3 border rounded" 
                                name="senderEmail"
                                type="email"
                                maxLength={100} 
                                placeholder="Email" 
                                required />
                            </div>
                            <div className="mb-4">
                                <textarea
                                    style={{ backgroundColor: isDark ? '#2C2F31' : 'white', color: isDark ? 'white' : 'black' }}
                                    className="w-full p-3 border rounded placeholder-current"
                                    name="senderMessage"
                                    placeholder="Message"
                                    maxLength={10000}
                                    rows={7}
                                    required
                                ></textarea>
                            </div>
                            <ContactFooterBtn isDark={isDark}/>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ContactFooter;