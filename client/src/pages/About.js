import React from 'react';
import './About.css'; // Import the CSS file

function About() {
  const frontendSkills = [
    { name: 'HTML', level: 90 },
    { name: 'CSS', level: 85 },
    { name: 'JavaScript', level: 80 },
    { name: 'React.js', level: 75 },
  ];

  const backendSkills = [
    { name: 'Node.js', level: 80 },
    { name: 'Express.js', level: 70 },
    { name: 'MongoDB', level: 75 },
    { name: 'MySQL', level: 65 },
  ];

  const programmingLanguages = [
    { name: 'C', level: 85 },
    { name: 'Java', level: 80 },
    { name: 'Python', level: 50 },
  ];

  const experiences = [
    {
      title: 'Full Stack Developer Intern',
      company: 'Numetry technology Pvt Ltd Pune.',
      duration: 'Dec 2024 - Present',
      description:
        'Developed scalable web applications and RESTful APIs using React.js, Node.js, and MongoDB.',
    },
    {
      title: 'Frontend Developer Intern',
      company: 'Silicon Advance Technology',
      duration: 'Sep 2023 - Jan 2024',
      description:
        'Designed and implemented responsive user interfaces for client projects using HTML, CSS, and JavaScript.',
    },
    {
      title: 'Open Source Contributor',
      company: 'GitHub Community',
      duration: '2024 - Present',
      description:
        'Contributed to open-source projects, including bug fixes and feature development for various repositories.',
    },
  ];

  const renderSkills = (skills) =>
    skills.map((skill, index) => (
      <div className="skill-card" key={index}>
        <h4>{skill.name}</h4>
        <div className="progress-bar">
          <div
            className="progress"
            style={{ width: `${skill.level}%` }}
          >
            <span>{skill.level}%</span>
          </div>
        </div>
      </div>
    ));

  const renderExperiences = () =>
    experiences.map((exp, index) => (
      <div className="experience-card" key={index}>
        <h4>{exp.title}</h4>
        <p className="company">{exp.company}</p>
        <p className="duration">{exp.duration}</p>
        <p>{exp.description}</p>
      </div>
    ));

  return (
    <section className="about">
      <h2>About Me</h2>
      <p>
        I am a passionate software developer with expertise in full-stack web development.<br></br> 
        I enjoy solving complex problems and creating user-friendly applications that make an impact. <br></br>
        My journey in technology has equipped me with a wide array of skills and a love for learning.
      </p>

      <h3>Frontend Skills</h3>
      <p>
        Crafting visually appealing and interactive user interfaces using the latest frontend technologies.
      </p>
      <div className="skills-grid">{renderSkills(frontendSkills)}</div>

      <h3>Backend Skills</h3>
      <p>
        Building scalable and secure server-side applications with efficient database management.
      </p>
      <div className="skills-grid">{renderSkills(backendSkills)}</div>

      <h3>Programming Languages</h3>
      <div className="skills-grid">{renderSkills(programmingLanguages)}</div>

      <h3>Experience</h3>
      <div className="experience-grid">{renderExperiences()}</div>
    </section>
  );
}

export default About;
