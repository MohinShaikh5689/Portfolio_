import React from 'react';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';
import './css/project.css';

const Projects = () => {
    const projects = [
        {
            title: "E-Commerce Website",
            description: "A full-stack e-commerce platform built with React and Node.js",
            image: "/project1.png",
            tech: ["React", "Node.js", "MongoDB", "Express"],
            github: "https://github.com/yourusername/project1",
            demo: "https://project1.demo.com",
        },
        {
            title: "Weather Dashboard",
            description: "Real-time weather application using OpenWeather API",
            image: "/project2.png",
            tech: ["React", "API", "CSS"],
            github: "https://github.com/yourusername/project2",
            demo: "https://project2.demo.com",
        },
        {
            title: "Task Manager",
            description: "A CRUD application for managing daily tasks",
            image: "/project3.png",
            tech: ["React", "Firebase", "Material-UI"],
            github: "https://github.com/yourusername/project3",
            demo: "https://project3.demo.com",
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
                                        <a href={project.demo} target="_blank" rel="noopener noreferrer">
                                            <FaExternalLinkAlt />
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