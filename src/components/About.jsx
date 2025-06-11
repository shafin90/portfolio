import './About.css'
import { motion } from 'framer-motion'
import { FaReact, FaVuejs, FaAngular, FaNodeJs, FaGit, FaDocker, FaAward, FaBriefcase, FaUserTie, FaProjectDiagram, FaGlobe } from 'react-icons/fa'
import { SiNextdotjs, SiNuxtdotjs, SiNestjs, SiExpress, SiFirebase, SiMongodb, SiPostgresql } from 'react-icons/si'

const skills = [
  {
    category: 'Frontend',
    items: [
      { name: 'React', icon: <FaReact /> },
      { name: 'React Native', icon: <FaReact /> },
      { name: 'Next.js', icon: <SiNextdotjs /> },
      { name: 'Angular', icon: <FaAngular /> },
      { name: 'Vue', icon: <FaVuejs /> },
      { name: 'Nuxt.js', icon: <SiNuxtdotjs /> },
    ],
  },
  {
    category: 'Backend',
    items: [
      { name: 'Node.js', icon: <FaNodeJs /> },
      { name: 'Express', icon: <SiExpress /> },
      { name: 'NestJS', icon: <SiNestjs /> },
      { name: 'Firebase', icon: <SiFirebase /> },
    ],
  },
  {
    category: 'Database',
    items: [
      { name: 'MongoDB', icon: <SiMongodb /> },
      { name: 'PostgreSQL', icon: <SiPostgresql /> },
    ],
  },
  {
    category: 'DevOps & Tools',
    items: [
      { name: 'Docker', icon: <FaDocker /> },
      { name: 'Git', icon: <FaGit /> },
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

const careerJourneyData = [
  {
    title: 'Programming Hero Black Belt Developer',
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
        5 months as Backend Developer (remote).<br />
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
          <p className="about-description">
            I'm deeply fascinated by JavaScript and everything that revolves around it. From building dynamic user interfaces with React and Vue, to developing full-stack applications using Next.js, Nuxt, NestJS, and Angular — I enjoy exploring how far JavaScript can go. I have a solid understanding of JavaScript's core concepts and continue to dive deeper every day. I love learning new libraries and frameworks, not just to use them, but to truly understand how they work under the hood. My long-term goal is to create my own JavaScript libraries and contribute meaningfully to the developer community. I'm passionate, always learning, and excited about the endless possibilities with JavaScript. I am also deeply passionate about critical thinking, logic building, and exploring challenging problems that push the boundaries of my skills. These areas drive my curiosity and fuel my growth as a developer.
          </p>
        </motion.div>

        {/* Skillset Section */}
        <motion.div 
          className="skillset-section"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h3 className="skillset-title">Skillset</h3>
          <div className="skillset-grid">
            {skills.map((cat) => (
              <motion.div 
                className="skill-category"
                key={cat.category}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
              >
                <h4 className="skill-category-title">{cat.category}</h4>
                <div className="skill-items">
                  {cat.items.map((skill) => (
                    <SkillItem key={skill.name} skill={skill} />
                  ))}
                </div>
              </motion.div>
            ))}
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
        </div>
      </div>
    </section>
  )
}

export default About 