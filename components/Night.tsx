"use client"
import React, { useState } from 'react';

interface NightProps {
  backgroundPosition: string;
}

function Night({ backgroundPosition }: NightProps) {
  return (
      <div className="bg-blue-100 h-[37vh] flex justify-center">
          <div className="absolute w-full h-[30vh]">
              <div 
                  className="background-image bg-no-repeat h-[40vh] transition-all duration-2000 ease-in-out" 
                  style={{ backgroundPosition: backgroundPosition }}
              />
          </div>
      </div>
  );
}


export default Night;