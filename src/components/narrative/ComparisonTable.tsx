import { useState } from 'react';
import { SectionHeader } from '../core/SectionHeader';
import { ScrollReveal } from '../ui/ScrollReveal';
import { comparisonData } from '../../data/content';
import type { ComparisonItem } from '../../data/content';
import { motion } from 'motion/react';
import { useReducedMotion } from '../../hooks/useReducedMotion';

export function ComparisonTable() {
  const reduced = useReducedMotion();

  return (
    <section id="comparison" className="section-padding bg-black relative overflow-hidden">
      {/* Cinematic Background Glow */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--color-charcoal)_0%,_black_100%)] opacity-80" />
      
      <div className="container-narrative relative z-10">
        <SectionHeader
          badge="Evolution"
          title="Traditional vs Modern"
          subtitle="Hover or tap the cards to reveal how technology elevates traditional practices."
          light
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto mt-12 px-4">
          {comparisonData.map((row, i) => (
            <FlipCard key={row.category} data={row} delay={i * 0.1} reduced={reduced} />
          ))}
        </div>
      </div>
    </section>
  );
}

function FlipCard({ data, delay, reduced }: { data: ComparisonItem, delay: number, reduced: boolean }) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <ScrollReveal delay={delay} direction="up">
      <div 
        className="relative w-full aspect-[4/3] group cursor-pointer"
        style={{ perspective: '1200px' }}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        onClick={() => setIsHovered(!isHovered)}
      >
        <motion.div
          className="w-full h-full relative"
          animate={reduced ? {} : { rotateY: isHovered ? 180 : 0 }}
          transition={{ type: 'spring', stiffness: 260, damping: 20 }}
          style={{ transformStyle: 'preserve-3d' }}
        >
          {/* TRADITIONAL SIDE (Front) */}
          <div 
            className="absolute inset-0 rounded-3xl p-6 md:p-8 flex flex-col justify-between shadow-2xl border border-white/10"
            style={{ 
              backgroundImage: `linear-gradient(135deg, rgba(166,124,82,0.4) 0%, rgba(109,76,42,0.7) 100%), url('/images/card_bg_traditional.png')`, 
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              backfaceVisibility: 'hidden',
              WebkitBackfaceVisibility: 'hidden'
            }}
          >
            <div className="flex justify-between items-start">
              <span className="text-5xl bg-white/10 backdrop-blur-sm p-4 rounded-2xl shadow-inner border border-white/10">
                {data.icon}
              </span>
              <span className="px-3 py-1 bg-black/40 rounded-full text-xs font-bold text-white/90 tracking-widest uppercase shadow-sm">
                Traditional
              </span>
            </div>
            
            <div className="relative z-10 mt-8">
              <h3 className="text-white/60 text-xs md:text-sm font-bold tracking-[0.2em] uppercase mb-2">{data.category}</h3>
              <p className="text-white text-lg md:text-2xl font-bold leading-tight drop-shadow-md">
                {data.traditional}
              </p>
            </div>
            
            {/* Subtle organic pattern */}
            <svg className="absolute bottom-0 right-0 w-32 h-32 opacity-10 pointer-events-none" viewBox="0 0 100 100">
               <circle cx="100" cy="100" r="80" fill="white" />
               <circle cx="100" cy="100" r="60" fill="none" stroke="white" strokeWidth="2" />
               <circle cx="100" cy="100" r="40" fill="none" stroke="white" strokeWidth="2" />
            </svg>
          </div>

          {/* MODERN SIDE (Back) */}
          <div 
            className="absolute inset-0 rounded-3xl p-6 md:p-8 flex flex-col justify-between overflow-hidden shadow-2xl border border-white/20"
            style={{ 
              backgroundImage: `linear-gradient(135deg, rgba(0,188,212,0.4) 0%, rgba(47,125,50,0.8) 100%), url('/images/card_bg_modern.png')`, 
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              backfaceVisibility: 'hidden',
              WebkitBackfaceVisibility: 'hidden',
              transform: 'rotateY(180deg)' 
            }}
          >
            {/* Tech grid overlay */}
            <div 
              className="absolute inset-0 opacity-20 pointer-events-none" 
              style={{ 
                backgroundImage: 'linear-gradient(#fff 1px, transparent 1px), linear-gradient(90deg, #fff 1px, transparent 1px)', 
                backgroundSize: '20px 20px' 
              }} 
            />
            
            <div className="relative z-10 flex justify-between items-start">
              <div className="relative">
                <span className="text-5xl bg-black/20 backdrop-blur-md p-4 rounded-2xl shadow-inner border border-white/20 inline-block relative z-10">
                  {getModernIcon(data.category)}
                </span>
                {/* Glowing orb behind icon */}
                <div className="absolute inset-0 bg-white blur-xl opacity-30 rounded-full animate-pulse" />
              </div>
              <span className="px-3 py-1 bg-white/20 backdrop-blur-md rounded-full text-xs font-bold text-white tracking-widest uppercase shadow-sm border border-white/30">
                Modern
              </span>
            </div>
            
            <div className="relative z-10 mt-8">
              <h3 className="text-white/70 text-xs md:text-sm font-bold tracking-[0.2em] uppercase mb-2">{data.category}</h3>
              <p className="text-white text-lg md:text-2xl font-bold leading-tight drop-shadow-md">
                {data.modern}
              </p>
            </div>
            
            {/* Scanning line animation */}
            {!reduced && (
              <motion.div 
                className="absolute left-0 right-0 h-1 bg-white/60 shadow-[0_0_20px_rgba(255,255,255,1)] pointer-events-none"
                animate={isHovered ? { top: ['0%', '100%', '0%'] } : { top: '0%' }}
                transition={{ duration: 2.5, ease: 'linear', repeat: Infinity }}
              />
            )}
          </div>
        </motion.div>
      </div>
    </ScrollReveal>
  );
}

// Helper to assign a more "tech" focused emoji for the modern side
function getModernIcon(category: string) {
  switch (category) {
    case 'Observation': return '🛰️';
    case 'Water': return '🚰';
    case 'Field Monitoring': return '🚁';
    case 'Weather': return '📡';
    case 'Records': return '💻';
    case 'Machinery': return '🤖';
    case 'Decision Making': return '🧠';
    default: return '✨';
  }
}
