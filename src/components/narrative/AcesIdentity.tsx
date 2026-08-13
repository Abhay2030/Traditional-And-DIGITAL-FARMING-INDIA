import { motion } from 'motion/react';
import { ScrollReveal } from '../ui/ScrollReveal';
import { useReducedMotion } from '../../hooks/useReducedMotion';

export function AcesIdentity() {
  const reduced = useReducedMotion();

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 15 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" }
    }
  };

  return (
    <section id="aces-identity" className="relative py-24 md:py-32 bg-[#050B14] overflow-hidden flex flex-col items-center justify-center border-t border-white/5 z-20">
      
      {/* Subtle geometric background texture */}
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none" style={{ backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)', backgroundSize: '32px 32px' }} />
      
      {/* Ambient glowing orbs */}
      <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-[var(--color-ashoka-blue)] opacity-[0.015] blur-[120px] rounded-full pointer-events-none" />
      <div className="absolute bottom-0 right-1/4 w-[500px] h-[500px] bg-[var(--color-india-green)] opacity-[0.015] blur-[120px] rounded-full pointer-events-none" />

      <ScrollReveal className="w-full max-w-5xl mx-auto px-4 z-10">
        <motion.div 
          variants={reduced ? {} : containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="flex flex-col md:flex-row items-center md:items-start gap-10 md:gap-16 bg-[#0A111A]/60 backdrop-blur-xl p-8 md:p-14 lg:p-16 rounded-[2.5rem] border border-white/10 hover:border-white/20 transition-all duration-700 shadow-[0_20px_50px_rgba(0,0,0,0.5)] group"
        >
          {/* Logo Container */}
          <motion.div 
            variants={itemVariants}
            className="shrink-0 relative flex items-center justify-center w-40 h-40 md:w-56 md:h-56 rounded-full bg-white/[0.02] border border-white/10 shadow-[0_15px_40px_rgba(0,0,0,0.4)] p-4 group-hover:shadow-[0_20px_60px_rgba(0,0,0,0.6)] group-hover:border-white/20 transition-all duration-700"
            whileHover={reduced ? {} : { scale: 1.02, y: -2 }}
          >
            {/* Subtle light sweep */}
            <div className="absolute inset-0 overflow-hidden rounded-full">
               <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-1000 transform -translate-x-full group-hover:translate-x-full" />
            </div>
            
            <img 
              src="/images/aces-logo.png" 
              alt="ACES - Association of Computer Engineering Students Logo" 
              className="w-full h-full object-contain drop-shadow-2xl relative z-10"
              onError={(e) => {
                // Fallback style if logo is not yet added
                e.currentTarget.style.display = 'none';
                e.currentTarget.parentElement!.innerHTML += '<span class="text-white/50 text-xs font-bold text-center">ACES LOGO</span>';
              }}
            />
          </motion.div>

          {/* Typography Content */}
          <div className="flex-grow flex flex-col text-center md:text-left justify-center pt-2 md:pt-4">
            
            <motion.h2 
              variants={itemVariants}
              className="text-5xl md:text-7xl font-black text-white tracking-tight mb-2 drop-shadow-md"
              style={{ fontFamily: 'var(--font-display)' }}
            >
              ACES
            </motion.h2>

            <motion.h3 
              variants={itemVariants}
              className="text-lg md:text-xl font-bold text-white/90 tracking-wide mb-6 uppercase drop-shadow-sm"
            >
              Association of Computer Engineering Students
            </motion.h3>

            {/* Independence Day / Tricolor Accent Line */}
            <motion.div variants={itemVariants} className="w-16 h-[2px] bg-gradient-to-r from-[var(--color-saffron)] via-white to-[var(--color-india-green)] mx-auto md:mx-0 mb-6 opacity-80" />

            <motion.div variants={itemVariants} className="space-y-1 mb-8">
              <p className="text-white/70 font-medium text-sm md:text-base tracking-wide uppercase">Department of Computer Engineering</p>
              <p className="text-white/50 text-xs md:text-sm tracking-widest uppercase">Sir Visvesvaraya Institute of Technology, Nashik</p>
            </motion.div>

            <motion.div 
              variants={itemVariants}
              className="px-6 py-4 rounded-2xl bg-white/[0.03] border border-white/5 inline-block mx-auto md:mx-0 w-fit"
            >
              <p className="text-white/80 font-medium text-sm md:text-base italic tracking-wide">
                “Connecting Minds. Creating Technology. Building the Future.”
              </p>
            </motion.div>
            
          </div>
        </motion.div>
      </ScrollReveal>
    </section>
  );
}
