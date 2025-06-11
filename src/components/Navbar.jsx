import { useState, useEffect } from 'react'
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
      const sections = ['hero', 'about', 'projects', 'career', 'contact']
      const scrollPosition = window.scrollY + 100 // Adding offset for better detection

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

  return (
    <nav className="navbar">
      <div className="container navbar-container">
        <a 
          href="#" 
          className={`navbar-logo ${activeSection === 'hero' ? 'active' : ''}`} 
          onClick={() => scrollToSection('hero')}
        >
          Shafin's Framework
        </a>

        <button 
          className="navbar-toggle"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          <span className="navbar-toggle-icon"></span>
        </button>

        <div className={`navbar-menu ${isMenuOpen ? 'active' : ''}`}>
          <a 
            href="#about" 
            className={`navbar-link ${activeSection === 'about' ? 'active' : ''}`} 
            onClick={() => scrollToSection('about')}
          >
            About
          </a>
          <a 
            href="#projects" 
            className={`navbar-link ${activeSection === 'projects' ? 'active' : ''}`} 
            onClick={() => scrollToSection('projects')}
          >
            Projects
          </a>
          <a 
            href="#career" 
            className={`navbar-link ${activeSection === 'career' ? 'active' : ''}`} 
            onClick={() => scrollToSection('career')}
          >
            Career Journey
          </a>
          <a 
            href="#contact" 
            className={`navbar-link ${activeSection === 'contact' ? 'active' : ''}`} 
            onClick={() => scrollToSection('contact')}
          >
            Contact
          </a>
        </div>
      </div>
    </nav>
  )
}

export default Navbar 