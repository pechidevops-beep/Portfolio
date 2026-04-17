import { useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';
import { FiExternalLink, FiGithub } from 'react-icons/fi';
import './Projects.css';

gsap.registerPlugin(ScrollTrigger);

const Projects = () => {
  const container = useRef(null);

  const projectList = [
    {
      title: 'CollabSpace',
      description: 'A real-time collaborative workspace environment. Features live document editing, role-based access control, and seamless project tracking using WebSockets.',
      tech: ['React', 'Node.js', 'Socket.io', 'MongoDB'],
      github: '#',
      live: '#'
    },
    {
      title: 'Habit-Tracker',
      description: 'A beautiful, gamified habit tracking application that helps users build consistent routines. Includes custom charts, streak counting, and daily reminders.',
      tech: ['React', 'Express', 'PostgreSQL', 'Chart.js'],
      github: '#',
      live: '#'
    },
    {
      title: 'Learning Management System',
      description: 'A comprehensive LMS platform for students and instructors. Supports video course uploads, interactive quizzes, progress tracking, and payment integration.',
      tech: ['React/Vite', 'Python/Django', 'AWS S3', 'PostgreSQL'],
      github: '#',
      live: '#'
    }
  ];

  useGSAP(() => {
    const cards = gsap.utils.toArray('.project-card');
    
    cards.forEach((card, i) => {
      gsap.from(card, {
        scrollTrigger: {
          trigger: card,
          start: 'top 85%',
        },
        y: 60,
        opacity: 0,
        duration: 1.2,
        ease: 'power4.out',
        delay: i * 0.15
      });
    });
  }, { scope: container });

  return (
    <section id="projects" className="projects-section" ref={container}>
      <div className="container">
        <h2 className="section-title heading-serif text-gradient">Featured Projects</h2>
        
        <div className="projects-grid">
          {projectList.map((project, index) => (
            <div key={index} className="project-card glass">
              <div className="project-image-placeholder">
                <span className="placeholder-text">[ {project.title} Preview ]</span>
              </div>
              <div className="project-content">
                <h3 className="project-title">{project.title}</h3>
                <p className="project-desc">{project.description}</p>
                <div className="project-tech">
                  {project.tech.map((t, i) => (
                    <span key={i} className="tech-tag glass">{t}</span>
                  ))}
                </div>
                <div className="project-links">
                  <a href={project.live} className="btn-link hover-target" aria-label="Live Demo">
                    <FiExternalLink /> Live Demo
                  </a>
                  <a href={project.github} className="btn-link hover-target" aria-label="GitHub Repo">
                    <FiGithub /> Source Code
                  </a>
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
