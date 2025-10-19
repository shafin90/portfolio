import './Hero.css'
import { motion } from 'framer-motion'
import { FaCode, FaTerminal, FaDatabase, FaServer, FaDownload, FaGithub, FaLinkedin, FaReact, FaNodeJs, FaJs, FaAngular, FaVuejs, FaDocker, FaGit, FaAws, FaProjectDiagram } from 'react-icons/fa'
import { SiTypescript, SiMongodb, SiPostgresql, SiNextdotjs, SiNuxtdotjs, SiExpress, SiNestjs, SiFirebase, SiVercel } from 'react-icons/si'

const Hero = () => {
  return (
    <section className="hero section">
      <div className="hero-background">
          <div className="matrix-rain">
            <div className="matrix-column">
              <span>1</span>
              <span>0</span>
              <span>1</span>
              <span>0</span>
              <span>1</span>
              <span>0</span>
              <span>1</span>
              <span>0</span>
            </div>
            <div className="matrix-column">
              <span>0</span>
              <span>1</span>
              <span>0</span>
              <span>1</span>
              <span>0</span>
              <span>1</span>
              <span>0</span>
              <span>1</span>
            </div>
            <div className="matrix-column">
              <span>1</span>
              <span>1</span>
              <span>0</span>
              <span>1</span>
              <span>0</span>
              <span>0</span>
              <span>1</span>
              <span>1</span>
            </div>
            <div className="matrix-column">
              <span>0</span>
              <span>0</span>
              <span>1</span>
              <span>0</span>
              <span>1</span>
              <span>1</span>
              <span>0</span>
              <span>0</span>
            </div>
            <div className="matrix-column">
              <span>1</span>
              <span>0</span>
              <span>1</span>
              <span>1</span>
              <span>0</span>
              <span>1</span>
              <span>0</span>
              <span>1</span>
            </div>
            <div className="matrix-column">
              <span>0</span>
              <span>1</span>
              <span>0</span>
              <span>0</span>
              <span>1</span>
              <span>0</span>
              <span>1</span>
              <span>0</span>
            </div>
            <div className="matrix-column">
              <span>1</span>
              <span>1</span>
              <span>1</span>
              <span>0</span>
              <span>0</span>
              <span>1</span>
              <span>1</span>
              <span>0</span>
            </div>
            <div className="matrix-column">
              <span>0</span>
              <span>0</span>
              <span>0</span>
              <span>1</span>
              <span>1</span>
              <span>0</span>
              <span>0</span>
              <span>1</span>
            </div>
          </div>
          
          <div className="code-lines">
            <div className="line">const developer = {`{`}</div>
            <div className="line">  name: "Mashrafi Ahnam Shafin",</div>
            <div className="line">  role: "Full Stack Developer",</div>
            <div className="line">  company: "Legato",</div>
            <div className="line">  skills: ["React", "React Native", "Next.js", "Angular", "Vue", "Nuxt.js", "JavaScript", "TypeScript", "Node.js", "Express", "NestJS", "Firebase", "MongoDB", "PostgreSQL", "Docker", "Git", "AWS"],</div>
            <div className="line">  experience: 2  " years",</div>
            <div className="line">  contact: {`{`}</div>
            <div className="line">    email: "shafinahnam89@gmail.com",</div>
            <div className="line">    phone: "+8801620674384"</div>
            <div className="line">  {`}`}</div>
            <div className="line">{`};`}</div>
          </div>
      </div>
      
      <div className="container">
        <div className="hero-layout">
        <div className="hero-content">
            <motion.div
              className="hero-badge"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <FaCode />
              <span>Full Stack Developer</span>
            </motion.div>

            <motion.h1 
              className="hero-title"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
            Hi, I'm <span className="hero-name">Mashrafi Ahnam Shafin</span>
            </motion.h1>

            <motion.p 
              className="hero-subtitle"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              Building scalable web applications at <span className="company-highlight">Legato</span>. 
              Passionate about exploring the core of software engineering, system design, and architecture. 
              Love diving deep into how systems work and creating robust, scalable solutions!
            </motion.p>

            <motion.div 
              className="tech-stack"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              <span className="tech-label">Tech Stack:</span>
              <div className="tech-icons">
                <FaReact className="tech-icon" title="React" />
                <FaReact className="tech-icon" title="React Native" />
                <SiNextdotjs className="tech-icon" title="Next.js" />
                <FaAngular className="tech-icon" title="Angular" />
                <FaVuejs className="tech-icon" title="Vue" />
                <SiNuxtdotjs className="tech-icon" title="Nuxt.js" />
                <FaJs className="tech-icon" title="JavaScript" />
                <SiTypescript className="tech-icon" title="TypeScript" />
                <FaNodeJs className="tech-icon" title="Node.js" />
                <SiExpress className="tech-icon" title="Express" />
                <SiNestjs className="tech-icon" title="NestJS" />
                <SiFirebase className="tech-icon" title="Firebase" />
                <SiMongodb className="tech-icon" title="MongoDB" />
                <SiPostgresql className="tech-icon" title="PostgreSQL" />
                <FaDocker className="tech-icon" title="Docker" />
                <FaGit className="tech-icon" title="Git" />
                <FaAws className="tech-icon" title="AWS" />
                <SiVercel className="tech-icon" title="Vercel" />
                <FaCode className="tech-icon" title="LeetCode" />
                <FaProjectDiagram className="tech-icon" title="Algorithms" />
                <FaDatabase className="tech-icon" title="Data Structures" />
                <FaServer className="tech-icon" title="System Design" />
              </div>
            </motion.div>


            <motion.div 
              className="hero-buttons"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1 }}
            >
              <motion.a
                href="/a5c3edc6-2a17-431a-a94d-17f316938298.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-primary"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <FaDownload />
                Download Resume
              </motion.a>
              <motion.a
              href="https://github.com/shafin90"
              target="_blank"
              rel="noopener noreferrer"
                className="btn btn-outline"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
            >
                <FaGithub />
              GitHub
              </motion.a>
              <motion.a
              href="https://www.linkedin.com/in/mashrafi-ahnam/"
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-outline"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
            >
                <FaLinkedin />
              LinkedIn
              </motion.a>
            </motion.div>
          </div>

          <motion.div 
            className="hero-visual"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, delay: 0.5 }}
          >

            <div className="code-window">
              <div className="window-header">
                <div className="window-controls">
                  <span className="control close"></span>
                  <span className="control minimize"></span>
                  <span className="control maximize"></span>
                </div>
                <div className="window-title">portfolio.js</div>
              </div>
              <div className="code-content">
                <div className="code-line">
                  <span className="line-number">1</span>
                  <span className="code-text">
                    <span className="keyword">const</span> <span className="variable">developer</span> = <span className="bracket">{`{`}</span>
                  </span>
                </div>
                <div className="code-line">
                  <span className="line-number">2</span>
                  <span className="code-text">
                    &nbsp;&nbsp;<span className="property">name</span>: <span className="string">"Mashrafi Ahnam Shafin"</span>,
                  </span>
                </div>
                <div className="code-line">
                  <span className="line-number">3</span>
                  <span className="code-text">
                    &nbsp;&nbsp;<span className="property">role</span>: <span className="string">"Full Stack Developer"</span>,
                  </span>
                </div>
                <div className="code-line">
                  <span className="line-number">4</span>
                  <span className="code-text">
                    &nbsp;&nbsp;<span className="property">company</span>: <span className="string">"Legato"</span>,
                  </span>
                </div>
                <div className="code-line">
                  <span className="line-number">5</span>
                  <span className="code-text">
                    &nbsp;&nbsp;<span className="property">skills</span>: [<span className="string">"React"</span>, <span className="string">"React Native"</span>, <span className="string">"Next.js"</span>, <span className="string">"Angular"</span>, <span className="string">"Vue"</span>, <span className="string">"Nuxt.js"</span>, <span className="string">"JavaScript"</span>, <span className="string">"TypeScript"</span>, <span className="string">"Node.js"</span>, <span className="string">"Express"</span>, <span className="string">"NestJS"</span>, <span className="string">"Firebase"</span>, <span className="string">"MongoDB"</span>, <span className="string">"PostgreSQL"</span>, <span className="string">"Docker"</span>, <span className="string">"Git"</span>, <span className="string">"AWS"</span>],
                  </span>
                </div>
                <div className="code-line">
                  <span className="line-number">6</span>
                  <span className="code-text">
                    &nbsp;&nbsp;<span className="property">experience</span>: <span className="string">"almost 2 years"</span>,
                  </span>
                </div>
                <div className="code-line">
                  <span className="line-number">7</span>
                  <span className="code-text">
                    &nbsp;&nbsp;<span className="property">contact</span>: <span className="bracket">{`{`}</span>
                  </span>
                </div>
                <div className="code-line">
                  <span className="line-number">8</span>
                  <span className="code-text">
                    &nbsp;&nbsp;&nbsp;&nbsp;<span className="property">email</span>: <span className="string">"shafinahnam89@gmail.com"</span>,
                  </span>
                </div>
                <div className="code-line">
                  <span className="line-number">9</span>
                  <span className="code-text">
                    &nbsp;&nbsp;&nbsp;&nbsp;<span className="property">phone</span>: <span className="string">"+8801620674384"</span>
                  </span>
                </div>
                <div className="code-line">
                  <span className="line-number">10</span>
                  <span className="code-text">
                    &nbsp;&nbsp;<span className="bracket">{`}`}</span>
                  </span>
                </div>
                <div className="code-line">
                  <span className="line-number">11</span>
                  <span className="code-text">
                    <span className="bracket">{`};`}</span>
                  </span>
                </div>
                <div className="code-line">
                  <span className="line-number">12</span>
                  <span className="code-text">
                    <span className="comment">// Love system design & architecture</span>
                  </span>
                </div>
              </div>
            </div>

            <div className="floating-elements">
              <motion.div 
                className="floating-card react-card"
                animate={{
                  y: [0, -20, 0],
                  rotate: [0, 5, 0]
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              >
                <FaReact />
                <span>React</span>
              </motion.div>
              <motion.div 
                className="floating-card db-card"
                animate={{
                  y: [0, -25, 0],
                  x: [0, -10, 0]
                }}
                transition={{
                  duration: 4.5,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: 2
                }}
              >
                <FaDatabase />
                <span>Database</span>
              </motion.div>
            </div>

          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default Hero 