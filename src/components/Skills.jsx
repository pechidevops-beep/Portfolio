import { useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';
import { 
  FaHtml5, FaCss3Alt, FaJs, FaReact, 
  FaNodeJs, FaPython, FaGitAlt, FaDatabase 
} from 'react-icons/fa';
import './Skills.css';

gsap.registerPlugin(ScrollTrigger);

const Skills = () => {
  const container = useRef(null);

  const skills = [
    { name: 'HTML5', icon: <FaHtml5 />, color: '#E34F26', level: 90, desc: 'Semantic, clear markup' },
    { name: 'CSS3', icon: <FaCss3Alt />, color: '#1572B6', level: 85, desc: 'Modern responsive layouts' },
    { name: 'JavaScript', icon: <FaJs />, color: '#F7DF1E', level: 80, desc: 'Dynamic interactivity' },
    { name: 'React', icon: <FaReact />, color: '#61DAFB', level: 75, desc: 'Component-driven UI' },
    { name: 'Node.js', icon: <FaNodeJs />, color: '#339933', level: 70, desc: 'Backend server logic' },
    { name: 'Python', icon: <FaPython />, color: '#3776AB', level: 65, desc: 'Scripts & data processing' },
    { name: 'MongoDB', icon: <FaDatabase />, color: '#47A248', level: 60, desc: 'Flexible NoSQL databases' },
    { name: 'Git', icon: <FaGitAlt />, color: '#F05032', level: 85, desc: 'Source version control' },
  ];

  useGSAP(() => {
    const cards = gsap.utils.toArray('.skill-card');
    
    gsap.from(cards, {
      scrollTrigger: {
        trigger: container.current,
        start: 'top 75%',
      },
      y: 50,
      opacity: 0,
      duration: 0.6,
      stagger: 0.1,
      ease: 'back.out(1.5)'
    });

  }, { scope: container });

  return (
    <section id="skills" className="skills-section" ref={container}>
      <div className="container">
        <h2 className="section-title heading-serif text-gradient">My Skills</h2>
        
        <div className="skills-grid">
          {skills.map((skill, index) => (
            <div key={index} className="skill-card glass hover-target" style={{ '--skill-color': skill.color }}>
              <div className="skill-header">
                <div className="skill-icon" style={{ color: skill.color }}>
                  {skill.icon}
                </div>
                <div className="skill-info" style={{ flex: 1 }}>
                  <h3 className="skill-name" style={{ margin: 0 }}>{skill.name}</h3>
                </div>
              </div>
              <p className="skill-desc" style={{ fontSize: '0.85rem', color: 'var(--text-secondary)', margin: 0, lineHeight: '1.4' }}>
                {skill.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
