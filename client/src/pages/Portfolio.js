import React from 'react'; // Removed useState import since it's not used
import './Portfolio.css'; // Ensure you have a CSS file for styling

function Portfolio() {
  const projects = [
    {
      name: 'Face Recognition and Attendance System',
      description: 'A system that integrates face recognition technology to automate attendance.',
      details: 'This project uses AI and machine learning to detect and recognize faces, ensuring accurate attendance records. Technologies: core java and advance java, OpenCV, Flask.',
      githubLink: 'https://github.com/Gautamshailendra50/face-reconginization-and-attendence-system.git',
    },
    {
      name: 'User Data Application',
      description: 'An application to manage and visualize user data efficiently.',
      details: 'Features include CRUD operations and data visualization using charts. Built with MERN stack.',
      githubLink: 'https://github.com/shailendragautam50/User-data-App.git',
    },
    {
      name: 'Resume Builder App',
      description: 'A tool to create and customize professional resumes easily.',
      details: 'Allows users to build resumes with pre-designed templates. Developed with frontend technology HTML,css,javascript.',
      githubLink: 'https://github.com/Gautamshailendra50/Resume-Builder-App.git',
    },
    {
      name: 'React Form with Validation',
      description: 'A React-based form application with real-time validation and error handling.',
      details: 'Demonstrates the use of React hooks for form handling and validation. Includes error prompts for user inputs.',
      githubLink: 'https://github.com/Gautamshailendra50/Form-.git',
    },
    {
      name: 'E-commerce Web Application',
      description: 'A full-stack e-commerce platform with product management and payment integration.',
      details: 'Supports user authentication, product listings, and payment processing using Stripe API. Built with React, Node.js, and MongoDB.',
      githubLink: 'https://github.com//e-commerce-app',
    },
  ];

  return (
    <section className="portfolio">
      <h2>My Portfolio</h2>
      <div className="projects">
        {projects.map((project, index) => (
          <div className="project-card" key={index}>
            <h3>{project.name}</h3>
            <p>{project.description}</p>
            <div className="project-details">
              <p>{project.details}</p>
            </div>
            <a href={project.githubLink} target="_blank" rel="noopener noreferrer">
              View on GitHub
            </a>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Portfolio;
