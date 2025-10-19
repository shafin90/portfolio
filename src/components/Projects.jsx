import './Projects.css';
import { motion } from 'framer-motion';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';
import { IoLinkSharp } from "react-icons/io5";
import { useState } from 'react';
import { li } from 'framer-motion/client';

const ProjectCard = ({ title, description, tech, github, live, image, openModal, liveURL }) => {
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
            {github === "Production" ? (
              <span className="confidential-text">
                Production-grade Application. Code is confidential.
              </span>
            ) : (
              <a
                href={github}
                target="_blank"
                rel="noopener noreferrer"
                className="project-link"
                aria-label="GitHub Repository"
              >
                <FaGithub />
              </a>
            )}

            <button
              className="project-link"
              aria-label="Live Demo"
              onClick={() => openModal(live)}
            >
              <FaExternalLinkAlt />
            </button>
            {liveURL && (
              <a href={liveURL} className="project-link">
                <IoLinkSharp />
              </a>
            )}
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
  );
};

const Projects = () => {
  const [activeCategory, setActiveCategory] = useState('all');
  const [modalOpen, setModalOpen] = useState(false);
  const [modalVideo, setModalVideo] = useState("");

  const categories = [
    { id: 'all', name: 'All Projects' },
    { id: 'mobile', name: 'Mobile Apps' },
    { id: 'frontend', name: 'Frontend' },
    { id: 'fullstack', name: 'Full Stack' },
  ];

  const projects = [
    {
      title: "Govihari Mobile Apps",
      description: "Mobile ticket booking system for Godavari river with scalable backend. Built with React Native, React.js, and Node.js. Handles over 2M users monthly.",
      tech: ["React Native", "React", "Firebase", "MongoDB", "Express", "Node.js", "Razorpay", "Docker", "Digital Ocean"],
      github: "Production",
      live: "https://www.youtube.com/watch?v=zl4e_pjz3S8",
      image: "https://img.youtube.com/vi/zl4e_pjz3S8/maxresdefault.jpg",
      category: "mobile",
      liveURL: null
    },
    {
      title: "Hardel Restaurant",
      description: "Crafted a modern, responsive UI for Hardel using React, Tailwind, and Vercel. Fully responsive and optimized for performance.",
      tech: ["React", "Tailwind CSS", "Framer Motion", "Locomotive Scroll"],
      github: "Production",
      live: "https://www.youtube.com/watch?v=Mipm-pQWfrg",
      image: "https://img.youtube.com/vi/Mipm-pQWfrg/maxresdefault.jpg",
      category: "frontend",
      liveURL: "https://hardel.vercel.app"
    },
    {
      title: "Bria Unisex Salon",
      description: "Full-stack Salon Management System with appointment scheduling, responsive UI, and admin dashboard. Built with React, Node.js, and MongoDB. Admin Email: admin@admin.com, Password: 12345678",
      tech: ["React", "Node.js", "MongoDB", "Express", "Tailwind CSS"],
      github: "Production",
      live: "https://www.youtube.com/watch?v=f-ALrqp4XYI",
      image: "https://img.youtube.com/vi/f-ALrqp4XYI/maxresdefault.jpg",
      category: "fullstack",
      liveURL: "https://bria-omega.vercel.app"
    }
  ];

  const filteredProjects = activeCategory === 'all'
    ? projects
    : projects.filter(project => project.category === activeCategory);

  const openModal = (url) => {
    setModalVideo(url);
    setModalOpen(true);
  };

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
            <ProjectCard
              liveURL={project.liveURL}
              key={index}
              {...project}
              openModal={openModal}
            />
          ))}
        </div>
      </div>

      {modalOpen && (
        <div className="modal-overlay" onClick={() => setModalOpen(false)}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <iframe
              width="560"
              height="315"
              src={
                modalVideo.includes("youtube.com")
                  ? modalVideo.replace("watch?v=", "embed/")
                  : modalVideo
              }
              title="Demo Video"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
            <button className="close-modal" onClick={() => setModalOpen(false)}>X</button>
          </div>
        </div>
      )}
    </section>
  );
};

export default Projects;
