import './Services.css'
import { motion } from 'framer-motion'
import { FaMobile, FaGlobe, FaBug, FaUserTie, FaClock, FaLightbulb, FaCode, FaProjectDiagram, FaTools } from 'react-icons/fa'

const ServiceCard = ({ icon: Icon, title, description, features, delay = 0 }) => {
  return (
    <motion.div
      className="service-card"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay }}
      whileHover={{ y: -5 }}
    >
      <div className="service-icon">
        <Icon />
      </div>
      <h3 className="service-title">{title}</h3>
      <p className="service-description">{description}</p>
      <ul className="service-features">
        {features.map((feature, index) => (
          <li key={index} className="service-feature">
            <span className="feature-check">✓</span>
            {feature}
          </li>
        ))}
      </ul>
    </motion.div>
  )
}

const Services = () => {
  const services = [
    {
      icon: FaCode,
      title: "Custom App Development",
      description: "Complete end-to-end development from idea to deployment. Whether you're a non-tech person or have technical knowledge, I'll guide you through every step and deliver your mobile or web application within a fixed timeframe.",
      features: [
        "End-to-End Development Process",
        "Mobile App Development (React Native)",
        "Web Application Development (React, Next.js)",
        "Full-stack Solutions",
        "Fixed Timeline Delivery",
        "Complete Project Management"
      ]
    },
    {
      icon: FaUserTie,
      title: "Full-Time Professional",
      description: "Available for full-time positions where I can contribute as a dedicated team member to your organization's growth and success.",
      features: [
        "Dedicated Full-Time Commitment",
        "Team Collaboration",
        "Long-term Project Support",
        "Professional Development",
        "Availability Based"
      ]
    },
    {
      icon: FaBug,
      title: "Bug Fixing & Maintenance",
      description: "Got an existing project with bugs that need fixing? No technical knowledge required! I'll handle all the technical aspects, identify issues, and get your application running smoothly without you needing to understand the technical details.",
      features: [
        "Complete Technical Analysis",
        "Bug Identification & Fixing",
        "Performance Optimization",
        "Code Review & Refactoring",
        "Legacy System Support",
        "Non-Technical Communication"
      ]
    },
    {
      icon: FaClock,
      title: "Part-Time Development",
      description: "Need ongoing support or specific tasks? Perfect for non-tech people! I'll handle all technical aspects while keeping you informed in simple, non-technical language about progress and decisions.",
      features: [
        "Flexible Part-Time Hours",
        "Ongoing Project Support",
        "Task-Specific Development",
        "Remote Collaboration",
        "Simple Progress Updates",
        "Non-Technical Explanations"
      ]
    },
    {
      icon: FaLightbulb,
      title: "Technical Consultancy",
      description: "Need expert advice on technology choices or development strategies? I'll explain complex technical concepts in simple terms and guide you through all technical decisions without requiring any technical background from you.",
      features: [
        "Simple Technology Explanations",
        "System Architecture Planning",
        "Development Strategy Consulting",
        "Code Quality Assessment",
        "Non-Technical Decision Support",
        "Clear Communication"
      ]
    }
  ]

  return (
    <section className="services section" id="services">
      <div className="container">
        <motion.div
          className="section-header"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="section-title">What I Can Provide You</h2>
          <p className="section-subtitle">
            <strong>Non-tech person? No problem!</strong> I provide complete end-to-end support from requirement analysis to software deployment. 
            You don't need any technical knowledge - I'll handle everything for you.
          </p>
        </motion.div>

        <div className="services-grid">
          {services.map((service, index) => (
            <ServiceCard
              key={index}
              icon={service.icon}
              title={service.title}
              description={service.description}
              features={service.features}
              delay={index * 0.1}
            />
          ))}
        </div>

      </div>
    </section>
  )
}

export default Services
