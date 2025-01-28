import React from 'react';
import { FaGithub, FaLinkedin, FaEnvelope, FaWhatsapp } from 'react-icons/fa';
import './css/contact.css';

const Contact = () => {
    const contactInfo = [
        {
            icon: <FaEnvelope />,
            title: 'Email',
            value: 'ms9799630@gmail.com',
            link: 'mailto:ms9799630@gmail.com'
        },
        {
            icon: <FaWhatsapp />,
            title: 'WhatsApp',
            value: '+91 7208749700',
            link: 'https://wa.me/917208749700'
        },
        {
            icon: <FaGithub />,
            title: 'GitHub',
            value: 'MohinShaikh5689',
            link: 'https://github.com/MohinShaikh5689'
        },
        {
            icon: <FaLinkedin />,
            title: 'LinkedIn',
            value: 'Mohin Shaikh',
            link: 'https://www.linkedin.com/in/mohin-shaikh-26a75b285/'
        }
    ];

    return (
        <section id="contact" className="contact">
            <div className="contact-header">
                <h2 className="section-title">Get In Touch</h2>
                <p className="section-subtitle">Let's connect and collaborate</p>
            </div>

            <div className="contact-cards">
                {contactInfo.map((info, index) => (
                    <a 
                        href={info.link} 
                        className="contact-card" 
                        key={index}
                        target="_blank" 
                        rel="noopener noreferrer"
                    >
                        <div className="card-icon">{info.icon}</div>
                        <h3>{info.title}</h3>
                        <p>{info.value}</p>
                    </a>
                ))}
            </div>
        </section>
    );
};

export default Contact;