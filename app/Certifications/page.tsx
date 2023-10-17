"use client";
import { useState } from 'react';
import NavbarPages from '@/components/NavbarPages';
import Image from 'next/image';

export default function Certifications() {
    return (
        <div style={{ background: 'linear-gradient(to bottom, #19556A, #111622)' }} className='h-screen'>
            <div className="hero relative">
                <Image
                    src="/CertsHero.png"
                    alt="Certifications Hero"
                    width={1600}
                    height={600}
                    layout="responsive"
                    className="front-image object-cover move-up w-1/2 mx-auto"
                />
                <Image
                    src="/CertificationsPoppinsText.png"
                    alt="Certifications text"
                    width={1600}
                    height={600}
                    layout="responsive"
                    className="sectionName object-cover move-down w-1/2 mx-auto z-20" // added z-index
                />
            </div>
            <div className="absolute move-down"><NavbarPages /> </div>
        </div>

    );
}