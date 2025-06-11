import './Hero.css'

const Hero = () => {
  return (
    <section className="hero section">
      <div className="container">
        <div className="hero-content">
          <h1 className="hero-title">
            Hi, I'm <span className="hero-name">Mashrafi Ahnam Shafin</span>
          </h1>
          <p className="hero-subtitle">
            A passionate JavaScript developer crafting modern web experiences
          </p>
          <div className="hero-buttons">
            <a
              href="https://github.com/shafin90"
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-primary"
            >
              GitHub
            </a>
            <a
              href="https://www.linkedin.com/in/mashrafi-ahnam/"
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-outline"
            >
              LinkedIn
            </a>
          </div>
        </div>
        <div className="hero-image">
          <img 
            src="https://media.giphy.com/media/qgQUggAC3Pfv687qPC/giphy.gif" 
            alt="Developer at work GIF" 
            className="hero-gif"
          />
        </div>
      </div>
    </section>
  )
}

export default Hero 