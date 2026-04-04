import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

import tarcinImg from '../assets/tarcin.jpeg';
import bestStudentImg from '../assets/best_student.jpeg';
import mangayarkarasiImg from '../assets/mangayarkarasi.jpeg';
import hexaivitaImg from '../assets/hexaivita.jpeg';

const achievements = [
  {
    id: 1,
    title: "Double Win at Tarcin Robotics 10-Day Python Hackathon",
    image: tarcinImg,
    description: "Secured 1st Place in the Team Category (Team No Mercy) and 3rd Place in the Individual Category. Navigated complex Python puzzles, demonstrating strong collaboration, logic, and computational thinking skills in a high-pressure environment."
  },
  {
    id: 2,
    title: "Best Student Award 2024–2025",
    image: bestStudentImg,
    description: "Honored with the Best Student Award at Sethu Institute of Technology. This recognition reflects a continuous dedication to academic excellence and an active, positive contribution to the campus community."
  },
  {
    id: 3,
    title: "2nd Prize at CodeSprint Pro",
    image: mangayarkarasiImg,
    description: "Secured 2nd Prize in the CodeSprint Pro Coding Competition at Mangayarkarasi College of Engineering. Showcased sharp problem-solving abilities and competitive programming skills among talented peers."
  },
  {
    id: 4,
    title: "1st Prize at Hexaivita National Symposium",
    image: hexaivitaImg,
    description: "Won 1st Prize in the national-level coding competition at the SERB Symposium Hexaivita, organized by Sethu Institute of Technology."
  }
];

const ShootingStars = () => {
  // Generate random stars
  const stars = Array.from({ length: 15 }).map((_, i) => {
    const top = Math.random() * 100;
    const left = Math.random() * 100;
    const duration = 2 + Math.random() * 3;
    const delay = Math.random() * 5;

    return (
      <div
        key={i}
        className="star animate-shooting"
        style={{
          top: `${top}%`,
          left: `${left}%`,
          animationDuration: `${duration}s`,
          animationDelay: `${delay}s`,
        }}
      />
    );
  });

  return <div className="shooting-stars">{stars}</div>;
};

const Achievements = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Auto-slide every 6 seconds
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % achievements.length);
    }, 6000);
    return () => clearInterval(timer);
  }, []);

  const handleDotClick = (index) => {
    setCurrentIndex(index);
  };

  return (
    <section
      id="achievements"
      className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden py-20"
      style={{ background: 'linear-gradient(135deg, #0a0a2e 0%, #030014 50%, #111155 100%)' }}
    >
      {/* Animated Background Components */}
      <ShootingStars />

      {/* Dynamic colorful glowing orbs */}
      <div
        className="absolute w-[600px] h-[600px] rounded-full opacity-20 blur-[150px]"
        style={{
          background: 'radial-gradient(circle, rgba(255,215,0,0.4), transparent)',
          top: '20%',
          left: '-10%',
          animation: 'float 8s ease-in-out infinite alternate',
        }}
      />
      <div
        className="absolute w-[500px] h-[500px] rounded-full opacity-15 blur-[120px]"
        style={{
          background: 'radial-gradient(circle, rgba(0,240,255,0.4), transparent)',
          bottom: '10%',
          right: '-5%',
          animation: 'float 6s ease-in-out infinite alternate-reverse',
        }}
      />

      <div className="relative z-10 w-full max-w-6xl mx-auto px-6 sm:px-8">
        
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <p className="text-neon-gold/80 font-orbitron tracking-[4px] uppercase mb-4 title-subtitle">
            Milestones
          </p>
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-orbitron font-bold text-white mb-6">
            Key <span className="text-transparent bg-clip-text bg-gradient-to-r from-neon-gold to-neon-cyan">Achievements</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-neon-gold to-neon-cyan mx-auto rounded-full" />
        </motion.div>

        {/* Carousel Container */}
        <div className="relative h-[650px] sm:h-[750px] md:h-[800px] lg:h-[850px] w-full flex items-center justify-center">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentIndex}
              initial={{ opacity: 0, x: 50, scale: 0.95 }}
              animate={{ opacity: 1, x: 0, scale: 1 }}
              exit={{ opacity: 0, x: -50, scale: 0.95 }}
              transition={{ duration: 0.6, ease: "easeInOut" }}
              className="absolute inset-0 w-full h-full"
            >
              <div className="w-full h-full flex flex-col bg-[#ffffff05] border border-white/10 backdrop-blur-md rounded-2xl overflow-hidden shadow-[0_0_40px_rgba(255,215,0,0.1)] hover:shadow-[0_0_60px_rgba(0,240,255,0.2)] transition-shadow duration-500">
                
                {/* Image Section */}
                <div className="w-full h-[350px] sm:h-[450px] md:h-[550px] lg:h-[600px] relative overflow-hidden group bg-[#030014]/60 flex-shrink-0 flex items-center justify-center p-4">
                  <img
                    src={achievements[currentIndex].image}
                    alt={achievements[currentIndex].title}
                    className="w-full h-full object-contain transform group-hover:scale-[1.02] transition-transform duration-700 rounded-lg shadow-[0_0_20px_rgba(0,240,255,0.1)]"
                  />
                  {/* Glowing border inside the image container */}
                  <div className="absolute inset-0 border-[2px] border-neon-gold/20 z-20 group-hover:border-neon-cyan/40 transition-colors duration-500 pointer-events-none rounded-xl m-2" />
                </div>

                {/* Text Section */}
                <div className="w-full flex-1 p-6 md:p-8 flex flex-col justify-center items-center sm:items-start relative z-20 overflow-y-auto">
                  
                  <div className="mb-3 inline-block">
                     <span className="px-4 py-1.5 rounded-full text-xs font-semibold uppercase tracking-wider bg-neon-gold/10 text-neon-gold border border-neon-gold/20 shadow-[0_0_15px_rgba(255,215,0,0.15)]">
                       Achievement 0{currentIndex + 1}
                     </span>
                  </div>
                  
                  <h3 className="text-xl sm:text-2xl md:text-3xl font-poppins font-bold text-white mb-3 text-center sm:text-left leading-tight">
                    {achievements[currentIndex].title}
                  </h3>
                  
                  <p className="text-gray-300 font-inter text-sm md:text-base leading-relaxed text-center sm:text-left max-w-4xl">
                    {achievements[currentIndex].description}
                  </p>
                </div>

              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Navigation Dots */}
        <div className="flex justify-center items-center gap-4 mt-8 md:mt-12">
          {achievements.map((_, index) => (
            <button
              key={index}
              onClick={() => handleDotClick(index)}
              className={`transition-all duration-300 rounded-full h-3 ${
                index === currentIndex 
                  ? 'w-10 bg-gradient-to-r from-neon-gold to-neon-cyan shadow-[0_0_10px_rgba(255,215,0,0.5)]' 
                  : 'w-3 bg-white/20 hover:bg-white/40'
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>

      </div>
    </section>
  );
};

export default Achievements;
