import React from 'react';
import LocationCard from '../ui/LocationCard';
import { locationData } from '../../constants/locations'

const LocationSection = () => {
    return (
        <div className="h-[100vh] py-80 sm:px-4 px-16 mx-auto w-full items-center justify-center overflow-hidden bg-background md:shadow-xl relative">
            {/* Gradient Overlays */}
            <div className="absolute inset-y-0 left-0 w-1/2 bg-gradient-to-r from-[hsl(var(--background-light))] to-transparent dark:from-[hsl(var(--background-dark))] pointer-events-none z-10"></div>
            <div className="absolute inset-y-0 right-0 w-1/2 bg-gradient-to-l from-[hsl(var(--background-light))] to-transparent dark:from-[hsl(var(--background-dark))] pointer-events-none z-10"></div>

            {/* Carousel */}
            <div className="carousel relative rounded-box gap-4 max-w-xl flex min-w-[90%] cursor-grab items-center justify-center mx-auto z-0">
                {locationData.map((location, index) => (
                    <div key={index} className="carousel-item">
                        <LocationCard
                            title={location.title}
                            address={location.address}
                            src={location.src}
                            link={location.link}
                        />
                    </div>
                ))}
            </div>
        </div>
    );
}

export default LocationSection;
