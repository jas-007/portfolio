'use client';

import React, { useEffect, useState } from 'react';
import Link from 'next/link';

const Navbar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    useEffect(() => {
        const closeMenu = (e) => {
            if (!e.target.closest('.hamburger') && !e.target.closest('.dropdown-menu')) {
                setIsMenuOpen(false);
                document.body.classList.remove('dropdown-open');
            }
        };

        document.addEventListener('click', closeMenu);
        return () => {
            document.removeEventListener('click', closeMenu);
            document.body.classList.remove('dropdown-open');
        };
    }, []);

    const toggleMenu = (e) => {
        e.stopPropagation();
        setIsMenuOpen(!isMenuOpen);
        document.body.classList.toggle('dropdown-open', !isMenuOpen);
    };

    return (
        <nav className="navbar">
            <div className="nav-content">
                <Link href="/" className="logo">
                    <span className="logo-text">Jasper.it</span>
                </Link>
                <div className="hamburger" onClick={toggleMenu}>
                    {!isMenuOpen ? (
                        <div className="hamburger-lines">
                            <span></span>
                            <span></span>
                        </div>
                    ) : (
                        <div className="dropdown-menu">
                            <div className="close-icon">
                                <span></span>
                                <span></span>
                            </div>
                            <Link href="/#about" onClick={() => setIsMenuOpen(false)}>About</Link>
                            <Link href="/#expertise" onClick={() => setIsMenuOpen(false)}>Expertise</Link>
                            <Link href="/work" onClick={() => setIsMenuOpen(false)}>Work</Link>
                            <Link href="/projects" onClick={() => setIsMenuOpen(false)}>Projects</Link>
                            <Link href="/#contact" onClick={() => setIsMenuOpen(false)}>Contact</Link>
                            <div className="social-links">
                                <div className="social-icon">
                                    <a href="https://linkedin.com/your-profile" target="_blank" rel="noopener noreferrer">
                                        <i className="fab fa-linkedin"></i>
                                    </a>
                                </div>
                                <div className="social-icon">
                                    <a href="https://instagram.com/your-profile" target="_blank" rel="noopener noreferrer">
                                        <i className="fab fa-instagram"></i>
                                    </a>
                                </div>
                                <div className="social-icon">
                                    <a href="https://upwork.com/your-profile" target="_blank" rel="noopener noreferrer">
                                        <i className="fas fa-briefcase"></i>
                                    </a>
                                </div>
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </nav>
    );
};

export default Navbar; 