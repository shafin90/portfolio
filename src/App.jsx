import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About, { CareerJourney } from './components/About'
import Projects from './components/Projects'
import Contact from './components/Contact'
// import Footer from './components/Footer' // Removed
import './App.css'

function App() {
  return (
    <div className="app">
      <Navbar />
      <main>
        <section id="hero">
          <Hero />
        </section>
        <section id="about">
          <About />
        </section>
        <section id="projects">
          <Projects />
        </section>
        <section id="career">
          <CareerJourney />
        </section>
        <section id="contact">
          <Contact />
        </section>
      </main>
      {/* <Footer /> */}
    </div>
  )
}

export default App
