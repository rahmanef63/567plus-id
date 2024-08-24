'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';

interface ClickableWithParticlesProps {
    children: React.ReactNode; // Accepts any clickable element
    className?: string; // Allow additional classes
}

const ClickableWithParticles: React.FC<ClickableWithParticlesProps> = ({ children, className }) => {
    const [particles, setParticles] = useState<number[]>([]);

    const handleClick = () => {
        const newParticles = Array.from({ length: 15 }, (_, i) => i); // Creates 15 particles
        setParticles(newParticles);

        // Remove particles after animation
        setTimeout(() => setParticles([]), 1000);
    };

    return (
        <div className={`relative inline-block ${className}`} onClick={handleClick}>
            {children}

            {particles.map((_, index) => (
                <motion.div
                    key={index}
                    className="absolute w-4 h-4 rounded-full bg-white opacity-50" // Particle style
                    style={{
                        top: '50%',
                        left: '50%',
                        transform: 'translate(-50%, -50%)', // Centered particle
                    }}
                    initial={{ opacity: 1, scale: 1 }}
                    animate={{
                        x: (Math.random() - 0.5) * 250, // Randomized movement
                        y: (Math.random() - 0.5) * 250,
                        opacity: 0,
                        scale: [1, 1.5, 0.7, 0], // Scaling animation
                    }}
                    transition={{
                        duration: 1,
                        ease: 'easeOut',
                    }}
                />
            ))}
        </div>
    );
};

export default ClickableWithParticles;
