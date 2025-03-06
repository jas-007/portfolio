'use client';

import Link from 'next/link';
import Image from 'next/image';
import Navbar from '../../../components/Navbar';

// This will be replaced with your actual project data
const projectData = {
    title: "Rentela.ca",
    description: "Rentela.ca is a comprehensive rental property management platform designed to streamline the rental process for both landlords and tenants. The platform offers features like property listings, tenant screening, digital lease signing, and automated rent collection, making property management more efficient and user-friendly.",
    technologies: [
        "React",
        "Next.js",
        "Node.js",
        "MongoDB",
        "Express",
        "AWS S3",
        "Stripe API",
        "SendGrid",
        "JWT Authentication"
    ],
    challenges: [
        "Real-time Updates: Implemented WebSocket integration for real-time notifications and updates between landlords and tenants, ensuring immediate communication for maintenance requests and rent payments.",
        "Payment Processing: Developed a secure payment gateway integration using Stripe API for handling rent payments, deposits, and automated recurring payments while ensuring PCI compliance.",
        "Document Management: Created a robust document management system for storing and processing lease agreements, maintenance records, and tenant applications with AWS S3 integration.",
        "User Authentication: Implemented a secure multi-role authentication system with different access levels for landlords, tenants, and property managers."
    ],
    features: [
        "Automated rent collection and payment processing",
        "Digital lease creation and e-signing functionality",
        "Property listing management with photo uploads",
        "Tenant screening and application processing",
        "Maintenance request tracking system",
        "Financial reporting and analytics dashboard",
        "Automated email notifications and reminders",
        "Mobile-responsive design for on-the-go access"
    ],
    images: [
        "/assets/images/rentela-home.png",
        "/assets/images/rentela-contact.png"
    ],
    liveUrl: "https://rentela.ca",
    githubUrl: "https://github.com/yourusername/rentela",
    year: "2023",
    duration: "6 months",
    role: "Lead Full Stack Developer"
};

export default function ProjectPage() {
    return (
        <div className="portfolio-container">
            <Navbar />
            <main className="project-detail-section">
                <div className="project-header">
                    <h1>{projectData.title}</h1>
                    <div className="project-meta">
                        <span>{projectData.year}</span>
                        <span>{projectData.duration}</span>
                        <span>{projectData.role}</span>
                    </div>
                </div>

                <div className="project-content">
                    <div className="project-main-image">
                        <Image
                            src={projectData.images[0]}
                            alt={projectData.title}
                            width={1200}
                            height={675}
                            layout="responsive"
                        />
                    </div>

                    <div className="project-info">
                        <section className="info-section">
                            <h2>Overview</h2>
                            <p>{projectData.description}</p>
                        </section>

                        <section className="info-section">
                            <h2>Technologies Used</h2>
                            <div className="tech-stack">
                                {projectData.technologies.map((tech, index) => (
                                    <span key={index} className="tech-tag">{tech}</span>
                                ))}
                            </div>
                        </section>

                        <section className="info-section">
                            <h2>Key Features</h2>
                            <ul className="feature-list">
                                {projectData.features.map((feature, index) => (
                                    <li key={index}>{feature}</li>
                                ))}
                            </ul>
                        </section>

                        <section className="info-section">
                            <h2>Challenges & Solutions</h2>
                            <div className="challenges-list">
                                {projectData.challenges.map((challenge, index) => (
                                    <div key={index} className="challenge-item">
                                        <p>{challenge}</p>
                                    </div>
                                ))}
                            </div>
                        </section>
                    </div>

                    <div className="project-links">
                        <a href={projectData.liveUrl} target="_blank" rel="noopener noreferrer" className="project-link">
                            <i className="fas fa-external-link-alt"></i> Visit Live Site
                        </a>
                        <a href={projectData.githubUrl} target="_blank" rel="noopener noreferrer" className="project-link">
                            <i className="fab fa-github"></i> View Source
                        </a>
                    </div>
                </div>
            </main>
        </div>
    );
} 