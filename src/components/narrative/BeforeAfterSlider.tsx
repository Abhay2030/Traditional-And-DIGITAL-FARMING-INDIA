import { useState, useRef, useCallback, useEffect } from 'react';
import { ScrollReveal } from '../ui/ScrollReveal';
import { audioManager } from '../../lib/audioManager';
import { motion } from 'motion/react';

export function BeforeAfterSlider() {
  const [sliderPos, setSliderPos] = useState(50);
  const containerRef = useRef<HTMLDivElement>(null);
  const isDragging = useRef(false);

  useEffect(() => {
    // dynamically mix the Tradition and Digital audio tracks based on slider position
    audioManager.mixSliderAudio(sliderPos / 100);
  }, [sliderPos]);

  const handleMove = useCallback((clientX: number) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = Math.max(0, Math.min(clientX - rect.left, rect.width));
    setSliderPos((x / rect.width) * 100);
  }, []);

  const handleMouseDown = (e: React.MouseEvent) => { 
    isDragging.current = true; 
    handleMove(e.clientX);
  };
  const handleTouchStart = (e: React.TouchEvent) => { 
    isDragging.current = true; 
    handleMove(e.touches[0].clientX);
  };
  const handleMouseUp = () => { isDragging.current = false; };
  const handleMouseMove = (e: React.MouseEvent) => { if (isDragging.current) handleMove(e.clientX); };
  const handleTouchMove = (e: React.TouchEvent) => { if (isDragging.current) handleMove(e.touches[0].clientX); };

  return (
    <section id="before-after" className="relative min-h-[100dvh] w-full overflow-hidden bg-black flex flex-col select-none">
      
      {/* Title - Upgraded for cinematic outstanding look */}
      <div className="absolute top-8 md:top-16 left-1/2 -translate-x-1/2 z-50 text-center pointer-events-none w-full px-4">
        <ScrollReveal>
          <div className="inline-block px-8 py-4 md:px-12 md:py-6 rounded-[2rem] bg-black/50 backdrop-blur-2xl border border-white/20 shadow-[0_20px_50px_rgba(0,0,0,0.5)] overflow-hidden relative">
            <div className="absolute inset-0 bg-gradient-to-r from-[var(--color-saffron)]/10 to-[var(--color-india-green)]/10 opacity-50" />
            <h2 className="relative z-10 text-3xl md:text-5xl lg:text-6xl font-bold text-white uppercase tracking-tighter" style={{ fontFamily: 'var(--font-display)' }}>
              Same Farm. <span className="text-transparent bg-clip-text bg-gradient-to-r from-[var(--color-saffron)] to-[var(--color-india-green)] drop-shadow-2xl ml-2 md:ml-4">New Tools.</span>
            </h2>
          </div>
        </ScrollReveal>
      </div>

      <div
        ref={containerRef}
        className="relative w-full h-full flex-grow cursor-col-resize touch-pan-y mt-32 md:mt-0"
        onMouseDown={handleMouseDown}
        onMouseUp={handleMouseUp}
        onMouseLeave={handleMouseUp}
        onMouseMove={handleMouseMove}
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleMouseUp}
        onTouchCancel={handleMouseUp}
      >
        {/* RIGHT SIDE: DIGITAL FARMING (Background Layer) */}
        <div className="absolute inset-0 bg-[#061121] flex flex-col justify-end md:justify-center px-4 md:px-32 pb-20 md:pb-0 overflow-hidden">
          {/* Animated Background */}
          <motion.div 
            className="absolute inset-0 bg-cover bg-center opacity-60"
            style={{ backgroundImage: 'url(/images/mod_machinery.png)' }}
            animate={{ scale: [1, 1.05, 1] }}
            transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
          />
          <div className="absolute inset-0 bg-gradient-to-l from-black/80 via-black/40 to-transparent" />
          
          <div className="relative z-10 w-full max-w-7xl mx-auto flex justify-end">
            <div className="text-right w-full md:w-auto">
              <h3 className="text-2xl md:text-5xl font-bold text-white mb-6 md:mb-12 uppercase tracking-widest drop-shadow-xl" style={{ fontFamily: 'var(--font-display)' }}>
                Digital Farming
              </h3>
              
              <div className="flex flex-col gap-4 md:gap-8">
                <ComparisonItem right icon="🚜" label="Machine Power" sub="AI Tractor" color="var(--color-india-green)" />
                <ComparisonItem right icon="🛰️" label="Precision" sub="Drone + Sensors" color="var(--color-india-green)" />
                <ComparisonItem right icon="📱" label="Data-Informed" sub="Smart Irrigation" color="var(--color-india-green)" />
                <ComparisonItem right icon="💻" label="Digital Records" sub="Cloud Dashboard" color="var(--color-india-green)" />
              </div>
            </div>
          </div>
        </div>

        {/* LEFT SIDE: TRADITIONAL FARMING (Foreground Clipped Layer) */}
        <div className="absolute inset-0 flex flex-col justify-end md:justify-center px-4 md:px-32 pb-20 md:pb-0 overflow-hidden" style={{ clipPath: `inset(0 ${100 - sliderPos}% 0 0)` }}>
          
          {/* Animated Background */}
          <motion.div 
            className="absolute inset-0 bg-cover bg-center opacity-70"
            style={{ backgroundImage: 'url(/images/trad_machinery.png)' }}
            animate={{ scale: [1.05, 1, 1.05] }}
            transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/40 to-transparent" />
          
          <div className="relative z-10 w-full max-w-7xl mx-auto flex justify-start">
            <div className="text-left w-full md:w-auto">
              <h3 className="text-2xl md:text-5xl font-bold text-white mb-6 md:mb-12 uppercase tracking-widest drop-shadow-xl" style={{ fontFamily: 'var(--font-display)' }}>
                Traditional Farming
              </h3>
              
              <div className="flex flex-col gap-4 md:gap-8">
                <ComparisonItem left icon="🐂" label="Manual Power" sub="Bullock Cart" color="var(--color-saffron)" />
                <ComparisonItem left icon="👨‍🌾" label="Observation" sub="Field Walking" color="var(--color-saffron)" />
                <ComparisonItem left icon="🌊" label="Management" sub="Flood Irrigation" color="var(--color-saffron)" />
                <ComparisonItem left icon="📝" label="Records" sub="Memory / Paper" color="var(--color-saffron)" />
              </div>
            </div>
          </div>
        </div>

        {/* The Drag Handle - Upgraded */}
        <div className="absolute top-0 bottom-0 z-20" style={{ left: `${sliderPos}%`, transform: 'translateX(-50%)' }}>
          {/* Glowing divider line */}
          <div className="w-1 h-full bg-white shadow-[0_0_15px_rgba(255,255,255,1),0_0_30px_rgba(255,255,255,0.5)]" />
          
          {/* Handle Knob */}
          <motion.div 
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-14 h-14 md:w-20 md:h-20 rounded-full bg-white shadow-[0_0_30px_rgba(255,255,255,0.8)] flex items-center justify-center border-4 border-[var(--color-charcoal)]"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
          >
            {/* Inner pulse */}
            <motion.div 
              className="absolute inset-0 rounded-full border-2 border-[var(--color-saffron)]"
              animate={{ scale: [1, 1.5, 1], opacity: [1, 0, 1] }}
              transition={{ duration: 2, repeat: Infinity }}
            />
            <svg width="32" height="32" viewBox="0 0 24 24" fill="none" className="text-black">
              <path d="M8 12L3 12M16 12L21 12M8 12L11 9M8 12L11 15M16 12L13 9M16 12L13 15" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

function ComparisonItem({ right, icon, label, sub, color }: { left?: boolean, right?: boolean, icon: string, label: string, sub: string, color: string }) {
  return (
    <motion.div 
      className={`relative flex items-center gap-4 md:gap-6 ${right ? 'flex-row-reverse' : ''} bg-[#0A111A]/80 backdrop-blur-2xl p-4 md:p-5 rounded-[2rem] border border-white/10 hover:border-white/30 shadow-[0_10px_40px_rgba(0,0,0,0.6)] w-full max-w-[320px] md:max-w-[420px] group transition-all duration-500 overflow-hidden`}
      whileHover={{ scale: 1.05, y: -5 }}
      transition={{ type: "spring", stiffness: 400, damping: 25 }}
    >
      <div 
        className="absolute inset-0 opacity-0 group-hover:opacity-10 transition-opacity duration-500" 
        style={{ background: `linear-gradient(to ${right ? 'left' : 'right'}, ${color}, transparent)` }} 
      />
      
      <div 
        className="relative z-10 w-14 h-14 md:w-20 md:h-20 shrink-0 rounded-[1.25rem] bg-black/50 border border-white/10 group-hover:border-white/30 flex items-center justify-center text-3xl md:text-4xl shadow-inner overflow-hidden transition-colors duration-300"
      >
        <div className="absolute inset-0 opacity-20 group-hover:opacity-50 transition-opacity duration-500" style={{ background: `radial-gradient(circle, ${color} 0%, transparent 80%)` }} />
        <span className="relative z-10 drop-shadow-md group-hover:scale-110 transition-transform duration-500">{icon}</span>
      </div>
      <div className={`relative z-10 flex-grow ${right ? 'text-right' : 'text-left'}`}>
        <div className="text-white/50 text-[10px] md:text-xs font-bold tracking-[0.3em] uppercase mb-1.5 group-hover:text-white/80 transition-colors" style={{ color: color }}>{sub}</div>
        <div className="text-white text-lg md:text-2xl font-black uppercase tracking-wider leading-tight drop-shadow-lg">{label}</div>
      </div>
    </motion.div>
  );
}
