import Image from 'next/image';
import React from 'react'

interface LocationProps {
    title: string;
    address: string;
    src: string;
}

const LocationCard: React.FC<LocationProps> = ({ title, address, src }) => {
    return (
        <div className="card card-compact bg-base-100 h-[full] w-96 shadow-xl">
            <figure>
                <Image
                    src={src}
                    alt={title}
                />
            </figure>
            <div className="card-body backdrop-blur-sm bg-white/30 opacity-75">
                <h2 className="card-title">{title}</h2>
                <p>{address}</p>
                <div className="card-actions justify-end">
                    <button className="btn btn-primary">Lihat Lokasi</button>
                </div>
            </div>
        </div>
    )
}

export default LocationCard;
