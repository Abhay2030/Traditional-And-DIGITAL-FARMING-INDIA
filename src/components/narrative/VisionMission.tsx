import { ScrollReveal } from '../ui/ScrollReveal';
import { motion } from 'motion/react';
import { useReducedMotion } from '../../hooks/useReducedMotion';
import { Cpu, Link, Lightbulb, Shield, LineChart, Leaf } from 'lucide-react';
import { AshokaChakra } from '../ui/AshokaChakra';

export function VisionMission() {
  const reduced = useReducedMotion();

  return (
    <section id="vision-mission" className="section-padding bg-[#050B14] relative overflow-hidden text-white">
      {/* Cinematic Background elements */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[1000px] bg-[var(--color-saffron)] opacity-[0.02] blur-[150px] rounded-full pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-[800px] h-[800px] bg-[var(--color-leaf)] opacity-[0.02] blur-[150px] rounded-full pointer-events-none" />
      
      {/* Ashoka Chakra Centerpiece */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 opacity-[0.03] pointer-events-none mix-blend-screen hidden md:block">
        <AshokaChakra size={800} color="#ffffff" spinning={!reduced} />
      </div>

      <div className="container-narrative relative z-10">
        {/* VISION */}
        <ScrollReveal>
          <div className="max-w-5xl mx-auto text-center mb-16 md:mb-20 px-4 mt-16 md:mt-32">
             <h3 className="text-xs md:text-sm font-bold tracking-[0.3em] text-[var(--color-saffron)] uppercase mb-8 md:mb-12">Our Vision</h3>
             
             <h2 className="text-3xl md:text-5xl lg:text-[4rem] font-bold leading-[1.2] tracking-tight mb-2 md:mb-4" style={{ fontFamily: 'var(--font-display)' }}>
               <span className="text-white">
                 Technology should never make<br className="hidden md:block" /> knowledge harder to reach.
               </span>
             </h2>
             <h2 className="text-3xl md:text-5xl lg:text-[4rem] font-bold leading-[1.2] tracking-tight" style={{ fontFamily: 'var(--font-display)' }}>
               <span className="text-white">It should make knowledge<br className="hidden md:block" /> </span>
               <span className="bg-clip-text text-transparent bg-gradient-to-r from-[var(--color-saffron-light)] via-white to-[var(--color-leaf-light)]">accessible to everyone.</span>
             </h2>
          </div>
        </ScrollReveal>

        {/* TRICOLOR DIVIDER */}
        <ScrollReveal delay={0.2}>
          <div className="flex justify-center mb-24 md:mb-32">
            <div className="h-[1px] w-32 md:w-48 bg-gradient-to-r from-transparent via-white/20 to-transparent relative">
              <div className="absolute inset-0 bg-gradient-to-r from-[var(--color-saffron)] via-white to-[var(--color-leaf)] opacity-50 blur-[2px]" />
            </div>
          </div>
        </ScrollReveal>

        {/* MISSION GRID */}
        <div className="max-w-6xl mx-auto px-4 relative z-10">
           <ScrollReveal delay={0.3}>
             <h3 className="text-xs md:text-sm font-bold tracking-[0.3em] text-center text-[var(--color-ashoka-blue)] uppercase mb-16">Our Mission</h3>
           </ScrollReveal>
           
           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
             {[
               { i: Cpu, t: 'Simplify Technology', d: 'Transform complex agricultural technology into ideas that anyone can understand.' },
               { i: Link, t: 'Bridge the Gap', d: 'Connect generations of traditional farming wisdom with the possibilities of modern technology.' },
               { i: Lightbulb, t: 'Spark Curiosity', d: 'Encourage students to explore, innovate, and build technology that creates real-world impact.' },
               { i: Shield, t: 'Promote Responsibility', d: 'Champion sustainable, ethical, and responsible use of technology.' },
               { i: LineChart, t: 'Build a Data-Driven Future', d: 'Show how meaningful data can support smarter decisions and a more efficient agricultural future.' },
               { i: Leaf, t: 'Honor the Farmer', d: 'Recognize the people whose dedication and hard work help feed our nation.' },
             ].map((m, i) => (
               <ScrollReveal key={i} delay={0.4 + (i * 0.1)}>
                 <motion.div 
                   className="relative p-8 md:p-10 rounded-[2rem] bg-gradient-to-b from-white/[0.08] to-white/[0.02] backdrop-blur-xl border border-white/10 hover:border-white/30 transition-all duration-400 group overflow-hidden"
                   whileHover={reduced ? {} : { y: -8 }}
                 >
                   {/* Hover Glow Effect */}
                   <div className="absolute inset-0 bg-gradient-to-br from-[var(--color-saffron)]/0 via-white/0 to-[var(--color-leaf)]/0 group-hover:from-[var(--color-saffron)]/10 group-hover:via-white/5 group-hover:to-[var(--color-leaf)]/10 transition-colors duration-500" />
                   
                   <div className="relative z-10 flex flex-col h-full">
                     <div className="flex items-start justify-between mb-8">
                       <div className="text-[var(--color-saffron)] font-bold text-4xl md:text-5xl opacity-80 group-hover:opacity-100 group-hover:drop-shadow-[0_0_15px_rgba(255,153,51,0.5)] transition-all duration-300 leading-none" style={{ fontFamily: 'var(--font-display)' }}>
                         0{i+1}
                       </div>
                       <div className="w-12 h-12 rounded-full bg-white/5 border border-white/5 flex items-center justify-center group-hover:bg-white/10 group-hover:scale-110 transition-all duration-300">
                         <m.i size={20} className="text-white/50 group-hover:text-white transition-colors duration-300" />
                       </div>
                     </div>
                     <h4 className="text-xl md:text-2xl font-bold mb-4 text-white" style={{ fontFamily: 'var(--font-display)' }}>{m.t}</h4>
                     <p className="text-sm md:text-base text-white/50 leading-relaxed group-hover:text-white/70 transition-colors duration-300">{m.d}</p>
                   </div>
                 </motion.div>
               </ScrollReveal>
             ))}
           </div>
           
           {/* CLOSING STATEMENT */}
           <ScrollReveal delay={0.8}>
             <div className="mt-24 md:mt-32 text-center max-w-3xl mx-auto px-4">
               <h4 className="text-[10px] md:text-xs font-bold tracking-[0.2em] text-white/40 uppercase mb-6">Technology with Purpose</h4>
               <p className="text-lg md:text-2xl text-white/80 font-light leading-relaxed italic">
                 "Building solutions that connect knowledge, people, and progress — while respecting the hands that feed our nation."
               </p>
             </div>
           </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
