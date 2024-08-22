import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { HOMEPAGE } from '../../constants/constant'; // Importing the constant

const HeroSection: React.FC = () => {
    const { H1, DESCRIPTION, CTA_BUTTON, BACKGROUND_IMAGE } = HOMEPAGE.HERO_SECTION;

    return (
        <div className="hero min-h-screen relative">
            {/* Using Image in the background with absolute positioning */}
            <Image
                src={BACKGROUND_IMAGE}
                alt="Hero Laundry"
                quality={75}
                priority
                fill
                style={{ objectFit: 'cover' }}
                className="z-[-1]"
            />
            <div className="hero-overlay bg-opacity-60"></div>
            <div className="hero-content text-neutral-content text-center relative z-10">
                <div className="max-w-md">
                    <h1 className="mb-5 text-5xl font-bold">{H1}</h1>
                    <p className="mb-5">{DESCRIPTION}</p>
                    {/* Using Link without <a> tag */}
                    <Link href="/get-started">
                        <button className="btn">{CTA_BUTTON}</button>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default HeroSection;
