'use client';

import Projects from '../../components/Projects';

export default function ProjectsPage() {
    return (
        <div className="portfolio-container">
            <nav className="navbar">
                <div className="nav-content">
                    <div className="logo">Jasper.it</div>
                </div>
            </nav>
            <Projects />
        </div>
    );
} 