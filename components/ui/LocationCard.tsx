import Image from 'next/image';
import React from 'react'
import ButtonWithParticles from '../common/ButtonWithParticles';
import Link from 'next/link';

interface LocationProps {
    title: string;
    address: string;
    src: string;
    link: string
}

const LocationCard: React.FC<LocationProps> = ({ title, address, src, link }) => {
    return (
        <div className="card card-normal bg-base-100 h-[full] w-96 shadow-xl">
            <figure>
                <Image
                    height={700}
                    width={400}
                    src={src}
                    alt={title}

                />
            </figure>
            <div className="card-body backdrop-blur-sm bg-white/30 opacity-75">
                <h2 className="card-title text-wrap">{title}</h2>
                <p>{address}</p>
                <Link className="card-actions justify-end" href={link}>
                    <ButtonWithParticles text="Lihat Lokasi" />
                </Link>
            </div>
        </div>
    )
}

export default LocationCard;
