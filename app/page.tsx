"use client"
import React, { useState } from 'react';
import SkyButton from '../components/SkyButton'
import Resume from '../components/Resume';
import DSResume from '../components/DSResume'; 

export default function Home() {
  
  return (
    <div className="bg-blue-100 min-h-screen">
      <div className="h-[37vh] flex justify-center">
        <div className="absolute w-full h-[30vh]">
          
          {/* Transition Button*/}
          <SkyButton />
          <div className="grid grid-cols-12 gap-4 mt-10">
            <div className="col-start-5 col-end-10">
              <Resume />
            </div>
          </div>
        </div>
      </div>    
    </div>
  )
}
