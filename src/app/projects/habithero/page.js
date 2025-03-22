'use client';

import Link from 'next/link';
import Image from 'next/image';
import Navbar from '../../../components/Navbar';

const projectData = {
    title: "HabitHero",
    year: "2023",
    duration: "4 months",
    role: "Android Developer",
    overview: "HabitHero is a gamified habit tracking Android application that transforms personal development into an engaging adventure. As a developer, I designed and implemented the core functionality that allows users to track their habits while experiencing game-like progression through experience points, achievements, and level-ups.",
    liveUrl: "https://play.google.com/store/apps/details?id=com.habithero",
    nextProject: "/projects/proconnect",
    githubUrl: "https://github.com/yourusername/habithero",
    
    research: {
        title: "Research & Discovery",
        questions: [
            {
                question: "How can we make habit tracking more engaging for users?",
                findings: "Traditional habit tracking apps often lead to user abandonment due to lack of motivation.",
                solution: "Implemented a gamification system that rewards consistency and provides visual feedback for progress."
            },
            {
                question: "What's the optimal way to handle offline functionality?",
                findings: "Users expect the app to work seamlessly regardless of network connectivity.",
                solution: "Developed an offline-first architecture using Room database with background sync capabilities."
            },
            {
                question: "How can we encourage long-term user engagement?",
                findings: "Users need both short-term and long-term motivation to maintain habits.",
                solution: "Created a multi-tiered reward system with daily streaks, achievements, and level progression."
            }
        ]
    },

    userTesting: {
        title: "User Testing Insights",
        findings: [
            {
                issue: "Initial loading time was too long",
                impact: "Users were getting impatient during app startup",
                solution: "Implemented lazy loading and optimized database queries"
            },
            {
                issue: "Notification system was too aggressive",
                impact: "Users were turning off notifications completely",
                solution: "Created smart notification system with user-defined quiet hours and frequency"
            },
            {
                issue: "Achievement unlocks weren't noticeable enough",
                impact: "Users were missing their accomplishments",
                solution: "Added animated celebrations and persistent achievement badges"
            }
        ]
    },

    challenges: [
        {
            title: "Local Data Persistence",
            description: "Users needed reliable offline functionality while maintaining data integrity.",
            solution: "Implemented a robust SQLite database using Room persistence library with background sync capabilities."
        },
        {
            title: "Performance Optimization",
            description: "App performance was crucial for user retention and engagement.",
            solution: "Enhanced app performance by implementing efficient data structures and optimizing database queries."
        },
        {
            title: "User Engagement",
            description: "Traditional habit tracking apps often fail to maintain user interest.",
            solution: "Developed a comprehensive reward system using custom Android animations and Material Design components."
        }
    ],

    images: [
        "/assets/images/habithero/hero.png",
        "/assets/images/habithero/wireframes.png",
        "/assets/images/habithero/high-fidelity.png",
        "/assets/images/habithero/final-design.png",
        "/assets/images/habithero/mobile-views.png"
    ],

    toolsAndTech: {
        development: ["Android SDK", "Java", "Kotlin", "SQLite", "Room Database"],
        architecture: ["MVVM", "Clean Architecture", "Repository Pattern", "WorkManager"],
        testing: ["JUnit", "Espresso", "Firebase Test Lab", "Android Studio Profilers"]
    },
    deliverables: [
        "Native Android Application",
        "Offline-first Architecture",
        "Custom Animation Library",
        "Analytics Dashboard",
        "CI/CD Pipeline"
    ]
};

export default function ProjectPage() {
    return (
        <div className="portfolio-container">
            <Navbar />
            <main className="project-detail-section">
                {/* Hero Image */}
                <div className="project-hero">
                    <Image
                        src={projectData.images[0]}
                        alt="HabitHero App"
                        width={1920}
                        height={1080}
                        priority
                        className="hero-image"
                    />
                </div>

                <div className="project-content">
                    <div className="project-header">
                        <div className="title-with-link">
                            <h1>{projectData.title}</h1>
                            {projectData.liveUrl && (
                                <a href={projectData.liveUrl} target="_blank" rel="noopener noreferrer" className="live-link">
                                    <i className="fas fa-external-link-alt"></i>
                                </a>
                            )}
                        </div>
                        <div className="project-meta">
                            <span>{projectData.year}</span>
                            <span>{projectData.duration}</span>
                            <span>{projectData.role}</span>
                        </div>
                    </div>

                    <div className="project-overview">
                        <h2>Overview</h2>
                        <p>{projectData.overview}</p>
                    </div>

                    <div className="tools-section">
                        <h2>Tools & Technologies</h2>
                        <div className="tools-grid">
                            <div className="tool-category">
                                <h3>Development</h3>
                                <ul>
                                    {projectData.toolsAndTech.development.map((tool, index) => (
                                        <li key={index}>{tool}</li>
                                    ))}
                                </ul>
                            </div>
                            <div className="tool-category">
                                <h3>Architecture</h3>
                                <ul>
                                    {projectData.toolsAndTech.architecture.map((tool, index) => (
                                        <li key={index}>{tool}</li>
                                    ))}
                                </ul>
                            </div>
                            <div className="tool-category">
                                <h3>Testing & Quality</h3>
                                <ul>
                                    {projectData.toolsAndTech.testing.map((tool, index) => (
                                        <li key={index}>{tool}</li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    </div>

                    <div className="research-section">
                        <h2>Research & Discovery</h2>
                        <div className="research-questions">
                            {projectData.research.questions.map((item, index) => (
                                <div key={index} className="research-card">
                                    <h3>Key Question {index + 1}</h3>
                                    <p className="question">{item.question}</p>
                                    <p className="findings">{item.findings}</p>
                                    <p className="solution">Solution: {item.solution}</p>
                                </div>
                            ))}
                        </div>
                    </div>

                    <div className="wireframes-section">
                        <h2>Initial Wireframes</h2>
                        <div className="wireframe-image">
                            <Image
                                src={projectData.images[1]}
                                alt="HabitHero Wireframes"
                                width={1200}
                                height={800}
                                className="wireframe"
                            />
                        </div>
                    </div>

                    <div className="wireframes-section">
                        <h2>High-Fidelity Design</h2>
                        <div className="wireframe-image">
                            <Image
                                src={projectData.images[2]}
                                alt="HabitHero High Fidelity Design"
                                width={1200}
                                height={800}
                                className="wireframe"
                            />
                        </div>
                    </div>

                    <div className="testing-section">
                        <h2>User Testing & Iterations</h2>
                        <div className="testing-findings">
                            {projectData.userTesting.findings.map((finding, index) => (
                                <div key={index} className="finding-card">
                                    <h3>Issue {index + 1}</h3>
                                    <p className="issue">{finding.issue}</p>
                                    <p className="impact">Impact: {finding.impact}</p>
                                    <p className="solution">Resolution: {finding.solution}</p>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Navigation Buttons */}
                    <div className="project-navigation">
                        <Link href="/projects" className="nav-button">
                            <i className="fas fa-arrow-left"></i> All Projects
                        </Link>
                        <Link href={projectData.nextProject} className="nav-button">
                            Next Project <i className="fas fa-arrow-right"></i>
                        </Link>
                    </div>
                </div>

                {/* Footer */}
                <footer className="project-footer">
                    <div className="footer-content">
                        <div className="footer-text">
                            <h2>JASPREET</h2>
                            <p>Winnipeg, Manitoba, CA</p>
                        </div>
                        <div className="footer-contact">
                            <a href="mailto:jasper.it.65@gmail.com">jasper.it.65@gmail.com</a>
                            <a href="tel:4313384514">431.338.4514</a>
                        </div>
                        <div className="social-links">
                            <a href="https://www.instagram.com/jasper.it.65" target="_blank" rel="noopener noreferrer">
                                <i className="fab fa-instagram"></i>
                            </a>
                            <a href="https://www.linkedin.com/in/jaspreetcing/" target="_blank" rel="noopener noreferrer">
                                <i className="fab fa-linkedin-in"></i>
                            </a>
                            <a href="https://github.com/jas-007" target="_blank" rel="noopener noreferrer">
                                <i className="fab fa-github"></i>
                            </a>
                        </div>
                    </div>
                </footer>
            </main>
        </div>
    );
} 