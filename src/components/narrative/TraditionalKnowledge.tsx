import { motion } from 'motion/react';
import { ScrollReveal } from '../ui/ScrollReveal';

export function TraditionalKnowledge() {
  return (
    <section id="traditional-knowledge" className="relative min-h-[100dvh] flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ 
          backgroundImage: 'url(/images/traditional_farming_bg.png)',
        }}
      />
      
      {/* Overlay for readability */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-black/80" />
      
      {/* Content */}
      <div className="relative z-10 w-full max-w-5xl mx-auto px-6 flex flex-col items-center text-center">
        <ScrollReveal direction="up" delay={0.1}>
          <h2 className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-bold text-white tracking-tight uppercase" style={{ fontFamily: 'var(--font-display)', textShadow: '0 4px 40px rgba(0,0,0,0.5)' }}>
            Traditional Farming
          </h2>
        </ScrollReveal>
        
        <ScrollReveal direction="up" delay={0.3}>
          <h3 className="mt-4 md:mt-6 text-lg sm:text-xl md:text-2xl text-[var(--color-saffron)] font-bold tracking-[0.2em] uppercase">
            Experience + Nature + Human Effort
          </h3>
        </ScrollReveal>
        
        {/* Animated Icons Row */}
        <div className="mt-16 sm:mt-24 w-full flex flex-col sm:flex-row justify-center items-center gap-8 sm:gap-16">
          <IconItem delay={0.5} icon="👨‍🌾" text="Human Labour" />
          <IconItem delay={0.7} icon="☁️" text="Nature Dependence" />
          <IconItem delay={0.9} icon="🌱" text="Local Knowledge" />
        </div>
      </div>
    </section>
  );
}

function IconItem({ delay, icon, text }: { delay: number, icon: string, text: string }) {
  return (
    <ScrollReveal delay={delay} direction="up">
      <motion.div 
        className="flex flex-col items-center gap-4 group"
        whileHover={{ scale: 1.05 }}
      >
        <div className="text-4xl md:text-5xl lg:text-6xl bg-white/10 backdrop-blur-md w-20 h-20 md:w-24 md:h-24 rounded-full flex items-center justify-center border border-white/20 group-hover:bg-white/20 transition-colors shadow-lg shadow-black/20">
          <motion.span
            animate={{ y: [0, -5, 0] }}
            transition={{ duration: 3, repeat: Infinity, ease: "easeInOut", delay: delay }}
          >
            {icon}
          </motion.span>
        </div>
        <span className="text-white/90 text-sm md:text-base font-bold tracking-widest uppercase text-shadow-sm">
          {text}
        </span>
      </motion.div>
    </ScrollReveal>
  );
}
