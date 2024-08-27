import React from 'react';
import LocationCard from '../ui/LocationCard';
import { locationData } from '../../constants/locations'

const LocationSection = () => {
    return (
        <div className="h-[100vh] py-80 sm:px-4">
            <div className="carousel rounded-box gap-4 max-w-xl flex min-w-[90%] px-16 mx-auto">
                {locationData.map((location, index) => (
                    <div key={index} className="carousel-item">
                        <LocationCard
                            title={location.title}
                            address={location.address}
                            src={location.src}
                        />
                    </div>
                ))}
                <div className="w-1/3 bg-gradient-to-r from-[hsl(var(--background-light))] dark:from-[hsl(var(--background-dark))]"></div>
                <div className="w-1/3 bg-gradient-to-l from-[hsl(var(--background-light))] dark:from-[hsl(var(--background-dark))]"></div>
            </div>
        </div>
    );
}

export default LocationSection;
