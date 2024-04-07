import React from 'react'
import { FaPaperPlane } from 'react-icons/fa';
import { experimental_useFormStatus as useFormStatus } from 'react-dom';

interface ContactFooterBtnProps {
  isDark: boolean;
}

export default function ContactFooterBtn({ isDark }: ContactFooterBtnProps) {
  const {pending} = useFormStatus();
  return (
    <button 
      type="submit" 
      className={`group transition-all active:scale-105 flex items-center justify-center w-full p-3 disabled:bg-opacity-65 text-white ${isDark ? 'bg-black' : 'bg-blue-500'} rounded`} 
      disabled={pending}
    >
      {
        pending ? (<div className="h-5 w-5 animate-spin rounded-full border-b-2"></div>) 
        : (
            <>Thank you! <FaPaperPlane className="ml-2 transition-all group-hover:translate-x-1 group-hover:-translate-y-1" /></>
          )
      }
    </button>
    
  )
}



