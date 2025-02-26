'use client';
import { useEffect, useState } from 'react';
import Image from 'next/image';
import dynamic from 'next/dynamic';

// Dynamically import LavaRing with no SSR
const LavaRing = dynamic(() => import('./LavaRing'), { ssr: false });

export default function Portfolio() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    useEffect(() => {
        // Smooth scrolling for navigation links
        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', function (e) {
                e.preventDefault();
                const element = document.querySelector(this.getAttribute('href'));
                if (element) {
                    element.scrollIntoView({
                        behavior: 'smooth'
                    });
                }
            });
        });

        // Reveal animations on scroll
        const revealElements = document.querySelectorAll('.project-card, .skill-category');
        const reveal = () => {
            revealElements.forEach(element => {
                const elementTop = element.getBoundingClientRect().top;
                const windowHeight = window.innerHeight;
                
                if (elementTop < windowHeight - 100) {
                    element.classList.add('revealed');
                }
            });
        };

        window.addEventListener('scroll', reveal);
        return () => window.removeEventListener('scroll', reveal);
    }, []);

    // Close menu when clicking outside
    useEffect(() => {
        const closeMenu = (e) => {
            // Only close if click is outside hamburger AND outside dropdown
            if (!e.target.closest('.hamburger') && !e.target.closest('.dropdown-menu')) {
                setIsMenuOpen(false);
            }
        };

        document.addEventListener('click', closeMenu);
        return () => document.removeEventListener('click', closeMenu);
    }, []);

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Form submitted');
    };

    return (
        <>
            <nav className="navbar">
                <div className="nav-content">
                    <div className="logo">Jasper.it</div>
                    <div className="hamburger" onClick={(e) => {
                        e.stopPropagation();
                        setIsMenuOpen(!isMenuOpen);
                    }}>
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
                                <a href="#about">About</a>
                                <a href="#expertise">Expertise</a>
                                <a href="#projects">Projects</a>
                                <a href="#contact">Contact</a>
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

            <section id="hero" className="hero">
                <div className="hero-content">
                    <div className="video-wrapper">
                        <video 
                            autoPlay 
                            loop 
                            muted 
                            playsInline
                            className="hero-video"
                        >
                            <source src="/assets/videos/earth.mp4" type="video/mp4" />
                        </video>
                    </div>
                    <a href="#about" className="explore-link">
                        Explore
                        <i className="fas fa-chevron-down"></i>
                    </a>
                </div>
            </section>

            <section id="about" className="about">
                <div className="container">
                    <h2>About Me</h2>
                    <div className="about-content">
                        <div className="about-text">
                            <p>Your compelling bio goes here...</p>
                        </div>
                        <div className="timeline">
                            <div className="timeline-item">
                                <div className="timeline-date">2023</div>
                                <div className="timeline-content">
                                    <h3>Career Milestone 1</h3>
                                    <p>Description of achievement</p>
                                </div>
                            </div>
                            {/* Add more timeline items */}
                        </div>
                    </div>
                </div>
            </section>

            <section id="projects" className="projects">
                <div className="container">
                    <h2>Featured Projects</h2>
                    <div className="project-grid">
                        {[1, 2, 3].map((project) => (
                            <div key={project} className="project-card">
                                <div className="project-image">
                                    <Image 
                                        src={`/project${project}.jpg`}
                                        alt={`Project ${project}`}
                                        width={400}
                                        height={300}
                                        layout="responsive"
                                    />
                                </div>
                                <div className="project-info">
                                    <h3>Project Title</h3>
                                    <p>Project description goes here...</p>
                                    <div className="tech-stack">
                                        <span>React</span>
                                        <span>Node.js</span>
                                        <span>MongoDB</span>
                                    </div>
                                    <div className="project-links">
                                        <a href="#" className="btn">View Details</a>
                                        <a href="#" className="btn">Live Demo</a>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            <section id="skills" className="skills">
                <div className="container">
                    <h2>Skills & Expertise</h2>
                    <div className="skills-grid">
                        <div className="skill-category">
                            <h3>Frontend Development</h3>
                            <div className="skill-items">
                                {['React', 'Next.js', 'TypeScript', 'CSS/SASS'].map((skill) => (
                                    <div key={skill} className="skill-item">
                                        <span>{skill}</span>
                                        <div className="progress-bar">
                                            <div className="progress" style={{width: '90%'}}></div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                        {/* Add more skill categories */}
                    </div>
                </div>
            </section>

            <section id="blog" className="blog">
                <div className="container">
                    <h2>Latest Articles</h2>
                    <div className="blog-grid">
                        {[1, 2, 3].map((post) => (
                            <div key={post} className="blog-card">
                                <Image 
                                    src={`/blog${post}.jpg`}
                                    alt={`Blog post ${post}`}
                                    width={300}
                                    height={200}
                                />
                                <div className="blog-content">
                                    <h3>Blog Post Title</h3>
                                    <p>Brief excerpt from the blog post...</p>
                                    <a href="#" className="read-more">Read More →</a>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            <section id="contact" className="contact">
                <div className="container">
                    <h2>Get in Touch</h2>
                    <div className="contact-content">
                        <div className="contact-info">
                            <h3>Let's Connect</h3>
                            <p>I'm always open to discussing new projects and opportunities.</p>
                            <div className="social-links">
                                <a href="#"><i className="fab fa-github"></i></a>
                                <a href="#"><i className="fab fa-linkedin"></i></a>
                                <a href="#"><i className="fab fa-twitter"></i></a>
                            </div>
                        </div>
                        <form className="contact-form" onSubmit={(e) => e.preventDefault()}>
                            <div className="form-group">
                                <input type="text" placeholder="Your Name" required />
                            </div>
                            <div className="form-group">
                                <input type="email" placeholder="Your Email" required />
                            </div>
                            <div className="form-group">
                                <textarea placeholder="Your Message" required></textarea>
                            </div>
                            <button type="submit" className="btn primary">Send Message</button>
                        </form>
                    </div>
                </div>
            </section>

            <footer className="footer">
                <div className="container">
                    <div className="footer-content">
                        <p>© 2024 Your Name. All rights reserved.</p>
                        <div className="footer-links">
                            <a href="#privacy">Privacy Policy</a>
                            <a href="#terms">Terms of Use</a>
                        </div>
                    </div>
                </div>
            </footer>
        </>
    );
} 