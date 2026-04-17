import { useRef, useState } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';
import './Contact.css';

gsap.registerPlugin(ScrollTrigger);

const Contact = () => {
  const container = useRef(null);
  const [formState, setFormState] = useState({ name: '', email: '', message: '' });
  const [isSubmitted, setIsSubmitted] = useState(false);

  useGSAP(() => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: container.current,
        start: 'top 80%',
      }
    });

    tl.from('.contact-header', { y: 30, opacity: 0, duration: 0.6 })
      .from('.contact-form-wrapper', { x: -30, opacity: 0, duration: 0.6 }, '-=0.2')
      .from('.contact-info', { x: 30, opacity: 0, duration: 0.6 }, '-=0.6');
  }, { scope: container });

  const handleSubmit = (e) => {
    e.preventDefault();
    // Simulate form submission
    setTimeout(() => {
      setIsSubmitted(true);
      setFormState({ name: '', email: '', message: '' });
      setTimeout(() => setIsSubmitted(false), 5000);
    }, 1000);
  };

  return (
    <section id="contact" className="contact-section" ref={container}>
      <div className="container">
        <div className="contact-header">
          <h2 className="section-title heading-serif text-gradient">Get In Touch</h2>
          <p className="contact-subtitle">Have a question or want to work together? Leave a message!</p>
        </div>

        <div className="contact-grid">
          <div className="contact-form-wrapper glass">
            {isSubmitted ? (
              <div className="success-message">
                <h3>Message Sent!</h3>
                <p>Thanks for reaching out. I'll get back to you soon.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="contact-form">
                <div className="form-group">
                  <label htmlFor="name">Name</label>
                  <input 
                    type="text" 
                    id="name" 
                    required 
                    className="hover-target"
                    value={formState.name}
                    onChange={(e) => setFormState({...formState, name: e.target.value})}
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="email">Email</label>
                  <input 
                    type="email" 
                    id="email" 
                    required 
                    className="hover-target"
                    value={formState.email}
                    onChange={(e) => setFormState({...formState, email: e.target.value})}
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="message">Message</label>
                  <textarea 
                    id="message" 
                    rows="5" 
                    required
                    className="hover-target"
                    value={formState.message}
                    onChange={(e) => setFormState({...formState, message: e.target.value})}
                  ></textarea>
                </div>
                <button type="submit" className="btn btn-primary hover-target w-full">
                  Send Message
                </button>
              </form>
            )}
          </div>

          <div className="contact-info">
            <h3 className="info-title">Let's Connect</h3>
            <p className="info-desc">
              I'm currently looking for new opportunities. Whether you have a question 
              or just want to say hi, I'll try my best to get back to you!
            </p>
            <div className="info-details">
              <div className="info-item glass">
                <strong>Email:</strong>
                <a href="mailto:hello@example.com" className="hover-target">hello@pechi.dev</a>
              </div>
              <div className="info-item glass">
                <strong>Location:</strong>
                <span>Global / Remote</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <footer className="footer glass scraped">
        <div className="container">
          <p>&copy; {new Date().getFullYear()} Pechi. Built with React & GSAP.</p>
        </div>
      </footer>
    </section>
  );
};

export default Contact;
