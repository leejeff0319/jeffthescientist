// NotesPage.tsx
import DSNotes from '@/components/Website/DSNotes';
import RSNotes from '@/components/Website/RSNotes';
import React from 'react';

type NotesPageProps = {
    isDarkTheme: boolean;
  };
  
  const NotesPage: React.FC<NotesPageProps> = ({ isDarkTheme }) => {
    const bgColor = isDarkTheme ? '#2C2F31' : 'rgb(219 234 254)';
    const textColor = isDarkTheme ? 'text-gray-200' : 'text-blue-500';
    return (
      <div className=" grid grid-cols-12 gap-4 mt-10">
        <div style={{ backgroundColor: bgColor }} className={`col-start-4 col-end-11 pb-10 rounded-md`}>
          <div className={`center-content text-3xl sm:3xl md:3xl lg:text-4xl 2xl:text-5xl ${textColor}`}><strong>Notes</strong></div>
          {isDarkTheme ? <DSNotes /> : <RSNotes />}
        </div>
      </div>
    );
  }
  
  export default NotesPage;
  
