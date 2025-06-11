import './Projects.css'
import { motion } from 'framer-motion'
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa'
import { useState } from 'react'

const ProjectCard = ({ title, description, tech, github, live, image }) => {
  return (
    <motion.div 
      className="project-card"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      whileHover={{ y: -5 }}
    >
      <div className="project-image">
        <img src={image} alt={title} />
        <div className="project-overlay">
          <div className="project-links">
            <a
              href={github}
              target="_blank"
              rel="noopener noreferrer"
              className="project-link"
              aria-label="GitHub Repository"
            >
              <FaGithub />
            </a>
            <a
              href={live}
              target="_blank"
              rel="noopener noreferrer"
              className="project-link"
              aria-label="Live Demo"
            >
              <FaExternalLinkAlt />
            </a>
          </div>
        </div>
      </div>
      <div className="project-content">
        <h3 className="project-title">{title}</h3>
        <p className="project-description">{description}</p>
        <div className="project-tech">
          {tech.map((item, index) => (
            <span key={index} className="tech-tag">{item}</span>
          ))}
        </div>
      </div>
    </motion.div>
  )
}

const Projects = () => {
  const [activeCategory, setActiveCategory] = useState('all')

  const categories = [
    { id: 'all', name: 'All Projects' },
    { id: 'mobile', name: 'Mobile Apps' },
    { id: 'frontend', name: 'Frontend' },
    { id: 'fullstack', name: 'Full Stack' },
    { id: 'backend', name: 'Backend' }
  ]

  const projects = [
    {
      title: "E-Commerce Mobile App",
      description: "A cross-platform mobile application for e-commerce with real-time updates, push notifications, and secure payments.",
      tech: ["React Native", "Firebase", "Redux", "Stripe"],
      github: "https://github.com/yourusername/ecommerce-mobile",
      live: "https://ecommerce-mobile-demo.com",
      image: "/projects/ecommerce-mobile.jpg",
      category: "mobile"
    },
    {
      title: "Modern Dashboard UI",
      description: "A beautiful and responsive admin dashboard with dark mode, customizable widgets, and real-time data visualization.",
      tech: ["React", "Tailwind CSS", "Chart.js", "Redux"],
      github: "https://github.com/yourusername/dashboard-ui",
      live: "https://dashboard-demo.com",
      image: "/projects/dashboard.jpg",
      category: "frontend"
    },
    {
      title: "Task Management System",
      description: "A full-stack task management application with real-time collaboration, team features, and progress tracking.",
      tech: ["Next.js", "Node.js", "MongoDB", "Socket.io"],
      github: "https://github.com/yourusername/task-manager",
      live: "https://task-manager-demo.com",
      image: "/projects/task-manager.jpg",
      category: "fullstack"
    },
    {
      title: "API Gateway Service",
      description: "A robust backend service with authentication, rate limiting, request validation, and API documentation.",
      tech: ["Node.js", "Express", "Redis", "JWT"],
      github: "https://github.com/yourusername/api-gateway",
      live: "https://api-gateway-docs.com",
      image: "/projects/api-gateway.jpg",
      category: "backend"
    }
  ]

  const filteredProjects = activeCategory === 'all' 
    ? projects 
    : projects.filter(project => project.category === activeCategory)

  return (
    <section className="projects section" id="projects">
      <div className="container">
        <motion.div
          className="section-header"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="section-title">Featured Projects</h2>
          <p className="section-subtitle">
            Here are some of my recent works that showcase my skills and experience
          </p>
        </motion.div>

        <motion.div 
          className="project-categories"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          {categories.map(category => (
            <button
              key={category.id}
              className={`category-btn ${activeCategory === category.id ? 'active' : ''}`}
              onClick={() => setActiveCategory(category.id)}
            >
              {category.name}
            </button>
          ))}
        </motion.div>

        <div className="projects-grid">
          {filteredProjects.map((project, index) => (
            <ProjectCard key={index} {...project} />
          ))}
        </div>
      </div>
    </section>
  )
}

export default Projects 