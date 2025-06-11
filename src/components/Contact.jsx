import './Contact.css'
import { motion } from 'framer-motion'
import { FaEnvelope, FaPhone, FaMapMarkerAlt, FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa'
import { useState } from 'react'

const ContactInfo = ({ icon: Icon, title, content, link }) => {
  return (
    <motion.div 
      className="contact-info"
      whileHover={{ scale: 1.05 }}
      transition={{ type: "spring", stiffness: 300 }}
    >
      <div className="contact-icon">
        <Icon />
      </div>
      <div className="contact-details">
        <h3 className="contact-title">{title}</h3>
        {link ? (
          <a href={link} target="_blank" rel="noopener noreferrer" className="contact-content">
            {content}
          </a>
        ) : (
          <p className="contact-content">{content}</p>
        )}
      </div>
    </motion.div>
  )
}

const SocialLink = ({ icon: Icon, href, label }) => {
  return (
    <motion.a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="social-link"
      whileHover={{ y: -5 }}
      whileTap={{ scale: 0.95 }}
      aria-label={label}
    >
      <Icon />
    </motion.a>
  )
}

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  })

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    // Add your form submission logic here
    console.log('Form submitted:', formData)
  }

  return (
    <section className="contact section" id="contact">
      <div className="container">
        <motion.div
          className="section-header"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="section-title">Get In Touch</h2>
          <p className="section-subtitle">
            Have a project in mind? Let's talk about it!
          </p>
        </motion.div>

        <div className="contact-grid">
          <motion.div 
            className="contact-info-section"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <ContactInfo
              icon={FaEnvelope}
              title="Email"
              content="mashrafiahnam1@gmail.com"
              link="mailto:mashrafiahnam1@gmail.com"
            />
            <ContactInfo
              icon={FaPhone}
              title="Phone"
              content="+9901620674384"
              link="tel:+9901620674384"
            />
            <ContactInfo
              icon={FaMapMarkerAlt}
              title="Location"
              content="Narayanganj, Dhaka, Bangladesh"
            />

            <div className="social-links">
              <SocialLink
                icon={FaGithub}
                href="https://github.com/shafin90"
                label="GitHub Profile"
              />
              <SocialLink
                icon={FaLinkedin}
                href="https://www.linkedin.com/in/mashrafi-ahnam/"
                label="LinkedIn Profile"
              />
            </div>
          </motion.div>

          <motion.form 
            className="contact-form"
            onSubmit={handleSubmit}
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <div className="form-group">
              <input
                type="text"
                name="name"
                placeholder="Your Name"
                className="form-input"
                value={formData.name}
                onChange={handleChange}
                required
              />
            </div>
            <div className="form-group">
              <input
                type="email"
                name="email"
                placeholder="Your Email"
                className="form-input"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </div>
            <div className="form-group">
              <textarea
                name="message"
                placeholder="Your Message"
                rows="6"
                className="form-input"
                value={formData.message}
                onChange={handleChange}
                required
              ></textarea>
            </div>
            <motion.button 
              type="submit" 
              className="submit-btn"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Send Message
            </motion.button>
          </motion.form>
        </div>
      </div>
    </section>
  )
}

export default Contact 