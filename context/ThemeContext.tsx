'use client';

import { createContext, useState, ReactNode, useEffect } from 'react';

interface ThemeContextType {
    theme: string;
    setTheme: (theme: string) => void;
}

export const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export const ThemeProvider = ({ children }: { children: ReactNode }) => {
    const [theme, setTheme] = useState<string>('light');

    useEffect(() => {
        document.documentElement.setAttribute('data-theme', theme); // Ubah atribut data-theme
    }, [theme]);

    return (
        <ThemeContext.Provider value={{ theme, setTheme }}>
            {children}
        </ThemeContext.Provider>
    );
};
