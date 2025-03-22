'use client';
import { useEffect } from 'react';
import Image from 'next/image';
import ThemeToggle from './ThemeToggle';
import Link from 'next/link';
import Navbar from './Navbar';

// Dynamically import LavaRing with no SSR

export default function Portfolio() {
    useEffect(() => {
        // Smooth scroll handler
        const handleSmoothScroll = (e) => {
            e.preventDefault();
            const href = e.currentTarget.getAttribute('href');
            if (href.startsWith('#')) {
                const element = document.querySelector(href);
                if (element) {
                    element.scrollIntoView({ behavior: 'smooth' });
                }
            }
        };

        // Add event listeners to all internal links
        const internalLinks = document.querySelectorAll('a[href^="#"]');
        internalLinks.forEach(link => {
            link.addEventListener('click', handleSmoothScroll);
        });

        // Cleanup
        return () => {
            internalLinks.forEach(link => {
                link.removeEventListener('click', handleSmoothScroll);
            });
        };
    }, []);

    useEffect(() => {
        const options = {
            threshold: 0.5 // Trigger when section is 50% visible
        };

        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('in-view');
                    // Remove in-view class from other sections
                    document.querySelectorAll('.expertise-area').forEach(area => {
                        if (area !== entry.target) {
                            area.classList.remove('in-view');
                        }
                    });
                }
            });
        }, options);

        // Observe all expertise areas
        document.querySelectorAll('.expertise-area').forEach(area => {
            observer.observe(area);
        });

        return () => observer.disconnect();
    }, []);

    useEffect(() => {
        const handleScroll = () => {
            const expertiseAreas = document.querySelectorAll('.expertise-area');
            
            expertiseAreas.forEach(area => {
                const image = area.querySelector('.expertise-area-image');
                const rect = area.getBoundingClientRect();
                const windowHeight = window.innerHeight;
                
                // Calculate how much of the section is visible
                const visiblePercentage = Math.max(0, Math.min(1, 
                    (windowHeight - rect.top) / (rect.height + windowHeight)
                ));
                
                // Reveal the image when the section is 20% visible
                if (visiblePercentage > 0.2) {
                    image.classList.add('revealed');
                } else {
                    image.classList.remove('revealed');
                }
            });
        };

        window.addEventListener('scroll', handleScroll);
        handleScroll(); // Initial check

        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <div className="portfolio-container">
            <Navbar />
            <ThemeToggle />
            <main>
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
                        <a 
                            href="#about" 
                            className="explore-link"
                            onClick={(e) => {
                                e.preventDefault();
                                const expertiseSection = document.getElementById('expertise');
                                const startPosition = window.pageYOffset;
                                // Show 30% of the expertise section
                                const targetPosition = expertiseSection.offsetTop - window.innerHeight * 0.7;
                                const distance = targetPosition - startPosition;
                                const duration = 4000; // 4 seconds
                                let start = null;

                                function animation(currentTime) {
                                    if (start === null) start = currentTime;
                                    const timeElapsed = currentTime - start;
                                    const run = ease(timeElapsed, startPosition, distance, duration);
                                    window.scrollTo(0, run);
                                    if (timeElapsed < duration) requestAnimationFrame(animation);
                                }

                                function ease(t, b, c, d) {
                                    t /= d;
                                    return -c * t * (t - 2) + b;
                                }

                                requestAnimationFrame(animation);
                            }}
                        >
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
                            <span className="dot">,</span>
                            <span>Impactful</span>
                            <span className="dot">&</span>
                            <span>Engaging</span>
                        </h2>
                        <p className="expertise-description">
                            I speak code and design, creating digital experiences that are both robust and visually captivating. 
                            From responsive websites to intuitive interfaces, I combine technical precision with creative flair to bring ideas to life.
                        </p>
                        <div className="portfolio-link-container">
                            <Link href="/projects" className="portfolio-link">
                                <span>Portfolio</span>
                                <i className="fas fa-globe"></i>
                            </Link>
                            <a href="#contact" className="portfolio-link" onClick={(e) => {
                                e.preventDefault();
                                const footer = document.querySelector('.contact-section');
                                footer.scrollIntoView({ behavior: 'smooth' });
                            }}>
                                <span>Contact</span>
                                <i className="fas fa-user"></i>
                            </a>
                        </div>
                    </div>
                </section>

                <section id="expertise-areas" className="expertise-areas">
                    {/* Area 1: UI/UX Design & Branding */}
                    <div className="expertise-area">
                        <div className="expertise-area-content">
                            <h3 className="area-title hover-effect">Design & Branding</h3>
                            <p className="area-description">
                                I develop full branding and design projects for different industry categories. Over 100+ projects done in the past year, delivering comprehensive brand identities and design solutions that make lasting impressions.
                            </p>
                            <div className="key-services">
                                <ul>
                                    <li className="hover-effect">Visual Identity & Logo Design</li>
                                    <li className="hover-effect">User Interface Design</li>
                                    <li className="hover-effect">User Experience Strategy</li>
                                    <li className="hover-effect">Brand Guidelines</li>
                                    <li className="hover-effect">Typography & Color Systems</li>
                                </ul>
                            </div>
                        </div>
                        <div className="expertise-area-image">
                            <Image
                                src="/assets/images/ui.jpg"
                                alt="UI/UX Design & Branding"
                                width={800}
                                height={600}
                                className="expertise-image"
                            />
                        </div>
                    </div>

                    {/* Area 2: Creative & Interactive */}
                    <div className="expertise-area">
                        <div className="expertise-area-content">
                            <h3 className="area-title hover-effect">Creative.</h3>
                            <p className="area-description">
                                Transforming ideas into engaging digital experiences through innovative design and development. Specializing in creating interactive solutions that captivate and convert.
                            </p>
                            <div className="key-services">
                                <ul>
                                    <li className="hover-effect">Custom Web & App Development</li>
                                    <li className="hover-effect">Interactive Prototyping</li>
                                    <li className="hover-effect">User-Friendly Interfaces</li>
                                    <li className="hover-effect">Solutions that Work for You</li>
                                    <li className="hover-effect">Creative Problem Solving</li>
                                </ul>
                            </div>
                        </div>
                        <div className="expertise-area-image">
                            <Image
                                src="/assets/images/creative.jpg"
                                alt="Creative & Interactive"
                                width={800}
                                height={600}
                                className="expertise-image"
                            />
                        </div>
                    </div>

                    {/* Area 3: Web Development & E-Commerce */}
                    <div className="expertise-area">
                        <div className="expertise-area-content">
                            <h3 className="area-title hover-effect">Dev.</h3>
                            <p className="area-description">
                                Building robust, scalable web applications with modern technologies. Focused on creating efficient, maintainable code that drives business growth and user engagement.
                            </p>
                            <div className="key-services">
                                <ul>
                                    <li className="hover-effect">Frontend Development</li>
                                    <li className="hover-effect">Responsive Web Apps</li>
                                    <li className="hover-effect">E-Commerce Solutions</li>
                                    <li className="hover-effect">API Integration</li>
                                    <li className="hover-effect">Performance Optimization</li>
                                </ul>
                            </div>
                        </div>
                        <div className="expertise-area-image">
                            <Image
                                src="/assets/images/webdev.jpg"
                                alt="Web Development & E-Commerce"
                                width={800}
                                height={600}
                                className="expertise-image"
                            />
                        </div>
                    </div>

                    {/* Area 4: Digital Strategy & Integration */}
                    <div className="expertise-area">
                        <div className="expertise-area-content">
                            <h3 className="area-title hover-effect">Digital Strategy.</h3>
                            <p className="area-description">
                                Crafting data-driven digital strategies that align with business objectives. Implementing comprehensive solutions that enhance online presence and drive measurable results.
                            </p>
                            <div className="key-services">
                                <ul>
                                    <li className="hover-effect">Digital Strategy</li>
                                    <li className="hover-effect">Data-Driven Design</li>
                                    <li className="hover-effect">Platform Integration</li>
                                    <li className="hover-effect">SEO & Accessibility</li>
                                    <li className="hover-effect">Analytics & Insights</li>
                                </ul>
                            </div>
                        </div>
                        <div className="expertise-area-image">
                            <Image
                                src="/assets/images/digital.jpg"
                                alt="Digital Strategy & Integration"
                                width={800}
                                height={600}
                                className="expertise-image"
                            />
                        </div>
                    </div>
                </section>

                <section className="contact-section">
                    <div className="contact-content">
                        <div className="contact-main">
                            <div className="contact-image">
                                <Image
                                    src="/assets/images/bird.png"
                                    alt="Feather"
                                    width={400}
                                    height={400}
                                    className="contact-image"
                                />
                            </div>
                            <div className="contact-text">
                                <h2 className="site-name">JASPREET</h2>
                                <p className="address">Winnipeg, Manitoba, CA</p>
                                
                                <div className="contact-info">
                                    <a href="mailto:jasper.it.65@gmail.com" className="email hover-effect">
                                        jasper.it.65@gmail.com
                                    </a>
                                    <a href="tel:4313384514" className="phone hover-effect">
                                        431.338.4514
                                    </a>
                                </div>
                            </div>
                        </div>

                        <div className="social-links">
                            <a href="https://www.instagram.com/jasper.it.65" target="_blank" rel="noopener noreferrer" className="social-icon">
                                <i className="fab fa-instagram"></i>
                            </a>
                            <a href="https://www.linkedin.com/in/jaspreetcing/" target="_blank" rel="noopener noreferrer" className="social-icon">
                                <i className="fab fa-linkedin-in"></i>
                            </a>
                            <a href="https://github.com/jas-007" target="_blank" rel="noopener noreferrer" className="social-icon">
                                <i className="fab fa-github"></i>
                            </a>
                        </div>
                    </div>
                </section>
            </main>
        </div>
    );
} 