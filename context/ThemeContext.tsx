'use client';

import { createContext, useState, ReactNode, Dispatch, SetStateAction, useEffect } from 'react';

interface ThemeContextType {
    theme: string;
    setTheme: Dispatch<SetStateAction<string>>; // Correct type for setTheme
}

export const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export const ThemeProvider = ({ children }: { children: ReactNode }) => {
    const [theme, setTheme] = useState<string>('putih');

    useEffect(() => {
        // Only access localStorage on the client
        if (typeof window !== 'undefined') {
            const savedTheme = localStorage.getItem('theme') || 'putih';
            setTheme(savedTheme);
        }
    }, []);

    useEffect(() => {
        if (typeof window !== 'undefined') {
            localStorage.setItem('theme', theme);
            document.querySelector('html')?.setAttribute('data-theme', theme);
        }
    }, [theme]);

    return (
        <ThemeContext.Provider value={{ theme, setTheme }}>
            {children}
        </ThemeContext.Provider>
    );
};
