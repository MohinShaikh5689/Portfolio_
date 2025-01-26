import React from 'react';
import { FaReact, FaHtml5, FaCss3Alt, FaGitAlt, FaNodeJs } from 'react-icons/fa';
import { SiJavascript, SiExpress, SiMongodb, SiMysql, SiPostman } from 'react-icons/si';
import './css/about.css';

const About = () => {
  const frontendSkills = [
    { name: 'HTML', icon: <FaHtml5 />, level: 80 },
    { name: 'CSS', icon: <FaCss3Alt />, level: 75 },
    { name: 'JavaScript', icon: <SiJavascript />, level: 65 },
    { name: 'React', icon: <FaReact />, level: 60 },  
  ];

  const backendSkills = [
    { name: 'Node.js', icon: <FaNodeJs />, level: 80 },
    { name: 'Express', icon: <SiExpress />, level: 80 },
    { name: 'MongoDB', icon: <SiMongodb />, level: 70 },
    { name: 'MySQL', icon: <SiMysql />, level: 70 },
    { name: 'Postman', icon: <SiPostman />, level: 90 },
    { name: 'Git', icon: <FaGitAlt />, level: 65 }
  ];

  return (
    <section id="about" className="about">
      <div className="about-container">
        <div className="about-text">
          <h2 className="section-title">About Me</h2>
          <p className="bio">
            I'm an Information Technology student in my second year, passionate about web development 
            and software engineering. Currently exploring modern technologies and building projects 
            to enhance my skills.
          </p>
          
          <div className="education">
            <h3>Education</h3>
            <div className="edu-card">
              <h4>Bachelor of Science In Information Technology</h4>
              <p>2023 - 2026</p>
              <p>Somaiya Vidyavihar University</p>
            </div>
          </div>

          <div className="interests">
            <h3>Areas of Interest</h3>
            <div className="interest-grid">
              <span>Web Development</span>
              <span>Backend Development</span>
            </div>
          </div>
        </div>

        <div className="skills-container">
          <h3>Frontend Skills</h3>
          <div className="skills-grid">
            {frontendSkills.map((skill) => (
              <div className="skill-item" key={skill.name}>
                <div className="skill-icon">{skill.icon}</div>
                <h4>{skill.name}</h4>
                <div className="progress-bar">
                  <div 
                    className="progress" 
                    style={{ width: `${skill.level}%` }}
                    data-level={`${skill.level}%`}
                  ></div>
                </div>
              </div>
            ))}
          </div>

          <h3 className="backend-title">Backend Skills</h3>
          <div className="skills-grid">
            {backendSkills.map((skill) => (
              <div className="skill-item" key={skill.name}>
                <div className="skill-icon">{skill.icon}</div>
                <h4>{skill.name}</h4>
                <div className="progress-bar">
                  <div 
                    className="progress" 
                    style={{ width: `${skill.level}%` }}
                    data-level={`${skill.level}%`}
                  ></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;