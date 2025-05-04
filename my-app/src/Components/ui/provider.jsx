// src/components/ui/provider.jsx
import React from 'react';
import { ThemeProvider } from 'next-themes'; // ספריה ששולטת על theme (בהיר/כהה)

export const Provider = ({ children }) => {
    return (
        <ThemeProvider attribute="class" defaultTheme="light" enableSystem={false}>
            {children}
        </ThemeProvider>
    );
};