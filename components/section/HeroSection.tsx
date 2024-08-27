import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { HOMEPAGE } from '../../constants/constant'; // Importing the constant
import ButtonWithParticles from '../common/ButtonWithParticles';

const HeroSection: React.FC = () => {
    const { H1, DESCRIPTION, CTA_BUTTON, BACKGROUND_IMAGE } = HOMEPAGE.HERO_SECTION;

    return (
        <div className="hero min-h-screen relative bg-fixed">
            <Image
                src={BACKGROUND_IMAGE}
                alt="Hero Laundry"
                quality={75}
                priority
                fill
                style={{ objectFit: 'cover' }}
                className="bg-fixed z-0 opacity-75"
            />
            <div className="hero-content bg-opacity-60 z-10"></div>
            <div className="hero-content  text-center relative z-20">
                <div className=" max-w-md">
                    <h1 className="mb-5 text-5xl font-bold">{H1}</h1>
                    <p className="mb-5">{DESCRIPTION}</p>
                    <Link href="/" >
                        <ButtonWithParticles text={CTA_BUTTON} />
                    </Link>

                </div>
            </div>
        </div>
    );
};

export default HeroSection;
