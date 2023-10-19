// NotesPage.tsx
import DSNotes from '@/components/DSNotes';
import React from 'react';


type NotesPageProps = {

};

const NotesPage: React.FC<NotesPageProps> = ({ }) => {
    return (
        <>
            <div className=" grid grid-cols-12 gap-4 mt-10">
                <div className="col-start-4 col-end-12">
                    <DSNotes />
                </div>
            </div>

        </>
    );
}

export default NotesPage;
