import { motion } from 'framer-motion';
import { useState } from 'react';
import globe1 from '../assets/globe1.jpeg';
import globe2 from '../assets/globe2.jpeg';
import nellai1 from '../assets/nellai1.jpeg';
import nellai2 from '../assets/nellai2.jpeg';
import ex1 from '../assets/ex1.jpeg';
import ex2 from '../assets/ex2.jpeg';
import GlowButton from './GlowButton';

const projects = [
  {
    id: 1,
    title: "Global Ontology Engine – AI-Powered Intelligence System",
    badge: "India Innovates 2026 Finalist",
    description: "Our solution focuses on building a real-time global intelligence system that collects data from diverse sources (geopolitics, economy, defense, tech, climate), uses AI to extract structured insights from unstructured content, builds a dynamic knowledge graph, and enables decision-makers to gain actionable, explainable intelligence.",
    techStack: ["React", "Flask", "OpenRouter", "Gemini", "Jina", "Supabase"],
    features: [
      "Real-time data ingestion + AI reasoning",
      "Interactive knowledge graph visualization",
      "Multi-domain intelligence aggregation",
      "Explainable insights for strategic decisions"
    ],
    demoLink: "https://inquisitive-basbousa-ecf1ad.netlify.app/",
    images: [globe1, globe2]
  },
  {
    id: 2,
    title: "AI & Tourism App – Smart Guide",
    badge: "Smart Tourism",
    description: "Built a tourism application that combines Artificial Intelligence (LLM) with real-world tourism data to create an intelligent travel companion for exploring places like Tirunelveli (Nellai) and other districts of Tamil Nadu. The goal is to transform traditional tourism apps into a smart, conversational travel guide with providing reliable, location-aware information.",
    techStack: ["Flutter", "Firebase", "Gemini AI", "Google Maps", "REST APIs"],
    features: [
      "AI-powered tourism assistant using Gemini LLM",
      "Interactive place exploration with map-based navigation",
      "District-wise tourism discovery with curated POI datasets",
      "Bilingual support (English & Tamil)",
      "Context-aware AI responses about places & history"
    ],
    demoLink: null,
    images: [nellai1, nellai2]
  },
  {
    id: 3,
    title: "Extract.in – Smart Data Extraction",
    badge: "Web Extraction",
    description: "Extract.in is a smart web extraction tool that can pull meaningful information from any webpage using just a URL. Simply enter a link and ask a question — the system extracts relevant data and gives structured answers instantly. It aims to make web data extraction fast, simple, and accessible.",
    techStack: ["Browse AI", "Jina AI", "Scrapy", "BeautifulSoup", "Streamlit", "Nemotron"],
    features: [
      "AI-powered content extraction",
      "Multi-layer scraping pipeline",
      "Interactive UI with Lottie animations",
      "Smart fallback system during API limits",
      "Clean UI with animated extraction feedback"
    ],
    demoLink: null,
    images: [ex1, ex2]
  }
];

const ProjectCard = ({ project, index }) => {
  const isEven = index % 2 === 0;
  // State for image carousel within project
  const [currentImage, setCurrentImage] = useState(0);

  const nextImage = () => {
    setCurrentImage((prev) => (prev + 1) % project.images.length);
  };

  const prevImage = () => {
    setCurrentImage((prev) => (prev - 1 + project.images.length) % project.images.length);
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.7, delay: 0.1 }}
      className={`flex flex-col ${isEven ? 'lg:flex-row' : 'lg:flex-row-reverse'} gap-10 items-stretch mb-24 w-full`}
    >
      {/* Image Section */}
      <div className="flex-1 w-full lg:w-1/2 relative group rounded-2xl overflow-hidden border border-white/10 bg-[#ffffff05] shadow-[0_0_30px_rgba(0,240,255,0.05)] pt-6 pb-6 px-6 flex flex-col justify-center min-h-[400px]">
        <div className="relative w-full h-[300px] sm:h-[400px] rounded-xl overflow-hidden cursor-pointer" onClick={nextImage}>
          <motion.img
            key={currentImage}
            initial={{ opacity: 0, scale: 1.05 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.4 }}
            src={project.images[currentImage]}
            alt={`${project.title} screenshot`}
            className="w-full h-full object-cover rounded-xl"
          />
          {/* Navigation Overlay */}
          <div className="absolute inset-0 flex items-center justify-between p-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
             <button onClick={(e) => { e.stopPropagation(); prevImage(); }} className="w-10 h-10 rounded-full bg-black/60 border border-white/20 text-white flex items-center justify-center pointer-events-auto hover:bg-black/80 hover:scale-110 transition-all backdrop-blur-md">
                ❮
             </button>
             <button onClick={(e) => { e.stopPropagation(); nextImage(); }} className="w-10 h-10 rounded-full bg-black/60 border border-white/20 text-white flex items-center justify-center pointer-events-auto hover:bg-black/80 hover:scale-110 transition-all backdrop-blur-md">
                ❯
             </button>
          </div>
          {/* Indicators */}
          <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex gap-2">
            {project.images.map((_, i) => (
              <div key={i} className={`h-1.5 rounded-full transition-all duration-300 ${i === currentImage ? 'w-6 bg-neon-cyan' : 'w-2 bg-white/40'}`} />
            ))}
          </div>
        </div>
      </div>

      {/* Text Section */}
      <div className="flex-1 w-full lg:w-1/2 flex flex-col justify-center space-y-6">
        <div>
          <span className="inline-block px-4 py-1.5 rounded-full text-xs font-semibold uppercase tracking-wider bg-neon-purple/10 text-neon-purple border border-neon-purple/30 mb-4 shadow-[0_0_15px_rgba(168,85,247,0.2)]">
            {project.badge}
          </span>
          <h3 className="text-3xl sm:text-4xl font-orbitron font-bold text-white mb-4 leading-tight">
            {project.title}
          </h3>
          <p className="text-gray-300 font-inter text-sm sm:text-base leading-relaxed mb-6">
            {project.description}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Unique / Features */}
            <div className="space-y-3">
              <h4 className="text-neon-cyan font-poppins font-semibold text-sm tracking-wide uppercase flex items-center gap-2">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon></svg>
                Key Highlights
              </h4>
              <ul className="space-y-2">
                {project.features.map((feature, i) => (
                  <li key={i} className="text-gray-400 text-sm font-inter flex items-start gap-2">
                    <span className="text-neon-gold mt-1 block">▹</span>
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
            
            {/* Tech Stack */}
            <div className="space-y-3">
              <h4 className="text-neon-gold font-poppins font-semibold text-sm tracking-wide uppercase flex items-center gap-2">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"></path><polyline points="3.27 6.96 12 12.01 20.73 6.96"></polyline><line x1="12" y1="22.08" x2="12" y2="12"></line></svg>
                Tech Stack
              </h4>
              <div className="flex flex-wrap gap-2">
                {project.techStack.map((tech, i) => (
                  <span key={i} className="px-3 py-1 bg-white/5 border border-white/10 rounded-md text-xs text-gray-300 font-inter">
                    {tech}
                  </span>
                ))}
              </div>
            </div>
        </div>

        {/* Action Button */}
        {project.demoLink && (
          <div className="pt-4">
             <GlowButton variant="primary" href={project.demoLink} target="_blank" rel="noopener noreferrer">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                   <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
                   <polyline points="15 3 21 3 21 9"></polyline>
                   <line x1="10" y1="14" x2="21" y2="3"></line>
                </svg>
                Try Live Demo
             </GlowButton>
          </div>
        )}
      </div>
    </motion.div>
  );
};

const Projects = () => {
  return (
    <section
      id="projects"
      className="relative min-h-screen py-24 overflow-hidden"
      style={{ background: 'linear-gradient(135deg, #030014 0%, #0a0a2e 50%, #030014 100%)' }}
    >
      {/* Background ambient glow */}
      <div
        className="absolute w-[800px] h-[800px] rounded-full opacity-10 blur-[150px] pointer-events-none"
        style={{
          background: 'radial-gradient(circle, rgba(168,85,247,0.5), transparent)',
          top: '30%',
          right: '-20%',
        }}
      />
      <div
        className="absolute w-[600px] h-[600px] rounded-full opacity-10 blur-[150px] pointer-events-none"
        style={{
          background: 'radial-gradient(circle, rgba(0,240,255,0.4), transparent)',
          bottom: '10%',
          left: '-20%',
        }}
      />

      <div className="relative z-10 w-full max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        {/* Header */}
        <motion.div
           initial={{ opacity: 0, y: -20 }}
           whileInView={{ opacity: 1, y: 0 }}
           viewport={{ once: true }}
           transition={{ duration: 0.8 }}
           className="text-center mb-20"
        >
           <p className="text-neon-cyan/80 font-orbitron tracking-[4px] uppercase mb-4 text-sm mix-blend-screen">
             My Portfolio
           </p>
           <h2 className="text-4xl sm:text-5xl md:text-6xl font-orbitron font-bold text-white mb-6">
             Featured <span className="text-transparent bg-clip-text bg-gradient-to-r from-neon-purple to-neon-cyan">Projects</span>
           </h2>
           <div className="w-24 h-1 bg-gradient-to-r from-neon-purple to-neon-cyan mx-auto rounded-full" />
        </motion.div>

        {/* Projects List */}
        <div className="flex flex-col items-center justify-center w-full">
           {projects.map((project, index) => (
             <ProjectCard key={project.id} project={project} index={index} />
           ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
