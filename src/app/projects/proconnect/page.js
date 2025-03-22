'use client';

import Link from 'next/link';
import Image from 'next/image';
import Navbar from '../../../components/Navbar';

const projectData = {
    title: "ProConnect",
    year: "2023",
    duration: "3 months",
    role: "Full Stack Developer",
    overview: "ProConnect is a comprehensive platform connecting users with trusted healthcare professionals. The platform streamlines the process of finding, booking, and managing healthcare services through an intuitive interface and robust backend system.",
    liveUrl: "https://proconnect-puce.vercel.app",
    nextProject: "/projects/rentela",
    githubUrl: "https://github.com/yourusername/proconnect",
    
    research: {
        title: "Research & Discovery",
        questions: [
            {
                question: "How can we simplify the process of finding and booking healthcare professionals?",
                findings: "Users found existing platforms complicated and time-consuming to navigate through multiple service providers.",
                solution: "Implemented an intuitive search and filter system with real-time availability and instant booking capabilities."
            },
            {
                question: "What factors build trust between users and healthcare professionals?",
                findings: "Verified credentials, reviews, and transparent pricing were key factors in user decision-making.",
                solution: "Developed a comprehensive verification system and detailed professional profiles with ratings and reviews."
            },
            {
                question: "How can we streamline the scheduling and management process?",
                findings: "Both users and professionals needed a simple way to manage appointments and communications.",
                solution: "Created a unified dashboard for appointment management, reminders, and secure messaging."
            }
        ]
    },

    userTesting: {
        title: "User Testing Insights",
        findings: [
            {
                issue: "Service search results weren't relevant enough",
                impact: "Users spent too much time finding the right professional",
                solution: "Enhanced search algorithm with filters for specialization, location, and availability"
            },
            {
                issue: "Booking process had too many steps",
                impact: "High drop-off rate during booking flow",
                solution: "Streamlined booking to a 3-step process with progress indicators"
            },
            {
                issue: "Professional profiles lacked important information",
                impact: "Users weren't confident in making booking decisions",
                solution: "Added detailed credentials, specializations, and verified reviews sections"
            }
        ]
    },

    challenges: [
        {
            title: "Real-time Availability",
            description: "Managing real-time scheduling across different time zones and provider calendars.",
            solution: "Implemented a sophisticated calendar system with real-time sync and conflict resolution."
        },
        {
            title: "Trust & Safety",
            description: "Ensuring the platform maintains high standards for healthcare professional verification.",
            solution: "Developed a robust verification system including credential checks, background verification, and user reviews."
        },
        {
            title: "Payment Processing",
            description: "Handling secure payments and managing different service pricing models.",
            solution: "Integrated a secure payment gateway with support for multiple payment methods and automated invoicing."
        }
    ],

    images: [
        "/assets/images/proconnect/hero1.png",
        "/assets/images/proconnect/wireframes.png",
        "/assets/images/proconnect/high-fidelity.png",
        "/assets/images/proconnect/final-design.png",
        "/assets/images/proconnect/mobile-views.png"
    ],

    toolsAndTech: {
        frontend: ["Next.js", "React", "TypeScript", "Tailwind CSS", "Material UI"],
        backend: ["Node.js", "Express", "MongoDB", "Redis", "AWS"],
        devops: ["Docker", "GitHub Actions", "AWS EC2", "Vercel", "MongoDB Atlas"]
    },
    deliverables: [
        "Responsive Web Application",
        "Professional Dashboard",
        "Booking Management System",
        "Real-time Chat Feature",
        "Analytics Dashboard",
        "Mobile-Optimized Interface"
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
                        alt="ProConnect Platform"
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
                                <h3>Frontend</h3>
                                <ul>
                                    {projectData.toolsAndTech.frontend.map((tool, index) => (
                                        <li key={index}>{tool}</li>
                                    ))}
                                </ul>
                            </div>
                            <div className="tool-category">
                                <h3>Backend</h3>
                                <ul>
                                    {projectData.toolsAndTech.backend.map((tool, index) => (
                                        <li key={index}>{tool}</li>
                                    ))}
                                </ul>
                            </div>
                            <div className="tool-category">
                                <h3>DevOps</h3>
                                <ul>
                                    {projectData.toolsAndTech.devops.map((tool, index) => (
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
                                alt="ProConnect Wireframes"
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
                                alt="ProConnect High Fidelity Design"
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
                            <a href="mailto:jasper.it@gmail.com">jasper.it@gmail.com</a>
                            <a href="tel:4313384514">431.338.4514</a>
                        </div>
                        <div className="social-links">
                            <a href="https://instagram.com/your-handle" target="_blank" rel="noopener noreferrer">
                                <i className="fab fa-instagram"></i>
                            </a>
                            <a href="https://linkedin.com/in/your-profile" target="_blank" rel="noopener noreferrer">
                                <i className="fab fa-linkedin-in"></i>
                            </a>
                        </div>
                    </div>
                </footer>
            </main>
        </div>
    );
} 