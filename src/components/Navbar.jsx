import { useState, useEffect } from 'react'
import { FaHome, FaUser, FaProjectDiagram, FaBriefcase, FaEnvelope, FaBars, FaTimes, FaGithub, FaLinkedin, FaHandshake } from 'react-icons/fa'
import './Navbar.css'

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [activeSection, setActiveSection] = useState('hero')

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
      setIsMenuOpen(false)
    }
  }

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['hero', 'about', 'services', 'projects', 'career', 'contact']
      const scrollPosition = window.scrollY + 100

      for (const section of sections) {
        const element = document.getElementById(section)
        if (element) {
          const { offsetTop, offsetHeight } = element
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section)
            break
          }
        }
      }
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const navItems = [
    { id: 'hero', label: 'Home', icon: FaHome },
    { id: 'about', label: 'About', icon: FaUser },
    { id: 'services', label: 'Services', icon: FaHandshake },
    { id: 'projects', label: 'Projects', icon: FaProjectDiagram },
    { id: 'career', label: 'Career', icon: FaBriefcase },
    { id: 'contact', label: 'Contact', icon: FaEnvelope }
  ]

  return (
    <>
      {/* Mobile Menu Button */}
      <button 
        className="mobile-menu-btn"
        onClick={() => setIsMenuOpen(!isMenuOpen)}
      >
        {isMenuOpen ? <FaTimes /> : <FaBars />}
      </button>

      {/* Floating Side Navbar */}
      <nav className={`floating-nav ${isMenuOpen ? 'open' : ''}`}>
        {/* Logo Section */}
        <div className="nav-logo-section">
          <div className="nav-logo">
            <span className="logo-initial">S</span>
          </div>
        </div>

        {/* Navigation Items */}
        <div className="nav-items">
          {navItems.map((item) => {
            const Icon = item.icon
            return (
              <button
                key={item.id}
                className={`nav-item ${activeSection === item.id ? 'active' : ''}`}
                onClick={() => scrollToSection(item.id)}
                title={item.label}
              >
                <div className="nav-icon">
                  <Icon />
                </div>
                <div className="nav-tooltip">{item.label}</div>
                <div className="nav-indicator"></div>
              </button>
            )
          })}
        </div>

        {/* Social Links */}
        <div className="nav-social-section">
          <a href="https://github.com/shafin90" target="_blank" rel="noopener noreferrer" className="social-item" title="GitHub">
            <FaGithub />
          </a>
          <a href="https://www.linkedin.com/in/mashrafi-ahnam/" target="_blank" rel="noopener noreferrer" className="social-item" title="LinkedIn">
            <FaLinkedin />
          </a>
        </div>
      </nav>

      {/* Overlay for mobile */}
      {isMenuOpen && <div className="nav-overlay" onClick={() => setIsMenuOpen(false)}></div>}
    </>
  )
}

export default Navbar 