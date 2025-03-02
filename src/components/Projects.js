'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useState } from 'react';

const projects = [
    {
        id: 1,
        title: "RENETLA INC.",
        image: "/assets/images/rentela-square.jpg",
        description: "Modern portfolio website built with Next.js and TailwindCSS",
        caseStudyUrl: "/case-studies/portfolio",
        projectUrl: "https://rentela.ca",
        detailsUrl: "/projects/portfolio"
    },
    {
        id: 2, 
        title: "ProConnect",
        image: "/assets/images/ecommerce.jpg",
        description: "Full-stack e-commerce solution with React and Node.js",
        caseStudyUrl: "/case-studies/ecommerce",
        projectUrl: "https://your-ecommerce-url.com",
        detailsUrl: "/projects/ecommerce"
    },
    // Add more projects as needed
];

export default function Projects() {
    const [hoveredProject, setHoveredProject] = useState(null);

    return (
        <section className="projects-section">
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
                                layout="fill"
                                objectFit="cover"
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
                                <a href={project.projectUrl} target="_blank" rel="noopener noreferrer" className="action-button">
                                    Visit Site
                                </a>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
} 