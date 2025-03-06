'use client';

import Link from 'next/link';
import Image from 'next/image';
import Navbar from '../../../components/Navbar';

const projectData = {
    title: "HabitHero",
    description: "HabitHero is a gamified habit tracking application that transforms personal development into an engaging adventure. Users become heroes on a quest to build and maintain positive habits, earning experience points, unlocking achievements, and progressing through levels as they consistently complete their daily habits.",
    technologies: [
        "React Native",
        "Firebase",
        "Node.js",
        "Express",
        "MongoDB",
        "Redux",
        "Jest",
        "GitHub Actions"
    ],
    challenges: [
        "User Engagement: Implemented a comprehensive gamification system with experience points, levels, and achievements to keep users motivated and engaged in their habit-building journey.",
        "Real-time Synchronization: Developed a robust real-time data synchronization system using Firebase to ensure seamless updates across devices and instant progress tracking.",
        "Habit Tracking Algorithm: Created an intelligent habit tracking system that adapts to user behavior patterns and provides personalized recommendations for habit formation.",
        "Cross-platform Development: Built a consistent and performant experience across both iOS and Android platforms using React Native while maintaining platform-specific design guidelines."
    ],
    features: [
        "Gamified habit tracking with XP and level progression",
        "Customizable habit creation and scheduling",
        "Achievement system with unlockable badges",
        "Daily streaks and progress visualization",
        "Social features for connecting with other habit heroes",
        "Detailed analytics and habit insights",
        "Push notifications and reminders",
        "Cross-platform compatibility (iOS & Android)"
    ],
    images: [
        "/assets/images/habithero-home.png",
        "/assets/images/habithero-app.png"
    ],
    liveUrl: "https://landoncolburn.github.io/a01-g10-website/",
    githubUrl: "https://github.com/landoncolburn/a01-g10-website",
    year: "2023",
    duration: "4 months",
    role: "Full Stack Developer"
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

                        <section className="info-section">
                            <h2>App Screenshots</h2>
                            <div className="project-main-image">
                                <Image
                                    src={projectData.images[1]}
                                    alt="HabitHero App Interface"
                                    width={1200}
                                    height={675}
                                    layout="responsive"
                                />
                            </div>
                        </section>
                    </div>

                    <div className="project-links">
                        <a href={projectData.liveUrl} target="_blank" rel="noopener noreferrer" className="project-link">
                            <i className="fas fa-external-link-alt"></i> Visit Project
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