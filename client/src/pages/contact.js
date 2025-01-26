import React, { useState } from 'react';
import { FaEnvelope, FaGithub, FaLinkedin } from 'react-icons/fa'; // Import icons
import './contact.css'; // Ensure you create and link this CSS file

function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    mobile: '',
    message: '',
  });

  const [message, setMessage] = useState(''); // To display success or error messages

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch('http://localhost:5000/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (response.ok) {
        setMessage('contact request sent successfully!');
        setFormData({
          name: '',
          email: '',
          mobile: '',
          message: '',
        }); // Reset the form
      } else {
        setMessage(data.message || 'Failed to submit the form. Please try again.');
      }
    } catch (error) {
      console.error('Error submitting form:', error);
      setMessage('An error occurred. Please try again later.');
    }
  };

  return (
    <section className="contact">
      <div className="contact-info">
        <h2>Contact Me</h2>
        <h3>Feel free to reach out!</h3>
        <p>
          <FaEnvelope className="icon" /> {/* Email icon */}
          Email: <a href="mailto:gautamshailendra50@gmail.com">gautamshailendra50@gmail.com</a>
        </p>
        <p>
          <FaGithub className="icon" /> {/* GitHub icon */}
          GitHub: <a href="https://github.com/Gautamshailendra50?tab=repositories" target="_blank" rel="noopener noreferrer">
            https://github.com/Gautamshailendra50?tab=repositories
          </a>
        </p>
        <p>
          <FaLinkedin className="icon" /> {/* LinkedIn icon */}
          LinkedIn: <a href="https://www.linkedin.com/in/shailendra-gautam-512989268" target="_blank" rel="noopener noreferrer">
            www.linkedin.com/in/shailendra-gautam-512989268
          </a>
        </p>
      </div>
      <form className="contact-form" onSubmit={handleSubmit}>
        <input
          type="text"
          name="name"
          placeholder="Your Name"
          value={formData.name}
          onChange={handleChange}
        />
        <input
          type="email"
          name="email"
          placeholder="Your Email"
          value={formData.email}
          onChange={handleChange}
        />
        <input
          type="tel"
          name="mobile"
          placeholder="Your Mobile Number"
          value={formData.mobile}
          onChange={handleChange}
        />
        <textarea
          name="message"
          placeholder="Your Message"
          value={formData.message}
          onChange={handleChange}
        />
        <button type="submit">Send</button>
      </form>
      {message && <p className="response-message">{message}</p>}
    </section>
  );
}

export default Contact;
