'use client';

import Link from 'next/link';
import Image from 'next/image';
import Navbar from '../../../components/Navbar';

// This will be replaced with your actual project data
const projectData = {
    title: "Rentela.ca ",
    year: "2023",
    duration: "3 months",
    role: "UI/UX Designer & Developer",
    overview: "Rentela is a property rental platform that connects landlords with potential tenants. This case study showcases the design process from initial research to final implementation.",
    liveUrl: "https://rentela.ca",
    nextProject: "/projects/habithero",
    githubUrl: "https://github.com/yourusername/rentela",
    
    research: {
        title: "Research & Discovery",
        questions: [
            {
                question: "How might we simplify the property listing process while ensuring all necessary information is captured?",
                findings: "Landlords wanted a quick listing process but tenants needed detailed information. Through user interviews, we identified the most crucial information needed at each stage.",
                solution: "Created a progressive disclosure pattern in the listing form - essential details first, optional details later."
            },
            {
                question: "What information hierarchy works best for property search results?",
                findings: "Users prioritized different features: some focused on price, others on location or amenities.",
                solution: "Developed a card layout with scannable information hierarchy and customizable sorting options."
            },
            {
                question: "How can we build trust between landlords and potential tenants?",
                findings: "Both parties expressed concerns about credibility and reliability.",
                solution: "Implemented verified profiles, review systems, and transparent communication channels."
            }
        ]
    },

    userTesting: {
        title: "User Testing Insights",
        findings: [
            {
                issue: "Users struggled to find the advanced search filters",
                impact: "Increased time to find suitable properties",
                solution: "Redesigned the search interface with expandable filters and clear categorization"
            },
            {
                issue: "Property image gallery was not intuitive on mobile",
                impact: "Users missed important property details",
                solution: "Implemented swipe gestures and improved thumbnail navigation"
            },
            {
                issue: "Application form was too lengthy",
                impact: "High form abandonment rate",
                solution: "Split into multiple steps with progress indicator and save functionality"
            }
        ]
    },

    challenges: [
        {
            title: "Complex Search Requirements",
            description: "Users needed to filter properties by multiple criteria while maintaining a simple interface.",
            solution: "Implemented an expandable search interface with primary and advanced filters, reducing cognitive load while maintaining functionality."
        },
        {
            title: "Property Listing Flow",
            description: "Landlords found the listing process time-consuming and complicated.",
            solution: "Redesigned as a step-by-step wizard with progress indicators and save drafts feature."
        },
        {
            title: "Mobile Responsiveness",
            description: "Initial designs didn't translate well to mobile devices.",
            solution: "Adopted a mobile-first approach and reorganized content hierarchy for smaller screens."
        }
    ],

    images: [
        "/assets/images/rentela/rentela-home.png",
        "/assets/images/rentela/rentela-contact.png",
        "/assets/images/rentela/wireframes.png",
        "/assets/images/rentela/high-fidelity.png",
        "/assets/images/rentela/final-design.png",
        "/assets/images/rentela/mobile-views.png"
    ],

    toolsAndTech: {
        design: ["Figma", "Adobe XD", "Photoshop"],
        prototyping: ["Principle", "InVision", "Framer"],
        research: ["Maze", "Hotjar", "Google Analytics", "UserTesting.com"]
    },
    deliverables: ["User Research Report", "Wireframes", "UI Component Library", "Interactive Prototype", "Design System"]
};

export default function ProjectPage() {
    return (
        <div className="portfolio-container">
            <Navbar />
            <main className="project-detail-section">
                {/* Hero Image */}
                <div className="project-hero">
                    <Image
                        src="/assets/images/rentela-home.png"
                        alt="Rentela Homepage"
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

                    {/* Updated Tools & Technologies Section */}
                    <div className="tools-section">
                        <h2>Tools & Technologies</h2>
                        <div className="tools-grid">
                            <div className="tool-category">
                                <h3>Design</h3>
                                <ul>
                                    {projectData.toolsAndTech.design.map((tool, index) => (
                                        <li key={index}>{tool}</li>
                                    ))}
                                </ul>
                            </div>
                            <div className="tool-category">
                                <h3>Prototyping</h3>
                                <ul>
                                    {projectData.toolsAndTech.prototyping.map((tool, index) => (
                                        <li key={index}>{tool}</li>
                                    ))}
                                </ul>
                            </div>
                            <div className="tool-category">
                                <h3>Research & Testing</h3>
                                <ul>
                                    {projectData.toolsAndTech.research.map((tool, index) => (
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
                        <h2>Low-Fidelity Wireframes</h2>
                        <div className="wireframe-image">
                            <Image
                                src="/assets/images/wireframes.png"
                                alt="Rentela Wireframes"
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
                                src="/assets/images/rentela-hi-fi.png"
                                alt="Rentela High Fidelity Design"
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