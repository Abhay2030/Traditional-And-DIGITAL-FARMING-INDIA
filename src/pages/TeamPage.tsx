import { ScrollReveal } from '../components/ui/ScrollReveal';
import { motion } from 'motion/react';
import { useReducedMotion } from '../hooks/useReducedMotion';
import { Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';
import { PatrioticParticles } from '../components/effects/PatrioticParticles';
import { TricolorBorders } from '../components/effects/TricolorBorders';
import { Footer } from '../components/narrative/Footer';
import { AccessibilityPanel } from '../components/accessibility/AccessibilityPanel';

const teamMembers = [
  "Vedant Kokane",
  "Abhay Donde",
  "Siddhant Atre",
  "Trisha Ajay Patil",
  "Harde Payal Venunath",
  "Bachkar Vaishnavi Popat",
  "Jadhav Vijaya D.",
  "Bane Gayatri Shivaji",
  "Ghumare Siddhi Vijay",
  "Darade Harshada Anil",
  "Aditi Sunil Wamane"
];

export function TeamPage() {
  const reduced = useReducedMotion();

  return (
    <>
      <PatrioticParticles />
      <TricolorBorders />
      <AccessibilityPanel />
      
      <main className="min-h-screen bg-[#050B14] relative overflow-hidden text-white flex flex-col">
        {/* Cinematic Background elements */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[1000px] bg-[var(--color-saffron)] opacity-[0.02] blur-[150px] rounded-full pointer-events-none" />
        <div className="absolute bottom-0 right-0 w-[800px] h-[800px] bg-[var(--color-leaf)] opacity-[0.02] blur-[150px] rounded-full pointer-events-none" />
        
        {/* Back Navigation */}
        <div className="relative z-50 pt-8 px-6 md:px-12 w-full max-w-7xl mx-auto">
          <Link 
            to="/" 
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 hover:bg-white/10 text-white/70 hover:text-white transition-all duration-300"
          >
            <ArrowLeft size={16} />
            <span className="text-sm font-semibold tracking-wider uppercase">Back to Exhibition</span>
          </Link>
        </div>

        <div className="flex-grow flex flex-col items-center justify-start py-12 relative z-10 w-full max-w-6xl mx-auto px-4 md:px-8 space-y-24 md:space-y-40">
          
          {/* HERO SECTION */}
          <section className="w-full text-center mt-12 md:mt-24">
            <ScrollReveal>
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/5 border border-white/10 mb-8">
                <span className="text-[10px] md:text-xs font-bold tracking-[0.2em] uppercase text-[var(--color-leaf)]">About The Project</span>
              </div>
              <h2 className="text-5xl md:text-6xl lg:text-[6rem] font-bold mb-6 tracking-tight leading-[1.1]" style={{ fontFamily: 'var(--font-display)' }}>
                Digital Farming India
              </h2>
              <h3 className="text-2xl md:text-4xl font-light text-white/80 mb-12" style={{ fontFamily: 'var(--font-display)' }}>
                From Heritage to <span className="text-[var(--color-saffron)] font-bold">Intelligence. 🇮🇳</span>
              </h3>
            </ScrollReveal>
          </section>

          {/* VISION (Massive Centered Quote) */}
          <section className="w-full">
            <ScrollReveal delay={0.1}>
              <div className="relative py-16 md:py-24 px-8 md:px-16 rounded-[2.5rem] bg-gradient-to-b from-white/[0.05] to-transparent border border-white/5 text-center overflow-hidden group shadow-2xl">
                <div className="absolute inset-0 bg-[var(--color-saffron)] opacity-0 group-hover:opacity-[0.03] transition-opacity duration-1000" />
                <h4 className="text-[10px] md:text-xs font-bold tracking-[0.4em] text-[var(--color-saffron)] uppercase mb-8">Our Vision</h4>
                
                <h3 className="text-2xl md:text-4xl lg:text-5xl font-bold text-white leading-relaxed mx-auto max-w-4xl relative z-10" style={{ fontFamily: 'var(--font-display)' }}>
                  Our vision is to connect India’s traditional farming wisdom with <span className="text-[var(--color-leaf-light)]">modern technology</span>, making the future of agriculture <span className="text-white/60">simple, visual, accessible, and inspiring for everyone.</span>
                </h3>
              </div>
            </ScrollReveal>
          </section>

          {/* PROJECT DESCRIPTION */}
          <section className="w-full">
            <ScrollReveal>
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
                {/* Text Side */}
                <div className="lg:col-span-7 space-y-8">
                  <h4 className="text-3xl md:text-4xl font-bold" style={{ fontFamily: 'var(--font-display)' }}>Project Description</h4>
                  <div className="text-lg md:text-xl text-white/70 leading-relaxed space-y-6">
                    <p>
                      <strong className="text-white">Digital Farming India 2026</strong> is an interactive college project showcasing the journey from traditional to modern farming through animation, 3D visuals, realistic imagery, and simple storytelling. 
                    </p>
                    <p>
                      It explains complex agricultural technologies in an easy-to-understand way, bridging the gap between cutting-edge innovation and the everyday visitor.
                    </p>
                    <p className="border-l-4 border-[var(--color-leaf)] pl-4 py-2 mt-8 text-white/90">
                      Created by Computer Engineering students for <strong>15 August 2026</strong>, the project celebrates Indian farmers, innovation, sustainability, and the spirit of Independence Day.
                    </p>
                  </div>
                </div>
                
                {/* Tech Pills Side */}
                <div className="lg:col-span-5 bg-[#0A111A] border border-white/5 p-10 rounded-[2.5rem] shadow-2xl">
                  <h5 className="text-sm tracking-[0.2em] uppercase text-white/40 mb-6 font-bold">Technologies Explored</h5>
                  <div className="flex flex-wrap gap-3">
                    {[
                      "Drones", "IoT", "Smart Irrigation", "Satellites", 
                      "Artificial Intelligence", "Precision Farming"
                    ].map((tech, i) => (
                      <motion.div 
                        key={tech}
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: i * 0.1 }}
                        className="px-5 py-3 rounded-full bg-white/5 border border-white/10 text-white/90 text-sm font-semibold tracking-wide hover:bg-white/10 hover:border-white/30 hover:scale-105 transition-all cursor-default"
                      >
                        {tech}
                      </motion.div>
                    ))}
                  </div>
                </div>
              </div>
            </ScrollReveal>
          </section>
          {/* THE PROJECT MODEL */}
          <section className="w-full text-center py-24 border-b border-white/5 relative z-10">
            <ScrollReveal>
              <h3 className="text-xs md:text-sm font-bold tracking-[0.3em] text-[var(--color-saffron)] uppercase mb-4">Physical Exhibition</h3>
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-16 tracking-tight" style={{ fontFamily: 'var(--font-display)' }}>Our Project Model</h2>
            </ScrollReveal>

            <ScrollReveal delay={0.2}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12 max-w-7xl mx-auto px-4 lg:px-8">
                {/* Traditional Farming Model */}
                <div className="rounded-[2.5rem] overflow-hidden border border-white/10 shadow-[0_20px_50px_rgba(0,0,0,0.5)] group relative bg-black">
                  <div className="absolute inset-0 bg-black/30 group-hover:bg-transparent transition-colors duration-700 z-10 pointer-events-none" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-80 z-10" />
                  <img 
                    src="/images/traditional-model.png" 
                    alt="Traditional Farming Project Model" 
                    className="w-full h-[300px] md:h-[400px] lg:h-[500px] object-cover transform group-hover:scale-105 transition-transform duration-[1.5s] ease-out"
                  />
                  <div className="absolute bottom-8 left-8 right-8 z-20 text-left">
                     <p className="text-[10px] font-black tracking-[0.3em] text-white/70 uppercase drop-shadow-md">Handcrafted Model</p>
                     <h3 className="text-2xl font-bold text-white mt-2 drop-shadow-lg" style={{ fontFamily: 'var(--font-display)' }}>Traditional Roots</h3>
                  </div>
                </div>
                
                {/* Digital Farming Model */}
                <div className="rounded-[2.5rem] overflow-hidden border border-[var(--color-saffron)]/20 shadow-[0_20px_50px_rgba(255,153,51,0.1)] group relative bg-black">
                  <div className="absolute inset-0 bg-black/30 group-hover:bg-transparent transition-colors duration-700 z-10 pointer-events-none" />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#050B14] via-transparent to-transparent opacity-80 z-10" />
                  <img 
                    src="/images/digital-model.png" 
                    alt="Digital Farming Project Model" 
                    className="w-full h-[300px] md:h-[400px] lg:h-[500px] object-cover transform group-hover:scale-105 transition-transform duration-[1.5s] ease-out"
                  />
                  <div className="absolute bottom-8 left-8 right-8 z-20 text-left">
                     <p className="text-[10px] font-black tracking-[0.3em] text-[var(--color-saffron)] uppercase drop-shadow-md">Handcrafted Model</p>
                     <h3 className="text-2xl font-bold text-white mt-2 drop-shadow-lg" style={{ fontFamily: 'var(--font-display)' }}>Digital Future</h3>
                  </div>
                </div>
              </div>
            </ScrollReveal>
          </section>

          {/* THE TEAM */}
          <section className="w-full text-center pt-24">
            <ScrollReveal>
              <h3 className="text-xs md:text-sm font-bold tracking-[0.3em] text-[var(--color-leaf)] uppercase mb-6">Old Farming & Modern Farming</h3>
              <h2 className="text-3xl md:text-5xl lg:text-7xl font-bold mb-16 tracking-tight" style={{ fontFamily: 'var(--font-display)' }}>Our Team</h2>
            </ScrollReveal>

            {/* TEAM PHOTO */}
            <ScrollReveal delay={0.1}>
              <div className="w-full max-w-4xl mx-auto mb-16 rounded-[2rem] overflow-hidden border border-white/10 shadow-2xl relative group">
                <div className="absolute inset-0 bg-gradient-to-t from-[#050B14] via-transparent to-transparent opacity-80 z-10" />
                <div className="absolute inset-0 bg-[var(--color-saffron)] mix-blend-overlay opacity-0 group-hover:opacity-10 transition-opacity duration-700 z-10" />
                <img 
                  src="/images/team-photo.png" 
                  alt="Traditional and Digital Farming India Team" 
                  className="w-full h-auto object-cover transform group-hover:scale-105 transition-transform duration-1000 ease-out"
                  onError={(e) => {
                    // Fallback to jpg if png is not found
                    (e.target as HTMLImageElement).src = '/images/team-photo.jpg';
                  }}
                />
                <div className="absolute bottom-6 left-0 right-0 z-20 text-center">
                  <p className="text-sm font-bold tracking-widest uppercase text-white/80">Project Presentation • SVIT Nashik</p>
                </div>
              </div>
            </ScrollReveal>

            {/* TEAM LEADER */}
            <ScrollReveal delay={0.2}>
              <div className="flex justify-center mb-16 relative">
                {/* Decorative background glow for the leader */}
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] h-[100px] bg-[var(--color-saffron)] opacity-20 blur-[100px] pointer-events-none" />
                
                <motion.div 
                  className="relative px-12 py-10 rounded-[2.5rem] bg-gradient-to-b from-white/[0.08] to-[#050B14] backdrop-blur-2xl border border-[var(--color-saffron)]/30 hover:border-[var(--color-saffron)]/60 transition-all duration-500 overflow-hidden group min-w-[340px] shadow-[0_10px_40px_rgba(0,0,0,0.5)]"
                  whileHover={reduced ? {} : { y: -5 }}
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-[var(--color-saffron)]/0 via-transparent to-[var(--color-leaf)]/0 group-hover:from-[var(--color-saffron)]/10 group-hover:via-transparent group-hover:to-[var(--color-leaf)]/5 transition-colors duration-500" />
                  
                  <div className="relative z-10 flex flex-col items-center">
                     <div className="w-16 h-1 bg-gradient-to-r from-transparent via-[var(--color-saffron)] to-transparent mb-6 opacity-70" />
                     <h4 className="text-3xl md:text-5xl font-bold text-white mb-6 drop-shadow-md tracking-tight" style={{ fontFamily: 'var(--font-display)' }}>Vedant Kokane</h4>
                     <div className="text-[10px] md:text-xs tracking-[0.4em] text-[var(--color-saffron)] uppercase font-black drop-shadow-[0_0_15px_rgba(255,153,51,0.5)] bg-[var(--color-saffron)]/10 px-8 py-2.5 rounded-full border border-[var(--color-saffron)]/20">Team Leader</div>
                  </div>
                </motion.div>
              </div>
            </ScrollReveal>

            {/* TEAM MEMBERS (PERFECT GRID ALIGNMENT) */}
            <ScrollReveal delay={0.3}>
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 md:gap-5 max-w-6xl mx-auto">
                {teamMembers.filter(name => name !== "Vedant Kokane").map((name, index) => (
                  <motion.div 
                    key={name}
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.05 }}
                    className="flex flex-col items-center justify-center h-full min-h-[90px] px-4 py-5 rounded-[1.5rem] bg-gradient-to-b from-white/[0.04] to-transparent border border-white/10 hover:border-white/30 hover:bg-white/[0.08] transition-all duration-300 group cursor-default shadow-lg overflow-hidden relative"
                    whileHover={reduced ? {} : { y: -3, scale: 1.02 }}
                  >
                    <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                    <span className="text-sm md:text-[15px] font-semibold text-white/70 group-hover:text-white transition-colors duration-300 tracking-wide text-center leading-snug">{name}</span>
                  </motion.div>
                ))}
              </div>
            </ScrollReveal>
          </section>
        </div>
        
        <Footer />
      </main>
    </>
  );
}
