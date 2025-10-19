import './About.css'
import { motion } from 'framer-motion'
import { FaReact, FaVuejs, FaAngular, FaNodeJs, FaGit, FaDocker, FaAward, FaBriefcase, FaUserTie, FaProjectDiagram, FaGlobe, FaLinkedin, FaCode, FaJs, FaServer, FaDatabase, FaAws } from 'react-icons/fa'
import { FaMobileScreenButton } from "react-icons/fa6";
import { SiNextdotjs, SiNuxtdotjs, SiNestjs, SiExpress, SiFirebase, SiMongodb, SiPostgresql, SiTypescript, SiVercel } from 'react-icons/si'

const skills = [
  {
    category: 'Frontend',
    items: [
      { name: 'React', icon: <FaReact />, level: 95 },
      { name: 'React Native', icon: <FaReact />, level: 90 },
      { name: 'Next.js', icon: <SiNextdotjs />, level: 85 },
      { name: 'Angular', icon: <FaAngular />, level: 80 },
      { name: 'Vue', icon: <FaVuejs />, level: 75 },
      { name: 'Nuxt.js', icon: <SiNuxtdotjs />, level: 70 },
      { name: 'TypeScript', icon: <SiTypescript />, level: 85 },
      { name: 'JavaScript', icon: <FaJs />, level: 95 },
    ],
  },
  {
    category: 'Backend',
    items: [
      { name: 'Node.js', icon: <FaNodeJs />, level: 90 },
      { name: 'Express', icon: <SiExpress />, level: 85 },
      { name: 'NestJS', icon: <SiNestjs />, level: 80 },
      { name: 'Firebase', icon: <SiFirebase />, level: 85 },
    ],
  },
  {
    category: 'Database',
    items: [
      { name: 'MongoDB', icon: <SiMongodb />, level: 85 },
      { name: 'PostgreSQL', icon: <SiPostgresql />, level: 80 },
    ],
  },
  {
    category: 'DevOps & Tools',
    items: [
      { name: 'Docker', icon: <FaDocker />, level: 75 },
      { name: 'Git', icon: <FaGit />, level: 90 },
      { name: 'AWS', icon: <FaAws />, level: 70 },
      { name: 'Vercel', icon: <SiVercel />, level: 80 },
    ],
  },
  {
    category: 'Problem Solving',
    items: [
      { name: 'LeetCode', icon: <FaCode />, level: 85 },
      { name: 'Algorithms', icon: <FaProjectDiagram />, level: 80 },
      { name: 'Data Structures', icon: <FaDatabase />, level: 85 },
      { name: 'System Design', icon: <FaServer />, level: 70 },
    ],
  },
]

const Feature = ({ icon: Icon, title, text }) => {
  return (
    <motion.div
      className="feature"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
    >
      <div className="feature-icon">
        <Icon />
      </div>
      <h3 className="feature-title">{title}</h3>
      <p className="feature-text">{text}</p>
    </motion.div>
  )
}

const SkillItem = ({ skill }) => {
  return (
    <motion.div 
      className="skill-item"
      whileHover={{ scale: 1.05 }}
      transition={{ type: "spring", stiffness: 300 }}
    >
      <span className="skill-icon">{skill.icon}</span>
      <span className="skill-name">{skill.name}</span>
    </motion.div>
  )
}

const TestimonialCard = ({ testimonial }) => {
  return (
    <motion.div
      className="testimonial-card"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
    >
      <div className="testimonial-content">
        <p className="testimonial-text">"{testimonial.text}"</p>
        <div className="testimonial-author">
          <div className="author-info">
            <h4 className="author-name">{testimonial.author}</h4>
            <p className="author-position">{testimonial.position} at {testimonial.company}</p>
          </div>
          <a 
            href={testimonial.linkedin} 
            target="_blank" 
            rel="noopener noreferrer"
            className="testimonial-linkedin"
          >
            <FaLinkedin />
          </a>
        </div>
      </div>
    </motion.div>
  )
}

const careerJourneyData = [
  {
    title: 'Legato (Lynnwood, Washington)',
    description: (
      <>
        Full Stack Developer since July 2024. Working on a social networking platform for musicians, bringing together artists across all skill sets, backgrounds and geographies to foster creativity and meaningful connections. Passionate about system design, architecture, and exploring the core of software engineering.<br />
        <a href="https://www.linkedin.com/company/legato-llc/" target="_blank" rel="noopener noreferrer" className="career-company-link">
          View Company
        </a>
      </>
    ),
  },
  {
    title: 'Programming Hero Black Belt Developer...',
    description: (
      <>
        SCIC Graduate & Black Belt Awardee. Successfully completed all competitive phases and earned the Black Belt distinction. This prestigious achievement represents excellence in web development, problem-solving, and technical skills through rigorous training and competitive assessments.<br />
        <a href="/a5c3edc6-2a17-431a-a94d-17f316938298.pdf" target="_blank" rel="noopener noreferrer" className="career-certificate-link">
          View Certificate
        </a>
        <br />
        <a href="https://web.programming-hero.com/home" target="_blank" rel="noopener noreferrer" className="career-company-link">
          View Programming Hero
        </a>
      </>
    ),
  },
  {
    title: 'Hygwell (India, Remote)',
    description: (
      <>
        3 months internship & 6 months contract developer (remote).<br />
        <a href="https://www.linkedin.com/company/ngn-healthcare-india-pvt-ltd/" target="_blank" rel="noopener noreferrer" className="career-company-link">
          View Company
        </a>
      </>
    ),
  },
  {
    title: 'Vulnapp (Canada, Remote)',
    description: (
      <>
        9 months as Backend Developer (remote).<br />
        <a href="https://www.linkedin.com/company/vulnapp/" target="_blank" rel="noopener noreferrer" className="career-company-link">
          View Company
        </a>
      </>
    ),
  },
  {
    title: 'Susko (Germany, Remote)',
    description: (
      <>
        Full Stack Developer with primary focus on UI/UX development, creating responsive and intuitive user interfaces.<br />
        <a href="https://www.linkedin.com/company/susko-gmbh/" target="_blank" rel="noopener noreferrer" className="career-company-link">
          View Company
        </a>
      </>
    ),
  },
]

const freelanceProjects = [
  {
    title: 'Ticket Management System',
    description: 'High-scale ticket booking platform for Godavari River (India) serving 2M+ monthly users. Features include mobile app for ticket booking, admin dashboard for complete control, and Razorpay integration for secure payments. Built with React Native for the app, React for the dashboard, and a robust backend system.',
  },
  {
    title: 'Bria Unisex Salon',
    description: 'Full Stack website for a premium Indian salon chain. Features include appointment booking system, admin dashboard for managing multiple branches, and comprehensive customer management system.',
  },
  {
    title: 'Other Freelance Projects',
    description: 'Various projects showcasing full-stack development skills.',
  }
]

const testimonials = [
  {
    text: "I've worked with Shafin for almost two years, starting from his internship and later on a full-time contract roles. Over this time, I've seen him grow into a reliable and skilled developer who can take on challenges with confidence. He's proactive, communicates clearly, and always delivers quality work. I'd definitely recommend him to anyone looking for a dedicated and talented developer.",
    author: "Chakri CV",
    position: "Senior Developer",
    company: "Hygwell",
    linkedin: "https://www.linkedin.com/in/chakri-cv/"
  }
]

export const CareerJourney = () => (
  <section className="career-journey-modern-section">
    <div className="career-journey-container">
      <div className="career-journey-main">
        <h3 className="career-journey-section-title">Professional Experience</h3>
        <div className="career-journey-modern-grid">
          {careerJourneyData.map((item, idx) => (
            <motion.div 
              className="career-journey-modern-card"
              key={idx}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
            >
              <div className="career-journey-modern-card-content">
                <div className="career-journey-modern-card-details">
                  <h4 className="career-journey-modern-card-title">{item.title}</h4>
                  <p className="career-journey-modern-card-description">{item.description}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      <div className="career-journey-sidebar">
        <h3 className="career-journey-section-title">Freelance Projects</h3>
        <div className="freelance-projects-list">
          {freelanceProjects.map((project, idx) => (
            <motion.div 
              className="freelance-project-item"
              key={idx}
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
            >
              <div className="freelance-project-content">
                <h4 className="freelance-project-title">{project.title}</h4>
                <p className="freelance-project-description">{project.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  </section>
)

const About = () => {
  return (
    <section id="about" className="about">
      <div className="container">
        {/* Career Journey Section removed from here */}

        <motion.div
          className="about-header"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="about-title">About Me</h2>
          <div className="about-text">
            <p className="about-description">
              I'm a passionate Full Stack Developer with 2+ years of experience building scalable web applications. Currently working at <strong>Legato</strong>, I specialize in creating robust, high-performance solutions using modern JavaScript technologies including React, Node.js, TypeScript, and cloud platforms like AWS.
            </p>
            <p className="about-description">
              What drives me most is <strong>exploring the core of software engineering</strong> and working with <strong>system design and architecture</strong>. I love diving deep into how complex systems work, understanding the underlying principles, and designing scalable solutions that can handle real-world challenges. There's nothing more satisfying than creating elegant, well-architected systems that stand the test of time.
            </p>
          <p className="about-description">
              I'm not just a developer who uses frameworks—I'm someone who <strong>understands how they work under the hood</strong>. From building dynamic user interfaces with React and Vue, to developing full-stack applications using Next.js, NestJS, and Angular, I enjoy pushing the boundaries of what's possible with JavaScript. My goal is to contribute meaningfully to the developer community by creating innovative solutions and sharing knowledge about system design and architecture.
          </p>
          </div>
        </motion.div>


        {/* Skills Architecture Section */}
        <motion.div 
          className="skills-architecture-section"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h3 className="skills-architecture-title">My Skills</h3>
          <div className="skills-architecture-diagram">
            {/* Frontend Layer */}
            <div className="skill-layer frontend-layer">
              <div className="layer-header">
                <div className="layer-icon">🖥️</div>
                <div className="layer-title">Frontend Development</div>
                <div className="layer-description">Modern, responsive user interfaces</div>
              </div>
              <div className="skill-grid">
                <div className="skill-card">
                  <div className="skill-name">HTML5</div>
                  <div className="skill-desc">Markup language</div>
                </div>
                <div className="skill-card">
                  <div className="skill-name">CSS3</div>
                  <div className="skill-desc">Styling & animations</div>
                </div>
                <div className="skill-card">
                  <div className="skill-name">Bootstrap</div>
                  <div className="skill-desc">CSS framework</div>
                </div>
                <div className="skill-card">
                  <div className="skill-name">Tailwind</div>
                  <div className="skill-desc">Utility-first CSS</div>
                </div>
                <div className="skill-card">
                  <div className="skill-name">GSAP</div>
                  <div className="skill-desc">Animation library</div>
                </div>
                <div className="skill-card">
                  <div className="skill-name">Framer Motion</div>
                  <div className="skill-desc">React animations</div>
                </div>
                <div className="skill-card">
                  <div className="skill-name">React</div>
                  <div className="skill-desc">Component-based UI</div>
                </div>
                <div className="skill-card">
                  <div className="skill-name">Next.js</div>
                  <div className="skill-desc">Full-stack framework</div>
                </div>
                <div className="skill-card">
                  <div className="skill-name">Vue.js</div>
                  <div className="skill-desc">Progressive framework</div>
                </div>
                <div className="skill-card">
                  <div className="skill-name">Angular</div>
                  <div className="skill-desc">TypeScript framework</div>
                </div>
                <div className="skill-card primary">
                  <div className="skill-name">React Native</div>
                  <div className="skill-desc">Mobile development</div>
                </div>
                <div className="skill-card">
                  <div className="skill-name">JavaScript</div>
                  <div className="skill-desc">Programming language</div>
                </div>
                <div className="skill-card">
                  <div className="skill-name">TypeScript</div>
                  <div className="skill-desc">Typed JavaScript</div>
                </div>
              </div>
            </div>

            {/* Connection Lines */}
            <div className="connection-lines">
              <div className="connection-line"></div>
              <div className="connection-line"></div>
              <div className="connection-line"></div>
            </div>

            {/* Backend Layer */}
            <div className="skill-layer backend-layer">
              <div className="layer-header">
                <div className="layer-icon">⚙️</div>
                <div className="layer-title">Backend Development</div>
                <div className="layer-description">Server-side logic and APIs</div>
              </div>
              <div className="skill-grid">
                <div className="skill-card">
                  <div className="skill-name">Node.js</div>
                  <div className="skill-desc">JavaScript runtime</div>
                </div>
                <div className="skill-card">
                  <div className="skill-name">Express</div>
                  <div className="skill-desc">Web framework</div>
                </div>
                <div className="skill-card">
                  <div className="skill-name">Nuxt.js</div>
                  <div className="skill-desc">Vue.js framework</div>
                </div>
                <div className="skill-card">
                  <div className="skill-name">NestJS</div>
                  <div className="skill-desc">Enterprise framework</div>
                </div>
                <div className="skill-card">
                  <div className="skill-name">MongoDB</div>
                  <div className="skill-desc">NoSQL database</div>
                </div>
                <div className="skill-card">
                  <div className="skill-name">SQL</div>
                  <div className="skill-desc">Query language</div>
                </div>
                <div className="skill-card">
                  <div className="skill-name">MySQL</div>
                  <div className="skill-desc">Relational database</div>
                </div>
                <div className="skill-card">
                  <div className="skill-name">PostgreSQL</div>
                  <div className="skill-desc">Advanced SQL database</div>
                </div>
                <div className="skill-card">
                  <div className="skill-name">Firebase</div>
                  <div className="skill-desc">Backend services</div>
                </div>
                <div className="skill-card">
                  <div className="skill-name">GetStream</div>
                  <div className="skill-desc">Chat & activity feeds</div>
                </div>
              </div>
            </div>

            {/* Connection Lines */}
            <div className="connection-lines">
              <div className="connection-line"></div>
              <div className="connection-line"></div>
            </div>

            {/* DevOps Layer */}
            <div className="skill-layer devops-layer">
              <div className="layer-header">
                <div className="layer-icon">☁️</div>
                <div className="layer-title">DevOps & Cloud</div>
                <div className="layer-description">Deployment and cloud platforms</div>
              </div>
              <div className="skill-grid">
                <div className="skill-card">
                  <div className="skill-name">AWS</div>
                  <div className="skill-desc">Cloud platform</div>
                </div>
                <div className="skill-card">
                  <div className="skill-name">Digital Ocean</div>
                  <div className="skill-desc">Cloud infrastructure</div>
                </div>
                <div className="skill-card">
                  <div className="skill-name">Vercel</div>
                  <div className="skill-desc">Deployment platform</div>
                </div>
                <div className="skill-card">
                  <div className="skill-name">Git</div>
                  <div className="skill-desc">Version control</div>
                </div>
                <div className="skill-card">
                  <div className="skill-name">Docker</div>
                  <div className="skill-desc">Containerization</div>
                </div>
              </div>
            </div>

          </div>
        </motion.div>

        <div className="features-grid">
          <Feature
            icon={FaReact}
            title="Frontend Development"
            text="Building modern, responsive user interfaces with React and other cutting-edge technologies."
          />
          <Feature
            icon={FaNodeJs}
            title="Backend Development"
            text="Creating robust server-side applications and APIs using Node.js and Express."
          />
          <Feature
            icon={FaDocker}
            title="DevOps & Tools"
            text="Experience with Docker, CI/CD pipelines, and modern development tools."
          />
          <Feature
            icon={FaMobileScreenButton}
            title="Mobile App Development"
            text="Building cross-platform mobile applications using React Native Expo and React Native Cli."
          />
        </div>


        {/* Testimonials Section */}
        <motion.div 
          className="testimonials-section"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h3 className="testimonials-title">What People Say</h3>
          <div className="testimonials-grid">
            {testimonials.map((testimonial, index) => (
              <TestimonialCard key={index} testimonial={testimonial} />
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default About 