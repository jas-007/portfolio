'use client';
import { useEffect, useState } from 'react';
import Image from 'next/image';
import dynamic from 'next/dynamic';

// Dynamically import LavaRing with no SSR
const LavaRing = dynamic(() => import('./LavaRing'), { ssr: false });

export default function Portfolio() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    useEffect(() => {
        // Smooth scroll handler
        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', function (e) {
                e.preventDefault();
                const targetId = this.getAttribute('href');
                const targetElement = document.querySelector(targetId);
                
                if (targetElement) {
                    const startPosition = window.pageYOffset;
                    const targetPosition = targetElement.offsetTop + 200;
                    const distance = targetPosition - startPosition;
                    const duration = 2000;
                    let start = null;

                    function animation(currentTime) {
                        if (start === null) start = currentTime;
                        const timeElapsed = currentTime - start;
                        const progress = Math.min(timeElapsed / duration, 1);

                        const easing = t => t * (2 - t);
                        
                        window.scrollTo(0, startPosition + (distance * easing(progress)));

                        if (timeElapsed < duration) {
                            requestAnimationFrame(animation);
                        }
                    }

                    requestAnimationFrame(animation);
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
            if (!e.target.closest('.hamburger') && !e.target.closest('.dropdown-menu')) {
                setIsMenuOpen(false);
            }
        };

        document.addEventListener('click', closeMenu);
        return () => {
            document.removeEventListener('click', closeMenu);
        };
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

            <section id="about" className="about-section">
                <div className="title-container">
                    <div className="title-line grey">Software Developer</div>
                    <div className="title-line ampersand">&</div>
                    <div className="title-line">UI/UX Designer</div>
                </div>
            </section>

            <section id="expertise" className="expertise-section">
                <div className="video-container">
                    <video 
                        autoPlay 
                        loop 
                        muted 
                        playsInline
                        className="expertise-video"
                    >
                        <source src="/assets/videos/owl.mp4" type="video/mp4" />
                    </video>
                </div>
            </section>

            <section id="expertise-content" className="expertise-content-section">
                <div className="expertise-content">
                    <h2 className="expertise-title">
                        <span>Innovative</span>
                        <span className="dot">•</span>
                        <span>Impactful</span>
                        <span className="dot">•</span>
                        <span>Engaging</span>
                    </h2>
                    <p className="expertise-description">
                        I speak code and design, creating digital experiences that are both robust and visually captivating. 
                        I specialize in building interactive web applications with clean, efficient code and designing 
                        intuitive interfaces that put users first. Whether it's crafting responsive websites, developing 
                        engaging apps, or reimagining user journeys, I blend technical precision with creative flair to 
                        bring ideas to life.
                    </p>
                    <div className="portfolio-link-container">
                        <a href="#portfolio" className="portfolio-link">
                            <i className="fas fa-briefcase"></i>
                            <span>Portfolio</span>
                        </a>
                    </div>
                </div>
            </section>

            <section id="expertise-areas" className="expertise-areas">
                {/* Area 1: UI/UX Design & Branding */}
                <div className="expertise-area">
                    <div className="expertise-area-content">
                        <div className="content-wrapper">
                            <h3 className="area-title">UI/UX Design & Branding</h3>
                            <p className="area-description">
                                I create digital experiences that not only look great but also communicate a brand's unique story. 
                                Whether you need a full visual identity overhaul or a refined user interface, my design solutions 
                                blend creativity with usability.
                            </p>
                            <div className="key-services">
                                <ul>
                                    <li>Visual Identity & Logo Design</li>
                                    <li>User Interface (UI) Design</li>
                                    <li>User Experience (UX) Strategy</li>
                                    <li>Brand Guidelines & Style Guides</li>
                                    <li>Typography, Color Schemes, & Iconography</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className="expertise-area-image">
                        {/* Image will go here */}
                    </div>
                </div>

                {/* Area 2: Creative & Interactive */}
                <div className="expertise-area">
                    <div className="expertise-area-content">
                        <div className="content-wrapper">
                            <h3 className="area-title">Creative & Interactive</h3>
                            <p className="area-description">
                                My creative work goes beyond static visuals. I develop interactive designs and prototypes 
                                that give users a taste of the final experience. From conceptual art direction to motion design, 
                                my creative process ensures every project is as engaging as it is functional.
                            </p>
                            <div className="key-services">
                                <ul>
                                    <li>Art Direction & Concept Development</li>
                                    <li>Interactive Prototyping</li>
                                    <li>Motion & Micro-Interactions</li>
                                    <li>Visual Storytelling</li>
                                    <li>Creative Campaign Concepts</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className="expertise-area-image">
                        {/* Image will go here */}
                    </div>
                </div>

                {/* Area 3: Web Development & E-Commerce */}
                <div className="expertise-area">
                    <div className="expertise-area-content">
                        <div className="content-wrapper">
                            <h3 className="area-title">Web Development & E-Commerce</h3>
                           
                            <p className="area-description">
                                Bringing designs to life is where technology meets creativity. I build responsive, high-performance 
                                web applications and e-commerce platforms that provide seamless user experiences across all devices. 
                                My approach marries modern development practices with the aesthetics of thoughtful design.
                            </p>
                            <div className="key-services">
                                <ul>
                                    <li>Front-End & Back-End Development</li>
                                    <li>Responsive & Progressive Web Apps</li>
                                    <li>E-Commerce Platform Integration</li>
                                    <li>API & Third-Party Integration</li>
                                    <li>Performance Optimization & Scalability</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className="expertise-area-image">
                        {/* Image will go here */}
                    </div>
                </div>

                {/* Area 4: Digital Strategy & Integration */}
                <div className="expertise-area">
                    <div className="expertise-area-content">
                        <div className="content-wrapper">
                            <h3 className="area-title">Digital Strategy & Integration</h3>
                            <p className="area-description">
                                Understanding the digital consumer is key to every project I undertake. I help translate insights 
                                into strategic solutions that bridge the gap between design and development, ensuring your digital 
                                presence is both compelling and effective.
                            </p>
                            <div className="key-services">
                                <ul>
                                    <li>Digital Strategy & Planning</li>
                                    <li>Data-Driven Design Decisions</li>
                                    <li>Cross-Platform Integration</li>
                                    <li>SEO & Accessibility Best Practices</li>
                                    <li>Analytics & Continuous Improvement</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className="expertise-area-image">
                        {/* Image will go here */}
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