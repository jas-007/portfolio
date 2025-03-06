'use client';

import Link from 'next/link';
import Image from 'next/image';
import Navbar from '../../components/Navbar';
import { useState } from 'react';
import { projects } from '../../data/projects';

export default function ProjectsPage() {
    const [hoveredProject, setHoveredProject] = useState(null);

    return (
        <div className="portfolio-container">
            <Navbar />
            <main className="projects-section">
                <div className="projects-grid">
                    {projects.map((project) => (
                        <div 
                            key={project.id}
                            className="project-tile"
                            onMouseEnter={() => setHoveredProject(project.id)}
                            onMouseLeave={() => setHoveredProject(null)}
                        >
                            <div className="project-image">
                                <Image
                                    src={project.image}
                                    alt={project.title}
                                    width={400}
                                    height={300}
                                    layout="responsive"
                                />
                            </div>
                            <div className={`project-overlay ${hoveredProject === project.id ? 'active' : ''}`}>
                                <h3>{project.title}</h3>
                                <div className="project-actions">
                                    <Link href={project.detailsUrl} className="action-button">
                                        More Info
                                    </Link>
                                    <Link href={project.caseStudyUrl} className="action-button">
                                        Case Study
                                    </Link>
                                    <a 
                                        href={project.liveUrl} 
                                        target="_blank" 
                                        rel="noopener noreferrer" 
                                        className="action-button"
                                    >
                                        Visit Site
                                    </a>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </main>
        </div>
    );
} 