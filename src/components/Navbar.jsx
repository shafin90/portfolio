import { useState } from 'react'
import './Navbar.css'

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
      setIsMenuOpen(false)
    }
  }

  return (
    <nav className="navbar">
      <div className="container navbar-container">
        <a href="#" className="navbar-logo" onClick={() => scrollToSection('hero')}>
          Shafin's Framework
        </a>

        <button 
          className="navbar-toggle"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          <span className="navbar-toggle-icon"></span>
        </button>

        <div className={`navbar-menu ${isMenuOpen ? 'active' : ''}`}>
          <a href="#about" className="navbar-link" onClick={() => scrollToSection('about')}>About</a>
          <a href="#projects" className="navbar-link" onClick={() => scrollToSection('projects')}>Projects</a>
          <a href="#career" className="navbar-link" onClick={() => scrollToSection('career')}>Career Journey</a>
          <a href="#contact" className="navbar-link" onClick={() => scrollToSection('contact')}>Contact</a>
        </div>
      </div>
    </nav>
  )
}

export default Navbar 