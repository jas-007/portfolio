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
                        <Link 
                            key={project.id}
                            href={project.detailsUrl}
                            className="project-tile"
                            onMouseEnter={() => setHoveredProject(project.id)}
                            onMouseLeave={() => setHoveredProject(null)}
                        >
                            <div className="project-image">
                                <Image
                                    src={project.image}
                                    alt={project.title}
                                    width={800}
                                    height={450}
                                    layout="responsive"
                                />
                            </div>
                            <div className={`project-overlay ${hoveredProject === project.id ? 'active' : ''}`}>
                                <h3>{project.title}</h3>
                                <p className="project-description">{project.description}</p>
                            </div>
                        </Link>
                    ))}
                </div>
            </main>
        </div>
    );
} 