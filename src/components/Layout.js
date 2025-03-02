'use client';

import ThemeToggle from './ThemeToggle';

export default function Layout({ children }) {
    return (
        <div className="layout">
            <ThemeToggle />
            {children}
        </div>
    );
} 