import './Contact.css'
import { motion } from 'framer-motion'
import { FaEnvelope, FaPhone, FaMapMarkerAlt, FaGithub, FaLinkedin } from 'react-icons/fa'
import { useState } from 'react'
import emailjs from '@emailjs/browser'

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

  const [status, setStatus] = useState({
    submitting: false,
    submitted: false,
    error: null
  })

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setStatus({ submitting: true, submitted: false, error: null })

    try {
      await emailjs.send(
        'service_024koex',
        'template_bfhnf2j',
        {
          name: formData.name,
          time: new Date().toLocaleString(),
          message: formData.message,
          from_email: formData.email
        },
        'KGrJ_lEA4Sq7O7ij-'
      )

      setStatus({
        submitting: false,
        submitted: true,
        error: null
      })
      setFormData({ name: '', email: '', message: '' })
    } catch (error) {
      setStatus({
        submitting: false,
        submitted: false,
        error: 'Failed to send message. Please try again.'
      })
    }
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
              content="shafinahnam89@gmail.com"
              link="mailto:shafinahnam89@gmail.com"
            />
            <ContactInfo
              icon={FaPhone}
              title="Phone"
              content="+8801620674384"
              link="tel:+8801620674384"
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
                disabled={status.submitting}
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
                disabled={status.submitting}
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
                disabled={status.submitting}
              ></textarea>
            </div>
            {status.error && (
              <div className="form-error">
                {status.error}
              </div>
            )}
            {status.submitted && (
              <div className="form-success">
                Message sent successfully! I'll get back to you soon.
              </div>
            )}
            <motion.button 
              type="submit" 
              className="submit-btn"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              disabled={status.submitting}
            >
              {status.submitting ? 'Sending...' : 'Send Message'}
            </motion.button>
          </motion.form>
        </div>
      </div>
    </section>
  )
}

export default Contact 