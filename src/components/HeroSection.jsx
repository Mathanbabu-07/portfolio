import { motion } from 'framer-motion'
import ParticleBackground from './ParticleBackground'
import TypingEffect from './TypingEffect'
import ProfileImage from './ProfileImage'
import GlowButton from './GlowButton'
import SocialIcons, { GithubIcon, LinkedinIcon, EmailIcon, LocationIcon, PhoneIcon } from './SocialIcons'
import profileImg from '../assets/me.jpeg'

const roles = [
  'Aspiring Data Scientist',
  'Data Analyst',
  'AI Enthusiast',
]

const socialLinks = [
  {
    url: 'https://github.com/Mathanbabu-07',
    icon: <GithubIcon />,
    label: 'GitHub',
  },
  {
    url: 'https://www.linkedin.com/in/mathan-babu-8331b1355',
    icon: <LinkedinIcon />,
    label: 'LinkedIn',
  },
  {
    url: 'mailto:s.mathanbabu2007@gmail.com',
    icon: <EmailIcon />,
    label: 'Email',
  },
  {
    url: 'tel:+916381234567',
    icon: <PhoneIcon />,
    label: 'Phone',
  },
]

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.3,
    },
  },
}

const itemVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.7,
      ease: [0.25, 0.46, 0.45, 0.94],
    },
  },
}

const imageVariants = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      duration: 0.8,
      ease: [0.25, 0.46, 0.45, 0.94],
      delay: 0.5,
    },
  },
}

const HeroSection = () => {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
      style={{ background: 'linear-gradient(135deg, #030014 0%, #0a0a2e 50%, #030014 100%)' }}
    >
      {/* Neon Grid */}
      <div className="neon-grid" />

      {/* Particles */}
      <ParticleBackground />

      {/* Ambient glow orbs */}
      <div
        className="absolute w-[500px] h-[500px] rounded-full opacity-20 blur-[120px]"
        style={{
          background: 'radial-gradient(circle, rgba(0,240,255,0.3), transparent)',
          top: '-10%',
          right: '-10%',
        }}
      />
      <div
        className="absolute w-[400px] h-[400px] rounded-full opacity-15 blur-[100px]"
        style={{
          background: 'radial-gradient(circle, rgba(168,85,247,0.3), transparent)',
          bottom: '-5%',
          left: '-5%',
        }}
      />

      {/* Main Content */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 py-20">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12 lg:gap-16">

          {/* Left Side — Text Content */}
          <motion.div
            className="flex-1 text-center lg:text-left max-w-2xl"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            {/* Location Badge */}
            <motion.div variants={itemVariants} className="mb-6">
              <span className="location-badge">
                <LocationIcon />
                Madurai, Tamil Nadu, India
              </span>
            </motion.div>

            {/* Greeting */}
            <motion.p
              variants={itemVariants}
              className="text-sm sm:text-base text-neon-cyan/70 font-orbitron tracking-[4px] uppercase mb-3"
            >
              Hello, I'm
            </motion.p>

            {/* Name */}
            <motion.h1
              variants={itemVariants}
              className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-orbitron font-bold gradient-name leading-tight mb-4"
            >
              Mathan Babu S
            </motion.h1>

            {/* Typing Effect */}
            <motion.div
              variants={itemVariants}
              className="text-xl sm:text-2xl md:text-3xl font-poppins font-semibold mb-6 min-h-[44px]"
            >
              <TypingEffect strings={roles} speed={80} deleteSpeed={40} pauseTime={2000} />
            </motion.div>

            {/* Intro Paragraph */}
            <motion.p
              variants={itemVariants}
              className="text-sm sm:text-base text-gray-400 leading-relaxed mb-8 max-w-xl mx-auto lg:mx-0 font-inter"
            >
              Aspiring Data Scientist with a strong interest in turning data into meaningful insights. 
              Skilled in data analysis and data science, with hands-on experience in data visualization 
              using Python and Power BI. Proficient in web scraping, API integration, and web development 
              with Agentic AI — building intelligent and interactive applications.
            </motion.p>

            {/* Buttons */}
            <motion.div
              variants={itemVariants}
              className="flex flex-wrap items-center justify-center lg:justify-start gap-4 mb-8"
            >
              <GlowButton variant="primary" href="#projects">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M15 3h6v6M9 21H3v-6M21 3l-7 7M3 21l7-7" />
                </svg>
                View Projects
              </GlowButton>
              <GlowButton variant="secondary" href="/resume.pdf">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4M7 10l5 5 5-5M12 15V3" />
                </svg>
                Download Resume
              </GlowButton>
              <GlowButton variant="contact" href="mailto:s.mathanbabu2007@gmail.com">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z" />
                </svg>
                Contact Me
              </GlowButton>
            </motion.div>

            {/* Social Links — Icons */}
            <motion.div variants={itemVariants}>
              <SocialIcons links={socialLinks} />
            </motion.div>

            {/* Explicit Contact Info */}
            <motion.div variants={itemVariants} className="contact-info-grid">
              <a href="https://github.com/Mathanbabu-07" target="_blank" rel="noopener noreferrer" className="contact-info-item">
                <GithubIcon />
                <div className="contact-info-text">
                  <span className="contact-info-label">GitHub</span>
                  <span className="contact-info-value">github.com/Mathanbabu-07</span>
                </div>
              </a>
              <a href="https://www.linkedin.com/in/mathan-babu-8331b1355" target="_blank" rel="noopener noreferrer" className="contact-info-item">
                <LinkedinIcon />
                <div className="contact-info-text">
                  <span className="contact-info-label">LinkedIn</span>
                  <span className="contact-info-value">mathan-babu-8331b1355</span>
                </div>
              </a>
              <a href="mailto:s.mathanbabu2007@gmail.com" className="contact-info-item">
                <EmailIcon />
                <div className="contact-info-text">
                  <span className="contact-info-label">Email</span>
                  <span className="contact-info-value">s.mathanbabu2007@gmail.com</span>
                </div>
              </a>
              <a href="tel:+916381234567" className="contact-info-item">
                <PhoneIcon />
                <div className="contact-info-text">
                  <span className="contact-info-label">Phone</span>
                  <span className="contact-info-value">+91 63812 34567</span>
                </div>
              </a>
            </motion.div>
          </motion.div>

          {/* Right Side — Profile Image */}
          <motion.div
            className="flex-shrink-0"
            variants={imageVariants}
            initial="hidden"
            animate="visible"
          >
            <ProfileImage src={profileImg} alt="Mathan Babu S — Aspiring Data Scientist" />
          </motion.div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        className="scroll-indicator"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2, duration: 1 }}
      >
        <span>Scroll</span>
        <div className="scroll-arrow" />
      </motion.div>
    </section>
  )
}

export default HeroSection
