import { useEffect, useState, useRef } from 'react';
import { motion, useInView } from 'framer-motion';

const RollingDigit = ({ digit, isInView, delay }) => {
  const digits = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
  return (
    <span className="inline-block h-[24px] w-[11px] overflow-hidden relative text-center">
      <motion.span
        initial={{ y: 0 }}
        animate={{ y: isInView ? `-${digit * 10}%` : "0%" }}
        transition={{ duration: 1.8, ease: [0.34, 1.56, 0.64, 1], delay }}
        className="flex flex-col absolute left-0 w-full"
      >
        {digits.map((d) => (
          <span
            key={d}
            className="h-[24px] flex items-center justify-center select-none font-orbitron font-bold text-white text-base leading-none"
          >
            {d}
          </span>
        ))}
      </motion.span>
    </span>
  );
};

const Odometer = ({ value, isInView }) => {
  const digits = String(value).split("");
  return (
    <span className="inline-flex items-center justify-center h-[24px] leading-none font-orbitron text-white">
      {digits.map((digit, i) => (
        isNaN(parseInt(digit)) ? (
          <span key={i} className="h-[24px] flex items-center text-base font-bold">{digit}</span>
        ) : (
          <RollingDigit key={i} digit={parseInt(digit)} isInView={isInView} delay={i * 0.08} />
        )
      ))}
      <span className="text-[10px] ml-0.5 opacity-80 font-bold self-center mt-[2px]">%</span>
    </span>
  );
};

const SkillCard = ({ name, percentage, tags, index, colorClass, gradientId, gradientColors }) => {
  const cardRef = useRef(null);
  const isInView = useInView(cardRef, { once: false, margin: "-60px" });
  const R = 36;
  const circumference = 2 * Math.PI * R; // ~226.2

  const borderGlow = {
    cyan: 'hover:shadow-[0_0_30px_rgba(0,240,255,0.2)] hover:border-neon-cyan/50',
    purple: 'hover:shadow-[0_0_30px_rgba(168,85,247,0.2)] hover:border-neon-purple/50',
    gold: 'hover:shadow-[0_0_30px_rgba(255,215,0,0.2)] hover:border-neon-gold/50',
  }[colorClass];

  return (
    <motion.div
      ref={cardRef}
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: isInView ? 1 : 0.3, y: isInView ? 0 : 15 }}
      transition={{ duration: 0.5 }}
      className={`relative flex items-center justify-between p-4 sm:p-6 rounded-2xl bg-[#ffffff02] border border-white/5 backdrop-blur-md transition-all duration-500 group ${borderGlow}`}
    >
      <div className="flex-1 pr-3 sm:pr-4 min-w-0">
        <h4 className="text-sm sm:text-lg font-poppins font-bold text-white mb-2 tracking-wide group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-white group-hover:to-gray-400 transition-colors duration-300">
          {name}
        </h4>
        <div className="flex flex-wrap gap-1.5 sm:gap-2 mt-2">
          {tags.map((tag, i) => (
            <span key={i} className="text-[9px] sm:text-[10px] uppercase font-semibold font-orbitron tracking-wider text-gray-400 bg-white/5 border border-white/5 px-1.5 sm:px-2 py-0.5 rounded">
              {tag}
            </span>
          ))}
        </div>
      </div>

      {/* SVG Circular Gauge */}
      <div className="relative w-16 h-16 sm:w-20 sm:h-20 flex-shrink-0 flex items-center justify-center">
        <svg className="w-full h-full transform -rotate-90">
          <defs>
            <linearGradient id={gradientId} x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor={gradientColors[0]} />
              <stop offset="100%" stopColor={gradientColors[1]} />
            </linearGradient>
            <filter id={`glow-${gradientId}`}>
              <feGaussianBlur stdDeviation="2" result="coloredBlur"/>
              <feMerge>
                <feMergeNode in="coloredBlur"/>
                <feMergeNode in="SourceGraphic"/>
              </feMerge>
            </filter>
          </defs>
          {/* Background circle */}
          <circle
            cx="40"
            cy="40"
            r={R}
            className="stroke-[#ffffff0a]"
            strokeWidth="5"
            fill="transparent"
          />
          {/* Glowing Animated Progress circle with spring bounce */}
          <motion.circle
            cx="40"
            cy="40"
            r={R}
            stroke={`url(#${gradientId})`}
            strokeWidth="5"
            fill="transparent"
            strokeDasharray={circumference}
            animate={{ strokeDashoffset: isInView ? (circumference - (percentage / 100) * circumference) : circumference }}
            transition={{ duration: 1.8, ease: [0.34, 1.56, 0.64, 1] }}
            strokeLinecap="round"
            filter={`url(#glow-${gradientId})`}
          />
        </svg>
        <div className="absolute inset-0 flex items-center justify-center text-white">
          <Odometer value={percentage} isInView={isInView} />
        </div>
      </div>
    </motion.div>
  );
};

const Skills = () => {
  const dataScienceSkills = [
    {
      name: "Power BI",
      percentage: 70,
      tags: ["Dashboards", "DAX", "Data Modeling", "ETL"],
      colorClass: "gold",
      gradientId: "grad-powerbi",
      gradientColors: ["#ffd700", "#00f0ff"]
    },
    {
      name: "Data Analysis",
      percentage: 65,
      tags: ["Pandas", "NumPy", "SQL", "Statistics"],
      colorClass: "cyan",
      gradientId: "grad-analysis",
      gradientColors: ["#00f0ff", "#4d7cff"]
    },
    {
      name: "Data Visualization",
      percentage: 60,
      tags: ["Matplotlib", "Seaborn", "Plotly", "Infographics"],
      colorClass: "cyan",
      gradientId: "grad-viz",
      gradientColors: ["#00f0ff", "#a855f7"]
    },
    {
      name: "MS Excel",
      percentage: 60,
      tags: ["Pivot Tables", "VLOOKUP", "Formulas", "Charts"],
      colorClass: "gold",
      gradientId: "grad-excel",
      gradientColors: ["#ffd700", "#4d7cff"]
    }
  ];

  const aiWebSkills = [
    {
      name: "Agentic Web Development",
      percentage: 70,
      tags: ["AI Agents", "React", "FastAPI", "Supabase", "LLMs"],
      colorClass: "purple",
      gradientId: "grad-agentic",
      gradientColors: ["#a855f7", "#ec4899"]
    },
    {
      name: "Python Programming",
      percentage: 70,
      tags: ["Data Scripts", "Automation", "OOP", "APIs"],
      colorClass: "purple",
      gradientId: "grad-python",
      gradientColors: ["#a855f7", "#ffd700"]
    },
    {
      name: "Context Engineering & AI Workflows",
      percentage: 60,
      tags: ["Prompts", "Context Window", "RAG", "AI Logic"],
      colorClass: "purple",
      gradientId: "grad-workflows",
      gradientColors: ["#a855f7", "#ffd700"]
    },
    {
      name: "Web Scraping",
      percentage: 55,
      tags: ["BeautifulSoup", "Scrapy", "Jina AI", "APIs"],
      colorClass: "cyan",
      gradientId: "grad-scraping",
      gradientColors: ["#00f0ff", "#ec4899"]
    }
  ];

  return (
    <section
      id="skills"
      className="relative min-h-screen py-24 overflow-hidden"
      style={{ background: 'linear-gradient(135deg, #030014 0%, #080825 50%, #030014 100%)' }}
    >
      {/* Moving background orbs */}
      <div
        className="absolute w-[500px] h-[500px] rounded-full opacity-10 blur-[130px] pointer-events-none"
        style={{
          background: 'radial-gradient(circle, rgba(168,85,247,0.4), transparent)',
          top: '10%',
          left: '10%',
        }}
      />
      <div
        className="absolute w-[500px] h-[500px] rounded-full opacity-10 blur-[130px] pointer-events-none"
        style={{
          background: 'radial-gradient(circle, rgba(0,240,255,0.4), transparent)',
          bottom: '10%',
          right: '10%',
        }}
      />

      <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-8 lg:px-12">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <p className="text-neon-cyan/80 font-orbitron tracking-[4px] uppercase mb-4 text-sm mix-blend-screen">
            Skills Dashboard
          </p>
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-orbitron font-bold text-white mb-6">
            Core <span className="text-transparent bg-clip-text bg-gradient-to-r from-neon-cyan via-neon-purple to-neon-gold">Competencies</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-neon-cyan via-neon-purple to-neon-gold mx-auto rounded-full" />
        </motion.div>

        {/* Balanced Two-Column Grid (1 column of lists per track) */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 lg:gap-16 items-start">
          {/* Column 1 — Data Science & Analytics */}
          <div className="space-y-4 sm:space-y-6">
            <motion.h3
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-lg sm:text-2xl font-orbitron font-bold text-white border-l-4 border-neon-cyan pl-3 sm:pl-4 mb-6 sm:mb-8 flex items-center gap-2 sm:gap-3"
            >
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="text-neon-cyan"><line x1="18" y1="20" x2="18" y2="10"></line><line x1="12" y1="20" x2="12" y2="4"></line><line x1="6" y1="20" x2="6" y2="14"></line></svg>
              Data Science & Analytics
            </motion.h3>

            <div className="grid grid-cols-1 gap-4 sm:gap-6">
              {dataScienceSkills.map((skill, index) => (
                <SkillCard key={skill.name} {...skill} index={index} />
              ))}
            </div>
          </div>

          {/* Column 2 — AI & Web Engineering */}
          <div className="space-y-4 sm:space-y-6">
            <motion.h3
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-lg sm:text-2xl font-orbitron font-bold text-white border-l-4 border-neon-purple pl-3 sm:pl-4 mb-6 sm:mb-8 flex items-center gap-2 sm:gap-3"
            >
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="text-neon-purple"><rect x="2" y="3" width="20" height="14" rx="2" ry="2"></rect><line x1="8" y1="21" x2="16" y2="21"></line><line x1="12" y1="17" x2="12" y2="21"></line></svg>
              AI & Web Engineering
            </motion.h3>

            <div className="grid grid-cols-1 gap-4 sm:gap-6">
              {aiWebSkills.map((skill, index) => (
                <SkillCard key={skill.name} {...skill} index={index} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
