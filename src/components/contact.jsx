import React, { useState } from 'react';
import { FaGithub, FaLinkedin, FaEnvelope, FaWhatsapp } from 'react-icons/fa';
import './css/contact.css';

const Contact = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: ''
    });

    return (
        <section id="contact" className="contact">
            <div className="contact-header">
                <h2 className="section-title">Get In Touch</h2>
                <p className="section-subtitle">Let's create something together</p>
            </div>

            <div className="contact-wrapper">
                <div className="contact-info">
                    <h3>Contact Information</h3>
                    <div className="info-item">
                        <FaEnvelope />
                        <span>ms9799630@gmail.com</span>
                    </div>
                    <div className="info-item">
                        <FaWhatsapp />
                        <span>+91 72087749700</span>
                    </div>
                    <div className="social-links">
                        <a href="https://github.com/yourusername" target="_blank" rel="noopener noreferrer">
                            <FaGithub />
                        </a>
                        <a href="https://linkedin.com/in/yourusername" target="_blank" rel="noopener noreferrer">
                            <FaLinkedin />
                        </a>
                    </div>
                </div>

                <form className="contact-form" onSubmit={(e) => {
                    e.preventDefault();
                    console.log(formData);
                }}>
                    <div className="form-group">
                        <label htmlFor="name">Name</label>
                        <input
                            type="text"
                            id="name"
                            name="name"
                            value={formData.name}
                            onChange={(e) => setFormData({
                                ...formData,
                                [e.target.name]: e.target.value
                            })}
                            required
                        />
                    </div>

                    <div className="form-group">
                        <label htmlFor="email">Email</label>
                        <input
                            type="email"
                            id="email"
                            name="email"
                            value={formData.email}
                            onChange={(e) => setFormData({
                                ...formData,
                                [e.target.name]: e.target.value
                            })}
                            required
                        />
                    </div>

                    <div className="form-group">
                        <label htmlFor="message">Message</label>
                        <textarea
                            id="message"
                            name="message"
                            value={formData.message}
                            onChange={(e) => setFormData({
                                ...formData,
                                [e.target.name]: e.target.value
                            })}
                            required
                        ></textarea>
                    </div>

                    <button type="submit" className="submit-btn">
                        Send Message
                    </button>
                </form>
            </div>
        </section>
    );
};

export default Contact;