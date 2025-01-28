import React from 'react';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';
import './css/project.css';

const Projects = () => {
    const projects = [
        {
            title: "Tour selling Website",
            description: "A full-stack Tour platform built with Node.js and pug",
            image: "assets/image copy 2.png",
            tech: ["Pug", "Node.js", "MongoDB", "Express"],
            github: "https://github.com/MohinShaikh5689/Tour_site",
        },
        {
            title: "Real Time Chat Application",
            description: "Real-time Chat application using Web Sockets",
            image: "assets/image copy.png",
            tech: ["React", "Node.js", "Socket.io", "Express", "MongoDB"],
            github: "https://github.com/MohinShaikh5689/Chat_App",
        },
        {
            title: "Task Manager",
            description: "A CRUD application for managing daily tasks and team projects",
            image: "assets/image.png",
            tech: ["React", "Prisma", "PostgreSQL", "Node.js", "Express"],
            github: "https://github.com/MohinShaikh5689/TaskMate",
        },
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
                                        <a href={project.github} target="_blank" rel="noopener noreferrer">
                                            <FaGithub />
                                        </a>
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
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Projects;