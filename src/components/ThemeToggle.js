'use client';

import { useEffect, useState } from 'react';

const ThemeToggle = () => {
    const [isDark, setIsDark] = useState(true);

    useEffect(() => {
        // Check for saved theme or system preference
        const savedTheme = localStorage.getItem('theme') || 
            (window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light');
        
        document.documentElement.setAttribute('data-theme', savedTheme);
        setIsDark(savedTheme === 'dark');

        // Apply theme to body
        document.body.style.backgroundColor = savedTheme === 'dark' ? '#000000' : '#ffffff';
    }, []);

    const toggleTheme = () => {
        const newTheme = isDark ? 'light' : 'dark';
        setIsDark(!isDark);
        document.documentElement.setAttribute('data-theme', newTheme);
        localStorage.setItem('theme', newTheme);
        
        // Apply theme to body
        document.body.style.backgroundColor = newTheme === 'dark' ? '#000000' : '#ffffff';
    };

    return (
        <button 
            className="theme-toggle" 
            onClick={toggleTheme}
            aria-label="Toggle theme"
            data-theme={isDark ? 'dark' : 'light'}
        >
            <i className="fas fa-sun" title="Switch to light mode" />
            <i className="fas fa-moon" title="Switch to dark mode" />
        </button>
    );
};

export default ThemeToggle; 