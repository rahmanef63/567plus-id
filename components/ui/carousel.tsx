"use client";
import React, { createContext, useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { IconArrowNarrowLeft, IconArrowNarrowRight } from "@tabler/icons-react";

interface CarouselProps {
    items: JSX.Element[];
}

interface CarouselContextProps {
    onCardClose: (index: number) => void;
    currentIndex: number;
}

export const CarouselContext = createContext<CarouselContextProps>({
    onCardClose: () => { },
    currentIndex: 0,
});

export const CarouselContextProvider = ({ children }: { children: React.ReactNode }) => {
    const [currentIndex, setCurrentIndex] = useState(0);

    const handleCardClose = (index: number) => {
        setCurrentIndex(index);
    };

    return (
        <CarouselContext.Provider value={{ onCardClose: handleCardClose, currentIndex }}>
            {children}
        </CarouselContext.Provider>
    );
};

export const Carousel = ({ items }: CarouselProps) => {
    const carouselRef = useRef<HTMLDivElement>(null);
    const [canScrollLeft, setCanScrollLeft] = useState(false);
    const [canScrollRight, setCanScrollRight] = useState(true);

    const checkScrollability = () => {
        if (carouselRef.current) {
            const { scrollLeft, scrollWidth, clientWidth } = carouselRef.current;
            setCanScrollLeft(scrollLeft > 0);
            setCanScrollRight(scrollLeft < scrollWidth - clientWidth);
        }
    };

    useEffect(() => {
        checkScrollability();
    }, []);

    const scrollLeft = () => {
        if (carouselRef.current) {
            carouselRef.current.scrollBy({ left: -300, behavior: "smooth" });
            checkScrollability();
        }
    };

    const scrollRight = () => {
        if (carouselRef.current) {
            carouselRef.current.scrollBy({ left: 300, behavior: "smooth" });
            checkScrollability();
        }
    };

    return (
        <div className="relative w-full">
            <div
                className="flex w-full overflow-x-scroll overscroll-x-auto py-10 md:py-20 scroll-smooth"
                ref={carouselRef}
                onScroll={checkScrollability}
            >
                <div className="flex flex-row justify-start gap-4 pl-4 max-w-7xl mx-auto">
                    {items.map((item, index) => (
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0, transition: { duration: 0.5, delay: 0.2 * index, ease: "easeOut" } }}
                            key={index}
                            className="last:pr-[5%] md:last:pr-[33%] rounded-3xl"
                        >
                            {item}
                        </motion.div>
                    ))}
                </div>
            </div>
            <div className="flex justify-end gap-2 mr-10">
                <button
                    className="relative z-40 h-10 w-10 rounded-full bg-gray-100 flex items-center justify-center disabled:opacity-50"
                    onClick={scrollLeft}
                    disabled={!canScrollLeft}
                >
                    <IconArrowNarrowLeft className="h-6 w-6 text-gray-500" />
                </button>
                <button
                    className="relative z-40 h-10 w-10 rounded-full bg-gray-100 flex items-center justify-center disabled:opacity-50"
                    onClick={scrollRight}
                    disabled={!canScrollRight}
                >
                    <IconArrowNarrowRight className="h-6 w-6 text-gray-500" />
                </button>
            </div>
        </div>
    );
};
