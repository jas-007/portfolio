'use client';

import { useEffect, useRef } from 'react';
import Navbar from '../../components/Navbar';

export default function WorkPage() {
    const experienceRef = useRef(null);

    useEffect(() => {
        const handleScroll = () => {
            const experiences = document.querySelectorAll('.experience-item');
            experiences.forEach(exp => {
                const rect = exp.getBoundingClientRect();
                const centerPosition = window.innerHeight / 2;
                const distanceFromCenter = Math.abs(rect.top + rect.height / 2 - centerPosition);
                const maxDistance = window.innerHeight;
                
                // Calculate opacity and scale based on distance from center
                const opacity = Math.max(0.2, 1 - (distanceFromCenter / maxDistance));
                const scale = Math.max(0.9, 1 - (distanceFromCenter / maxDistance) * 0.2);
                const translateZ = Math.max(-100, -(distanceFromCenter / maxDistance) * 200);

                exp.style.opacity = opacity;
                exp.style.transform = `scale(${scale}) translateZ(${translateZ}px)`;
            });
        };

        window.addEventListener('scroll', handleScroll);
        handleScroll(); // Initial call

        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const experiences = [
        {
            company: "Rentela Inc",
            role: "Co-Founder",
            period: "12/2023 - Present",
            description: [
                "Co-founded Rentela, revolutionizing property management by introducing a platform that guarantees rental payments to property owners from lease inception, ensuring consistent cash flow during tenant transitions or vacancies.",
                "Designed and implemented technology-driven solutions to streamline property management processes, including tenant onboarding, operational workflows, and payment systems.",
                "Developed and executed strategic growth plans, leveraging software solutions to expand client acquisition and diversify revenue streams.",
                "Spearheaded digital transformation initiatives, optimizing SEO, PPC, and social media strategies to enhance user engagement and platform visibility."
            ]
        },
        {
            company: "RBC",
            role: "Software Developer",
            period: "04/2023 - 11/2024",
            description: [
                "Designed and developed a mortgage renewal tool using Angular, displaying real-time mortgage rates, which increased user engagement by 15% and boosted conversion rates by 20%.",
                "Optimized API performance by implementing GraphQL queries and mutations with Apollo Server and Node.js, reducing response times by 40%.",
                "Collaborated with designers to build responsive, scalable front-end components using HTML, CSS, and JavaScript, ensuring seamless user experiences."
            ]
        },
        {
            company: "RBC",
            role: "Software Developer Co-op",
            period: "01/2023 - 04/2023",
            description: [
                "Enhanced system efficiency by decoupling applications from SharePoint, implementing a new API system, and migrating project management tools to function independently.",
                "Built robust backend systems using ASP.NET, Entity Framework, C#, and Repository Pattern, reducing data inconsistency issues by 10% through bug analysis and resolution.",
                "Automated workflows using Cron schedule scripts to optimize performance and streamline processes."
            ]
        },
        {
            company: "Agriculture and Agri-Food Canada",
            role: "Software Developer Co-op",
            period: "05/2022 - 12/2022",
            description: [
                "Designed and developed robust single-page applications (SPAs) using Groovy on Grails, Java for backend services, and Oracle Databases.",
                "Enhanced system efficiency by identifying and resolving bugs in heavy client applications using JavaScript frameworks.",
                "Conducted thorough product analysis and regression testing prior to releases."
            ]
        },
        {
            company: "HarmonizeHQ",
            role: "Software Engineer Co-op",
            period: "05/2021 - 12/2021",
            description: [
                "Specialized in developing a chat-based HR system that integrates collaboration and automation to streamline workplace tasks.",
                "Designed and implemented an attendance automation system, enabling employees to clock in and out via simple text messages.",
                "Enhanced the HR system by adding innovative features to make workplace interactions more engaging and productive."
            ]
        }
    ];

    const education = [
        {
            institution: "University of Manitoba",
            degree: "Computer Science",
            period: "Graduated 02/2023",
            description: [
                "Assisted Prof. Robert Guderian with research on consensus algorithms, blockchain mining, and cryptocurrency.",
                "Focused on advanced computer science concepts and practical software development."
            ]
        }
    ];

    return (
        <div className="portfolio-container">
            <Navbar />
            <main className="work-section">
                <h1 className="section-title">Professional Experience</h1>
                
                <div className="experience-container" ref={experienceRef}>
                    {experiences.map((exp, index) => (
                        <div key={index} className="experience-item">
                            <div className="experience-header">
                                <h2>{exp.company}</h2>
                                <h3>{exp.role}</h3>
                                <span className="period">{exp.period}</span>
                            </div>
                            <div className="experience-content">
                                {exp.description.map((desc, i) => (
                                    <p key={i}>{desc}</p>
                                ))}
                            </div>
                        </div>
                    ))}

                    <div className="section-divider">
                        <span>Education</span>
                    </div>

                    {education.map((edu, index) => (
                        <div key={index} className="experience-item education">
                            <div className="experience-header">
                                <h2>{edu.institution}</h2>
                                <h3>{edu.degree}</h3>
                                <span className="period">{edu.period}</span>
                            </div>
                            <div className="experience-content">
                                {edu.description.map((desc, i) => (
                                    <p key={i}>{desc}</p>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            </main>
        </div>
    );
} 