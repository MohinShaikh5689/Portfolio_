import React from 'react';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';
import './css/project.css';

const Projects = () => {
    const projects = [
        {
            title: "Yonko Hub",
            description: "Yonko Hub is a full-stack anime streaming platform featuring real-time chat, private communities, watchlists, and per-episode comments — all powered by Express, PostgreSQL, and Next.js. It scrapes streaming sources like Zoro.to via proxy servers and uses Anilist for metadata, wrapped in a microservices architecture. Built with JWT auth, a custom admin panel, and seamless UI, it's like Crunchyroll if it had a brain and a backend.",
            image: "assets/image copy 3.png",
            tech: ["Next.Js", "Node.js", "Postgresql", "Express", "Prisma", "Redis", "WebSockets", "WebScraping"],
            github: "https://github.com/MohinShaikh5689/yonko_hub",
            live: "https://yonkohub.vercel.app",
        },
        {
            title: "Spend Sensei",
            description: "Spend Sensei is a full-stack expense tracker that helps users manage their finances. Built with React, Node.js, and MongoDB, it features user authentication, expense tracking, and data visualization.",
            image: "assets/image copy 4.png",
            tech: ["React", "Node.js", "MongoDB", "Express"],
            github: "https://github.com/MohinShaikh5689/Spend_sensei_frontend",
            live: "https://spend-sensei-frontend.vercel.app/",
        },
        {
            title: "Tour selling Website",
            description: "A full-stack Tour platform built with Node.js and pug",
            image: "assets/image copy 2.png",
            tech: ["Pug", "Node.js", "MongoDB", "Express"],
            github: "https://github.com/MohinShaikh5689/Tour_site",
        },
        {
            title: "Task Manager",
            description: "A CRUD application for managing daily tasks and team projects",
            image: "assets/image.png",
            tech: ["React", "Prisma", "PostgreSQL", "Node.js", "Express"],
            github: "https://github.com/MohinShaikh5689/TaskMate",
        },
        {
            title: "CollegeTips.in's Gallery",
            description: "A gallery website for CollegeTips.in, showcasing images and information about the company",
            image: "assets/image copy 5.png",
            tech: ["React", "Node.js"],
            github: "https://github.com/MohinShaikh5689/collegeTips_gallary_repo",
            live: "https://college-tips-gallary-repo.vercel.app/",
        }
    ];

    return (
        <section id="projects" className="projects">
            <div className="project-container">
                <h2 className="section-title">My Projects</h2>
                <p className="section-subtitle">Some of my recent web development work</p>
                
                <div className="projects-grid">
                    {projects.map((project, index) => (
                        <div className="project-card" key={index}>
                            <div className="project-image">
                                <img src={project.image} alt={project.title} />
                                <div className="project-overlay">
                                    <div className="project-links">
                                        <a href={project.github} target="_blank" rel="noopener noreferrer" title="View Code">
                                            <FaGithub />
                                        </a>
                                        {project.live && (
                                            <a href={project.live} target="_blank" rel="noopener noreferrer" title="Visit Site">
                                                <FaExternalLinkAlt />
                                            </a>
                                        )}
                                    </div>
                                </div>
                            </div>
                            <div className="project-info">
                                <h3>{project.title}</h3>
                                <p>{project.description}</p>
                                <div className="tech-stack">
                                    {project.tech.map((tech, index) => (
                                        <span key={index} className="tech-badge">
                                            {tech}
                                        </span>
                                    ))}
                                </div>
                                
                                {project.live && (
                                    <div className="project-live-link">
                                        <a href={project.live} target="_blank" rel="noopener noreferrer">
                                            <FaExternalLinkAlt /> Visit Site
                                        </a>
                                    </div>
                                )}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Projects;