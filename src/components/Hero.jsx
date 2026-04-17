import { useRef } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { FiArrowDown, FiGithub, FiLinkedin } from 'react-icons/fi';
import './Hero.css';

const Hero = () => {
  const container = useRef(null);

  useGSAP(() => {
    const tl = gsap.timeline();
    
    tl.from('.hero-badge', { y: -20, opacity: 0, duration: 1, ease: 'power4.out' })
      .from('.hero-title-line', {
        y: 40,
        opacity: 0,
        duration: 1.2,
        stagger: 0.2,
        ease: 'power4.out'
      }, '-=0.6')
      .from('.hero-desc', { y: 20, opacity: 0, duration: 1, ease: 'power4.out' }, '-=0.6')
      .from('.hero-cta', { y: 20, opacity: 0, duration: 1, stagger: 0.1, ease: 'power4.out' }, '-=0.6')
      .from('.hero-socials a', { scale: 0, opacity: 0, duration: 0.8, stagger: 0.1, ease: 'back.out(1.5)' }, '-=0.4');

    // Subtle floating animation for background gradients
    gsap.to('.blob-1', {
      x: 100, y: 50, rotation: 10,
      duration: 10, repeat: -1, yoyo: true, ease: 'sine.inOut'
    });
    gsap.to('.blob-2', {
      x: -80, y: 80, rotation: -15,
      duration: 12, repeat: -1, yoyo: true, ease: 'sine.inOut'
    });
  }, { scope: container });

  return (
    <section id="home" className="hero-section" ref={container}>
      {/* Decorative Background Blobs */}
      <div className="blob blob-1"></div>
      <div className="blob blob-2"></div>

      <div className="container hero-content">
        <div className="hero-badge glass">
          <span className="pulsing-dot"></span> Available for new opportunities
        </div>
        
        <h1 className="hero-title heading-serif">
          <div className="hero-title-line">Hi, I'm <span className="text-gradient hover-target">Pechi</span></div>
          <div className="hero-title-line">A Full Stack Developer</div>
        </h1>
        
        <p className="hero-desc">
          I'm a student passionate about building scalable web applications. 
          Bridging the gap between beautiful design and robust backend architecture.
        </p>

        <div className="hero-cta">
          <a href="#projects" className="btn btn-primary hover-target">
            View My Work
          </a>
          <a href="#contact" className="btn btn-outline hover-target">
            Contact Me
          </a>
        </div>

        <div className="hero-socials">
          <a href="https://github.com/pechi" target="_blank" rel="noreferrer" className="glass hover-target" aria-label="GitHub">
            <FiGithub size={22} />
          </a>
          <a href="https://linkedin.com/in/pechi" target="_blank" rel="noreferrer" className="glass hover-target" aria-label="LinkedIn">
            <FiLinkedin size={22} />
          </a>
        </div>

        <a href="#about" className="scroll-indicator hover-target" aria-label="Scroll Down">
          <FiArrowDown size={24} className="bounce" />
        </a>
      </div>
    </section>
  );
};

export default Hero;
