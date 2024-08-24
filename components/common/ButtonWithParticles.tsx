'use client';

import { useState } from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface ButtonWithParticlesProps {
    text: string;
    className?: string;
}

const ButtonWithParticles: React.FC<ButtonWithParticlesProps> = ({ text, className }) => {
    const [particles, setParticles] = useState<number[]>([]);

    const handleClick = () => {
        const newParticles = Array.from({ length: 15 }, (_, i) => i); // Increased number of particles
        setParticles(newParticles);

        // Remove the particles after the animation is done (1 second)
        setTimeout(() => setParticles([]), 1000);
    };

    return (
        <div className="relative flex items-center justify-center ">
            <motion.button
                className={cn(
                    "relative rounded-lg px-6 py-2 font-medium backdrop-blur-xl transition-[box-shadow] duration-300 ease-in-out hover:shadow dark:bg-[radial-gradient(circle_at_50%_0%,hsl(var(--primary)/10%)_0%,transparent_60%)] dark:hover:shadow-[0_0_20px_hsl(var(--primary)/10%)]",
                    className,
                )}
                onClick={handleClick}
                whileTap={{ scale: 0.95 }}
            >
                {text}
            </motion.button>

            {particles.map((_, index) => (
                <motion.div
                    key={index}
                    className="absolute w-5 h-5 rounded-full bg-white opacity-50" // Larger particles with inherited color
                    style={{
                        top: "50%",
                        left: "50%",
                        transform: "translate(-50%, -50%)", // Position particles at button border center
                    }}
                    initial={{ opacity: 1, scale: 1 }}
                    animate={{
                        x: (Math.random() - 0.5) * 250, // Increased spread
                        y: (Math.random() - 0.5) * 250,
                        opacity: 0,
                        scale: [1, 1.5, 0.7, 0],
                    }}
                    transition={{
                        duration: 1,
                        ease: "easeOut",
                    }}
                />
            ))}
        </div>
    );
};

export default ButtonWithParticles;
