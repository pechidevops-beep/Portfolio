import { useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';
import './About.css';

gsap.registerPlugin(ScrollTrigger);

const About = () => {
  const container = useRef(null);

  useGSAP(() => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: container.current,
        start: 'top 70%',
        end: 'bottom 20%',
        toggleActions: 'play none none reverse'
      }
    });

    tl.from('.about-image-wrapper', { x: -60, opacity: 0, duration: 1.2, ease: 'power4.out' })
      .from('.about-content > *', { y: 40, opacity: 0, duration: 1, stagger: 0.15, ease: 'power4.out' }, '-=0.8');
  }, { scope: container });

  return (
    <section id="about" className="about-section" ref={container}>
      <div className="container about-grid">
        <div className="about-image-wrapper glass">
          <div className="about-image-placeholder">
            {/* User will replace this div with an <img> tag later */}
            <span className="placeholder-text">[ Insert Avatar Image Here ]</span>
          </div>
        </div>
        
        <div className="about-content">
          <h2 className="section-title heading-serif text-gradient">About Me</h2>
          
          <h3 className="about-subtitle">
            Student & Aspiring Full Stack Engineer
          </h3>
          
          <p className="about-text">
            Hello! I'm Pechi, a student who is deeply passionate about learning and building software. 
            My journey into full stack development started with a simple HTML file, and since then, 
            I've been fascinated by how the web works and how backend systems scale.
          </p>
          <p className="about-text">
            Currently, I am focused on mastering <strong>JavaScript ecosystems</strong> and backend 
            architectures. My goal is to build performing, accessible, and deeply interactive 
            applications that solve real-world problems.
          </p>
          
          <div className="stats">
            <div className="stat-item glass">
              <span className="stat-number text-gradient">10+</span>
              <span className="stat-label">Projects</span>
            </div>
            <div className="stat-item glass">
              <span className="stat-number text-gradient">2+</span>
              <span className="stat-label">Years Coding</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
