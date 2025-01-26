import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faXTwitter, faFacebook, faInstagram, faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons';
import './Home.css';
import ProfileImage from '../assets/Pi7_Passport_Photo (1).jpeg';
import Resume from '../assets/Black Modern Professional Resume.pdf'; // Import the resume file

const Home = () => {
  return (
    <section className="home">
      <div className="hero-container">
        {/* Left: Text Content */}
        <div className="text-content">
          <h1>Welcome to My Portfolio</h1>
          <p>I'm Shailendra Gautam, a Full Stack Developer.</p>
          <p>
            As an aspiring information technology professional, I am seeking an entry-level position where I can leverage my technical skills and knowledge to contribute to the organization's success.
          </p>
          <Link to="/contact" className="contact-button">Contact Me</Link>
          
          {/* Social Media Links */}
          <div className="social-media">
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" aria-label="Twitter">
              <FontAwesomeIcon icon={faXTwitter} className="social-icon" />
            </a>
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" aria-label="Facebook">
              <FontAwesomeIcon icon={faFacebook} className="social-icon" />
            </a>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
              <FontAwesomeIcon icon={faInstagram} className="social-icon" />
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
              <FontAwesomeIcon icon={faLinkedin} className="social-icon" />
            </a>
            <a href="https://github.com" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
              <FontAwesomeIcon icon={faGithub} className="social-icon" />
            </a>
          </div>

          {/* Download Resume Button */}
          <a 
            href={Resume} 
            download="Shailendra_Gautam_Resume.pdf" 
            className="download-resume-button"
          >
            Download Resume
          </a>
        </div>

        {/* Right: Profile Image */}
        <div className="image-container">
          <img src={ProfileImage} alt="Shailendra Gautam" className="profile-image" />
        </div>
      </div>
    </section>
  );
};

export default Home;
